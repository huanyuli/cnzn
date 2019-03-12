<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <span></span>
        <p>每月计划用电量</p>
      </div>
      <div class="ma_content">
        <div class="ma_screen">
          <div class="div_row">
            <div class="ma_ui_div">
              <p>年份：</p>
              <div class="input_ss">
                <el-select style="width: 49%;"  size="medium" v-model="finds.find_1" placeholder="">
                  <el-option
                    v-for="item in form_1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-select style="width: 49%;"  size="medium" v-model="finds.find_2" placeholder="">
                  <el-option
                    v-for="item in form_2"
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
          <el-button size="small" v-if="show_map(16) == 16" @click="add_alert" type="primary" >冻结数据</el-button>
          <el-button size="small" type="primary" @click="import_list" >导出列表</el-button>
        </div>
        <div v-if="this.no_val == 1" class="content_list page_height">
          <p class="table_title">电量单位：千瓦时（kWh）</p>
          <div v-if="this.no_fy == 0" class="list_table">
            <el-table
              :data="tableData"
              key="0"
              stripe
              :summary-method="getSummaries"
              show-summary
              style="width: 100%;text-align: center"
            >
              <el-table-column
                prop="data_0"
                align="center"
                width="80"
                label="用户代码"
              >
              </el-table-column>
              <el-table-column
                prop="data_1"
                align="center"
                width="130"
                label="客户名称"
              >
              </el-table-column>
              <el-table-column
                prop="data_2"
                align="center"
                label="当月合同直购电"
              >
              </el-table-column>
              <el-table-column
                align="center"
                label="预计当月用电量"
              >
                <el-table-column
                  prop="data_4"
                  align="center"

                  label="第一次">
                  <template slot-scope="scope"  >
                    <el-input v-if="scope.row.data_lock_1 == 'lock' || scope.row.data_14s != null" :class="{input_color:scope.row.data_Source_1 == 'COPY'}"  :disabled="true"  v-model.number="scope.row.data_4" placeholder=""></el-input>
                    <el-input v-else :class="{input_color:scope.row.data_Source_1 == 'COPY'}"  v-model.number="scope.row.data_4" placeholder=""></el-input>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column
                align="center"
                label="预计当月用电量"
              >
                <el-table-column
                  prop="data_6"
                  align="center"

                  label="第二次">
                  <template slot-scope="scope">
                    <el-input v-if="scope.row.data_lock_2 == 'lock' || scope.row.data_14s != null"  :class="{input_color:scope.row.data_Source_2 == 'COPY'}" v-model.number="scope.row.data_6" :disabled="true"  placeholder=""></el-input>
                    <el-input v-else :class="{input_color:scope.row.data_Source_2 == 'COPY'}" v-model.number="scope.row.data_6" placeholder=""></el-input>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column
                align="center"
                label="预计当月用电量"
              >
                <el-table-column
                  prop="data_8"
                  align="center"

                  label="第三次">
                  <template slot-scope="scope">
                    <el-input v-if="scope.row.data_lock_3 == 'lock' || scope.row.data_14s != null"  :class="{input_color:scope.row.data_Source_3 == 'COPY'}" v-model.number="scope.row.data_8" :disabled="true"  placeholder=""></el-input>
                    <el-input v-else :class="{input_color:scope.row.data_Source_3 == 'COPY'}" v-model.number="scope.row.data_8" placeholder=""></el-input>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column
                align="center"
                label="预计当月用电量"
              >
                <el-table-column
                  prop="data_10"
                  align="center"

                  label="第四次">
                  <template slot-scope="scope">
                    <el-input v-if="scope.row.data_lock_4 == 'lock' || scope.row.data_14s != null"  :class="{input_color:scope.row.data_Source_4 == 'COPY'}" v-model.number="scope.row.data_10" :disabled="true"  placeholder=""></el-input>
                    <el-input v-else :class="{input_color:scope.row.data_Source_4 == 'COPY'}" v-model.number="scope.row.data_10" placeholder=""></el-input>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column
                align="center"
                label="预计当月用电量"
              >
                <el-table-column
                  prop="data_12"
                  align="center"

                  label="第五次">
                  <template slot-scope="scope">
                    <el-input v-if="scope.row.data_lock_5 == 'lock' || scope.row.data_14s != null"  :class="{input_color:scope.row.data_Source_5 == 'COPY'}" v-model.number="scope.row.data_12" :disabled="true"  placeholder=""></el-input>
                    <el-input v-else :class="{input_color:scope.row.data_Source_5 == 'COPY'}" v-model.number="scope.row.data_12" placeholder=""></el-input>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column
                prop="data_14"
                align="center"

                label="实际用电量"
              >
                <template slot-scope="scope">
                  <el-input v-if="scope.row.data_14s != null" v-model.number="scope.row.data_14" :disabled="true" placeholder=""></el-input>
                  <el-input v-else @change="input_change(scope.$index,scope.row.data_14)"  v-model.number="scope.row.data_14" placeholder=""></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="data_16"

                align="center"
                label="备注"
              >
                <template slot-scope="scope">
                  <el-input v-if="scope.row.data_14s != null" :disabled="true" v-model="scope.row.data_16" placeholder=""></el-input>
                  <el-input v-else v-model="scope.row.data_16" placeholder=""></el-input>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div v-if="this.no_fy == 1" class="list_table">
            <el-table
              :data="tableData"
              key="1"
              stripe
              :summary-method="getSummaries"
              show-summary
              style="width: 100%;text-align: center">
              <el-table-column
                prop="data_0"
                align="center"
                width="80"
                label="用户代码"
              >
              </el-table-column>
              <el-table-column
                prop="data_1"
                align="center"
                width="140"
                label="客户名称"
              >
              </el-table-column>
              <el-table-column
                prop="data_2"
                align="center"
                width="120"
                label="当月合同直购电"
              >
              </el-table-column>
              <el-table-column
                prop="data_3"
                align="center"
                width="120"
                label="当月富余电基数"
              >
              </el-table-column>
              <el-table-column
                align="center"
                label="预计当月用电量"
              >
                <el-table-column
                  prop="data_4"
                  align="center"
                  width="120"
                  label="第一次">
                  <template slot-scope="scope"  >
                    <el-input v-if="scope.row.data_lock_1 == 'lock' || scope.row.data_14s != null" :class="{input_color:scope.row.data_Source_1 == 'COPY'}"  :disabled="true"  v-model.number="scope.row.data_4" placeholder=""></el-input>
                    <el-input v-else="" :class="{input_color:scope.row.data_Source_1 == 'COPY'}"  v-model.number="scope.row.data_4" placeholder=""></el-input>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column
                align="center"
                label="其中富余电"
              >
                <el-table-column
                  align="center"
                  width="120"
                  prop="data_5"
                  label="第一次">
                  <template slot-scope="scope">
                    <el-input v-if="scope.row.data_lock_1 == 'lock' || scope.row.data_14s != null"  :class="{input_color:scope.row.data_Source_1 == 'COPY'}" v-model.number="scope.row.data_5" :disabled="true"  placeholder=""></el-input>
                    <el-input v-else="" :class="{input_color:scope.row.data_Source_1 == 'COPY'}" v-model.number="scope.row.data_5" placeholder=""></el-input>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column
                align="center"
                label="预计当月用电量"
              >
                <el-table-column
                  prop="data_6"
                  align="center"
                  width="120"
                  label="第二次">
                  <template slot-scope="scope">
                    <el-input v-if="scope.row.data_lock_2 == 'lock' || scope.row.data_14s != null"  :class="{input_color:scope.row.data_Source_2 == 'COPY'}" v-model.number="scope.row.data_6" :disabled="true"  placeholder=""></el-input>
                    <el-input v-else="" :class="{input_color:scope.row.data_Source_2 == 'COPY'}" v-model.number="scope.row.data_6" placeholder=""></el-input>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column
                align="center"
                label="其中富余电"
              >
                <el-table-column
                  prop="data_7"
                  align="center"
                  width="120"
                  label="第二次">
                  <template slot-scope="scope">
                    <el-input v-if="scope.row.data_lock_2 == 'lock' || scope.row.data_14s != null"  :class="{input_color:scope.row.data_Source_2 == 'COPY'}" v-model.number="scope.row.data_7" :disabled="true"  placeholder=""></el-input>
                    <el-input v-else="" :class="{input_color:scope.row.data_Source_2 == 'COPY'}" v-model.number="scope.row.data_7" placeholder=""></el-input>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column
                align="center"
                label="预计当月用电量"
              >
                <el-table-column
                  prop="data_8"
                  align="center"
                  width="120"
                  label="第三次">
                  <template slot-scope="scope">
                    <el-input v-if="scope.row.data_lock_3 == 'lock' || scope.row.data_14s != null"  :class="{input_color:scope.row.data_Source_3 == 'COPY'}" v-model.number="scope.row.data_8" :disabled="true"  placeholder=""></el-input>
                    <el-input v-else="" :class="{input_color:scope.row.data_Source_3 == 'COPY'}" v-model.number="scope.row.data_8" placeholder=""></el-input>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column
                align="center"
                label="其中富余电"
              >
                <el-table-column
                  align="center"
                  width="120"
                  prop="data_9"
                  label="第三次">
                  <template slot-scope="scope">
                    <el-input v-if="scope.row.data_lock_3 == 'lock' || scope.row.data_14s != null"  :class="{input_color:scope.row.data_Source_3 == 'COPY'}" v-model.number="scope.row.data_9" :disabled="true"  placeholder=""></el-input>
                    <el-input v-else="" :class="{input_color:scope.row.data_Source_3 == 'COPY'}" v-model.number="scope.row.data_9" placeholder=""></el-input>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column
                align="center"
                label="预计当月用电量"
              >
                <el-table-column
                  width="120"
                  prop="data_10"
                  align="center"
                  label="第四次">
                  <template slot-scope="scope">
                    <el-input v-if="scope.row.data_lock_4 == 'lock' || scope.row.data_14s != null"  :class="{input_color:scope.row.data_Source_4 == 'COPY'}" v-model.number="scope.row.data_10" :disabled="true"  placeholder=""></el-input>
                    <el-input v-else="" :class="{input_color:scope.row.data_Source_4 == 'COPY'}" v-model.number="scope.row.data_10" placeholder=""></el-input>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column
                align="center"
                label="其中富余电"
              >
                <el-table-column
                  prop="data_11"
                  align="center"
                  width="120"
                  label="第四次">
                  <template slot-scope="scope">
                    <el-input v-if="scope.row.data_lock_4 == 'lock' || scope.row.data_14s != null"  :class="{input_color:scope.row.data_Source_4 == 'COPY'}" v-model.number="scope.row.data_11" :disabled="true"  placeholder=""></el-input>
                    <el-input v-else="" :class="{input_color:scope.row.data_Source_4 == 'COPY'}" v-model.number="scope.row.data_11" placeholder=""></el-input>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column
                align="center"
                label="预计当月用电量"
              >
                <el-table-column
                  prop="data_12"
                  align="center"
                  width="120"
                  label="第五次">
                  <template slot-scope="scope">
                    <el-input v-if="scope.row.data_lock_5 == 'lock' || scope.row.data_14s != null"  :class="{input_color:scope.row.data_Source_5 == 'COPY'}" v-model.number="scope.row.data_12" :disabled="true"  placeholder=""></el-input>
                    <el-input v-else="" :class="{input_color:scope.row.data_Source_5 == 'COPY'}" v-model.number="scope.row.data_12" placeholder=""></el-input>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column
                align="center"
                label="其中富余电"
              >
                <el-table-column
                  align="center"
                  width="120"
                  prop="data_13"
                  label="第五次">
                  <template slot-scope="scope">
                    <el-input v-if="scope.row.data_lock_5 == 'lock' || scope.row.data_14s != null"  :class="{input_color:scope.row.data_Source_5 == 'COPY'}" v-model.number="scope.row.data_13" :disabled="true"  placeholder=""></el-input>
                    <el-input v-else="" :class="{input_color:scope.row.data_Source_5 == 'COPY'}" v-model.number="scope.row.data_13" placeholder=""></el-input>
                  </template>
                </el-table-column>
              </el-table-column>

              <el-table-column
                prop="data_14"
                align="center"
                width="120"
                label="实际用电量"
              >
                <template slot-scope="scope">
                  <el-input v-if=" scope.row.data_14s != null" :disabled="true" v-model.number="scope.row.data_14" placeholder=""></el-input>
                  <el-input v-else="" @change="input_change"  v-model.number="scope.row.data_14" placeholder=""></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="data_15"
                align="center"
                width="120"
                label="其中富余电"
              >
                <template slot-scope="scope">
                  <el-input v-if=" scope.row.data_14s != null" :disabled="true" v-model.number="scope.row.data_15" placeholder=""></el-input>
                  <el-input v-else="" v-model.number="scope.row.data_15" placeholder=""></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="data_16"
                align="center"
                width="150"
                label="备注"
              >
                <template slot-scope="scope">
                  <el-input v-if=" scope.row.data_14 != null" :disabled="true" v-model="scope.row.data_16" placeholder=""></el-input>
                  <el-input v-else="" v-model="scope.row.data_16" placeholder=""></el-input>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div class="ma_btn_S">
            <el-button style="float: right;margin-right:30px" @click="submits" size="small" type="primary" >保 存</el-button>
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
    <div class="add_alert">
      <el-dialog  title="冻结数据" width="30%"  :visible.sync="linkAlert">
        <div class='add_div'>
          <div class='add_div_one'>
            <div class='one_con'>
              <el-form :model="ruleForm"  :rules="rules" ref="ruleForm"   label-width="100px" class="demo-ruleForm">
                <el-form-item label="请选择数据"  prop="vue_0">
                  <el-select style="width: 100%;"  size="medium" v-model="ruleForm.vue_0" placeholder="请选择">
                    <el-option
                      v-for="item in form_alert"
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
            <div class='cont_btn' ><el-button @click="add_bj"  type='primary'>确认</el-button></div>
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
        no_val:1,
        no_fy:0,
        linkAlert:false,
        form_1:[],
        menuList:[],
        count:0,
        limit:10,  //每页显示条目个数
        page:1,  //当前页
        no_sj:[], //是否输入实际用电量
        //月份
        form_2:[
          {
            value: 1,
            label: '1月',
          },
          {
            value: 2,
            label: '2月',
          },
          {
            value: 3,
            label: '3月',
          }
          ,
          {
            value: 4,
            label: '4月',
          }
          ,
          {
            value: 5,
            label: '5月',
          },
          {
            value: 6,
            label: '6月',
          },
          {
            value: 7,
            label: '7月',
          },
          {
            value: 8,
            label: '8月',
          },
          {
            value: 9,
            label: '9月',
          },
          {
            value: 10,
            label: '10月',
          },
          {
            value: 11,
            label: '11月',
          },
          {
            value: 12,
            label: '12月',
          }
        ],
        finds:{
          find_1:2019,
          find_2:1,
        },
        par_form:{
            area:"",
          find_area:"",  //查询列表参数
          find_lists:{
                list:[]
          }, //查询列表获取参数
          year_list:{}  //年份列表
        },
        ruleForm:{
          vue_0:"1",
        },
        rules:{
            vue_0:[
              { required: true, message: '请选择数据', trigger: 'change' },
            ]
        },
        form_alert:[
          {
            value: '1',
            label: '第一次',
          },
          {
            value: '2',
            label: '第二次',
          },  {
            value: '3',
            label: '第三次',
          },  {
            value: '4',
            label: '第四次',
          },  {
            value: '5',
            label: '第五次',
          },
        ],
        tableData:[]
      }
    },
