<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <span></span>
        <p>报量环节</p>
      </div>
      <div class="ma_content">
        <div class="ma_screen">
          <div class="div_row">
            <div class="ma_ui_div">
              <p>年份：</p>
              <div class="input_ss">
                <el-select style="width: 100%;"  size="medium" v-model="finds.find_1" placeholder="请选择">
                  <el-option
                    v-for="item in form_1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="ma_ui_div">
              <p>客户名称：</p>
              <div class="input_ss">
                <el-select style="width: 100%;"  v-model="finds.find_2" filterable  remote clearable reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
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
              <p>地区：</p>
              <div class="input_ss">
                <el-select style="width: 49%;" @change="change_3"   size="medium" v-model="finds.find_3" placeholder="">
                  <el-option
                    v-for="item in form_3"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-select style="width: 49%;"  size="medium" v-model="finds.find_4" placeholder="">
                  <el-option
                    v-for="item in form_4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="ma_ui_div" style="padding-bottom: 10px">
              <el-button size="small" type="primary" @click="find_screen">查询</el-button>
              <el-button size="small" @click="empty_find">清空</el-button>
            </div>
          </div>

        </div>
        <div class="ma_btn">
          <el-button size="small" @click="add_user" type="primary" >添加客户</el-button>
          <!--<el-button size="small" type="primary" >导入计划用电量</el-button>-->
          <!--<el-button size="small" type="primary" >导出列表</el-button>-->
        </div>
        <div v-if="this.no_val == 1" class="content_list">
          <div class="list_table">
            <el-table
              :data="tableData"
              stripe

              style="width: 100%;text-align: center">
              <el-table-column
                prop="data_1"
                align="center"
                label="客户名称"
               >
              </el-table-column>
              <el-table-column
                prop="data_2"
                align="center"
                label="客户类型"
               >
              </el-table-column>
              <el-table-column
                prop="data_3"
                align="center"
                label="所属行业"
                >
              </el-table-column>
              <el-table-column
                prop="data_4"
                align="center"
                label="所属区域"
                >
              </el-table-column>
              <el-table-column
                prop="data_5"
                align="center"
                label="主要电源"
               >
              </el-table-column>
              <el-table-column
                prop="data_5s"
                align="center"
                label="用电类别"
              >
              </el-table-column>
              <el-table-column
                prop="data_6"
                align="center"
                label="客户签约状态"
               >
              </el-table-column>
              <el-table-column
                prop="data_7"
                align="center"
                label="业务员"
              >
              </el-table-column>
              <el-table-column
                label=""
                align="center"
                min-width="100"
              >
                <template slot-scope="scope">
                  <el-button class="bj_btn" @click="handleClick(scope.row)" plain>报量</el-button>
                  <el-button @click="deleClick(scope.row)" plain>删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div v-if="this.no_val == 0" class="cont_div">
          <img src="../../../assets/aImg/notAvailable.png" alt="">
          <p>暂无合同</p>
        </div>
      </div>
    </div>
    <!--<router-view></router-view>-->
    <div class="add_alert">
      <el-dialog  title="添加客户" width="30%"  :visible.sync="linkAlert">
        <div class='add_div'>
          <div class='add_div_one'>
            <div class='one_con'>
              <el-form :model="ruleForm"  :rules="rules" ref="ruleForm"   label-width="80px" class="demo-ruleForm">
                <el-form-item label="年度"  prop="vue_0">
                  <el-select style="width: 100%;"  size="medium" v-model="ruleForm.vue_0" placeholder="请选择">
                    <el-option
                      v-for="item in form_1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="业务人员"  prop="vue_1">
                  <el-select style="width: 100%;"  size="medium" v-model="ruleForm.vue_1" placeholder="请选择">
                    <el-option
                      v-for="item in form_select"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="客户名称"  prop="vue_2">
                  <el-select style="width: 100%;" @change="find_blur"  v-model="ruleForm.vue_2" filterable  allow-create
                             default-first-option remote clearable reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading" >
                    <el-option
                      v-for="item in options4"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="用电类别"  prop="vue_3">
                  <el-select  size="medium" v-model="ruleForm.vue_3"  v-if="this.select_disabled == true" disabled clearable placeholder="请选择">
                    <el-option
                      v-for="item in form_two_4"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  <el-select  size="medium" v-model="ruleForm.vue_3"  v-if="this.select_disabled == false" clearable placeholder="请选择">
                    <el-option
                      v-for="item in form_two_4"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class='add_div_two' slot="footer" >
            <div class='wi_btn'><el-button plain @click="linkAlert = false">取消</el-button></div>
            <div class='cont_btn' ><el-button @click="add_bj"  type='primary'>确认添加</el-button></div>
          </div>
        </div>
      </el-dialog>
    </div>

  </div>
</template>

