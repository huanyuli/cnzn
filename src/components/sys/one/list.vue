<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <span></span>
        <p>用户管理</p>
      </div>
      <div class="ma_content">
        <div class="ma_screen">
          <div class="div_row">
            <div class="ma_ui_div">
              <p>客户名称：</p>
              <div class="input_ss">
                <el-select style="width: 100%;"  v-model="finds.find_1" filterable  remote clearable reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
                  <el-option
                    v-for="item in options4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="ma_ui_div" style="padding-bottom: 10px">
              <el-button size="small" type="primary" @click="find_screen">查询</el-button>
            </div>
          </div>

        </div>
        <div class="ma_btn">
          <el-button size="small" @click="add_alert" type="primary" >添加用户</el-button>
          <el-button size="small"  @click="delect_all"  plain style="float: right;margin-right: 4%">批量删除</el-button>
        </div>
        <div v-if="this.no_val == 1" class="content_list">
          <div class="list_table">
            <el-table
              :data="tableData"
              stripe
              @selection-change="select_all"
              style="width: 100%;text-align: center">

              <el-table-column
                prop="data_1"
                align="center"
                label="用户名称"
              >
              </el-table-column>
              <el-table-column
                prop="data_2"
                align="center"
                label="用户账号"
              >
              </el-table-column>
              <el-table-column
                prop="data_3"
                align="center"
                label="所属部门"
              >
              </el-table-column>
              <el-table-column
                prop="data_4"
                align="center"
                label="所属角色"
              >
              </el-table-column>
              <el-table-column
                prop="data_5"
                align="center"
                label="状态"
              >
              </el-table-column>
              <el-table-column
                prop="data_6"
                align="center"
                label="备注"
              >
              </el-table-column>
              <el-table-column
                label="操作"
                align="center"
                min-width="100"
              >
                <template slot-scope="scope">
                  <el-button class="bj_btn" @click="handleClick(scope.row)" plain>修改</el-button>
                  <el-button @click="deleClick(scope.row)" plain>删除</el-button>
                </template>
              </el-table-column>
              <el-table-column
                type="selection"
                align="center"
                width="55">
              </el-table-column>
            </el-table>
          </div>
          <div style="text-align: center;margin-top: 20px" v-if="this.count > this.limit">
            <el-pagination
              background
              :page-size="this.limit"
              :current-page="this.page"
              @current-change="current_change"

              layout="prev, pager, next"
              :total="this.count">
            </el-pagination>
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
      <el-dialog  title="添加用户" width="40%"  :visible.sync="linkAlert">
        <div class='add_div'>
          <div class='add_div_one'>
            <div class='one_con'>
              <el-form :model="ruleForm"  :rules="rules" ref="ruleForm"   label-width="80px" class="demo-ruleForm">
                <div class="div_row">
                  <div class="row_left">
                    <el-form-item label="用户名称"  prop="vue_1">
                      <el-input v-model="ruleForm.vue_1" placeholder=""></el-input>
                    </el-form-item>
                  </div >
                  <div class="row_right">
                    <el-form-item label="用户账号"  prop="vue_2">
                      <el-input v-model="ruleForm.vue_2" placeholder=""></el-input>
                    </el-form-item>
                  </div>
                </div>
                <div class="div_row">
                  <div class="row_left">
                    <el-form-item label="登录密码"  prop="vue_3">
                      <el-input type="password" v-model="ruleForm.vue_3" placeholder=""></el-input>
                    </el-form-item>
                  </div >
                  <div class="row_right">
                    <el-form-item label="所属部门"  prop="vue_4">
                      <el-input v-model="ruleForm.vue_4" placeholder=""></el-input>
                    </el-form-item>
                  </div>
                </div>

                <div class="div_row">
                  <div class="row_left">
                    <el-form-item label="所属角色"  prop="vue_5">
                    <el-select multiple collapse-tags style="width: 100%;"  size="medium" v-model="ruleForm.vue_5" placeholder="请选择">
                      <el-option
                        v-for="item in form_1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  </div >
                  <div class="row_right">
                    <el-form-item label="状态"  prop="vue_6">
                      <el-select style="width: 100%;"  size="medium" v-model="ruleForm.vue_6" placeholder="请选择">
                        <el-option
                          v-for="item in form_2"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                </div>

                <div class="div_row">
                  <el-form-item label="备注"  prop="vue_7">
                    <el-input v-model="ruleForm.vue_7" placeholder=""></el-input>
                  </el-form-item>
                </div>

              </el-form>
            </div>
          </div>
          <div class='add_div_two' slot="footer" >
            <div class='wi_btn'><el-button plain @click="linkAlert = false">取消</el-button></div>
            <div class='cont_btn' ><el-button @click="add_bj"  :loading="this.load_add" type='primary'>确认添加</el-button></div>
          </div>
        </div>
      </el-dialog>
      <el-dialog  title="修改用户" width="40%"  :visible.sync="linkAlerts">
        <div class='add_div'>
          <div class='add_div_one'>
            <div class='one_con'>
              <el-form :model="ruleForm_s"  :rules="rules_s" ref="ruleForm_s"   label-width="80px" class="demo-ruleForm">
                <div class="div_row">
                  <div class="row_left">
                    <el-form-item label="用户名称"  prop="vue_1">
                      <el-input v-model="ruleForm_s.vue_1" placeholder=""></el-input>
                    </el-form-item>
                  </div >
                  <div class="row_right">
                    <el-form-item label="用户账号"  prop="vue_2">
                      <el-input v-model="ruleForm_s.vue_2" placeholder=""></el-input>
                    </el-form-item>
                  </div>
                </div>
                <div class="div_row">
                  <div class="row_left">
                    <el-form-item label="登录密码"  prop="vue_3">
                      <el-input type="password" v-model="ruleForm_s.vue_3" placeholder=""></el-input>
                    </el-form-item>
                  </div >
                  <div class="row_right">
                    <el-form-item label="所属部门"  prop="vue_4">
                      <el-input v-model="ruleForm_s.vue_4" placeholder=""></el-input>
                    </el-form-item>
                  </div>
                </div>

                <div class="div_row">
                  <div class="row_left">
                    <el-form-item label="所属角色"  prop="vue_5">
                      <el-select multiple collapse-tags style="width: 100%;"  size="medium" v-model="ruleForm_s.vue_5" placeholder="请选择">
                        <el-option
                          v-for="item in form_1"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </div >
                  <div class="row_right">
                    <el-form-item label="状态"  prop="vue_6">
                      <el-select style="width: 100%;"  size="medium" v-model="ruleForm_s.vue_6" placeholder="请选择">
                        <el-option
                          v-for="item in form_2"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                </div>

                <div class="div_row">
                  <el-form-item label="备注"  prop="vue_7">
                    <el-input v-model="ruleForm_s.vue_7" placeholder=""></el-input>
                  </el-form-item>
                </div>
              </el-form>
            </div>
          </div>
          <div class='add_div_two' slot="footer" >
            <div class='wi_btn'><el-button plain @click="linkAlerts = false">取消</el-button></div>
            <div class='cont_btn' ><el-button @click="add_bj_s" :loading="this.load_up" type='primary'>修改</el-button></div>
          </div>
        </div>
      </el-dialog>
    </div>

  </div>
