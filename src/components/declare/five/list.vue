<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <span></span>
        <p>客户合同价格统计</p>
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
          <el-button  v-if="show_map(12) == 12" @click="set_hd" size="small" type="primary" >设置火电价格</el-button>
          <el-button v-if="this.no_find == 0" size="small" type="primary" @click="import_list">导出列表</el-button>
        </div>

        <div class="content_list">
          <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="客户合同价格" name="first">
              <p class="table_title">价格单位：元/千瓦时</p>
              <div class="list_table">
                <el-table
                  :data="tableData"
                  stripe

                  style="width: 100%;text-align: center">
                  <el-table-column
                    type="index"
                    align="center"
                    label="序号"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_2s"
                    align="center"
                    label="用户代码"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_2"
                    align="center"
                    label="客户"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_3"
                    align="center"
                    label="年份"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_10s"
                    align="center"
                    label="富余电月度增量价格"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_10"
                    align="center"
                    label="富余电年度交易价格"
                  >
                  </el-table-column>
                  <el-table-column
                    align="center"
                    label="长协年度交易价格"
                  >
                    <el-table-column
                      prop="data_4"
                      align="center"
                      label="丰">
                    </el-table-column>
                    <el-table-column
                      prop="data_5"
                      align="center"
                      label="平">
                    </el-table-column>
                    <el-table-column
                      prop="data_6"
                      align="center"
                      label="枯">
                    </el-table-column>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    label="月度增量价格"
                  >
                    <el-table-column
                      prop="data_7"
                      align="center"
                      label="丰">
                    </el-table-column>
                    <el-table-column
                      prop="data_8"
                      align="center"
                      label="平">
                    </el-table-column>
                    <el-table-column
                      prop="data_9"
                      align="center"
                      label="枯">
                    </el-table-column>
                  </el-table-column>

                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="匹配火电后长协价格" name="second">
              <p class="table_title">价格单位：元/千瓦时</p>
              <div class="list_table">
                <el-table
                  :data="tableData_1"
                  stripe
                  style="width: 100%;text-align: center">
                  <el-table-column
                    type="index"
                    align="center"
                    label="序号"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_2s"
                    min-width="100px"
                    align="center"
                    label="用户代码"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_2"
                    min-width="120px"
                    align="center"
                    label="客户"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_3"
                    align="center"
                    label="年份"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_4"
                    align="center"
                    label="1月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_5"
                    align="center"
                    label="2月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_6"
                    align="center"
                    label="3月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_7"
                    align="center"
                    label="4月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_8"
                    align="center"
                    label="5月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_9"
                    align="center"
                    label="6月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_10"
                    align="center"
                    label="7月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_11"
                    align="center"
                    label="8月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_12"
                    align="center"
                    label="9月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_13"
                    align="center"
                    label="10月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_14"
                    align="center"
                    label="11月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_15"
                    align="center"
                    label="12月"
                  >
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="匹配火电后月度增量价格" name="third">
              <p class="table_title">价格单位：元/千瓦时</p>
              <div class="list_table">
                <el-table
                  :data="tableData_2"
                  stripe
                  style="width: 100%;text-align: center">
                  <el-table-column
                    type="index"
                    align="center"
                    label="序号"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_2s"
                    align="center"
                    min-width="120px"
                    label="用户代码"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_2"
                    align="center"
                    min-width="120px"
                    label="客户"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_3"
                    align="center"
                    label="年份"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_4"
                    align="center"
                    label="1月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_5"
                    align="center"
                    label="2月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_6"
                    align="center"
                    label="3月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_7"
                    align="center"
                    label="4月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_8"
                    align="center"
                    label="5月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_9"
                    align="center"
                    label="6月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_10"
                    align="center"
                    label="7月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_11"
                    align="center"
                    label="8月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_12"
                    align="center"
                    label="9月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_13"
                    align="center"
                    label="10月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_14"
                    align="center"
                    label="11月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_15"
                    align="center"
                    label="12月"
                  >
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
          </el-tabs>
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
                <el-form-item label="客户名称"  prop="vue_2">
                  <el-select style="width: 100%;"  v-model="ruleForm.vue_2" filterable
                             default-first-option remote clearable reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
                    <el-option
                      v-for="item in options4"
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
            <div class='cont_btn' ><el-button @click="add_bj" :loading="this.load_add" type='primary'>确认添加</el-button></div>
          </div>
        </div>
      </el-dialog>
    </div>
    <div class="add_set">
      <el-dialog  title="设置火电价格" width="40%"  :visible.sync="linkAlerts">
        <div class='add_div'>
          <div class='add_div_one'>
            <div class='one_con'>
              <el-form :model="ruleForm_1"  :rules="rules_1" ref="ruleForm_1"   label-width="55px" class="demo-ruleForm">
                <el-form-item label="年度"  prop="set_0">
                  <el-select style="width: 60%;" @change="find_year"  size="medium" v-model="ruleForm_1.set_0" placeholder="请选择">
                    <el-option
                      v-for="item in form_1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <p class="table_title">价格单位：元/千瓦时</p>
                <div class="set_left">
                  <el-form-item label="1月"  prop="set_1">
                    <el-input type="number" size="medium" v-model.number="ruleForm_1.set_1" placeholder=""></el-input>
                  </el-form-item>
                  <el-form-item label="2月"  prop="set_2">
                    <el-input type="number" size="medium" v-model.number="ruleForm_1.set_2" placeholder=""></el-input>
                  </el-form-item>
                  <el-form-item label="3月"  prop="set_3">
                    <el-input type="number" size="medium" v-model.number="ruleForm_1.set_3" placeholder=""></el-input>
                  </el-form-item>
                  <el-form-item label="4月"  prop="set_4">
                    <el-input type="number" size="medium" v-model.number="ruleForm_1.set_4" placeholder=""></el-input>
                  </el-form-item>
                  <el-form-item label="5月"  prop="set_5">
                    <el-input type="number" size="medium" v-model.number="ruleForm_1.set_5" placeholder=""></el-input>
                  </el-form-item>
                  <el-form-item label="6月"  prop="set_6">
                    <el-input type="number" size="medium" v-model.number="ruleForm_1.set_6" placeholder=""></el-input>
                  </el-form-item>
                </div>
                <div class="set_right">
                  <el-form-item label="7月"  prop="set_7">
                    <el-input type="number" size="medium" v-model.number="ruleForm_1.set_7" placeholder=""></el-input>
                  </el-form-item>
                  <el-form-item label="8月"  prop="set_8">
                    <el-input type="number" size="medium" v-model.number="ruleForm_1.set_8" placeholder=""></el-input>
                  </el-form-item>
                  <el-form-item label="9月"  prop="set_9">
                    <el-input type="number" size="medium" v-model.number="ruleForm_1.set_9" placeholder=""></el-input>
                  </el-form-item>
                  <el-form-item label="10月"  prop="set_10">
                    <el-input type="number" size="medium" v-model.number="ruleForm_1.set_10" placeholder=""></el-input>
                  </el-form-item>
                  <el-form-item label="11月"  prop="set_11">
                    <el-input type="number" size="medium" v-model.number="ruleForm_1.set_11" placeholder=""></el-input>
                  </el-form-item>
                  <el-form-item label="12月"  prop="set_12">
                    <el-input type="number" size="medium" v-model.number="ruleForm_1.set_12" placeholder=""></el-input>
                  </el-form-item>
                </div>

              </el-form>
            </div>
          </div>
          <div class='add_div_two' slot="footer" >
            <div class='wi_btn'><el-button plain @click="linkAlerts = false">取消</el-button></div>
            <div class='cont_btn' ><el-button @click="set_bj" :loading="this.load_set" type='primary'>确认</el-button></div>
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
        no_find:0,
        linkAlert:false,
        linkAlerts:false,
        load_add:false,
        load_set:false,
        activeName2: 'first',
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
        },
        rules:{
          vue_0:[
            { required: true, message: '请选择年份', trigger: 'change' },
          ],
          vue_2:[
            { required: true, message: '请输入客户名称', trigger: 'blur' },
          ],
        },
        ruleForm_1:{
            set_0:0,
            set_1:0,
            set_2:0,
            set_3:0,
            set_4:0,
            set_5:0,
            set_6:0,
            set_7:0,
            set_8:0,
            set_9:0,
            set_10:0,
            set_11:0,
            set_12:0,
        },
        rules_1:{
          set_0:[
            { required: true, message: '请选择年份', trigger: 'change' },
          ],
          set_1:[
            { required: true, message: '请输入1月火电价格', trigger: 'blur' },
          ],
          set_2:[
            { required: true, message: '请输入2月火电价格', trigger: 'blur' },
          ],
          set_3:[
            { required: true, message: '请输入3月火电价格', trigger: 'blur' },
          ],set_4:[
            { required: true, message: '请输入4月火电价格', trigger: 'blur' },
          ],set_5:[
            { required: true, message: '请输入5月火电价格', trigger: 'blur' },
          ],set_6:[
            { required: true, message: '请输入6月火电价格', trigger: 'blur' },
          ],set_7:[
            { required: true, message: '请输入7月火电价格', trigger: 'blur' },
          ],set_8:[
            { required: true, message: '请输入8月火电价格', trigger: 'blur' },
          ],set_9:[
            { required: true, message: '请输入9月火电价格', trigger: 'blur' },
          ],set_10:[
            { required: true, message: '请输入10月火电价格', trigger: 'blur' },
          ],set_11:[
            { required: true, message: '请输入11月火电价格', trigger: 'blur' },
          ],set_12:[
            { required: true, message: '请输入12月火电价格', trigger: 'blur' },
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

        tableData:[],
        tableData_1:[],
        tableData_2:[],
        menuList:[],

      }
    },
