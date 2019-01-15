<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <span></span>
        <p>三方合同列表</p>
      </div>
      <div class="ma_content">
        <div class="ma_screen">
          <div class="div_row">
            <div class="ma_ui_div">
              <p>供电方：</p>
              <div class="input_ss">
                <el-select style="width: 100%;"  size="medium" v-model="contract_Type" placeholder="">
                  <el-option
                    v-for="item in select_contractType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="ma_ui_div">
              <p>购电方：</p>
              <div class="input_ss">
                <el-select style="width: 100%;"  v-model="value9" filterable remote clearable reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
                  <el-option
                    v-for="item in options4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>

              </div>
            </div>
          </div>
          <div class="div_row">
            <div class="ma_ui_div">
              <p>签约时间：</p>
              <div class="input_ss">
                <el-select style="width: 100%;"  size="medium" v-model="time_value" placeholder="请选择">
                  <el-option
                    v-for="item in timeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <!--<div class="ma_ui_div">-->
              <!--<p>合同名称：</p>-->
              <!--<div class="input_ss">-->
                <!--<el-input v-model="cont_name"></el-input>-->
              <!--</div>-->
            <!--</div>-->
          </div>
          <div class="div_row" style="margin-top: 10px">
            <div class="ma_ui_div" style="padding-bottom: 10px">
              <el-button size="small" type="primary" @click="find_list">筛选</el-button>
              <el-button size="small" @click="empty_find">清空</el-button>
            </div>

          </div>

        </div>
        <div class="ma_btn">
          <el-button size="small" type="primary" @click="add_alert">创建合同</el-button>
        </div>
        <div v-if="this.no_val == 1" class="content_list">
          <div   v-for='(item,index) in this.list_con.list'  @click="list_daterial(item.id)" class="content_list_div">
            <div class="content_list_con">
              <div class="list_img">
                <img src="../../../assets/aImg/three_list.png" alt="">
              </div>
              <div class="list_right list_vue">
                <div class="right_div"><span>购</span>{{item.customer}}</div>
                <i class="el-icon-arrow-right"></i>
                <div class="right_div"><span>售</span>{{item.sale}}</div>
                <i class="el-icon-arrow-right"></i>
                <div class="right_div"><span>供</span>{{item.provider}}</div>
                <div class="list_right_time">周期 ：<span>{{get_time_date(item.beginTime)}} - {{get_time_date(item.endTime)}}</span></div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="this.no_val == 1 && this.count > this.limit" style="text-align: center;margin-top: 20px;padding-bottom: 20px">
          <el-pagination
            background
            :page-size="this.limit"
            :current-page="this.page"
            @current-change="current_change"
            layout="prev, pager, next"
            :total="this.count">
          </el-pagination>
        </div>
        <div v-if="this.no_val == 0" class="cont_div">
          <img src="../../../assets/aImg/notAvailable.png" alt="">
          <p>暂无合同</p>
        </div>
      </div>
    </div>
    <!--<router-view></router-view>-->
    <el-dialog title="创建合同" width="35%"  :visible.sync="threeAlert">
      <div class='add_div'>
        <div class='add_div_one'>
          <div class='one_con'>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
                <el-form-item label="购电方"  prop="vue_1">
                  <el-select style="width: 100%;"  v-model="ruleForm.vue9" filterable remote clearable reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
                    <el-option
                      v-for="item in options4"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              <el-form-item label="售电方"  prop="vue_2">
                <el-input v-model="ruleForm.vue_2"></el-input>
              </el-form-item>
              <el-form-item label="供电方"  prop="vue_1">
                <el-input v-model="ruleForm.vue_1"></el-input>
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
          <div class='cont_btn' ><el-button :loading="this.load_add"  @click="submitUpload" type='primary'>创建合同</el-button></div>
          <div class='wi_btn'><el-button plain @click="threeAlert = false">取消</el-button></div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  // 引入axios
  import list_contract from '../../../api/contract'

  export default {
    data() {
      return {
        file:{
          fileId:"",
          name:""
        },
        load_add:false,
        no_val:1,
        count:0,
        limit:12,  //每页显示条目个数
        page:1,  //当前页
        threeAlert:false,
        /*合同列表参数*/
        formData: "",
        list_con:{},  //列表内容
        Service:{},  //合同字典参数
        Service_con:{}, //字典内容
        select_contractType:[{
          value:'',
          label:"全部供电方"
        }],  //供电方
        timeOptions:[{
          value:'',
          label:"不限"
        }],  //签约时间
        name_list:"",  //购电方参数

        contract_Type:"",//供电方
        time_value:"",  //签约时间

        cont_name:"", //合同名称


        options4: [],  //购电方选择框数组
        value9: [],   //购电方选中的值
        list: [],  //购电方过滤
        loading: false, //是否正在从远程获取数据
        gd_list:[], //购电方后台返回数据
        states: [],  //筛选出购电方名称数组


        fileList: [],
        up_file:{},
        ruleForm:{  //创建合同
          vue_1:"",
          vue_2:"川能售电公司",
          vue_3:"",
          vue_4:"",
          vue9:[]
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
      add_alert(){
        if (this.$refs["ruleForm"]!==undefined) {
          this.$refs["ruleForm"].resetFields();
        }
        this.ruleForm.vue_2 = "川能售电公司"
        this.threeAlert = true
      },
      current_change(val){
        this.page = val
        this.formData = "{'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
        this.list_find(this.formData)
      },
      add_contract(){ //创建合同
        this.$router.push('/Contract/add');
      },
      list_daterial(id,index){ //查看详情
        this.$router.push({name:'threeDetail',params:{one:id}});
      },
      find_list(){   //进行筛选
        this.page = 1
        this.formData = "{'page':'"+ this.page +"','limit':'"+ this.limit +"','provider': '"+ this.contract_Type +"','name':'"+ this.cont_name +"','customer':'"+ this.value9 +"','year':'"+ this.time_value +"','limit':10,'page':1}",
         // console.log(this.formData );
          this.list_find(this.formData)
      },
      list_find(data){  //data：参数
        list_contract.thirdContractListService(data, res => {  //合同列表
          this.$emit('login-success', res);
        }, (res) => {
          this.list_con = res.body;
          this.count = this.list_con.count
          if(this.list_con.count == 0){  //没有数据
            this.no_val = 0
          }else{
            this.no_val = 1
          }
        });
      },
      empty_find(){  //清空筛选条件
        this.cont_name = "",  //合同名称
          this.time_value = "",   //签约时间
          this.contract_Type = ""  //供电方
        this.value9 = "",
          this.page = 1
        this.formData = "{'page':'"+ this.page +"','limit':'"+ this.limit +"'}"   //参数
        this.list_find(this.formData)
      },
      get_times(str){ //转换时间戳
     //   console.log(str)
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
      handleChange(file, fileList){
        //  console.log(fileList)
      },
      handleRemove(file, fileList) {  //文件列表移除文件时的钩子
        this.ruleForm.vue_4 = "";
        this.file.fileId = ""
        this.file.name = ""
      //  console.log(file, fileList);
      },
      handlePreview(file) {
      //  console.log(file);
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
            this.ruleForm.vue_4 = this.file.name
            // console.log( this.file)
          }

      },
      on_ex(files, fileList){  //文件超出个数限制时的钩子
        this.$alert('只能上传一份合同，请删除已存在的合同再添加', '提示', {
          confirmButtonText: '确定',
          callback: action => {

          }
        });
      },
      submitForm(formName) {  //表单提交验证
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.load_add = true
            this.up_file = {
              customer:this.ruleForm.vue9,
              sale:this.ruleForm.vue_2,
              provider:this.ruleForm.vue_1,
              beginTime:(this.get_times(this.ruleForm.vue_3[0]) / 1000),
              endTime:(this.get_times(this.ruleForm.vue_3[1]) / 1000),
              path:this.file.fileId,
              name:this.file.name
            }
            this.up_file = JSON.stringify(this.up_file)
            console.log(this.up_file)
            list_contract.thirdContractCreateService(this.up_file, res => {  //合同列表
              this.$emit('login-success', res)
            }, (res) => {
                if(res.status == 200){
                  this.threeAlert = false
                  this.load_add = false
                  this.$message({
                    message: '创建成功',
                    type: 'success'
                  });
                  this.formData = "{'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
                  this.list_find(this.formData);
                }
            });

            return true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      remoteMethod(query) { //购电方远程搜索选择
        if (query !== '') {
          /*清空临时数组*/
          this.states = [];
          this.list = [];
          this.options4 = [];

          this.loading = true;
          this.name_list = "{'name': '"+ query +"'}",
            setTimeout(() => {
              this.loading = false;
              list_contract.customerListService(this.name_list, res => {  //购电方
                this.$emit('login-success', res);
              }, (res) => {
                this.gd_list = res.body.list;
                for (var i = 0; i < this.gd_list.length; i++) {
                  this.states.push(this.gd_list[i].name);
                }
                this.list = this.states.map(item => {
                  return { value: item, label: item };
                });
                this.options4 = this.list.filter(item => {
                  return item.label.toLowerCase()
                      .indexOf(query.toLowerCase()) > -1;
                });
              });

            }, 200);
        } else {
          this.options4 = [];
        }
      },
    },
//生命周期钩子函数，进入页面显示之前获取数据到store
    created () {
      this.name_list ="{}"
      this.formData = "{'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
      this.list_find(this.formData);
      list_contract.contractCodeService(this.name_list, res => {  //合同字典获取签约时间
        this.$emit('login-success', res);
      }, (res) => {
        this.Service_con = res.body;
        for (var i = 0; i < this.Service_con.yearLimit.length; i++) {
          var obj = {};
          obj.value = this.Service_con.yearLimit[i];
          obj.label = this.Service_con.yearLimit[i];
          this.timeOptions.push(obj);
        }
      });
      list_contract.providerListService(this.name_list, res => {  //全部供电方
        this.$emit('login-success', res);
      }, (res) => {
        var _temp_Status = this.select_contractType;
        $.map(res.body.list,function(value,key){
          _temp_Status.push({
            value:value.name,
            label:value.name
          });
        });
      });
    }
  }
</script>

<style scoped>

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

  .ma_content {
    width: 100%;
    min-height: calc(100vh - 61px - 101px - 16px);
  }

  .ma_title span{
    display: inline-block;
    width: 4px;
    height: 16px;
    margin-top: 12px;
    margin-left: 10px;
    border-radius: 2px;
    background:rgba(0,119,221,1);
    float: left;
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
  .ma_screen{
    width: 100%;
    height:150px;
    padding-top: 20px;
    border-bottom:1px solid rgba(229,229,229,1);
  }
  .ma_btn{
    width: calc(100% - 20px);
    padding: 9px 10px;
    border-bottom:1px solid rgba(229,229,229,1);
  }

  .div_row{
    width: 100%;
    overflow: auto;
  }
  .ma_ui_div{
    width: 370px;
    height: 30px;
    float: left;
    margin-left: 30px;
    margin-top: 10px;
  }

  .ma_ui_div p{
    width:60px;
    height:30px;
    line-height: 30px;
    float: left;
    font-size:12px;
    font-weight:400;
    color:rgba(51,51,51,1);
    text-align: right;
    margin-right: 8px;
  }

  .input_ss {
    float: left;
    width: 260px;
    height: 30px !important;
    float: left;
  }
  .ma_ui_input .input_ss {
    width: 221.4px;
  }
  .el-input--medium .el-input__inner {
    height: 30px !important;
  }

  .content_list{
    width: calc(100% - 40px);
    margin: 0 auto;
    min-height: calc(100vh - 352px);
    background-color: white;
  }
  .content_list_div{
    width: calc(100%);
    min-width: 360px;
    height: 100px;
    float: left;
    cursor: pointer;
    border-bottom:1px solid rgba(239,239,239,1);
  }
  .content_list_div:hover{
    background:rgba(249,249,249,1);
  }
  .content_list_con{
    width:calc(100% - 40px);
    height: calc(100% - 52px);
    padding: 15px 26px;
    margin: 0px auto;
  }
  .list_img{
    width: 36px;
    float: left;
    height: 100%;
    vertical-align: middle;
  }
  .list_img img{
    width: 44px;
    height: 44px;
    margin-top: 10px;
  }
  .list_right{
    vertical-align: middle;
    float: left;
    margin-left: 20px;
    width:calc(100% - 60px);
  }
  .right_div{
    float: left;
    font-size:16px;
    font-weight:400;
    line-height: 73px;
    color:rgba(51,51,51,1);
   vertical-align: middle;
    padding: 0 10px
  ;
  }
  .right_div span{
    width:18px;
    height:18px;
    font-size:12px;
    color:rgba(50,156,248,1);
    font-weight:400;
    border:1px solid rgba(50,156,248,1);
    border-radius:2px;
    vertical-align: middle;
    margin-right:7px ;
  }
  .list_right_time{
    width: calc(30%);
    float: right;
    font-size:14px;
    font-weight:400;
    line-height: 73px;
    color:rgba(136,136,136,1);
  }
  .list_right_time span{
    margin-left: 10px;
  }



  .cont_div{
    width: 240px;
    padding: 50px;
    margin: 0 auto;

  }
  .cont_div img{
    width: 68px;
    height: 68px;
    margin-left: 86px;
    text-align: center;

  }
  .cont_div p{
    margin: 0px;
    padding: 0px;
    margin-top: 15px;
    font-size:20px;
    text-align: center;
    line-height: 28px;
    color:rgba(63,63,63,1);
  }


  /*** 弹窗 ***/

  .add_div{
    background-color: white;
  }
  .add_div_one{
    width: 100%;
    height: 320px;
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
    margin: 30px auto;
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
  .el-message .el-icon-success{
    color: #3364e4;
  }
  .el-message--success .el-message__content {
    color: #606060;
  }
  .el-message--success {
    background-color: rgba(242,245,255,1);
    border-color: #e1f3d8;
  }
  .list_right .el-icon-arrow-right{
    float: left;
  }
  .list_vue .el-icon-arrow-right{
    margin-top: 28px;
  }
</style>
