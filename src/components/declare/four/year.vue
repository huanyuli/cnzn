<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <span></span>
        <p>电量池年度交易</p>
      </div>
      <div class="ma_content">
        <div class="ma_screen">
          <div class="div_row">
            <div class="ma_ui_div">
              <p>年份：</p>
              <div class="input_ss">
                <el-select style="width: 100%;" size="medium" v-model="finds.find_1" placeholder="">
                  <el-option
                    v-for="item in form_1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div v-if="this.no_find == 0" class="ma_ui_div">
              <p>数据来源：</p>
              <div class="input_ss">
                <el-select style="width: 100%;" size="medium" v-model="finds.find_4" placeholder="">
                  <el-option
                    v-for="item in form_4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div v-if="this.no_find == 2" class="ma_ui_div" style="padding-bottom: 10px">
              <el-button size="small" type="primary" @click="find_screen">查询</el-button>
              <el-button size="small" @click="empty_find">清空</el-button>
            </div>
          </div>
          <div class="div_row">
            <div v-if="this.no_find == 0" class="ma_ui_div">
              <p>客户名称：</p>
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
            <div v-if="this.no_find == 1" class="ma_ui_div">
              <p>电厂名称：</p>
              <div class="input_ss">
                <el-input  v-model="finds.find_2" placeholder="请输入关键词"></el-input>
              </div>
            </div>
            <div v-if="this.no_find != 2" class="ma_ui_div" style="padding-bottom: 10px">
              <el-button size="small" type="primary" @click="find_screen">查询</el-button>
              <el-button size="small" @click="empty_find">清空</el-button>
            </div>
          </div>

        </div>
        <div class="ma_btn">
          <el-button size="small" v-if="this.no_find == 1" @click="set_add" type="primary" >添加已购电</el-button>
          <!--<el-button size="small" v-if="this.no_find == 1" type="primary" >导入数据</el-button>-->
          <!--<el-button size="small" type="primary" >导出列表</el-button>-->
        </div>
        <div class="content_list year_list">
          <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="客户用电情况1" name="first">
              <p class="table_title_s">电量单位：千瓦时（kWh）</p>
              <div class="list_table">
                <el-table
                  :data="tableData"
                  stripe
                  show-summary
                  sum-text="汇总"
                  style="width: 100%;text-align: center">
                  <el-table-column
                    prop="data_0"
                    align="center"
                    width="100"
                    label="用户代码"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_1"
                    align="center"
                    width="180"
                    label="客户名称"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_2"
                    align="center"
                    width="100"
                    label="年份"
                  >
                  </el-table-column>
                  <el-table-column
                    align="center"
                    label="合同总电量"
                  >
                    <el-table-column
                      prop="data_3"
                      width="120"
                      align="center"
                      label="总"
                    >
                      <template slot-scope="scope">
                        <span style="color:#FF9900">{{ scope.row.data_3 }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="data_4"
                      width="120"
                      align="center"
                      label="1月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_5"
                      width="120"
                      align="center"
                      label="2月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_6"
                      width="120"
                      align="center"
                      label="3月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_7"
                      width="120"
                      align="center"
                      label="4月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_8"
                      width="120"
                      align="center"
                      label="5月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_9"
                      width="120"
                      align="center"
                      label="6月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_10"
                      width="120"
                      align="center"
                      label="7月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_11"
                      width="120"
                      align="center"
                      label="8月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_12"
                      width="120"
                      align="center"
                      label="9月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_13"
                      width="120"
                      align="center"
                      label="10月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_14"
                      width="120"
                      align="center"
                      label="11月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_15"
                      width="120"
                      align="center"
                      label="12月"
                    >
                    </el-table-column>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    label="直购电水电"
                  >
                    <el-table-column
                      prop="data_16"
                      width="150"
                      align="center"
                      label="总"
                    >
                      <template slot-scope="scope">
                        <span style="color:#FF9900">{{ scope.row.data_16 }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="data_17"
                      width="120"
                      align="center"
                      label="1月"
                    >

                    </el-table-column>
                    <el-table-column
                      prop="data_18"
                      width="120"
                      align="center"
                      label="2月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_19"
                      width="120"
                      align="center"
                      label="3月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_20"
                      width="120"
                      align="center"
                      label="4月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_21"
                      width="120"
                      align="center"
                      label="5月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_22"
                      width="120"
                      align="center"
                      label="6月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_23"
                      width="120"
                      align="center"
                      label="7月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_24"
                      width="120"
                      align="center"
                      label="8月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_25"
                      width="120"
                      align="center"
                      label="9月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_26"
                      width="120"
                      align="center"
                      label="10月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_27"
                      width="120"
                      align="center"
                      label="11月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_28"
                      width="120"
                      align="center"
                      label="12月"
                    >
                    </el-table-column>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    label="富余电"
                  >

                    <el-table-column
                      prop="data_29"
                      width="120"
                      align="center"
                      label="6月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_30"
                      width="120"
                      align="center"
                      label="7月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_31"
                      width="120"
                      align="center"
                      label="8月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_32"
                      width="120"
                      align="center"
                      label="9月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_33"
                      width="120"
                      align="center"
                      label="10月"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="data_34"
                      width="120"
                      align="center"
                      label="数据来源"
                    >
                    </el-table-column>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="已购电情况" name="second">
              <p class="table_title_s">电量单位：千瓦时（kWh）</p>
              <div class="list_table">
                <el-table
                  :data="tableData_1"
                  stripe
                  show-summary
                  sum-text="汇总"
                  style="width: 100%;text-align: center">
                  <el-table-column
                    prop="data_1"
                    align="center"
                    width="180"
                    label="电厂名称"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_2"
                    align="center"
                    width="100"
                    label="年份"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_3"
                    align="center"
                    width="120"
                    label="合同总电量"
                  >
                    <template slot-scope="scope">
                      <span style="color:#FF9900">{{ scope.row.data_3 }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="data_4"
                    width="120"
                    align="center"
                    label="1月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_5"
                    width="120"
                    align="center"
                    label="2月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_6"
                    width="120"
                    align="center"
                    label="3月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_7"
                    width="120"
                    align="center"
                    label="4月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_8"
                    width="120"
                    align="center"
                    label="5月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_9"
                    width="120"
                    align="center"
                    label="6月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_10"
                    width="120"
                    align="center"
                    label="7月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_11"
                    width="120"
                    align="center"
                    label="8月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_12"
                    width="120"
                    align="center"
                    label="9月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_13"
                    width="120"
                    align="center"
                    label="10月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_14"
                    width="120"
                    align="center"
                    label="11月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_15"
                    width="120"
                    align="center"
                    label="12月"
                  >
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="用电缺口" name="three">
              <p class="table_title_s">电量单位：千瓦时（kWh）</p>
              <div class="list_table">
                <el-table
                  :data="tableData_2"
                  stripe
                  style="width: 100%;text-align: center">
                  <el-table-column
                    prop="data_1"
                    align="center"
                    width="120"
                    label=""
                  >
                  </el-table-column>
                  <!--<el-table-column-->
                    <!--prop="data_2"-->
                    <!--align="center"-->
                    <!--width="100"-->
                    <!--label="年份"-->
                  <!--&gt;-->
                  <!--</el-table-column>-->
                  <el-table-column
                    prop="data_3"
                    align="center"
                    width="120"
                    label="合同总电量"
                  >
                    <template slot-scope="scope">
                      <span style="color:#FF9900">{{ scope.row.data_3 }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="data_4"
                    width="120"
                    align="center"
                    label="1月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_5"
                    width="120"
                    align="center"
                    label="2月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_6"
                    width="120"
                    align="center"
                    label="3月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_7"
                    width="120"
                    align="center"
                    label="4月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_8"
                    width="120"
                    align="center"
                    label="5月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_9"
                    width="120"
                    align="center"
                    label="6月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_10"
                    width="120"
                    align="center"
                    label="7月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_11"
                    width="120"
                    align="center"
                    label="8月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_12"
                    width="120"
                    align="center"
                    label="9月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_13"
                    width="120"
                    align="center"
                    label="10月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_14"
                    width="120"
                    align="center"
                    label="11月"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_15"
                    width="120"
                    align="center"
                    label="12月"
                  >
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <!--<router-view></router-view>-->
    <div class="add_set">
      <el-dialog  title="添加已购电" width="40%"  :visible.sync="linkAlerts">
        <div class='add_div'>
          <div class='add_div_one'>
            <div class='one_con'>
              <el-form :model="ruleForm_1"  :rules="rules_1" ref="ruleForm_1"   label-width="55px" class="demo-ruleForm">
                <el-form-item label="年份"  label-width="80px"  prop="set_0">
                  <el-select style="width: 60%;"  size="medium" v-model="ruleForm_1.set_0" placeholder="请选择">
                    <el-option
                      v-for="item in form_1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item style="width: 65%;"  label-width="80px" label="电厂名称"  prop="set_0s">
                  <el-input  size="medium" v-model="ruleForm_1.set_0s" placeholder=""></el-input>
                </el-form-item>
                <p class="table_title_s">电量单位：千瓦时（kWh）</p>
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
  import ajax_list from '../../../api/declare'

  export default {
    data() {
      return {
        no_find:0,
        linkAlerts:false,
        load_set:false,
        activeName2: 'first',
        tableData:[],
        tableData_1:[],
        tableData_2:[],
        form_1:[],
        form_4:[
          {
            value: 'import',
            label: '导入'
          },
          {
            value: 'contract',
            label: '合同'
          },
        ],
        par_form:{
          find_area:"",
          area:"",
          year_list:{},

          user_list:{
              list:[],
          },
          two_list:{
            list:[],
          },
          three_list:{
            list:[],
          },
        },
        ruleForms:{
          vue_0:""
        },
        rules:{},
        finds:{
            find_1:0,
          find_2:"",
          find_4:"import",

        },

        ruleForm_1:{
          set_0:0,
          set_0s:"",
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
          set_0s:[
            { required: true, message: '请输入电厂名称', trigger: 'blur' },
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
        value9: [],   //客户名称选中的值
        list: [],  //客户名称过滤
        loading: false, //是否正在从远程获取数据
        gd_list:[], //客户名称后台返回数据
        states: [],  //筛选出客户名称数组

      }
    },
// 映射store数据
    computed: {

    },
    methods: {
        set_add(){
          this.linkAlerts = true
          this.$refs["ruleForm_1"].resetFields();
          this.ruleForm_1.set_0 = this.finds.find_1
          this.ruleForm_1.set_0s = ""
          this.ruleForm_1.set_1 = 0
          this.ruleForm_1.set_2 = 0
          this.ruleForm_1.set_3 = 0
          this.ruleForm_1.set_4 = 0
          this.ruleForm_1.set_5 = 0
          this.ruleForm_1.set_6 = 0
          this.ruleForm_1.set_7 = 0
          this.ruleForm_1.set_8 = 0
          this.ruleForm_1.set_9 = 0
          this.ruleForm_1.set_10 = 0
          this.ruleForm_1.set_11 = 0
          this.ruleForm_1.set_12 = 0

        },
      set_bj(){  //设置火电价格
        this.$refs["ruleForm_1"].validate((valid) => {
          if (valid) {
            this.load_set = true
            var _temp_data ={
              year: this.ruleForm_1.set_0,
              powerPlantName:this.ruleForm_1.set_0s,
              monthAmount1:this.ruleForm_1.set_1,
              monthAmount2: this.ruleForm_1.set_2,
              monthAmount3: this.ruleForm_1.set_3,
              monthAmount4:this.ruleForm_1.set_4,
              monthAmount5: this.ruleForm_1.set_5,
              monthAmount6: this.ruleForm_1.set_6,
              monthAmount7: this.ruleForm_1.set_7,
              monthAmount8: this.ruleForm_1.set_8,
              monthAmount9: this.ruleForm_1.set_9,
              monthAmount10: this.ruleForm_1.set_10,
              monthAmount11: this.ruleForm_1.set_11,
              monthAmount12: this.ruleForm_1.set_12
            }
            _temp_data = JSON.stringify(_temp_data);
            ajax_list.poolYearPurchasedPowerCreateService (_temp_data, res => {  //火电价格创建
              // this.$emit('login-success', res);
            }, (res) => {
              if(res.status == 200){
                this.linkAlerts = false
                this.$message({
                  message: '添加成功',
                  type: 'success'
                });
                this.default_list(this.ruleForm_1.set_0)
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
      find_list(data){ //查询列表
        var _temp_year = this.finds.find_1 + "年"
        if(this.no_find == 0){
          ajax_list.poolYearCustomerUsePowerListService(data, res => {  //客户用电情况
            this.$emit('login-success', res);
          }, (res) => {
            this.par_form.user_list = res .body

            if(this.par_form.user_list.list.length != 0){
              this.tableData = []
              var _temp_type = this.tableData;  //客户用电情况
              var _dataSourceType = ""
              $.map(this.par_form.user_list.list,function(data){
                  if(data.dataSourceType == "import"){
                    _dataSourceType ="导入"
                  }else{
                    _dataSourceType ="合同"
                  }
                _temp_type.push({
                  data_0: data.customerCode, //用户代码
                  data_1: data.customerName, //客户名称
                  data_2: _temp_year, //年份
                  data_3:data.totalAmount, //合同总电量-总,
                  data_4: data.totalAmount1,  //1月
                  data_5: data.totalAmount2,
                  data_6: data.totalAmount3,
                  data_7: data.totalAmount4,
                  data_8: data.totalAmount5,
                  data_9: data.totalAmount6,
                  data_10: data.totalAmount7,
                  data_11: data.totalAmount8,
                  data_12: data.totalAmount9,
                  data_13: data.totalAmount10,
                  data_14: data.totalAmount11,
                  data_15: data.totalAmount12,
                  data_16: data.waterAmount, //直购电水电-总
                  data_17: data.waterAmount1,
                  data_18: data.waterAmount2,
                  data_19: data.waterAmount3,
                  data_20: data.waterAmount4,
                  data_21: data.waterAmount5,
                  data_22: data.waterAmount6,
                  data_23: data.waterAmount7,
                  data_24: data.waterAmount8,
                  data_25: data.waterAmount9,
                  data_26: data.waterAmount10,
                  data_27: data.waterAmount11,
                  data_28: data.waterAmount12,
                  data_29: data.surplusAmount6,
                  data_30: data.surplusAmount7,
                  data_31: data.surplusAmount8,
                  data_32: data.surplusAmount9,
                  data_33: data.surplusAmount10,
                  data_34: _dataSourceType,
                });
              });

            }
          });
        }else if(this.no_find == 1){
          ajax_list.poolYearPurchasedPowerListService(data, res => {  //客户已购电情况
            this.$emit('login-success', res);
          }, (res) => {
            this.par_form.two_list = res .body
            this.tableData_1 = []
            if(this.par_form.two_list.list.length != 0){
              var _temp_type_1 = this.tableData_1;  //客户用电情况
              $.map( this.par_form.two_list.list,function(data){
                _temp_type_1.push({
                  data_1: data.powerPlantName, //电厂名称
                  data_2: _temp_year, //年份
                  data_3:data.totalAmount, //合同总电量-总,
                  data_4: data.monthAmount1,  //1月
                  data_5: data.monthAmount2,
                  data_6: data.monthAmount3,
                  data_7: data.monthAmount4,
                  data_8: data.monthAmount5,
                  data_9: data.monthAmount6,
                  data_10: data.monthAmount7,
                  data_11: data.monthAmount8,
                  data_12: data.monthAmount9,
                  data_13: data.monthAmount10,
                  data_14: data.monthAmount11,
                  data_15: data.monthAmount12,
                });
              });
            }
          });
        }else if(this.no_find == 2){
          ajax_list.poolYearCustomerUsePowerGapService(data, res => {  //客户用电缺口
            this.$emit('login-success', res);
          }, (res) => {
            this.par_form.three_list = res .body
            this.tableData_2 = []
            if(this.par_form.three_list != ""){
              this.tableData_2.push({
                  data_1: "缺口", //客户名称
//                  data_2: _temp_year, //年份
                  data_3:this.par_form.three_list.waterAmount, //合同总电量-总,
                  data_4: this.par_form.three_list.waterAmount1,  //1月
                  data_5: this.par_form.three_list.waterAmount2,
                  data_6: this.par_form.three_list.waterAmount3,
                  data_7: this.par_form.three_list.waterAmount4,
                  data_8: this.par_form.three_list.waterAmount5,
                  data_9: this.par_form.three_list.waterAmount6,
                  data_10: this.par_form.three_list.waterAmount7,
                  data_11: this.par_form.three_list.waterAmount8,
                  data_12: this.par_form.three_list.waterAmount9,
                  data_13: this.par_form.three_list.waterAmount10,
                  data_14: this.par_form.three_list.waterAmount11,
                  data_15: this.par_form.three_list.waterAmount12,
                });
            }
          });

        }
      },
      default_list(year){ //默认查询列表
        var _temp_data = "{'year':"+ year +",'dataSourceType':'"+  this.finds.find_4+"}"
        this.find_list(_temp_data)
      },
      find_screen(){ //筛选
        var _temp_data = "{}"
        if(this.no_find  == 0){  //客户用电情况
          _temp_data ="{'year':"+ this.finds.find_1 +",'customerName':'"+  this.value9 +",'dataSourceType':'"+  this.finds.find_4 +"'}"
        }else if(this.no_find  == 1){ //已购电情况
          _temp_data ="{'year':"+ this.finds.find_1 +",'powerPlantName':'"+  this.finds.find_2 +"'}"
        }else if(this.no_find  == 2){ //用电缺口
          _temp_data ="{'year':"+ this.finds.find_1 +"}"
        }
        this.find_list(_temp_data)
      },
      empty_find(){ //清空

      },
      handleClick(tab) {
        this.no_find = tab.index
        var _temp_data = "{}"
        if(tab.index == 0){  //客户用电情况
          _temp_data ="{'year':"+ this.finds.find_1 +",'customerName':'"+  this.value9 +"'}"
        }else if(tab.index == 1){ //已购电情况
          _temp_data ="{'year':"+ this.finds.find_1 +",'powerPlantName':'"+  this.finds.find_2 +"'}"
        }else if(tab.index == 2){ //用电缺口
          _temp_data ="{'year':"+ this.finds.find_1 +"}"
        }
        this.find_list(_temp_data)
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

    },
//生命周期钩子函数，进入页面显示之前获取数据到store
    created () {
      var date=new Date;
      this.finds.find_1 = date.getFullYear()
      this.ruleForm_1.set_0 = date.getFullYear()
      this.default_list(this.finds.find_1)
//      this.par_form.find_area = "{'year':"+ this.finds.find_3 +",'month':"+ this.finds.find_4 +"}"
//      this.find_list(this.par_form.find_area)
      this.par_form.area = "{}"
      ajax_list.constatsService(this.par_form.area, res => {  //获取年份
        this.$emit('login-success', res);
      }, (res) => {
        this.par_form.year_list = res.body.YearList;
        var _temp_one_1 = this.form_1;
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
    margin-bottom: 10px;
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
    width: calc(100% - 10px);
    margin: 0 auto;
    min-height: calc(100vh - 352px);
    background-color: white;
  }
  .table_title_s{
    padding: 0px;
    width: 86%;
    margin: 20px auto;
    text-align: right;
    font-weight:400;
    color:rgba(112,112,112,1);
    font-size: 12px;
  }
  .list_table{
    width: 98%;
    margin:0px auto;
    margin-top: 20px;
    margin-bottom: 10px;
    border: 1px solid rgba(234,234,234,1);
  }
  .list_module{
    width: calc(100%);
    margin: 0px auto;
    /*padding-bottom:10px;*/
  }
  .list_module_title{
    width: 100%;
    height: 70px;
    line-height: 50px;
    text-align:left;

    /*background-color: #fcfcfc;*/
    /*border-bottom: 1px solid rgba(240,241,242,1);*/
  }
  .title_ico_div{
    width: 860px;
    /*width: 300px;*/
    margin:0 auto;
    padding-top: 10px;
    margin-bottom: 5px;
    position: relative;

  }

  .ico_div{
    width: 100%;
    float: left;
    text-align: center;
  }
  .text_div{
    width: 100%;
  }
  .text_div span{
    /*width: 70px;*/
    height: 30px;
    line-height: 30px;
    float: left;
    display: block;
    color: #333;
    font-size: 12px;
    text-align: center;
    margin-top: 2px;
  }
  .text_div span:nth-child(1){
    margin-right: 98px;
    margin-left: -16px;
  }
  .text_div span:nth-child(2){
    margin-right: 68px;
  }
  .text_div span:nth-child(3){
    margin-right: 15px;
  }
  .text_div span:nth-child(4){
    margin-right: 35px;
  }


  .ico_div div{float: left}
  .ico{
    width: 20px;
    height: 20px;
    line-height: 22px;
    margin: 0 auto;
    border-radius: 50%;
    font-size: 14px;
    background-color: #8DBADE;
    border: 2px solid #8DBADE;
    text-align: center;
    color: #fff;
  }
  .ico_true{
    background-color:#fff ;
    border: 2px solid #E5E5E5;
    color:#E5E5E5 ;
  }
  .ico_div span{

  }
  .ico_text_true{
    color:#CDCDCD!important;
  }
  .ico_border{
    width: 170px;
    height: 4px;
    margin-top: 10px;
    background-color: rgba(234,234,234,1);
  }

  .list_con{
    width: calc(100% - 0px);
    margin: 0 auto;
    height: auto;
    overflow: auto;
    padding: 26px 0;
  }
  .list_con_input{
    width:36%;
    padding:0 5%;
    float: left;
    height: 36px;
    margin-top: 15px;
  }

  .list_con_row{
    width: 82%;
    float: left;
    height: 36px;
    margin-top: 20px;
    padding: 0 5%;
  }
  .list_con_input p,.list_con_row p{
    margin: 0px;
    padding: 0px;
    display: inline-block;
    float: left;
    text-align: right;
    width: 146px;
    font-size:14px;
    color:rgba(120,121,123,1);
    line-height: 36px;
    margin-right: 10px;
  }
  .list_con_input p span,.list_con_row p span{
    color: red;
    font-size: 14px;
  }
  .list_con_input .input_div{
    float: left;
    max-width: 280px;
    width: 50%;
    height: 36px;
  }
  .list_con_row .input_div{
    float: left;
    /*max-width: 280px;*/
    width: 50%;
    height: 36px;
  }
  .el-select{
    width: 100%;
  }
  .input_div_two{
    width:48%;
    height: auto;
    overflow: auto;
  }
  .input_div_two:nth-child(1){
    float: left;
  }
  .input_div_two:nth-child(2){
    float: right;
  }
  .el-input-group__append {
    background-color: #fff;
  }
  .dx_se div{
    margin-left: 0px!important;
  }

  .list_module_btn{
    margin: 0 auto;
    text-align: right;
    padding-top: 20px;
    padding-right: 20px;
  }
  .btn_aff{
    width: 140px;
  }

  .table_hint{
    width: 90%;
    margin: 0 auto;
    height:20px;
    font-size:12px;
    font-weight:400;
    color:rgba(176,176,176,1);
    line-height:20px;
    text-align: right;
    /*margin-top: 30px;*/
    /*margin-bottom: 10px;*/
  }
  .table{
    width: 80%;
    margin: 0 auto;
    border:1px solid rgba(234,234,234,1)
  }
  .table_tr{
    width: 100%;
    height: 50px;
  }

  .table .table_tr:nth-child(2n+1){
    background:rgba(249,249,249,1);
  }
  .table_title{
    background:rgba(252,252,252,1)!important;
    border-bottom:1px solid rgba(234,234,234,1)
  }

  .two_p p{
    height: 25px;
    line-height: 25px;
  }

  .table_td_w span{
    color: red;
    font-size: 12px;
  }

  /*第三步骤的table宽度*/
  .three_table .table_tr .table_td{
    width: calc(90% / 3);
    line-height: 50px;
    float: left;
  }
  .three_table  .table_tr .table_td:nth-child(1){
    width: calc(90% / 3);
  }
  .three_table .table_title .table_td .table_td_w{
    width: 80%;
  }
  .three_table  .table_td .table_td_w{
    width: 80%;
    margin: 0 auto;
    height: 32px;
    font-size:14px;
    font-weight:400;
    text-align: center;
    color:rgba(96,96,96,1);
  }

  .table_td_color{
    font-size:14px!important;
    color:rgba(0,119,221,1)!important;
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

  /**  alert_list 弹窗 **/
  .alert_list   .add_div_one{
    width: 100%;
    min-height: 63vh;
    /*background:rgba(73,138,243,1);*/
  }

  .alert_list  .list_table{
    width: 98%;
    margin:0px auto;
    margin-top: 20px;
    margin-bottom: 10px;
    border: 1px solid rgba(234,234,234,1);
  }

  .alert_list .one_con[data-v-020abec6] {
    width: 90%;
    margin: 0px auto;
    margin-top: 30px;
  }


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

  .alert_list .el-dialog{
    margin-top: 5vh!important;
    height: calc(100% - 10vh);
  }

  .three_table .el-input__inner{
    text-align: center;
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



    .year_list .el-table{
      overflow: auto;
    }
    .year_list .el-table__body-wrapper,
    .year_list .el-table__header-wrapper,
    .year_list .el-table__footer-wrapper{
      overflow:visible;
    }
  .year_list .el-table::after{
      position: relative !important;
    }

  .add_set .one_con{
    width: 90%;
    overflow: auto;
  }
</style>
