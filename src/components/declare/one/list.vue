<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <span></span>
        <p>富余电基数</p>
      </div>
      <div class="ma_content">
        <div class="ma_screen">
          <div class="div_row">
            <div class="ma_ui_div">
              <p>年份：</p>
              <div class="input_ss">
                <el-select style="width: 100%;"  @change="find_screen" size="medium" v-model="finds.find_1" placeholder="请选择">
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
          <el-button size="small" @click="add_user" type="primary" >添加基数</el-button>
          <el-button size="small" type="primary" @click="dialogTableVisible = true" >导入富余电</el-button>
          <el-button size="small" type="primary" @click="import_list">导出列表</el-button>
          <!--<el-button size="small" type="primary" @click="import_list_m">下载导入模板</el-button>-->
        </div>
        <div v-if="this.no_val == 1" class="content_list page_height">
          <p class="table_title">电量单位：兆瓦时（MWh）</p>
          <div class="list_table">
            <el-table
              :data="tableData"
              stripe
              border
              show-summary
              sum-text="汇总"
              style="width: 99.8%;text-align: center">
              <el-table-column
                prop="data_0"
                align="center"
                label="用户代码"
              >
              </el-table-column>
              <el-table-column
                prop="data_1"
                align="center"
                label="客户名称"
              >
              </el-table-column>
              <el-table-column
                prop="data_2"
                align="center"
                label="总基数"
              >
              </el-table-column>
              <el-table-column
                prop="data_3"
                align="center"
                label="6月基数"
              >
              </el-table-column>
              <el-table-column
                prop="data_4"
                align="center"
                label="7月基数"
              >
              </el-table-column>
              <el-table-column
                prop="data_5"
                align="center"
                label="8月基数"
              >
              </el-table-column>
              <el-table-column
                prop="data_6"
                align="center"
                label="9月基数"
              >
              </el-table-column>
              <el-table-column
                prop="data_7"
                align="center"
                label="10月基数"
              >
              </el-table-column>
            </el-table>
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
    <div class="add_alert add_enough">
      <el-dialog  title="添加富余电基数" width="40%"  :visible.sync="linkAlert">
        <div class='add_div'>
          <div class='add_div_one'>
            <div class='one_con'>
              <el-form :model="ruleForm"  :rules="rules" ref="ruleForm"   label-width="60px" class="demo-ruleForm">
                <el-form-item label="年度"  label-width="80px" prop="vue_0">
                  <el-select style="width: 60%;"  size="medium" v-model="ruleForm.vue_0" placeholder="请选择">
                    <el-option
                      v-for="item in form_1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="客户名称" label-width="80px" prop="vue_2">
                  <el-select style="width: 60%;"  v-model="ruleForm.vue_2" filterable  allow-create
                             default-first-option remote clearable reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod_s" :loading="loading_s">
                    <el-option
                      v-for="item in options4_s"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <p style="margin-bottom: 10px;text-align: right">用电单位：兆瓦时（Mwh）</p>
                <div class="set_left">
                  <el-form-item label="6月"  prop="set_6">
                    <el-input type="number" size="medium" v-model.number="ruleForm.set_6" placeholder=""></el-input>
                  </el-form-item>
                  <el-form-item label="8月"  prop="set_8">
                    <el-input type="number" size="medium" v-model.number="ruleForm.set_8" placeholder=""></el-input>
                  </el-form-item>
                  <el-form-item label="10月"  prop="set_10">
                    <el-input type="number" size="medium" v-model.number="ruleForm.set_10" placeholder=""></el-input>
                  </el-form-item>
                </div>
                <div class="set_right">
                  <el-form-item label="7月"  prop="set_7">
                    <el-input type="number" size="medium" v-model.number="ruleForm.set_7" placeholder=""></el-input>
                  </el-form-item>
                  <el-form-item label="9月"  prop="set_9">
                    <el-input type="number" size="medium" v-model.number="ruleForm.set_9" placeholder=""></el-input>
                  </el-form-item>

                </div>
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
    <div class="add_list">
      <el-dialog title="导入数据"  :visible.sync="dialogTableVisible">
        <div class='add_div'>
          <div class='add_div_one'>
            <div class='one_con'>
              <div class="one_con_img">
                <div  class="one_img"></div>
              </div>
              <div class="one_con_img">
                <div class="two_img"></div>
              </div>
              <div class="one_con_ss">-------------------------</div>
            </div>
          </div>
          <div class='add_div_two' slot="footer" >
            <div class='cont_btn' >
              <el-upload
                class="upload-demo"
                :action="this.url_action"
                :on-success="handleSuccess"
                name="file"
                :show-file-list="this.show_file_list"
                :data="this.url_data"
              >
                <el-button size="small" type="primary" >导入数据</el-button></el-upload>
            </div>
            <div class='wi_btn'> <el-button size="small" @click="import_list_m"><i class="el-icon-download"></i>下载导入模板</el-button></div>
          </div>
        </div>
      </el-dialog>
      <el-dialog title="导入数据"    :visible.sync="d_success">
        <div class='add_div'>
          <div class='add_div_one'>
            <div class='one_con'>
              <div class="one_con_three">
                <div  class="three_img"></div>
                <p>导入成功</p>
                <span>共导入{{this.d_list_index}}个客户资料</span>
              </div>
            </div>
          </div>
          <div class='add_div_two' slot="footer" >
            <div class='cont_btn' >
              <el-upload
                class="upload-demo"
                :action="this.url_action"
                :on-success="handleSuccess"
                name="file"
                :show-file-list="this.show_file_list"
                :data="this.url_data"
                multiple
              >
                <el-button size="small" type="primary" >继续导入</el-button></el-upload>
            </div>
            <div class='wi_btn'> <el-button size="small" @click="d_close('s')">关闭</el-button></div>
          </div>
        </div>
      </el-dialog>
      <el-dialog title="导入数据"    :visible.sync="d_error">
        <div class='add_div'>
          <div class='add_div_one'>
            <div class='one_con'>
              <div class="one_con_three">
                <div  class="four_img"></div>
                <p>导入失败</p>
                <span>共导入{{this.d_list_index + d_fail_index}}个客户资料，其中{{this.d_fail_index}}个导入失败</span>
              </div>
            </div>
          </div>
          <div class='add_div_two' slot="footer" >
            <div class="add_su_btn">
              <el-upload
                class="upload-demo"
                :action="this.url_action"
                :on-success="handleSuccess"
                name="file"
                :show-file-list="this.show_file_list"
                :data="this.url_data"
                multiple
              >
                <el-button size="small" type="primary" >重新导入</el-button></el-upload>
              <el-button size="small" @click="d_close('e')">关闭</el-button>
            </div>
          </div>
          <div class="add_error_list">
            <p>导入失败信息：</p>
            <div v-for='(item,index) in this.d_failList'> <i class="el-icon-warning" style="color: red"></i>  {{item.customerName}}  <span>{{item.errorMsg}} </span> </div>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  // 引入axios
  import ajax_list from '../../../api/declare'

  export default {
    data() {
      return {
        url_action:"",
        url_data:{},
        d_success:false,
        d_error:false,
        show_file_list:false,
        dialogTableVisible:false,
        d_list_index:0,   //导入成功条数
        d_fail_index:0,   //导入失败条数
        d_failList:{},   //导入失败列表
        count:0,
        limit:10,  //每页显示条目个数
        page:1,  //当前页
        no_val:1,
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
        finds:{
          find_1:0,
          find_2:"",
          find_3:"",
          find_4:"",
        },
        ruleForm:{
          vue_0:"",
          vue_2:"",
          set_6:0,
          set_7:0,
          set_8:0,
          set_9:0,
          set_10:0,
        },
        rules:{
          vue_0:[
            { required: true, message: '请选择年份', trigger: 'change' },
          ],
          vue_2:[
            { required: true, message: '请输入客户名称', trigger: 'blur' },
          ],
          set_6:[
            { required: true, message: '请输入6月基数', trigger: 'blur' },
          ],
          set_7:[
            { required: true, message: '请输入7月基数', trigger: 'blur' },
          ],
          set_8:[
            { required: true, message: '请输入8月基数', trigger: 'blur' },
          ],
          set_9:[
            { required: true, message: '请输入9月基数', trigger: 'blur' },
          ],
          set_10:[
            { required: true, message: '请输入10月基数', trigger: 'blur' },
          ],
        },

        options4: [],  //客户名称选择框数组
        list: [],  //客户名称过滤
        loading: false, //是否正在从远程获取数据
        gd_list:[], //客户名称后台返回数据
        states: [],  //筛选出客户名称数组
        name_list:"",

        options4_s: [],  //客户名称选择框数组
        list_s: [],  //客户名称过滤
        loading_s: false, //是否正在从远程获取数据
        gd_list_s:[], //客户名称后台返回数据
        states_s: [],  //筛选出客户名称数组
        name_list_s:"",

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
      handleSuccess(response, file, fileList){

        if(response.status == 200){
          if( response.body.failSize != 0){ //有错误消息
            this.dialogTableVisible = false
           this.d_success = false
            this.d_error = true
            this.d_failList = response.body.failList
            this.d_list_index = response.body.successSize
            this.d_fail_index = response.body.failSize
          }else{
            this.dialogTableVisible = false
            this.d_error = false
            this.d_success = true
            this.d_list_index = response.body.successSize
          }
          var _temp_data = "{}"
          if(this.no_find  == 0){  //客户用电情况
            _temp_data ="{'year':"+ this.finds.find_1 +",'customerName':'"+  this.value9 +"' ,'dataSourceType':'"+  this.finds.find_4 +"'}"
          }else if(this.no_find  == 1){ //已购电情况
            _temp_data ="{'year':"+ this.finds.find_1 +",'powerPlantName':'"+  this.finds.find_2 +"'}"
          }else if(this.no_find  == 2){ //用电缺口
            _temp_data ="{'year':"+ this.finds.find_1 +"}"
          }
          this.find_list(_temp_data)
        }

      },
      d_close(a){
        if(a == "s"){
          this.d_success = false
        }else if(a == "e"){
          this.d_error = false
        }

      },
      current_change(val){
        this.page = val
        this.par_form.find_area = "{'year':'"+ this.finds.find_1 +"','customerName':'"+ this.finds.find_2 +"','provinceCode':'" + this.finds.find_3 +"','cityCode':'"+ this.finds.find_4 +"','page':'"+ this.page +"','limit':'"+ this.limit +"'}"
        this.find_list(this.par_form.find_area)
      },
      add_user(){
        if (this.$refs["ruleForm"]!==undefined) {
          this.$refs["ruleForm"].resetFields();
        }
        this.linkAlert = true
        this.ruleForm.vue_0 = this.finds.find_1
      },
      import_list(){
        var _temp_Export = "{'year':'"+ this.finds.find_1 +"','customerName':'"+ this.finds.find_2 +"','provinceCode':'" + this.finds.find_3 +"','cityCode':'"+ this.finds.find_4 +"'}"
        ajax_list.customerSurplusExportService(_temp_Export, res => {  //导出
          this.$emit('login-success', res);
        }, (res) => {

        });
      },
      import_list_m(){ //富余电基数导入模板
        var _temp_Export = "{'templateName':'customer-surplus.xls'}"
        ajax_list.templateDownloadService(_temp_Export, res => {  //导出
          this.$emit('login-success', res);
        }, (res) => {

        });
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
        ajax_list.customerSurplusListService(data, res => {  //name
          this.$emit('login-success', res);
        }, (res) => {
          this.par_form.find_list = res.body
          this.count = res.body.count
          this.tableData = []
          var _temp_type = this.tableData;
          if(this.par_form.find_list.list.length != 0){
            $.map( this.par_form.find_list.list,function(data){
              _temp_type.push({
                data_1: data.customerName, //客户名称
                data_0: data.customerCode, //用户代码
                data_2: data.total,
                data_3:data.month6,
                data_4: data.month7,
                data_5: data.month8,
                data_6: data.month9,
                data_7: data.month10
              });
            });
          }

        });
      },
      find_screen(){ //筛选
        this.page = 1
        this.par_form.find_area = "{'year':'"+ this.finds.find_1 +"','customerName':'"+ this.finds.find_2 +"','provinceCode':'" + this.finds.find_3 +"','cityCode':'"+ this.finds.find_4 +"','page':'"+ this.page +"','limit':'"+ this.limit +"'}"
        this.find_list(this.par_form.find_area)
      },
      empty_find(){ //清空
        this.finds.find_1 = ""
        this.finds.find_2 = ""
        this.finds.find_3 = ""
        this.finds.find_4 = ""
        this.page = 1
        var date=new Date;
        this.finds.find_1 = date.getFullYear()
        this.par_form.find_area = "{'year':'"+ this.finds.find_1 +"','customerName':'"+ this.finds.find_2 +"','provinceCode':'" + this.finds.find_3 +"','cityCode':'"+ this.finds.find_4 +"','page':'"+ this.page +"','limit':'"+ this.limit +"'}"
        this.find_list(this.par_form.find_area)
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
      remoteMethod_s(query) { //客户名称远程搜索选择(带客户ID)
        if (query !== '') {
          /*清空临时数组*/
          this.states_s = [];
          this.list_s = [];
          this.options4_s = [];

          this.loading_s = true;
          this.name_list_s = "{'name': '"+ query +"'}",
            setTimeout(() => {
              this.loading_s = false;
              ajax_list.customerListService(this.name_list_s, res => {  //name
                this.$emit('login-success', res);
              }, (res) => {
                this.gd_list_s = res.body.list;
                for (var i = 0; i < this.gd_list_s.length; i++) {
                  this.states_s.push({name:this.gd_list_s[i].name,id:this.gd_list_s[i].id});
                }
                this.list_s = this.states_s.map(item => {

                  return { value: item.id, label: item.name };
                });

                this.options4_s = this.list_s.filter(item => {
                  return item.label.toLowerCase()
                      .indexOf(query.toLowerCase()) > -1;
                });

              });

            }, 200);
        } else {
          this.options4_s = [];
        }
      },
      add_bj(){
        this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            var _temp_data = {
              year:this.ruleForm.vue_0,
              customerId:this.ruleForm.vue_2,
              month6:this.ruleForm.set_6,
              month7:this.ruleForm.set_7,
              month8:this.ruleForm.set_8,
              month9:this.ruleForm.set_9,
              month10:this.ruleForm.set_10,
            }
            _temp_data =  JSON.stringify(_temp_data)
            ajax_list.customerSurplusCreateService(_temp_data, res => {  //
              this.$emit('login-success', res);
            }, (res) => {
              if(res.status == 200){
                this.linkAlert = false
                this.$message({
                  message: '添加成功',
                  type: 'success'
                });
                this.par_form.find_area = "{'year':"+ this.finds.find_1 + ",'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
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
          type: 'warning'
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
              this.par_form.find_area = "{'year':"+ this.finds.find_1 +",'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
              this.find_list(this.par_form.find_area)
            }
          });
        }).catch(() => {

        });



      }
    },
//生命周期钩子函数，进入页面显示之前获取数据到store
    created () {
      var selfId = localStorage.getItem('adminSelfId') || '';
      var token = localStorage.getItem('adminToken') || '';
      this.url_action = this.HOST + "/apiFile/customerSurplusImportService"
      this.url_data = {
        "version":"1.0",
        "token":token,
        "selfId":selfId,
        "data":"{}"
      }
      var date=new Date;
      this.finds.find_1 = date.getFullYear()
      this.par_form.find_area = "{'year':"+ this.finds.find_1 +",'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
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
  .page_height{
    min-height: calc(100vh - 500px)!important;
  }
  .list_table{
    width: 96%;
    margin:0px auto;
    margin-top: 40px;
    margin-bottom: 10px;
    border: 1px solid rgba(234,234,234,1);
  }
  .table_title{
    padding: 0px;
    width: 86%;
    margin: 20px auto;
    text-align: right;
    font-weight:400;
    color:rgba(112,112,112,1);
    font-size: 12px;
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
    width: 280px;
    margin: 30px auto;
    overflow: auto;
  }
  .cont_btn{
    width: 120px;
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
  .upload-demo{
    display: inline-block;
  }
  /*** 导入弹窗 ***/

  .add_list .add_div{
    background-color: white;
  }
  .add_list .add_div_one{
    width: 100%;
    height: 250px;
    background:rgba(73,138,243,1);
  }
  .add_list .add_div_one .one_title{
    margin-left: 28px;
    padding-top: 20px;
    font-size:16px;
    font-weight:bold;
    color:rgba(254,254,254,1);
  }
  .add_list .add_div_one .one_title i{
    float: right;
    margin-right: 28px;
    font-size: 18px;
    margin-top: 2px;
  }
  .add_list .one_con{
    width: 70%;
    margin: 0px auto;
  }

  .add_list .one_con_img{
    width: 50%;
    float: left;
    margin-top:10px;
  }
  .add_list  .one_con_ss{
    width: 30%;
    margin: 0 auto;
    position: relative;
    top: -65px;
    left: 5%;
    color: white;
  }
  .add_list .one_con_three{
    width: 50%;
    margin:0 auto;
  }
  .add_list .one_con_img p{
    margin-top: 30px;
    font-size:18px;
    font-weight:400;
    text-align: center;
    color:rgba(254,254,254,1);
  }
  .add_list .one_con_three p{
    margin-top:0px;
    font-size:18px;
    font-weight:400;
    text-align: center;
    color:rgba(254,254,254,1);
  }
  .add_list .one_con_three span{
    margin: 0px auto;
    display: block;
    font-size:14px;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
  }
  .add_list .one_con_img div{
    width: 130px;
    height: 130px;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 50%;
  }
  .add_list .one_con_three div{
    width: 130px;
    height: 130px;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 50%;
  }
  .add_list .one_con .one_img{
    background: url("../../../assets/aImg/icon_wenjian.png") center no-repeat;
  }

  .add_list .two_img{
    background: url("../../../assets/aImg/icon_diannao.png") center no-repeat;
  }
  .add_list .one_con .three_img{
    background: url("../../../assets/aImg/import_suss.png") center no-repeat;
  }
  .add_list .one_con .four_img{
    background: url("../../../assets/aImg/import_error.png") center no-repeat;
  }
  .add_list .add_div_two{
    margin: 25px auto;
    padding-bottom: 20px;
  }
  .add_list .add_su_btn{
    width: 280px;
    margin: 0 auto;
  }
  .add_list .add_su_btn button{
    width: 100px;
  }
  .add_list .cont_btn{
    width: 120px;
    margin: 0px auto;
  }
  .add_list .cont_btn button{
    width: 100%;
    font-size:14px;
    margin-bottom: 10px;
    color:rgba(255,255,255,1);
    background:rgba(93,179,247,1);
  }
  .add_list  .wi_btn{
    width: 136px;
    margin: 0px auto;
  }
  .add_list .wi_btn button{
    width: 100%;
    font-size:14px;
    margin-bottom: 10px;
    color:rgba(150,150,150,1);
    background:#fff;
  }

  .add_list .add_error_list{
    width: 80%;
    margin: 0 auto;
    padding: 10px 20px;
    border-top: 2px solid rgba(235,235,235,1);
  }
  .add_list .add_error_list p{
    font-size:16px;
    font-weight:bold;
    color:rgba(134,134,134,1);
    line-height:20px;
    margin-bottom: 10px;
  }
  .add_list .add_error_list div{
    margin-bottom: 25px;
    line-height: 25px;
    font-size:14px;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .add_list .add_error_list div i{
    margin-right: 5px;
  }
  .add_list .add_error_list div span{
    display: inline-block;
    font-size:12px;
    line-height: 25px;
    font-weight:400;
    color:rgba(242,46,46,1);
    margin-left: 12px;
  }
  /***弹窗结束**/
  .add_enough .set_left{
    width: 48%;
    float: left;
  }
  .add_enough .set_right{
    width: 48%;
    float: right;
  }
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

  .add_enough .one_con{
    width: 90%;
    overflow: auto;
  }
</style>