</template>

<script>
  // 引入axios
  import ajax_list from '../../../api/sys'

  export default {
    data() {
      return {
        no_val:1,
        linkAlert:false,
        linkAlerts:false,
        load_add:false,
        load_up:false,
        count:0,
        limit:10,  //每页显示条目个数
        page:1,  //当前页
        one_ids:"",
        form_1:[
        ],
        form_2:[
          {
            label:"在职",
            value:"ACTIVE"
          },
          {
            label:"离职",
            value:"DEL"
          }
        ],
        finds:{
          find_1:"",
        },
        ruleForm:{
          vue_1:"",
          vue_2:"",
          vue_3:"",
          vue_4:"",
          vue_5:"",
          vue_6:"",
          vue_7:"",
        },
        ruleForm_s:{
          vue_id:"",
          vue_1:"",
          vue_2:"",
          vue_3:"initialize",
          vue_4:"",
          vue_5:"",
          vue_6:"",
          vue_7:"",
        },
        rules:{
          vue_5:[
            { required: true, message: '请选择所属角色', trigger: 'change' },
          ],
          vue_6:[
            { required: true, message: '请选择状态', trigger: 'change' },
          ],
          vue_1:[
            { required: true, message: '请输入用户名称', trigger: 'blur' },
          ],
          vue_2:[
            { required: true, message: '请输入用户账号', trigger: 'blur' },
          ],
          vue_3:[
            { required: true, message: '请输入登录密码', trigger: 'blur' },
          ],
          vue_4:[
            { required: true, message: '请输入所属部门', trigger: 'blur' },
          ],
//          vue_7:[
//            { required: true, message: '请输入备注', trigger: 'blur' },
//          ],
        },
        rules_s:{
          vue_5:[
            { required: true, message: '请选择所属角色', trigger: 'change' },
          ],
          vue_6:[
            { required: true, message: '请选择状态', trigger: 'change' },
          ],
          vue_1:[
            { required: true, message: '请输入用户名称', trigger: 'blur' },
          ],
          vue_2:[
            { required: true, message: '请输入用户账号', trigger: 'blur' },
          ],
          vue_3:[
            { required: true, message: '请输入登录密码', trigger: 'blur' },
          ],
          vue_4:[
            { required: true, message: '请输入所属部门', trigger: 'blur' },
          ],
//          vue_7:[
//            { required: true, message: '请输入备注', trigger: 'blur' },
//          ],
        },
        options4: [],  //客户名称选择框数组
        list: [],  //客户名称过滤
        loading: false, //是否正在从远程获取数据
        gd_list:[], //客户名称后台返回数据
        states: [],  //筛选出客户名称数组
        name_list:"",

        par_form:{
          find_area:"",
          find_list:{
            list:[],
            count:0
          },
          service_list:{
              list:[],
          },
        },
        tableData:[]
      }
    },
// 映射store数据
    computed: {

    },
    methods: {
      select_all(selection){
        //  console.log(selection)
        this.dele_ids = ""
        var _temp_id = ""
        $.map(selection,function(value,index){
            if(index == 0){
              _temp_id =""+  value.data_id

            }else{
              _temp_id += ","+ value.data_id
            }
        });
        this.one_ids = _temp_id
      },
      add_alert(){
        if (this.$refs["ruleForm"]!==undefined) {
          this.$refs["ruleForm"].resetFields();
        }
        this.linkAlert = true
      },
      delect_all(){
        if(this.one_ids !== ""){
          var _temp_fime = "确认删除选中的所有用户吗？"
          this.$confirm(_temp_fime, '删除用户', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            var _temp_id = "{'ids':'"+ this.one_ids  +"'}"
            ajax_list.userDeleteService (_temp_id, res => {  //删除
              this.$emit('login-success', res);
            }, (res) => {
              if(res.status == 200){
                this.$message({
                  message: '删除成功',
                  type: 'success'
                });
                this.page = 1
                this.par_form.find_area = "{'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
                this.find_list(this.par_form.find_area)
              }
            });
          }).catch(() => {

          });
        }else{
          this.$message({
            showClose: true,
            message: '请选择要删除的用户',
            type: 'warning'
          });
        }


      },
      current_change(val){
          this.page = val
        this.par_form.find_area = "{'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
        this.find_list(this.par_form.find_area)
      },
      zh_val(list,value){ //根据value转换label
        let obj = {};
        obj = list.find((item)=>{
          return item.value === value;
        });

        return obj.label
      },
      zh_lab(list,label){
        //  console.log(label)
        if(label == null){
          label = ""
        }
        var arr = label .split(',')
        var _temp_val = []
        for (var i = 0; i < arr.length; i++) {
          let obj = {};
          obj = list.find((item)=>{
            return item.label === arr[i];
          });
          _temp_val.push(obj.value)
        }
        return _temp_val
      },
      find_list(data){ //查询列表
        ajax_list.userListService(data, res => {  //name
          this.$emit('login-success', res);
        }, (res) => {
          this.par_form.find_list = res.body
          this.count = this.par_form.find_list.count
          this.tableData = []
          var _temp_type = this.tableData
          var _temp_form_2 = this.form_2
           var _temp_this =  this
          $.map( this.par_form.find_list.list,function(data,index){
            _temp_type.push({
              data_id:data.id,
              data_1: data.username, //用户名
              data_2: data.loginName, //登录名
              data_3:data.deptName, //所属部门
              data_5:_temp_this.zh_val(_temp_form_2,data.workStatus),  //在职状态
              data_5s:data.workStatus,  //在职状态
              data_4: data.roleNames, //角色名称
            });
          });

        });
      },
      find_screen(){ //筛选
        this.page = 1
        this.par_form.find_area = "{'page':'"+ this.page +"','limit':'"+ this.limit +"','username':'"+ this.finds.find_1 +"'}"
        this.find_list(this.par_form.find_area)
      },
      handleClick(obj){
        this.linkAlerts = true
        this.ruleForm_s.vue_id = obj.data_id
        this.ruleForm_s.vue_1 = obj.data_1
        this.ruleForm_s.vue_2 = obj.data_2
        this.ruleForm_s.vue_4 = obj.data_3
        this.ruleForm_s.vue_6 = obj.data_5s
        this.ruleForm_s.vue_5 = this.zh_lab(this.form_1,obj.data_4)
      },
      remoteMethod(query) { //客户名称远程搜索选择
        if (query !== '') {
          /*清空临时数组*/
          this.states = [];
          this.list = [];
          this.options4 = [];

          this.loading = true;
          this.name_list = "{'username': '"+ query +"'}",
            setTimeout(() => {
              this.loading = false;
              ajax_list.userListService(this.name_list, res => {  //name
                this.$emit('login-success', res);
              }, (res) => {
                this.gd_list = res.body.list;
                for (var i = 0; i < this.gd_list.length; i++) {
                  this.states.push(this.gd_list[i].username);
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
      add_bj(){

        this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            this.load_add = true
            var _temp_data ="{'username':'"+ this.ruleForm.vue_1 +"','loginName':'"+ this.ruleForm.vue_2 +"','password':'"+ this.ruleForm.vue_3  +"','deptName':'"+ this.ruleForm.vue_4  +"','workStatus':'"+ this.ruleForm.vue_6  +"','roleIds':'"+ this.ruleForm.vue_5  +"'}"
            ajax_list.userCreateService(_temp_data, res => {  //用户添加
              this.$emit('login-success', res);
            }, (res) => {
              if(res.status == 200){
                this.linkAlert = false
                this.load_add = false
                this.$message({
                  message: '添加成功',
                  type: 'success'
                });
                this.page = 1
                this.par_form.find_area = "{'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
                this.find_list(this.par_form.find_area)
              }else {
                this.$message.error(res.message);
              }
            });
            return true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      add_bj_s(){
        this.$refs["ruleForm_s"].validate((valid) => {
          if (valid) {
            this.load_up = true
              if(this.ruleForm_s.vue_3 == "initialize"){
                var _temp_data ="{'id':"+ this.ruleForm_s.vue_id +",'username':'"+ this.ruleForm_s.vue_1 +"','loginName':'"+ this.ruleForm_s.vue_2 +"','deptName':'"+ this.ruleForm_s.vue_4  +"','workStatus':'"+ this.ruleForm_s.vue_6  +"','roleIds':'"+ this.ruleForm_s.vue_5  +"'}"
              }else{
                var _temp_data ="{'id':"+ this.ruleForm_s.vue_id +",'username':'"+ this.ruleForm_s.vue_1 +"','loginName':'"+ this.ruleForm_s.vue_2 +"','password':'"+ this.ruleForm_s.vue_3  +"','deptName':'"+ this.ruleForm_s.vue_4  +"','workStatus':'"+ this.ruleForm_s.vue_6  +"','roleIds':'"+ this.ruleForm_s.vue_5  +"'}"
              }
            ajax_list.userEditService(_temp_data, res => {  //用户修改
              this.$emit('login-success', res);
            }, (res) => {
              if(res.status == 200){
                this.linkAlerts = false
                this.load_up = false
                this.$message({
                  message: '修改成功',
                  type: 'success'
                });
                this.page = 1
                this.par_form.find_area = "{'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
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

        var _temp_fime = "确认删除"+ obj.data_1 +"吗？"
        this.$confirm(_temp_fime, '删除用户', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var _temp_id = "{'ids':'"+ obj.data_id  +"'}"
          ajax_list.userDeleteService (_temp_id, res => {  //删除
            this.$emit('login-success', res);
          }, (res) => {
            if(res.status == 200){
              this.$message({
                message: '删除成功',
                type: 'success'
              });
              this.page = 1
              this.par_form.find_area = "{'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
              this.find_list(this.par_form.find_area)
            }
          });
        }).catch(() => {

        });



      }
    },
//生命周期钩子函数，进入页面显示之前获取数据到store
    created () {
      this.par_form.find_area = "{'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
      this.find_list(this.par_form.find_area)

      var _temp_role = "{}"
      ajax_list.roleListService(_temp_role, res => {  //角色名称
        this.$emit('login-success', res);
      }, (res) => {
        this.par_form.service_list = res.body
        this.form_1 = []
        var _temp_type = this.form_1;
        $.map( this.par_form.service_list.list,function(data){
//            console.log(data)
          _temp_type.push({
            label:data.name,
            value:data.id
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
    height:60px;
    padding-top: 10px;
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
  .div_row .row_right{
    width: 46%;
    float: right;
  }
  .div_row .row_left{
    width: 46%;
    float: left;
  }
  .ma_ui_div{
    width: 370px;
    height: 30px;
    float: left;
    margin-left: 30px;
    margin-top: 10px;
    margin-bottom: 5px;
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
    padding-bottom: 1px;
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
    width: 86%;
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