<script>
  // 引入axios
  import ajax_list from '../../../api/offer'

  export default {
    data() {
      return {
        no_val:1,
        select_disabled:false,
        linkAlert:false,
        form_1:[],
        form_2:[],
        form_3:[
          {
            value: '',
            label: '全部地区',
          }
        ],
        form_4:[],
        form_select:[],
        form_two_4:[],  //用电类别
        form_two_body:[],  //用电类别

        finds:{
          find_1:0,
          find_2:"",
          find_3:"",
          find_4:"",
        },
        ruleForm:{
          vue_0:"",
          vue_1:"",
          vue_2:"",
          vue_3:"",
        },
        rules:{
          vue_0:[
            { required: true, message: '请选择年份', trigger: 'change' },
          ],
          vue_1:[
            { required: true, message: '请选择业务人员', trigger: 'change' },
          ],
          vue_2:[
            { required: true, message: '请输入客户名称', trigger: 'blur' },
          ],
          vue_3:[
            { required: true, message: '请选择用电类别', trigger: 'change' },
          ],
        },

        options4: [],  //客户名称选择框数组
        list: [],  //客户名称过滤
        loading: false, //是否正在从远程获取数据
        gd_list:[], //客户名称后台返回数据
        states: [],  //筛选出客户名称数组
        name_list:"",

        par_form:{
            area:"",
          area_list:{},
          ares_s:"",
          ares_lists:{},
          find_area:"",
          find_list:{
                list:[]
          },
          year_list:{}
        },

        tableData:[]
      }
    },
// 映射store数据
    computed: {

    },
    methods: {
        add_user(){
          if (this.$refs["ruleForm"]!==undefined) {
            this.$refs["ruleForm"].resetFields();
          }
          this.ruleForm.vue_0 = this.finds.find_1
          this.linkAlert = true

        },
      change_3(){ //地区
        this.par_form.ares_s ={
          code:this.finds.find_3,
          areaLevel:"province"
        }
        this.par_form.ares_s= JSON.stringify(this.par_form.ares_s);
        ajax_list.areaListService(this.par_form.ares_s, res => {  //列表字典
          this.$emit('login-success', res);
        }, (res) => {
          this.par_form.ares_lists = res.body;
          this.form_4 = []
          this.finds.find_4 = ""
          var _temp_one_4 = this.form_4;   //所在行政区域
          $.map(this.par_form.ares_lists,function(value){
            _temp_one_4.push({
              value:value.code,
              label:value.name
            });
          });
        });
      },
      find_list(data){ //查询列表
        ajax_list.customerQuotedListService(data, res => {  //name
          this.$emit('login-success', res);
        }, (res) => {
          this.par_form.find_list = res.body
          this.tableData = []
          var _temp_type = this.tableData;

          if(this.par_form.find_list.list.length != 0){
            $.map( this.par_form.find_list.list,function(data){
              if( data.customerType == null){
                data.customerType = ""
              }
              if(data.industry == null){
                data.industry = ""
              }
              if( data.city == null){
                data.city = ""
              }
              if(data.mainPower == null){
                data.mainPower = ""
              }
              if(data.signStatus == null){
                data.signStatus = ""
              }else{
                if( data.signStatus  == "NOT_SIGNED"){
                  data.signStatus ="未签约"
                }else if( data.signStatus  == "SIGNED"){
                  data.signStatus ="已签约"
                }else if( data.signStatus  == "WAITING_RENEWAL"){
                  data.signStatus ="待续约"
                }
              }
              if(data.businessUserName == null){
                data.businessUserName =""
              }
//              console.log(data)
              _temp_type.push({
                data_0: data.customerId,   //客户ID
                data_0s: data.businessUserId,  //业务员ID
                data_id: data.id,  //ID
                data_1: data.customerName, //客户名称
                data_2: data.customerType, //客户类型
                data_3:data.industry, //客户类型
                data_4: data.city,  //所在区域
                data_5: data.mainPower, //主要电源
                data_5s: data.usePowerType, //主要电源
                data_6: data.signStatus, //签约状态
                data_7: data.businessUserName  //业务员名称
              });
            });
          }else{
            console.log("没有数据")
          }


        });
      },
      find_screen(){ //筛选
        this.par_form.find_area = "{'year':'"+ this.finds.find_1 +"','customerName':'"+ this.finds.find_2 +"','provinceCode':'" + this.finds.find_3 +"','cityCode':'"+ this.finds.find_4 +"'}"
        this.find_list(this.par_form.find_area)
      },
      empty_find(){ //清空
        this.finds.find_1 = ""
        this.finds.find_2 = ""
        this.finds.find_3 = ""
        this.finds.find_4 = ""
      },
      handleClick(obj){
//          console.log(obj)
        this.$router.push({name:'tacheList',params:{one:obj.data_id,two:obj.data_7,three:obj.data_1,twos:obj.data_0s,threes:obj.data_0}});
//          console.log(obj)

      },
      remoteMethod(query) { //客户名称远程搜索选择
        if (query !== '') {
          /*清空临时数组*/
          this.states = [];
          this.list = [];
          this.options4 = [];

          this.loading = true;
          this.name_list = "{'name': '"+ query +"'}",
            setTimeout(() => {
              this.loading = false;
              ajax_list.customerListService(this.name_list, res => {  //name
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
      find_blur(){ //选择甲方名称后
        if(this.ruleForm.vue_2 != ""){
          var _index; //选中的值的下标
          for(var i=0;i<this.states.length;i++){ //获取选中的值的下标
            if(this.states[i]==this.ruleForm.vue_2){
              _index = i;
            }
          }
          var gd_info = this.gd_list[_index];
          if(gd_info.usePowerType != undefined && gd_info.usePowerType != null && gd_info.usePowerType != "" ){
            this.ruleForm.vue_3 = gd_info.usePowerType
            this.select_disabled = true
          }else {
            this.ruleForm.vue_3 = ""
            this.select_disabled = false
          }
        }else{
          this.ruleForm.vue_3 = ""
          this.select_disabled = false
        }







      },
      add_bj(){
        this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            var _temp_data ="{'year':'"+ this.ruleForm.vue_0 +"','customerName':'"+ this.ruleForm.vue_2 +"','businessUserId':'"+ this.ruleForm.vue_1  +"'}"
            ajax_list.customerQuotedCreateService(_temp_data, res => {  //客户报价添加
              this.$emit('login-success', res);
            }, (res) => {
              if(res.status == 200){
                this.linkAlert = false
                this.$message({
                  message: '添加成功',
                  type: 'success'
                });
                this.par_form.find_area = "{'year':"+ this.finds.find_1 + "}"
                this.find_list(this.par_form.find_area)
              }
            });
            return true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });


      },
      deleClick(obj){
          var _temp_fime = "确认删除"+ obj.data_1 +"计划用电量？"
        this.$confirm(_temp_fime, '删除计划用电量', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          var _temp_id = "{'customerQuotedId':'"+ obj.data_id  +"'}"
          ajax_list.customerQuotedDeleteService(_temp_id, res => {  //客户报价删除
            this.$emit('login-success', res);
          }, (res) => {
            if(res.status == 200){
              this.$message({
                message: '删除成功',
                type: 'success'
              });
              this.par_form.find_area = "{'year':"+ this.finds.find_1 +"}"
              this.find_list(this.par_form.find_area)
            }
          });
        }).catch(() => {

        });



      }
    },
//生命周期钩子函数，进入页面显示之前获取数据到store
    created () {
      var date=new Date;
      this.finds.find_1 = date.getFullYear()
      this.par_form.find_area = "{'year':"+ this.finds.find_1 +"}"
      this.find_list(this.par_form.find_area)
     this.par_form.area = "{}"
      ajax_list.areaListService(this.par_form.area, res => {  //列表区域字典
        this.$emit('login-success', res);
      }, (res) => {
        this.par_form.area_list = res.body;
        var _temp_one_3 = this.form_3;   //所在区域
        $.map(this.par_form.area_list,function(value){
          _temp_one_3.push({
            value:value.code,
            label:value.name
          });
        });
      });

      ajax_list.constatsService(this.par_form.area, res => {  //列表区域字典
        this.$emit('login-success', res);
      }, (res) => {
        this.par_form.year_list = res.body.YearList;
        var _temp_one_1 = this.form_1;   //所在区域
        $.map(this.par_form.year_list,function(value){
          _temp_one_1.push({
            value:value,
            label:value
          });
        });
      });
      ajax_list.businessUserListService(this.par_form.area, res => {  //列表区域字典
        this.$emit('login-success', res);
      }, (res) => {
        var _temp_form_1 = this.form_select;   //业务员
        $.map(res.body.list,function(value){
          _temp_form_1.push({
            value:value.id,
            label:value.name
          });
        });
      });

      ajax_list.customerCodeService(this.par_form.area, res => {  //列表字典
        this.$emit('login-success', res);
      }, (res) => {
        if(res.status == 200) {
          this.form_two_body = res.body;
          var _temp_two_4 = this.form_two_4;  //用电类别
          $.map(this.form_two_body.usePowerType, function (value, key) {
            _temp_two_4.push({
              value: key,
              label: value
            });
          });
        }
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
    height:110px;
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
    width: calc(100% - 30px);
    margin: 0 auto;
    min-height: calc(100vh - 352px);
    background-color: white;
  }
  .list_table{
    width: 96%;
    margin:0px auto;
    margin-top: 40px;
    margin-bottom: 10px;
    border: 1px solid rgba(234,234,234,1);
  }


  /*** 弹窗 ***/

  .add_div{
    background-color: white;
  }
  .add_div_one{
    width: 100%;
    min-height: 150px;
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
    margin-right: 30px;
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
  .el-table .cell{
    font-size:12px;
    font-weight:400;
    color:#606060;
  }
  .el-table th>.cell{
    font-size:14px;
  }

  .add_alert .el-button{
    padding: 8px 12px;
    font-size: 12px;
  }
  .one_con .el-button{
    color: rgba(0, 132, 238, 0.67);
    border: 1px solid rgba(0, 132, 238, 0.67);
  }
  .list_table .el-button{
    padding: 8px 12px;
    font-size: 10px;
  }

  .list_table .el-button:nth-child(1){
    color: #0077DD;
    border: 1px solid #0077DD;
  }
  .list_table .el-button:nth-child(2):hover{
    color: #5a5e66;
    border: 1px solid #d8dce5;
  }

</style>
