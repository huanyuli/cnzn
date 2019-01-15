<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <div class="ma_title_left" @click="ret_add">
          <i class="el-icon-arrow-left"></i>
          <p>合同详情</p>
        </div>
      </div>
      <div class="ma_content"  >
        <div class="ma_row">
          <div class="ma_left">
            <div class="ma_left_img">
              <img v-if="this.one.index == 0" src="../../../assets/aImg/random1.png" alt="">
              <img v-if="this.one.index == 1" src="../../../assets/aImg/random2.png" alt="">
              <img v-if="this.one.index == 2" src="../../../assets/aImg/random3.png" alt="">
              <img v-if="this.one.index == 3" src="../../../assets/aImg/random4.png" alt="">
              <img v-if="this.one.index == 4" src="../../../assets/aImg/random1.png" alt="">
              <img v-if="this.one.index == 5" src="../../../assets/aImg/random2.png" alt="">
              <img v-if="this.one.index == 6" src="../../../assets/aImg/random3.png" alt="">
              <img v-if="this.one.index == 7" src="../../../assets/aImg/random4.png" alt="">
              <img v-if="this.one.index == 8" src="../../../assets/aImg/random1.png" alt="">
              <img v-if="this.one.index == 9" src="../../../assets/aImg/random2.png" alt="">
              <img v-if="this.one.index == 10" src="../../../assets/aImg/random3.png" alt="">
              <img v-if="this.one.index == 11" src="../../../assets/aImg/random4.png" alt="">
            </div>
            <div class="ma_left_con">
              <p>{{this.deta_list.name}}</p>
              <div class="con_div">
                <p>供电方 ： {{this.deta_list.provider}}</p>
                <p>售电方 ： {{this.deta_list.sale}}</p>
                <p>合同周期 ： {{get_time_date(this.deta_list.beginTime)}} - {{get_time_date(this.deta_list.endTime)}}</p>
                <p>创建人：{{this.deta_list.createUserName}}</p>
                <p>创建时间： {{get_time_date(this.deta_list.createAt)}}</p>
                <p>附件：<a  :href="this.dow_url" :download="this.deta_list.name">{{this.deta_list.name}}</a></p>
              </div>
            </div>
          </div>
          <div class="ma_right">
            <el-button plain @click="download_deta">下载</el-button>
            <el-button plain @click="threeAlert = true">编辑</el-button>
            <el-button plain @click="dele_remove">删除</el-button>

          </div>
        </div>
      </div>

    </div>
    <!--<router-view></router-view>-->
    <el-dialog title="编辑合同" width="35%"  :visible.sync="threeAlert">
      <div class='add_div'>
        <div class='add_div_one'>
          <div class='one_con'>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
              <el-form-item label="供电方"  prop="vue_1">
                <el-input v-model="ruleForm.vue_1"></el-input>
              </el-form-item>
              <el-form-item label="售电方"  prop="vue_2">
                <el-input v-model="ruleForm.vue_2"></el-input>
              </el-form-item>
              <el-form-item label="合同周期"  prop="vue_3">
                <el-date-picker
                  style="width: 100%;"
                  v-model="ruleForm.vue_3"
                  type="daterange"
                  size="mini"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="上传合同"  prop="vue_4">
                <el-upload
                  class="upload-demo"
                  action="http://39.98.43.90/uploads"
                  name="files"
                  :on-change="handleChange"
                  :on-success="on_success"
                  :on-exceed="on_ex"
                  :file-list="fileList"
                  :limit="1">
                  <el-button slot="trigger" plain>添加附件（支持上传word文档格式）</el-button>
                </el-upload>
              </el-form-item>

            </el-form>
          </div>
        </div>
        <div class='add_div_two' slot="footer" >
          <div class='cont_btn' ><el-button :loading="this.load_add"  @click="submitUpload" type='primary'>保存合同</el-button></div>
          <div class='wi_btn'><el-button plain @click="threeAlert = false">取消</el-button></div>
        </div>
      </div>
    </el-dialog>
  </div>

</template>