// 映射store数据
    computed: {

    },
    methods: {
      input_change(index,value){  //判断当前输入的实际用电量下标和值 （true为有数据，false为没有输入数据）
         if(value != ""){
           this.no_sj[index] = true
         }else{
           this.no_sj[index] = false
         }
      },
      current_change(val){
        this.page = val
        this.par_form.find_area = "{'year':"+ this.finds.find_1 +",'page':'"+ this.page +"','limit':'"+ this.limit +"','month':"+ this.finds.find_2 +"}"
        this.find_list(this.par_form.find_area)
      },
      add_alert(){
        if (this.$refs["ruleForm"]!==undefined) {
          this.$refs["ruleForm"].resetFields();
        }
        this.linkAlert = true
      },
      import_list(){
        var _temp_Export = "{'year':"+ this.finds.find_1 +",'month':"+ this.finds.find_2 +"}"
        ajax_list.customerMonthPlanExportService(_temp_Export, res => {  //导出
          this.$emit('login-success', res);
        }, (res) => {

        });
      },
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
      handleClick(obj){
        //  console.log(this.tableData)
      },
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
          } else {
            sums[index] = ' ';
          }
        });

        return sums;
      },
      add_bj(){ //冻结数据

        var _temp_lock = "{'year':'"+ this.tableData[0].data_year +"','month':'"+ this.tableData[0].data_month +"','number':'"+ this.ruleForm.vue_0 +"'}"
        ajax_list.customerMonthPlanLockService(_temp_lock, res => {  //保存
          this.$emit('login-success', res);
        }, (res) => {
          if(res.status == 200){
            this.linkAlert = false
            this.par_form.find_area = "{'year':"+ this.tableData[0].data_year +",'month':"+ this.tableData[0].data_month +",'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
            this.find_list(this.par_form.find_area)
            this.$message({
              message: '保存成功',
              type: 'success'
            });

          }
        });
      },
      find_list(data){ //查询列表

        ajax_list.customerMonthPlanListService(data, res => {  //name
          this.$emit('login-success', res);
        }, (res) => {
            this.find_lists = res.body
          this.tableData = []
          this.no_sj = []
          this.count = this.find_lists.count
          if(this.find_lists.list  != [] && this.find_lists.list != "" && this.find_lists.list != null){
                var _month = this.find_lists.list[0].month
              if(_month == 6 || _month == 7 || _month == 8 || _month == 9 || _month == 10){
                this.no_fy = 1
              }else{
                this.no_fy = 0
              }
            var _temp_type = this.tableData;
            $.map( this.find_lists.list,function(data){
              _temp_type.push({
                data_id:data.id,
                data_year:data.year,
                data_month:data.month,
                data_0: data.customerCode, //用户代码
                data_1: data.customerName, //客户名称
                data_2: data.contractPowerAmount, //当月合同直购电电量,
                data_3:data.surplusPowerBase, //当月富余电基数
                data_lock_1:data.lockStatus1, //"第一次 锁定状态（值为'lock'表示冻结）",
                data_Source_1:data.dataSource1, //"第一次 数据来源(值为'INPUT'表示用户输入,为'COPY'表示复制上一次数据)",
                data_4: data.usePowerAmount1,  //"第一次 预计当月用电量",
                data_5: data.surplusPower1, //"第一次 其中富余电

                data_lock_2:data.lockStatus2,
                data_Source_2:data.dataSource2,
                data_6: data.usePowerAmount2,
                data_7: data.surplusPower2,

                data_lock_3:data.lockStatus3,
                data_Source_3:data.dataSource3,
                data_8: data.usePowerAmount3,
                data_9: data.surplusPower3,

                data_lock_4:data.lockStatus4,
                data_Source_4:data.dataSource4,
                data_10: data.usePowerAmount4,
                data_11: data.surplusPower4,

                data_lock_5:data.lockStatus5,
                data_Source_5:data.dataSource5,
                data_12: data.usePowerAmount5,
                data_13: data.surplusPower5,

                data_14: data.actualUsePowerAmount, //实际用电量
                data_14s: data.actualUsePowerAmount, //实际用电量
                data_15: data.actualSurplusPower, //实际其中富余电
                data_16: data.remark, //备注

              });
            });
            this.finds.find_1 = this.tableData[0].data_year
            this.finds.find_2 = this.tableData[0].data_month

          }

        });
      },
      find_screen(){ //筛选
        this.page = 1
        this.par_form.find_area = "{'year':"+ this.finds.find_1 +",'month':"+ this.finds.find_2 +",'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
        this.find_list(this.par_form.find_area)
      },
      submits(){
          var _temp_no_sj = false  //循环判断所有数据的实际用电量是否被输入（有一个数据为true，则 _temp_no_sj 为true ）
        $.map(this.no_sj,function(value){
         if(value){
           _temp_no_sj = true
         }
        });
          if(_temp_no_sj){  //已输入实际用电量，提示是否保存
            this.$confirm('已输入实际用电量，是否确认保存?' +
              '保存后，该客户的本月所有数据不可修改', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              var _temp_table = {
                list:[]
              }
              $.map(this.tableData,function(data){
                _temp_table.list.push({
                  id:data.data_id,
                  usePowerAmount1:data.data_4,
                  surplusPower1:data.data_5,
                  usePowerAmount2:data.data_6,
                  surplusPower2:data.data_7,
                  usePowerAmount3:data.data_8,
                  surplusPower3:data.data_9,
                  usePowerAmount4:data.data_10,
                  surplusPower4:data.data_11,
                  usePowerAmount5:data.data_12,
                  surplusPower5:data.data_13,
                  actualUsePowerAmount:data.data_14,
                  actualSurplusPower:data.data_15,
                  remark:data.data_16,
                });
              });
              //   console.log(_temp_table)
              _temp_table = JSON.stringify(_temp_table);

              ajax_list.customerMonthPlanSaveService(_temp_table, res => {  //保存
                this.$emit('login-success', res);
              }, (res) => {
                if(res.status == 200){
                  this.$message({
                    message: '保存成功',
                    type: 'success'
                  });
                }
              });

              this.par_form.find_area = "{'year':"+ this.finds.find_1 +",'month':"+ this.finds.find_2 +",'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
              this.find_list(this.par_form.find_area)
            }).catch(() => {

            });
          }else{ //没有输入实际用电量，直接保存

            var _temp_table = {
              list:[]
            }
            $.map( this.tableData,function(data){
              _temp_table.list.push({
                id:data.data_id,
                usePowerAmount1:data.data_4,
                surplusPower1:data.data_5,
                usePowerAmount2:data.data_6,
                surplusPower2:data.data_7,
                usePowerAmount3:data.data_8,
                surplusPower3:data.data_9,
                usePowerAmount4:data.data_10,
                surplusPower4:data.data_11,
                usePowerAmount5:data.data_12,
                surplusPower5:data.data_13,
                actualUsePowerAmount:data.data_14,
                actualSurplusPower:data.data_15,
                remark:data.data_16,
              });
            });
            //   console.log(_temp_table)
            _temp_table = JSON.stringify(_temp_table);

            ajax_list.customerMonthPlanSaveService(_temp_table, res => {  //保存
              this.$emit('login-success', res);
            }, (res) => {
              if(res.status == 200){
                this.$message({
                  message: '保存成功',
                  type: 'success'
                });
              }
            });

            this.par_form.find_area = "{'year':"+ this.finds.find_1 +",'month':"+ this.finds.find_2 +",'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
            this.find_list(this.par_form.find_area)
          }



      },
      empty_find(){ //清空
        this.page = 1
        var date=new Date;
        this.finds.find_1 = date.getFullYear()
        this.finds.find_2 = date.getMonth() + 1
        this.par_form.find_area = "{'year':"+ this.finds.find_1 +",'month':"+ this.finds.find_2 +",'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
        this.find_list(this.par_form.find_area)
      },
    },
