<template>
  <div>
    <div class="two_list marterial">
      <div class="ma_title">
        <span></span>
        <p>角色管理</p>
      </div>
      <div class="ma_content">
        <div class="ma_screen">

            <div class="ma_ui_div">
              <p>角色名称：</p>
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
        <div class="ma_btn">
          <el-button size="small" @click="add_alert" type="primary" >添加角色</el-button>
        </div>
        <div v-if="this.no_val == 1" class="content_list">
          <div class="list_table">
            <el-table
              :data="tableData"
              stripe
              border
              style="width: 99.8%;text-align: center">
              <el-table-column
                prop="data_1"
                align="center"
                label="角色名称"
              >
              </el-table-column>
              <el-table-column
                prop="data_2"
                align="center"
                label="功能权限"
              >
              </el-table-column>
              <el-table-column
                prop="data_3s"
                align="center"
                label="状态"
              >
              </el-table-column>
              <el-table-column
                prop="data_4"
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
                  <el-button v-if="scope.row.data_id != -1" class="bj_btn" @click="handleClick(scope.row)" plain>修改</el-button>
                </template>
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
    <div class="two_list add_alert">
      <el-dialog  title="添加角色" width="40%"  :visible.sync="linkAlert">
        <div class='add_div'>
          <div class='add_div_one'>
            <div class='one_con'>
              <el-form :model="ruleForm"  :rules="rules" ref="ruleForm"   label-width="80px" class="demo-ruleForm">
                <div class="div_row">
                  <el-form-item label="角色名称"  prop="vue_1">
                    <el-input v-model="ruleForm.vue_1" placeholder=""></el-input>
                  </el-form-item>
                </div>
                <div class="div_row select_tree">
                  <el-form-item label="功能权限"  prop="vue_2">
                    <input v-model="ruleForm.vue_2" class="ivu-input" type="text" @click="freshArea" name="" required>
                    <input id="menuIds" type="hidden" name="menuIds" required>


                  </el-form-item>
                </div>
                <div class="div_row">
                  <el-form-item label="是否可用"  prop="vue_3">
                    <el-radio v-model="ruleForm.vue_3" label="ACTIVE">可用</el-radio>
                    <el-radio v-model="ruleForm.vue_3" label="DEL">不可用</el-radio>
                  </el-form-item>
                </div>

                <div class="div_row">
                  <el-form-item label="备注"  prop="vue_4">
                    <el-input v-model="ruleForm.vue_4" placeholder=""></el-input>
                  </el-form-item>
                </div>
                <div class="tree-box">
                 <div class="tree-box-s">
                   <div class="zTreeDemoBackground left">
                     <ul id="treeDemo" class="ztree"></ul>
                   </div>
                 </div>
                  <div class='cont_btn' ><el-button @click="tree_hide"  >确认</el-button></div>
                </div>
              </el-form>
            </div>
          </div>
          <div class='add_div_two' slot="footer" >
            <div class='wi_btn'><el-button plain @click="linkAlert = false">取消</el-button></div>
            <div class='cont_btn' ><el-button @click="add_bj" :loading="this.load_add" type='primary'>添加</el-button></div>
          </div>
        </div>
      </el-dialog>
      <el-dialog  title="修改角色" width="40%"  :visible.sync="linkAlerts">
        <div class='add_div'>
          <div class='add_div_one'>
            <div class='one_con'>
              <el-form :model="ruleForm_s"  :rules="rules_s" ref="ruleForm_s"   label-width="80px" class="demo-ruleForm">
                <div class="div_row">
                  <el-form-item label="角色名称"  prop="vue_1s">
                    <el-input v-model="ruleForm_s.vue_1s" placeholder=""></el-input>
                  </el-form-item>
                </div>
                <div class="div_row select_tree">
                  <el-form-item label="功能权限"  prop="vue_2s">
                    <input v-model="ruleForm_s.vue_2s" class="ivu-input" type="text" @click="freshArea_s" name="" required>
                  </el-form-item>
                </div>
                <div class="div_row">
                  <el-form-item label="是否可用"  prop="vue_3s">
                    <el-radio v-model="ruleForm_s.vue_3s" label="ACTIVE">可用</el-radio>
                    <el-radio v-model="ruleForm_s.vue_3s" label="DEL">不可用</el-radio>
                  </el-form-item>
                </div>

                <div class="div_row">
                  <el-form-item label="备注"  prop="vue_4s">
                    <el-input v-model="ruleForm_s.vue_4s" placeholder=""></el-input>
                  </el-form-item>
                </div>
                <div class="tree-box">
                  <div class="tree-box-s">
                    <div class="zTreeDemoBackground left">
                      <ul id="treeDemo_s" class="ztree"></ul>
                    </div>
                  </div>
                  <div class='cont_btn' ><el-button @click="tree_hide"  >确认</el-button></div>
                </div>
              </el-form>
            </div>
          </div>
          <div class='add_div_two' slot="footer" >
            <div class='wi_btn'><el-button plain @click="linkAlerts = false">取消</el-button></div>
            <div class='cont_btn' ><el-button @click="up_bj" :loading="this.load_up"  type='primary'>修改</el-button></div>
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
        setting:{
          check: {
            enable: true,
            chkboxType: {"Y":"ps", "N":"s"}
          },
          view: {dblClickExpand: false},
          data: {simpleData: {enable: true, pIdKey: 'pid'}},
          callback: {
            beforeClick: this.beforeClicks,
            onClick: this.zTreeOnClick,
            onCheck: this.zTreeOnCheck,
          },
          zNodes:[

          ],
        },
        setting_s:{
          check: {
            enable: true,
            chkboxType: {"Y":"ps", "N":"s"}
          },
          view: {dblClickExpand: false},
          data: {simpleData: {enable: true, pIdKey: 'pid'}},
          callback: {
            beforeClick: this.beforeClicks_s,
            onClick: this.zTreeOnClick_s,
            onCheck: this.zTreeOnCheck_s,
          },
          zNodes:[

          ],
        },
        load_up:false,
        load_add:false,
        data2: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        },

        options: [
          {
            parentId: '0',
            id: 'A',
            label: 'label-A',
            children: [
              {
                parentId: 'A',
                id: 'A-1',
                label: 'label-A-1',
              },
            ],
          },
          {
            parentId: '0',
            value: 'B',
            label: 'label-B',
            children: [],
          },
        ],

        no_val:1,
        linkAlert:false,
        linkAlerts:false,
        count:0,
        limit:20,  //每页显示条目个数
        page:1,  //当前页

        form_1:[],
        form_2:[
          {
            label:"在职",
            value:"在职"
          },
          {
            label:"离职",
            value:"离职"
          }
        ],
        finds:{
          find_1:"",
        },
        ruleForm:{
          vue_1:"",
          vue_2:"",
          vue_2s:"",
          vue_3:"",
          vue_4:"",
        },
        ruleForm_s:{
          vue_id:'',
          vue_1s:"",
          vue_2s:"",
          vue_2s_s:"",
          vue_3s:"",
          vue_s4:"",
        },
        rules:{
          vue_1:[
            { required: true, message: '请输入角色名称', trigger: 'blur' },
          ],
          vue_2:[
            { required: true, message: '请选择功能权限', trigger: 'blur' },
          ],
          vue_3:[
            { required: true, message: '请选择是否可用', trigger: 'change' },
          ],
//          vue_4:[
//            { required: true, message: '请输入备注', trigger: 'blur' },
//          ],
        },
        rules_s:{
          vue_1s:[
            { required: true, message: '请输入角色名称', trigger: 'blur' },
          ],
          vue_2s:[
            { required: true, message: '请选择功能权限', trigger: 'blur' },
          ],
          vue_3s:[
            { required: true, message: '请选择是否可用', trigger: 'change' },
          ],
//          vue_4:[
//            { required: true, message: '请输入备注', trigger: 'blur' },
//          ],
        },

        options4: [],  //客户名称选择框数组
        list: [],  //客户名称过滤
        loading: false, //是否正在从远程获取数据
        gd_list:{
            list:[],
        }, //客户名称后台返回数据
        states: [],  //筛选出客户名称数组
        name_list:"",

        par_form:{
          find_area:"",
          find_list:{
            list:[]
          },
        },
        tableData:[]
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
        this.linkAlert = true
      },
      current_change(val){
        this.page = val
        this.par_form.find_area = "{'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
        this.find_list(this.par_form.find_area)
      },
      data_status(val){
          console.log()
          var _temp_status = ""
          if(val == "ACTIVE"){
            _temp_status = "可用"
          }else if(val == "DEL"){
            _temp_status = "不可用"
          }
          return _temp_status
      },
      find_list(data){ //查询列表
        ajax_list.roleListService (data, res => {  //name
          this.$emit('login-success', res);
        }, (res) => {
          this.par_form.find_list = res.body
          this.count = this.par_form.find_list.count
          this.tableData = []
          var _temp_type = this.tableData;
          var _this = this
          $.map( this.par_form.find_list.list,function(data){
            _temp_type.push({
              data_id:data.id,
              data_1: data.name, //角色名称
              data_2: data.menus, //权限
              data_2s: data.menuIds, //权限id
              data_3:data.status, //状态
             data_3s:_this.data_status(data.status), //状态
              data_4: data.desc,  //备注
            });
          });

        });
      },
      find_screen(){ //筛选
        this.page = 1
        this.par_form.find_area = "{'page':'"+ this.page +"','limit':'"+ this.limit +"','roleName':'"+ this.finds.find_1 +"'}"
        this.find_list(this.par_form.find_area)
      },
      handleClick(obj){
         // console.log(obj)
        $(".tree-box").hide()
        this.linkAlerts = true
        this.ruleForm_s.vue_id = obj.data_id
        this.ruleForm_s.vue_1s = obj.data_1
        this.ruleForm_s.vue_2s = obj.data_2
        this.ruleForm_s.vue_2s_s = obj.data_2s
        this.ruleForm_s.vue_3s = obj.data_3
        this.ruleForm_s.vue_4s = obj.data_4
      },
      remoteMethod(query) { //客户名称远程搜索选择
        if (query !== '') {
          /*清空临时数组*/
          this.states = [];
          this.list = [];
          this.options4 = [];

          this.loading = true;
          this.name_list = "{'roleName': '"+ query +"'}",
            setTimeout(() => {
              this.loading = false;
              ajax_list.roleListService (this.name_list, res => {  //name
                this.$emit('login-success', res);
              }, (res) => {
                this.gd_list = res.body;
                for (var i = 0; i < this.gd_list.list.length; i++) {
                  this.states.push(this.gd_list.list[i].name);
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
      up_bj(){

        this.$refs["ruleForm_s"].validate((valid) => {
          if (valid) {
            this.load_up = true
            var _temp_data ="{'id':"+ this.ruleForm_s.vue_id +",'name':'"+ this.ruleForm_s.vue_1s +"','menuIds':'"+ this.ruleForm_s.vue_2s_s +"','status':'"+ this.ruleForm_s.vue_3s  +"','description':'"+ this.ruleForm_s.vue_4s  +"'}"
            ajax_list.roleEditService(_temp_data, res => {  //角色添加
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
      add_bj(){

        this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            this.load_add = true
            var _temp_data ="{'name':'"+ this.ruleForm.vue_1 +"','menuIds':'"+ this.ruleForm.vue_2s +"','status':'"+ this.ruleForm.vue_3  +"','description':'"+ this.ruleForm.vue_4  +"'}"
            ajax_list.roleCreateService(_temp_data, res => {  //
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

              }
            });
            return true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      freshArea(){
          $(".tree-box").show()
        if(!this.ruleForm.vue_2 == ""){

        }else{
          $.fn.zTree.init($("#treeDemo"), this.setting, this.setting.zNodes);
        }

      },
      freshArea_s(){
        $(".tree-box").show()
          $.fn.zTree.init($("#treeDemo_s"), this.setting_s, this.setting_s.zNodes);
        var zTree = $.fn.zTree.getZTreeObj("treeDemo_s");
        var pid = this.ruleForm_s.vue_2s_s;
//        console.log(pid)
        var strings = pid .split(",");
        for (var i=0, l=strings.length; i < l; i++) {

          var node = zTree.getNodeByParam("id",strings[i]);
          zTree.selectNode(node);
          node.checked = true;
          zTree.updateNode(node);
        }
      },
      zTreeOnClick(event, treeId, treeNode) {
        console.log(treeNode.tId + ", " + treeNode.name);
      },
      zTreeOnCheck(event, treeId, treeNode) {
       // console.log(treeNode.tId + ", " + treeNode.name + "," + treeNode.checked);
        var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
          checkCount = zTree.getCheckedNodes(true).length,//选中
          nocheckCount = zTree.getCheckedNodes(false).length,//未选中
          changeCount = zTree.getChangeCheckedNodes().length;//获取输入框勾选状态被改变的节点集合（与原始数据 checkedOld 对比）
        var checkedNames = [],checkedIds = [];
        for (var i = 0; i <= zTree.getCheckedNodes(true).length - 1; i++) {
          checkedIds.push(zTree.getCheckedNodes(true)[i].id);
          checkedNames.push(zTree.getCheckedNodes(true)[i].name);
        };
      //  console.log(checkedIds);
     //   console.log(checkedNames);
        var _temp_checkedNames = ""
        $.map(checkedNames,function(value,index){
            if(index == 0){
              _temp_checkedNames = value
            }else{
              _temp_checkedNames += ","  + value
            }
        });

        this.ruleForm.vue_2 =_temp_checkedNames

        var _temp_checkedIds = ""
        $.map(checkedIds,function(value,index){
          if(index == 0){
            _temp_checkedIds = value
          }else{
            _temp_checkedIds += ","  + value
          }
        });

        this.ruleForm.vue_2s =_temp_checkedIds
      },
      beforeClicks(treeId, treeNode) {
        var zTree = $.fn.zTree.getZTreeObj("treeDemo");
        // zTree.checkNode(treeNode, !treeNode.checked, null, true);
        zTree.checkNode(treeNode, !treeNode.checked, true, true); //第二个参数!treeNode.checked和"",省略此参数效果等同，则根据对此节点的勾选状态进行 toggle 切换，第三个参数设置为true时候进行父子节点的勾选联动操作 ，第四个参数true 表示执行此方法时触发 beforeCheck & onCheck 事件回调函数；false 表示执行此方法时不触发事件回调函数
        return false;
      },
      tree_hide(){
        $(".tree-box").hide()
      },
      zTreeOnClick_s(event, treeId, treeNode) {
        console.log(treeNode.tId + ", " + treeNode.name);
      },
      zTreeOnCheck_s(event, treeId, treeNode) {
        // console.log(treeNode.tId + ", " + treeNode.name + "," + treeNode.checked);
        var zTree = $.fn.zTree.getZTreeObj("treeDemo_s"),
          checkCount = zTree.getCheckedNodes(true).length,//选中
          nocheckCount = zTree.getCheckedNodes(false).length,//未选中
          changeCount = zTree.getChangeCheckedNodes().length;//获取输入框勾选状态被改变的节点集合（与原始数据 checkedOld 对比）
        var checkedNames = [],checkedIds = [];
        for (var i = 0; i <= zTree.getCheckedNodes(true).length - 1; i++) {
          checkedIds.push(zTree.getCheckedNodes(true)[i].id);
          checkedNames.push(zTree.getCheckedNodes(true)[i].name);
        };
        //  console.log(checkedIds);
     //   console.log(checkedNames);
        var _temp_checkedNames = ""
        $.map(checkedNames,function(value,index){
          if(index == 0){
            _temp_checkedNames = value
          }else{
            _temp_checkedNames += ","  + value
          }
        });

        this.ruleForm_s.vue_2s =_temp_checkedNames

        var _temp_checkedIds = ""
        $.map(checkedIds,function(value,index){
          if(index == 0){
            _temp_checkedIds = value
          }else{
            _temp_checkedIds += ","  + value
          }
        });

        this.ruleForm_s.vue_2s_s =_temp_checkedIds
      },
      beforeClicks_s(treeId, treeNode) {
        var zTree = $.fn.zTree.getZTreeObj("treeDemo_s");
        // zTree.checkNode(treeNode, !treeNode.checked, null, true);
        zTree.checkNode(treeNode, !treeNode.checked, true, true); //第二个参数!treeNode.checked和"",省略此参数效果等同，则根据对此节点的勾选状态进行 toggle 切换，第三个参数设置为true时候进行父子节点的勾选联动操作 ，第四个参数true 表示执行此方法时触发 beforeCheck & onCheck 事件回调函数；false 表示执行此方法时不触发事件回调函数
        return false;
      },
    },
//生命周期钩子函数，进入页面显示之前获取数据到store
    created () {
      this.par_form.find_area = "{'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
      this.find_list(this.par_form.find_area)


      ajax_list.menuListService ("{}", res => {  //树形结构
        this.$emit('login-success', res);
      }, (res) => {
        this.setting.zNodes = res.body
        this.setting_s.zNodes = res.body
      });
      ajax_list. roleListService ("{}", res => {  //角色名称
        this.$emit('login-success', res);
      }, (res) => {
        this.form_1 = []
        var _temp_form_1 = this.form_1
        $.map( res.body.list,function(value){
          _temp_form_1.push({
            value:value.name,
            label:value.name
          });
        });
      });

    }
  }
</script>

<style scoped>
  .tree-box{
    display: none;
    min-width: 200px;
    height: 350px;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 6px 0px rgba(165,165,165,0.5);
    border-radius:10px;
    position: absolute;
    top: 70px;
    right: 40px;
  }
  .tree-box-s{
    height: 300px;
    overflow: auto;
  }
  .tree-box .cont_btn{
    position: absolute;
    bottom: 0;
    left:50%;
    margin-left: -50px;
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
    width: 80%;
    margin: 0 auto;
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

  .ivu-input{
    width: calc(100% - 32px);
    padding: 0 15px;
    height: 28px;
    line-height: 28px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #d8dce5;
  }
  /*** 弹窗结束 **/

</style>
<style>
  .tree-box .cont_btn button{
    background:rgba(59,79,114,1)!important;
    border-radius:15px!important;
  }
 .select_tree .el-dropdown{
   width: 100%;
 }
 .select_tree .el-icon-arrow-down{
   float: right;
 }
  .two_list .el-dropdown-menu{
    padding: 10px 30px!important;
  }
 /*.el-popper[x-placement^=bottom]{*/
   /*padding: 10px 30px!important;*/
 /*}*/
 .select_tree .el-button{
   width: 100%;
 }
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