<script>
  // 引入axios
  import add_ajax from '../../../api/contract'
  export default {
    data() {
      return {
          one:{
              index:1,
              id:1
          },
        load_add:false,
        file:{
          fileId:"",
          name:""
        },
        dow_url:"",
        dataurl:this.HOST + "/apiFile/purchaseContractEditService",  //购电合同编辑
        up_change:0,
        threeAlert:false,
        fromdata:"",  //列表参数
        fromeRemove:"", //删除参数
        deta_list:{},

        fileList: [],
        up_file:"",
        ruleForm:{
          vue_1:"",
          vue_2:"川能售电公司",
          vue_3:"",
          vue_4:"",
        },
        rules:{
          vue_1:[
            { required: true, message: '请输入供电方', trigger: 'blur' },
          ],
          vue_2:[
            { required: true, message: '请输入售电方', trigger: 'blur' },
          ],
          vue_3:[
            { required: true, message: '请输入合同周期', trigger: 'change' },
          ],
          vue_4:[
            { required: true, message: '请添加附件' },
          ]

        },
      }
    },
// 映射store数据
    computed: {

    },
    methods: {
      ret_add(){
        this.$router.go(-1);
      },
      download_deta(){
//       当请求地址是ip的时候 a 标签的 download 属性无法生效。
        window.open(this.dow_url)
      },
      dele_remove(){
        this.$confirm('确认删除该合同信息？', '确认删除', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.fromdata = "{'id':"+ this.one.id +"}"
          add_ajax.purchaseContractDeleteService(this.fromdata, res => {  //
            this.$emit('login-success', res);
          }, (res) => {
            if(res.status == 200){
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
                this.$router.push('/Contract/purchaseList');
              }

          });
        }).catch(() => {
        });

      },
      get_times(str){ //转换时间戳
      //  console.log(str)
        var temp =  (new Date(str)).getTime()
        return temp;
      },
      get_time_date(arr){ //时间戳转换为标准时间
        var now = new Date(arr * 1000),
          y = now.getFullYear(),
          m = now.getMonth() + 1,
          d = now.getDate();
        return y + "." + (m < 10 ? "0" + m : m) + "." + (d < 10 ? "0" + d : d) ;
      },
      submitUpload() {
        this.submitForm('ruleForm');

      },
      handleRemove(file, fileList) {
        this.ruleForm.vue_4 = "";
        this.file.fileId = "";
        this.file.name = "";
     //   console.log(file, fileList);
      },
      handleChange(file, fileList){
          this.up_change = 1;
      },
      on_ex(files, fileList){
        this.$alert('只能上传一份合同，请删除已存在的合同再添加', '提示', {
          confirmButtonText: '确定',
          callback: action => {

          }
        });
      },
      handlePreview(file) {
      //  console.log(file);
      },

      submitForm(formName) {  //表单提交验证
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.load_add = true
            this.up_file = {
              id: this.one.id,
              sale:this.ruleForm.vue_2,
              provider:this.ruleForm.vue_1,
              beginTime:(this.get_times(this.ruleForm.vue_3[0]) / 1000),
              endTime:(this.get_times(this.ruleForm.vue_3[1]) / 1000),
              path:this.file.fileId,
              name:this.file.name
            }
            this.up_file = JSON.stringify(this.up_file)
            add_ajax.purchaseContractEditService(this.up_file, res => {  //合同列表
              this.$emit('login-success', res)
            }, (res) => {
              if(res.status == 200){
                this.threeAlert = false
                this.load_add = false
                this.$message({
                  message: '编辑成功',
                  type: 'success'
                });
                this.find_date()
              }
            });
            return true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      get_utc(arr){ //时间戳（秒）转换UTC时间格式
        return  new Date( ((arr * 1000) + 8 * 3600 * 1000)).toISOString();
      },
      on_success(response, file, fileList){  //上传成功
        if(response.status == 200){
          var _temp_id = ""
          var _temp_name = ""
          $.map(response.body,function(res){
            _temp_id = res.fileId
            _temp_name = res.name
          });
          this.file.fileId = _temp_id
          this.file.name = _temp_name
          this.ruleForm.vue_4  = this.file.name
          // console.log( this.file)
        }

      },
      find_date(){
        this.fromdata = "{'id':"+ this.one.id +"}"
        add_ajax.purchaseContractDetailService(this.fromdata, res => {  //
          this.$emit('login-success', res);
        }, (res) => {
          this.deta_list = res.body.contract
          this.dow_url = "http://39.98.43.90/downloads?fileId="+ this.deta_list.path +"&fileName=" + this.deta_list.name
          this.ruleForm.vue_1 = this.deta_list.provider;
          this.ruleForm.vue_2 = this.deta_list.sale;
          this.ruleForm.vue_3 =[this.get_utc(this.deta_list.beginTime),this.get_utc(this.deta_list.endTime)];
       //   console.log(this.deta_list.path)
          if(this.deta_list.path != null && this.deta_list.path != undefined && this.deta_list.path != ""){
            this.ruleForm.vue_4 = this.deta_list.name
            this.file.name = this.deta_list.name
            this.file.fileId = this.deta_list.path
            this.fileList = [{name:this.deta_list.name, url:  this.dow_url}]
          }
        });
      },
    },
//生命周期钩子函数，进入页面显示之前获取数据到store
    created() {
        this.one.id = this.$route.params.one
        this.one.index = this.$route.params.two
      this.find_date()

    }
  }
</script>