//生命周期钩子函数，进入页面显示之前获取数据到store
    created () {
      this.menuList = JSON.parse(localStorage.getItem('menuList'));
      var date=new Date;
      this.finds.find_1 = date.getFullYear()
      this.finds.find_2 = date.getMonth() + 1
      this.par_form.find_area = "{'year':"+ this.finds.find_1 +",'month':"+ this.finds.find_2 +",'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
      this.find_list(this.par_form.find_area)
      this.par_form.area = "{}"
      ajax_list.constatsService(this.par_form.area, res => {  //年份
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
    height: 60px;
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
  .page_height{
    min-height: calc(100vh - 500px)!important;
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
  .list_table{
    width: 96%;
    margin:0px auto;
    margin-top: 20px;
    margin-bottom: 10px;
    border: 1px solid rgba(234,234,234,1);
  }
  .ma_btn_S{
    width: calc(96% - 20px);
    padding: 10px 10px;
  }

  /*** 弹窗 ***/

  .add_div{
    background-color: white;
  }
  .add_div_one{
    width: 100%;
    min-height: 80px;
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

  /*//滚动条的父级更改样式*/
  .el-table{
    overflow: auto;
  }
  /*//滚动条以及内容还有合计的行样式更改*/
    .el-table__body-wrapper,
    .el-table__header-wrapper,
    .el-table__footer-wrapper{
      overflow:visible;
    }
  /*//这个样式写完之后会产生一条横线,需要覆盖外表格的伪类after,注意要全局样式去覆盖,不要写在scoped中,外层也不能包裹父类*/
  .el-table::after{
      position: relative !important;
    }

  .input_color .el-input__inner{
    color: rgba(243, 144, 0, 0.63) !important;
  }

  .ma_btn_S  .el-button--small{
    padding: 9px 30px;
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