// 映射store数据
    computed: {

    },
    methods: {
      show_map(id){
        let obj = {};
        if( this.menuList != ""){
          obj =  this.menuList.find((item)=>{
            return item.id === id;
          });
          if(obj != undefined){
            return obj.id
          }else{
            return ""
          }
        }else {
          return ""
        }


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
        ajax_list.customerContractQuotedListService(data, res => {  //name
          this.$emit('login-success', res);
        }, (res) => {
          this.par_form.find_list = res.body
          this.tableData = []
          this.tableData_1 = []
          this.tableData_2 = []
          if( this.par_form.find_list.list.length != 0){
            var _temp_type = this.tableData;
            var _temp_type1 = this.tableData_1;
            var _temp_type2 = this.tableData_2;
            $.map( this.par_form.find_list.list,function(data){

              _temp_type.push({
                data_2: data.customerName, //客户名称
                data_2s: data.customerCode, //用户代码
                data_3:data.year, //年份
                data_4: data.laRich,  //长协价格（丰）
                data_5: data.laFlat, //长协价格（平）
                data_6: data.laDry, //长协价格（枯）
                data_7: data.monthRich , //月度增量价格（丰）
                data_8: data.monthFlat , //月度增量价格（平）
                data_9: data.monthDry , //月度增量价格（枯）
                data_10: data.surplusYearPrice , //富余电年度交易价格
                data_10s: data.surplusMonthPrice , //富余电月度增量价格
              });
              _temp_type1.push({
                data_2: data.customerName, //客户名称
                data_2s: data.customerCode, //用户代码
                data_3:data.year, //年份
                data_4: data.laMonth1,
                data_5: data.laMonth2,
                data_6: data.laMonth3,
                data_7: data.laMonth4 ,
                data_8: data.laMonth5 ,
                data_9: data.laMonth6 ,
                data_10: data.laMonth7 ,
                data_11: data.laMonth8 ,
                data_12: data.laMonth9 ,
                data_13: data.laMonth10 ,
                data_14: data.laMonth11 ,
                data_15: data.laMonth12,
              });
              _temp_type2.push({
                data_2: data.customerName, //客户名称
                data_2s: data.customerCode, //客户名称
                data_3:data.year, //年份
                data_4: data.inMonth1,
                data_5: data.inMonth2,
                data_6: data.inMonth3,
                data_7: data.inMonth4 ,
                data_8: data.inMonth5 ,
                data_9: data.inMonth6 ,
                data_10: data.inMonth7 ,
                data_11: data.inMonth8 ,
                data_12: data.inMonth9 ,
                data_13: data.inMonth10 ,
                data_14: data.inMonth11 ,
                data_15: data.inMonth12,
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
      handleClick(tab) {
        this.no_find = tab.index
       // console.log(tab.index, tab.label);
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
      add_bj(){
        this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            this.load_add = true
            var _temp_data ="{'year':'"+ this.ruleForm.vue_0 +"','customerName':'"+ this.ruleForm.vue_2 +"'}"
            ajax_list.customerContractQuotedCreateService(_temp_data, res => {  //客户合同价格统计-客户合同价格统计添加

             // this.$emit('login-success', res);
              this.load_add = false
            }, (res) => {
              if(res.status == 200){
                this.linkAlert = false
                this.load_add = false
                this.par_form.find_area = "{'year':" + this.finds.find_1 +  "}"
                this.find_list(this.par_form.find_area)
              }
            });
            this.load_add = false
            return true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      set_bj(){  //设置火电价格
        this.$refs["ruleForm_1"].validate((valid) => {
          if (valid) {
            this.load_set = true
            var _temp_data ={
              year: this.ruleForm_1.set_0,
              month1:this.ruleForm_1.set_1,
              month2: this.ruleForm_1.set_2,
              month3: this.ruleForm_1.set_3,
              month4:this.ruleForm_1.set_4,
              month5: this.ruleForm_1.set_5,
              month6: this.ruleForm_1.set_6,
              month7: this.ruleForm_1.set_7,
              month8: this.ruleForm_1.set_8,
              month9: this.ruleForm_1.set_9,
              month10: this.ruleForm_1.set_10,
              month11: this.ruleForm_1.set_11,
              month12: this.ruleForm_1.set_12
            }
            _temp_data = JSON.stringify(_temp_data);
            ajax_list.thermalPowerPriceCreateService(_temp_data, res => {  //火电价格创建
              // this.$emit('login-success', res);
            }, (res) => {
              if(res.status == 200){
                this.linkAlerts = false
                this.$message({
                  message: '设置成功',
                  type: 'success'
                });
                this.par_form.find_area = "{'year':" + this.finds.find_1 +  "}"
                this.find_list(this.par_form.find_area)
              }
            });
            this.load_set = false
            return true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      find_year(data){

        if (this.$refs["ruleForm_1"]!==undefined) {
          this.$refs["ruleForm_1"].resetFields();
        }
        var _temp_body = ""
        var _temp_data = "{year:"+ data +"}"
        ajax_list.thermalPowerPriceDetailService (_temp_data, res => {  //
          // this.$emit('login-success', res);
        }, (res) => {
          if(res.status == 200){
            _temp_body = res.body.price
            this.ruleForm_1.set_0 = parseFloat(_temp_body.year)
            this.ruleForm_1.set_1 = _temp_body.month1
            this.ruleForm_1.set_2 = _temp_body.month2
            this.ruleForm_1.set_3 = _temp_body.month3
            this.ruleForm_1.set_4 = _temp_body.month4
            this.ruleForm_1.set_5 = _temp_body.month5
            this.ruleForm_1.set_6 = _temp_body.month6
            this.ruleForm_1.set_7 = _temp_body.month7
            this.ruleForm_1.set_8 = _temp_body.month8
            this.ruleForm_1.set_9 = _temp_body.month9
            this.ruleForm_1.set_10 = _temp_body.month10
            this.ruleForm_1.set_11 = _temp_body.month11
            this.ruleForm_1.set_12 = _temp_body.month12

          }
        });
      },
      set_hd(){  //火电价格查询
        if (this.$refs["ruleForm_1"]!==undefined) {
          this.$refs["ruleForm_1"].resetFields();
        }
          var _temp_body = ""
        var _temp_data = "{year:"+ this.finds.find_1 +"}"
        ajax_list.thermalPowerPriceDetailService (_temp_data, res => {  //
          // this.$emit('login-success', res);
        }, (res) => {
          if(res.status == 200){
            _temp_body = res.body.price
            this.ruleForm_1.set_0 = parseFloat(_temp_body.year)
            this.ruleForm_1.set_1 = _temp_body.month1
            this.ruleForm_1.set_2 = _temp_body.month2
            this.ruleForm_1.set_3 = _temp_body.month3
            this.ruleForm_1.set_4 = _temp_body.month4
            this.ruleForm_1.set_5 = _temp_body.month5
            this.ruleForm_1.set_6 = _temp_body.month6
            this.ruleForm_1.set_7 = _temp_body.month7
            this.ruleForm_1.set_8 = _temp_body.month8
            this.ruleForm_1.set_9 = _temp_body.month9
            this.ruleForm_1.set_10 = _temp_body.month10
            this.ruleForm_1.set_11 = _temp_body.month11
            this.ruleForm_1.set_12 = _temp_body.month12

          }
        });

        this.linkAlerts = true
      },
      add_user(){
        if (this.$refs["ruleForm"]!==undefined) {
          this.$refs["ruleForm"].resetFields();
        }
        this.linkAlert = true
        var date=new Date;
        this.ruleForm.vue_0 = date.getFullYear()
      },
      import_list(){
        var _temp_Export = "{'year':'"+ this.finds.find_1 +"','customerName':'"+ this.finds.find_2 +"','provinceCode':'" + this.finds.find_3 +"','cityCode':'"+ this.finds.find_4 +"'}"
console.log(_temp_Export)
        ajax_list.customerContractQuotedExportService(_temp_Export, res => {  //导出
          this.$emit('login-success', res);
        }, (res) => {

        });
      },
    },
//生命周期钩子函数，进入页面显示之前获取数据到store
    created () {
      var date=new Date;
      this.finds.find_1 = date.getFullYear()
      this.ruleForm.vue_0 = date.getFullYear()
      this.ruleForm_1.set_0 = date.getFullYear()
      this.menuList = JSON.parse(localStorage.getItem('menuList'));
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

      ajax_list.constatsService(this.par_form.area, res => {  //常量查询（年份）
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
    margin: 20px auto;
    min-height: calc(100vh - 352px);
    background-color: white;
  }
  .list_table{
    width: 100%;
    margin:0px auto;
    margin-top: 10px;
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


  .add_set .set_left{
    width: 48%;
    float: left;
  }
  .add_set .set_right{
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

  .add_set .one_con{
    width: 90%;
    overflow: auto;
  }
</style>