<style scoped>
  .input_div .el-input__icon {
    line-height: 30px!important;
  }
  p{
    margin: 0px;
    padding: 0px;
  }
  .marterial {
    width: 100%;
    min-height:calc(100vh - 51px - 28px);
    background-color: white;
    border:1px solid rgba(229,229,229,1);
    overflow: -webkit-paged-y;
  }

  .ma_title {
    width: 100%;
    height: 40px;
    /*background-color: #F5F6F7;*/
    border-bottom:1px solid rgba(229,229,229,1);
  }
  .ma_title_left{
    padding-right: 10px;
    float: left;
    cursor: pointer;
  }
  .ma_title i{
    float: left;
    width: 9px;
    height: 15px;
    color: #0077de;
    font-weight: 800;
    margin-top: 12px;
    margin-left: 10px;
  }
  .ma_title p{
    font-size:14px;
    height: 40px;
    font-weight:bold;
    color:rgba(51,51,51,1);
    display: inline-block;
    line-height: 40px;
    float: left;
    margin-left: 10px;
  }
  .ma_content {
    width: 100%;
    /*min-height: calc(100vh - 61px - 51px - 16px);*/
    min-height: calc(100vh - 61px - 101px - 30px);

  }

  .ma_row{
    width: 85%;
    height: 70px;
    margin: 30px auto;
  }
  .ma_left{
    width: calc(100% - 240px);
    float: left;
  }
  .ma_left_img{
    width: 44px;
    height: 180px;
    margin-right: 27px;
    float: left;
  }
  .ma_left_img img{
    width: 44px;
    height: 44px
  }
  .ma_left_con{
    width: calc(100% - 44px - 27px);
  }
  .ma_left_con p{
    font-size:16px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:45px;
  }

  .con_div a{
    font-size:14px;
    font-weight:400;
    text-decoration:underline;
    color:rgba(136,136,136,1);
  }
  .con_div p{
    font-size:12px;
    font-weight:400;
    line-height: 20px;
    margin-top: 5px;
    color:rgba(136,136,136,1);
  }
  .ma_right{
    width: calc(80px * 3);
    float: right;
  }

  /*** 弹窗 ***/

  .add_div{
    background-color: white;
  }
  .add_div_one{
    width: 100%;
    height: 250px;
    /*background:rgba(73,138,243,1);*/
  }
  .add_div_one .one_title{
    margin-left: 28px;
    padding-top: 20px;
    font-size:16px;
    font-weight:bold;
    color:rgba(254,254,254,1);
  }
  .add_div_one .one_title i{
    float: right;
    margin-right: 28px;
    font-size: 18px;
    margin-top: 2px;
  }
  .one_con{
    width: 70%;
    margin: 0px auto;
    margin-top: 50px;
  }

  .one_con_img{
    width: 50%;
    float: left;
    margin-top:10px;
  }
  .one_con_img p{
    margin-top: 30px;
    font-size:18px;
    font-weight:400;
    text-align: center;
    color:rgba(254,254,254,1);
  }
  .one_con_img div{
    width: 130px;
    height: 130px;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 50%;
  }
  .one_con .one_img{
    background: url("../../../assets/aImg/one_con1s.png") center no-repeat;
  }
  .one_con .one_imgs{
    background: url("../../../assets/aImg/one_con1.png") center no-repeat;
  }
  .two_img{
    background: url("../../../assets/aImg/one_con2.png") center no-repeat;
  }
  .two_imgs{
    background: url("../../../assets/aImg/one_con2s.png") center no-repeat;
  }
  .add_div_two{
    width: 250px;
    margin: 30px auto;
    overflow: auto;
  }
  .cont_btn{
    width: 100px;
    float: left;
    margin-right: 30px;
  }
  .cont_btn button{
    width: 100%;
    font-size:14px;
    margin-bottom: 10px;
    color:rgba(255,255,255,1);
    background:rgba(93,179,247,1);
  }
  .wi_btn{
    width: 100px;
    float: left;
  }
  .wi_btn button{
    width: 100%;
    font-size:14px;
    margin-bottom: 10px;
    color:rgba(150,150,150,1);
    background:#fff;
  }

  /*** 弹窗结束 **/

</style>
<style>
  .el-dialog__header {
    background: rgba(73,138,243,1)!important;
  }
  .el-dialog__title{
    color:white;
    font-size: 16px;
  }

  .el-dialog__headerbtn .el-dialog__close{
    color:white;

  }
  .el-dialog__body{
    padding:0;
  }

  .el-button{
    padding: 9px 20px;
    font-size: 12px;
    margin-left: 10px;
  }
  .el-message-box__status.el-icon-warning {
    color: #ff253a;
  }
  .el-message-box__btns {
    padding: 5px 15px 0;
    text-align: center;
  }
  .el-message-box__status {
    position: absolute;
    top: 50%;
    left: 110px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 24px!important;
  }
  .el-message-box__status+.el-message-box__message {
    padding-left: 36px;
    padding-right: 12px;
    text-align: center;
  }
</style>
