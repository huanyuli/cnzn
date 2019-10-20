<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <div class="ma_title_left" @click="ret_add">
          <i class="el-icon-arrow-left"></i>
          <p>{{title}}</p>
        </div>
      </div>
      <div class="ma_content user_input">
        <div class="list_module">
          <div class="list_con">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="180px"
              class="demo-ruleForm"
            >
              <el-row>
                <div class="list_tile">基本信息</div>
                <div class="list_con_input">
                  <el-form-item label="客户名称" prop="one_1">
                    <el-input v-model="ruleForm.one_1" @blur="checkName"></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="客户编码" prop="customerNo">
                    <el-input v-model="ruleForm.customerNo"></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="行业分类" prop="one_2">
                    <el-select size="medium" v-model="ruleForm.one_2" clearable placeholder="请选择">
                      <el-option
                        v-for="item in form_one_2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="地址" prop="add_9">
                    <el-input size="medium" v-model="ruleForm.add_9" placeholder></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="客户经理" prop="add_1">
                    <el-select
                      style="width: 100%;"
                      v-model="ruleForm.add_1"
                      filterable
                      clearable
                      remote
                      reserve-keyword
                      placeholder="请输入关键词"
                      :remote-method="remoteMethod_s"
                      :loading="loading_s"
                    >
                      <el-option
                        v-for="item in options4_s"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="目标年份" prop="year">
                    <el-input size="medium" v-model="ruleForm.year" placeholder></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="用电分类" prop="two_4">
                    <el-select size="medium" v-model="ruleForm.two_4" clearable placeholder="请选择">
                      <el-option
                        v-for="item in form_two_4"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="是否国网" prop="isStateGrid">
                    <el-select
                      size="medium"
                      v-model="ruleForm.isStateGrid"
                      clearable
                      placeholder="请选择"
                    >
                      <el-option label="是" value="Y"></el-option>
                      <el-option label="否" value="N"></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="变压器容量/需量" prop>
                    <el-input
                      size="medium"
                      placeholder="请输入内容"
                      v-model.number="ruleForm.transformerCapacity"
                    >
                      <template slot="append">MVA</template>
                    </el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="电压等级" prop="two_3">
                    <el-select size="medium" v-model="ruleForm.two_3" clearable placeholder="请选择">
                      <el-option
                        v-for="item in form_two_3"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="电费申报类型" prop>
                    <el-select
                      size="medium"
                      v-model="ruleForm.applyType"
                      clearable
                      placeholder="请选择"
                    >
                      <el-option label="按需" value="按需"></el-option>
                      <el-option label="按容" value="按容"></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="#" prop>
                    <el-input size="medium" v-model="ruleForm.rebate" placeholder></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="预估电量" prop="powerAmount">
                    <el-input size="medium" v-model="ruleForm.powerAmount" placeholder></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="（测算）常规直购电价" prop="conventionalPrice">
                    <el-input size="medium" v-model="ruleForm.conventionalPrice" placeholder>
                      <!-- <el-select
                        v-model="ruleForm.conventionalPriceType"
                        slot="prepend"
                        placeholder
                      >
                        <el-option label="一口价" value="1"></el-option>
                        <el-option label="分水期" value="2"></el-option>
                      </el-select>-->
                    </el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="（测算）富余" prop>
                    <el-input size="medium" v-model="ruleForm.surplusPrice" placeholder></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="（测算）弃水" prop>
                    <el-input size="medium" v-model="ruleForm.abandonPrice" placeholder></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="基金" prop>
                    <el-input size="medium" v-model="ruleForm.fund" placeholder></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="评分" prop>
                    <el-input size="medium" v-model="ruleForm.score" placeholder></el-input>
                  </el-form-item>
                </div>

                <div class="list_con_input">
                  <el-form-item label="所在区域" prop="one_3">
                    <el-select
                      size="medium"
                      @change="change_2"
                      v-model="ruleForm.one_3"
                      clearable
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in form_one_3"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="行政区域">
                    <el-col style="width: 48%; margin-right: 3%">
                      <el-form-item prop="one_4">
                        <el-select
                          size="medium"
                          @change="change_3"
                          v-model="ruleForm.one_4"
                          clearable
                          placeholder="请选择"
                        >
                          <el-option
                            v-for="item in form_one_4"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col style="width: 48%; ">
                      <el-form-item prop="add_one_4">
                        <el-select
                          size="medium"
                          @change="change_4"
                          v-model="ruleForm.add_one_4"
                          clearable
                          placeholder="请选择"
                        >
                          <el-option
                            v-for="item in form_add_1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-form-item>
                </div>
                <div class="list_con_input" style="width:82%">
                  <el-form-item label="备注" prop>
                    <el-input
                      type="textarea"
                      :rows="5"
                      size="medium"
                      v-model="ruleForm.remark"
                      placeholder
                    ></el-input>
                  </el-form-item>
                </div>
              </el-row>
              <el-row style="padding: 50px 20px 0 20px">
                <div class="page-list-title" style="margin-top: 80px">电量信息</div>
                <table-inputs :isHead="true" :showExpand="false" />
                <table-inputs label="20年真实" v-model="priceInputs.REAL" :baseParam="ruleForm" />
                <table-inputs label="20年合同" v-model="priceInputs.CONTRACT" :baseParam="ruleForm" />
                <table-inputs label="20年标书" v-model="priceInputs.TENDER" :baseParam="ruleForm" />
                <table-inputs
                  :showExpand="false"
                  :showTotal="false"
                  :months="[6,7,8,9,10]"
                  label="富余电基数"
                  v-model="priceInputs.SURPLUS_BASE"
                />
                <table-inputs
                  label="20年真实电量（扣富余）"
                  :showExpand="false"
                  v-model="priceInputs.REAL_MINUS_SURPLUS"
                />
                <table-inputs
                  label="20年合同电量（扣富余）"
                  :showExpand="false"
                  v-model="priceInputs.CONTRACT_MINUS_SURPLUS"
                />
                <table-inputs
                  label="20年标书电量（扣富余）"
                  :showExpand="false"
                  v-model="priceInputs.TENDER_MINUS_SURPLUS"
                />
                <table-inputs
                  label="19年历史电量"
                  :showExpand="false"
                  v-model="priceInputs.HISTORY_AMOUNT1"
                />
                <table-inputs
                  label="18年历史电量"
                  :showExpand="false"
                  v-model="priceInputs.HISTORY_AMOUNT2"
                />
                <table-inputs
                  label="17年历史电量"
                  :showExpand="false"
                  v-model="priceInputs.HISTORY_AMOUNT3"
                />
              </el-row>
              <el-row style="padding: 50px 50px 0 50px;">
                <div class="page-list-title">
                  竞争对手
                  <span class="extra">
                    <el-button
                      type="primary"
                      size="small"
                      @click="competitionCompanyVisible = true"
                    >添加竞争对手</el-button>
                  </span>
                </div>
                <el-table :data.sync="competitionCompanyList" border style="width: 100%">
                  <el-table-column prop="companyName" label="企业名称" width="180"></el-table-column>
                  <el-table-column prop="conventionalPrice" label="常规直购电价" width="180"></el-table-column>
                  <el-table-column prop="surplusPrice" label="富余价" width="180"></el-table-column>
                  <el-table-column prop="abandonPrice" label="弃水价"></el-table-column>
                  <el-table-column prop="date" label="记录时间"></el-table-column>
                  <el-table-column prop="remark" label="备注"></el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button @click="handleDeleteCompany(scope.row)" type="text" size="small">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-row>
              <el-row style="padding: 50px 50px 0 50px;">
                <el-col :span="12">
                  <el-form-item label="选择品种">
                    <el-select size="small" clearable placeholder="请选择">
                      <el-option
                        v-for="item in tradingTypes"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="上传附件">
                      <el-button>点击上传</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
              <div class="wrap">
                <!-- <el-table :data="tableData_3_3" border style="width: 100%">
                  <el-table-column prop="date" label="" width="180"></el-table-column>
                  <el-table-column prop="date" label="丰" width="180"></el-table-column>
                  <el-table-column prop="name" label="平" width="180"></el-table-column>
                  <el-table-column prop="address" label="枯"></el-table-column>
                </el-table>-->
              </div>
            </el-form>
          </div>
        </div>

        <div class="upload-wrap"></div>
        <div class="list_module" style="width:90%; ">
          <div class="list_module_btn">
            <el-button type="success" @click="save_form" size="small" plain>保存</el-button>
            <el-button @click="add_cancel" size="small" plain>取消</el-button>
            <el-button
              class="btn_aff"
              type="primary"
              size="small"
              :loading="this.load_subit"
              @click="add_affirm"
            >提交</el-button>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="竞争对手信息"
      destroy-on-close
      :visible.sync="competitionCompanyVisible"
      class="competitionCompanyDialog"
    >
      <el-form :model="competitionCompanyForm">
        <el-form-item label="企业名称" :label-width="formLabelWidth">
          <el-input v-model="competitionCompanyForm.companyName"></el-input>
        </el-form-item>
        <el-form-item label="常规直购电价" :label-width="formLabelWidth">
          <el-input v-model="competitionCompanyForm.conventionalPrice"></el-input>
        </el-form-item>
        <el-form-item label="富余价" :label-width="formLabelWidth">
          <el-input v-model="competitionCompanyForm.surplusPrice"></el-input>
        </el-form-item>
        <el-form-item label="弃水价" :label-width="formLabelWidth">
          <el-input v-model="competitionCompanyForm.abandonPrice"></el-input>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input type="textarea" :rows="15" v-model="competitionCompanyForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetCompanyForm">取 消</el-button>
        <el-button type="primary" @click="handleAddCompany">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// 引入axios
import add_ajax from "../../../api/customer ";
import this_ajax from "../../../api/preSalePrice";
import tableEdit from "./tableEdit";
import sys_ajax from "../../../api/sys";

const defaultCompetitionCompanyForm = {
  companyName: "",
  conventionalPrice: "",
  conventionalPriceFeng: "",
  conventionalPricePing: "",
  conventionalPriceKu: "",
  surplusPrice: "",
  abandonPrice: "",
  remark: "",
  date: ""
};
export default {
  components: {
    "table-inputs": tableEdit
  },
  data() {
    var checkAge = (rule, value, callback) => {
      //联系电话
      if (value) {
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error("请输入正确的号码"));
          } else {
            callback();
          }
        }, 1000);
      } else {
        callback();
      }
    };
    var checkEmail = (rule, value, callback) => {
      //联系电话
      if (value) {
        var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
        setTimeout(() => {
          //   console.log(re.test(value))
          if (!re.test(value)) {
            callback(new Error("邮箱格式不正确"));
          } else {
            callback();
          }
        }, 1000);
      } else {
        callback();
      }
    };
    return {
      userInfo: {},
      title: "",
      saleId: "",
      days: Array.from(Array(31)).map((v, k) => k + 1 + "日"),
      checkExisted: false,
      attachments: { file1: [], file2: [], file3: [] },
      inputType: "1", // 电量填法
      tableData_3_3: "", // 3+3
      submitStatus: "", // "提交状态 0-保存 1-提交"

      formLabelWidth: "120px",
      competitionCompanyVisible: false,
      competitionCompanyList: [], // 竞争企业
      competitionCompanyForm: {
        companyName: "",
        conventionalPrice: "",
        conventionalPriceFeng: "",
        conventionalPricePing: "",
        conventionalPriceKu: "",
        surplusPrice: "",
        abandonPrice: "",
        remark: "",
        date: ""
      },
      file1: [],
      file2: [],
      file3: [],
      istype: 1,
      //        customerId:0,
      load_subit: false,
      add_Type: "",
      add_create: {}, //提交按钮所有参数
      con_id: "",
      form_code: "", //获取客户资料字典参数
      form_select: "", //获取客户资料字典列表
      form_code_s: "", //获取省份参数
      form_select_s: "", //获取省份字典列表
      form_code_q: "",
      form_code_qs: "",
      form_select_q: "",
      form_select_qs: "",
      priceInputs: {
        REAL: {}, // 真实
        CONTRACT: {}, //合同
        TENDER: {}, //标书
        SURPLUS_BASE: {}, //富余电基数
        REAL_MINUS_SURPLUS: {}, //真实-扣富余
        CONTRACT_MINUS_SURPLUS: {}, //合同-扣富
        TENDER_MINUS_SURPLUS: {}, //标书-扣富余
        HISTORY_AMOUNT1: {}, //历史电量
        HISTORY_AMOUNT2: {}, //历史电量2
        HISTORY_AMOUNT3: {} //历史电量3
      }, // 电量填写

      ruleForm: {
        //第一步
        one_1: "",
        one_2: "",
        one_3: "510000000000", //默认为四川
        one_3s: "四川省", //省份lable
        one_4s: "", //市lable
        one_4: "", //市val
        one_5: "",
        one_6: "国网四川省电力公司",
        one_7: "",
        one_8: "",
        one_9: "",
        one_10: "",
        one_11: "",

        one_14: "",
        one_15: "",
        one_16: "",
        two_1: "",
        add_1: "", //市场经理姓名
        conventionalPriceType: "1",
        conventionalPrice: "", // 常规
        score: "",
        rebate: "",
        isStateGrid: "", // 是否国网
        year: "", //目标年份
        customerNo: "", //客户编码
        businessPhone: "", // 市场经理电话
        companyLeaderName: "", //单位负责人
        companyLeaderName: "", //单位负责人电话
        siteLeaderName: "", //现场负责人姓名/职位
        siteLeaderPhone: "", //现场负责人电话
        registeredCapital: "", //注册资本（万元）
        companyPersonNumber: "", //公司人数
        isDirectCustomer: "Y", //是否我司直购电用户（取值：Y/N）
        fund: "", //基金
        loadLevel: "",
        transformerNumber: "",
        transformerAmount: "",
        generatorPower: "",
        totalCompensationCapacity: "",
        powerAmount: "", //大概电量
        minPowerAmount: "",
        meterReadingDay: "",
        applyType: "",
        applyAmount: "",

        add_2: "", //曾用名
        add_3: "", //企业简称
        add_4: "", //用电单元名称

        add_one_4: "", //区val
        add_one_4_s: "", //区lable
        two_4: "", //用电类别
        add_5: "", //定价策略类型
        add_6: "", //用电负荷类型
        add_7: "", //售电结算单位
        add_8: "", //联系人职务
        add_9: "", //通讯地址
        add_10: "", //邮政编码
        add_11: "", //办公电话
        add_12: "", //传真号码
        add_13: "", //网址
        add_14: "" //用户代码
      },
      rules: {
        one_1: [{ required: true, message: "请输入客户名称", trigger: "blur" }],
        customerNo: [
          { required: true, message: "请输入客户编码", trigger: "blur" }
        ],
        one_2: [
          { required: true, message: "请选择所属行业", trigger: "change" }
        ],
        one_3: [
          { required: false, message: "请选择所在区域", trigger: "change" }
        ],
        one_4: [{ required: false, message: "请选择市", trigger: "change" }],
        add_one_4: [
          { required: false, message: "请选择区县", trigger: "change" }
        ],
        one_5: [
          { required: false, message: "请选择供电区域性质", trigger: "blur" }
        ],
        one_14: [
          // { validator: checkAge, trigger: 'blur' }
          { required: false, trigger: "blur" }
        ],
        one_16: [
          // { validator: checkEmail, trigger: 'blur' }
          { required: false, trigger: "blur" }
        ],
        two_3: [
          { required: true, message: "请选择电压等级", trigger: "change" }
        ],
        two_4: [{ required: true, message: "请选择用电分类", trigger: "blur" }],
        add_1: [{ required: true, message: "请输入客户经理", trigger: "blur" }],
        isStateGrid: [{ required: true, message: "请选择", trigger: "blur" }],
        year: [{ required: true, message: "请输入目标年份", trigger: "blur" }],
        powerAmount: [{ required: true, message: "请输入", trigger: "blur" }],
        add_9: [{ required: true, message: "请输入地址", trigger: "blur" }],
        add_14: [{ required: true, message: "请输入用户代码", trigger: "blur" }]
      },

      lists: [
        {
          userNo: "", //营销用户号
          userName: "", //营销用户名称
          capacity: "", //变压器容量
          number: "", //计量点编号
          name: "" //计量点名称
        }
      ],
      form_one_2: [], //所属行业
      form_one_3: [], //所在区域
      form_one_4: [], //行政市
      form_one_5: [], //供电区域性质
      form_one_6: [], //所属省级电网
      form_one_7: [], //客户类型
      form_one_9: [], //变电站资产归属权
      form_one_10: [], //企业规模
      form_one_11: [], //企业性质

      form_two_1: [], //负荷性质
      form_two_3: [], //电压等级
      form_two_4: [], //用电类别
      form_two_8: [], //履约情况
      form_two_9: [], //交易类型

      form_add_1: [], //行政区县
      form_add_2: [], //定价策略类型
      form_add_3: [], //用电负荷类型
      form_add_4: [], //高耗能行业类别
      form_add_5: [], //是否执行

      options4_s: [], //购电方选择框数组
      list_s: [], //购电方过滤
      loading_s: false, //是否正在从远程获取数据
      gd_list_s: [], //购电方后台返回数据
      states_s: [] //筛选出购电方名称数组
    };
  },
  // 映射store数据
  computed: {},
  methods: {
    handleDeleteCompany(row) {
      this.competitionCompanyList = this.competitionCompanyList.filter(
        item => item.date !== row.date
      );
    },
    handleAddCompany() {
      this.competitionCompanyForm.date = new Date().getTime();
      this.competitionCompanyList.push({ ...this.competitionCompanyForm });
      this.resetCompanyForm();
    },
    resetCompanyForm() {
      this.competitionCompanyVisible = false;
      this.competitionCompanyForm = { ...defaultCompetitionCompanyForm };
    },
    getFormData() {
      let powerAmountList = [];

      Object.keys(this.priceInputs).forEach(type => {
        let item = {
          type,
          ...this.priceInputs[type]
        };
        powerAmountList.push(item);
      });
      const customerNameObj = this.options4_s.find(
        item => item.value === this.ruleForm.add_1
      );
      const customerName = customerNameObj ? customerNameObj.label : "";
      return {
        customerName,
        customerNo: this.ruleForm.one_1,
        industry: this.ruleForm.one_2,
        pprovince: this.ruleForm.one_3s,
        city: this.ruleForm.one_4s,
        county: this.ruleForm.add_one_4_s,
        provinceCode: this.ruleForm.one_3,
        cityCode: this.ruleForm.one_4,
        countyCode: this.ruleForm.add_one_4,
        businessId: this.ruleForm.add_1,
        businessName:this.ruleForm.add_1,
        year: this.ruleForm.year,
        powerAmount: this.ruleForm.powerAmount,
        isStateGrid: this.ruleForm.isStateGrid,
        transformerCapacity: this.ruleForm.transformerCapacity,
        fund: this.ruleForm.fund,
        score: this.ruleForm.score,
        rebate: this.ruleForm.rebate,
        voltageLevel: this.ruleForm.two_3,
        usePowerType: this.ruleForm.two_4,
        conventionalPrice: this.ruleForm.conventionalPrice,
        conventionalPriceFeng: this.ruleForm.conventionalPriceFeng,
        conventionalPricePing: this.ruleForm.conventionalPricePing,
        conventionalPriceKu: this.ruleForm.conventionalPriceKu,
        surplusPrice: this.ruleForm.surplusPrice,
        abandonPrice: this.ruleForm.abandonPrice,
        remark: this.ruleForm.remark,
        submitStatus: this.submitStatus,
        powerAmountList,
        competitionCompanyList: this.competitionCompanyList
      };
    },
    save_form() {
      console.log(this.priceInputs);
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.submitStatus = "0";
          const data = this.getFormData();
          console.log(data);
          // this_ajax.preCustomerCreateService(data, res => {
          //   console.log(res);
          // });
        } else {
          return false;
        }
      });
    },
    on_success1(response) {
      if (response.status == 200 && response.body.length) {
        this.attachments.file1.push({
          fileName: response.body[0].name,
          fileId: response.body[0].fileId
        });
      }
    },
    handleRemove1(file, fileList) {
      const index = this.attachments.file1.findIndex(
        item => item.name === file.name
      );
      this.attachments.file1.splice(index, 1);
    },
    handleRemove2(file, fileList) {
      const index = this.attachments.file2.findIndex(
        item => item.name === file.name
      );
      this.file1.splice(index, 1);
    },
    handleRemove3(file, fileList) {
      const index = this.attachments.file3.findIndex(
        item => item.name === file.name
      );
      this.file1.splice(index, 1);
    },
    on_success2(response, file) {
      if (response.status == 200 && response.body.length) {
        this.attachments.file2.push({
          fileName: response.body[0].name,
          fileId: response.body[0].fileId
        });
      }
    },
    on_success3(response, file) {
      if (response.status == 200 && response.body.length) {
        this.attachments.file3.push({
          fileName: response.body[0].name,
          fileId: response.body[0].fileId
        });
      }
    },
    add_lists(index) {
      index = index + 1;
      if (index != 0) {
        var _temp_index = this.lists[index - 1];
        if (
          _temp_index.userNo != "" &&
          _temp_index.userName != "" &&
          _temp_index.capacity != "" &&
          _temp_index.number != "" &&
          _temp_index.name != ""
        ) {
          let cope = {
            userNo: "", //营销用户号
            userName: "", //营销用户名称
            capacity: "", //变压器容量
            number: "", //计量点编号
            name: "" //计量点名称
          };
          this.lists.push(cope);
        } else {
          this.$message.error("请将上一条内容填写完整，在进行添加");
        }
      }
      console.log(this.lists);
    },
    del_lists(index) {
      this.lists.splice(index, 1);
      console.log(this.lists);
    },
    remoteMethod_s(query) {
      //客户名称远程搜索选择(带客户ID)
      if (query !== "") {
        /*清空临时数组*/
        this.states_s = [];
        this.list_s = [];
        this.options4_s = [];

        this.loading_s = true;
        (this.name_list_s = "{'username': '" + query + "'}"),
          setTimeout(() => {
            this.loading_s = false;
            add_ajax.userListService(
              this.name_list_s,
              res => {
                //name
                this.$emit("login-success", res);
              },
              res => {
                this.gd_list_s = res.body.list;
                for (var i = 0; i < this.gd_list_s.length; i++) {
                  this.states_s.push({
                    name: this.gd_list_s[i].username,
                    id: this.gd_list_s[i].id
                  });
                }
                this.list_s = this.states_s.map(item => {
                  return { value: item.id, label: item.name };
                });

                this.options4_s = this.list_s.filter(item => {
                  return (
                    item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
                  );
                });
              }
            );
          }, 200);
      } else {
        this.options4_s = [];
      }
    },
    add_contract() {
      this.$router.push("/Customer/details");
    },
    ret_add() {
      this.$router.go(-1);
    },
    add_cancel() {
      //取消按钮
      this.$router.push("/Customer/portrait");
    },
    change_2(val) {
      //点击省份获取市数据
      let obj = {};
      obj = this.form_one_3.find(item => {
        return item.value === val;
      });
      this.ruleForm.one_3s = obj.label;

      this.form_code_q = {
        code: this.ruleForm.one_3,
        areaLevel: "province"
      };
      this.form_code_q = JSON.stringify(this.form_code_q);
      add_ajax.areaListService(
        this.form_code_q,
        res => {
          //列表字典
          this.$emit("login-success", res);
        },
        res => {
          this.form_select_q = res.body;
          this.form_one_4 = [];
          this.ruleForm.one_4 = "";
          var _temp_one_4 = this.form_one_4; //所在行政区域
          $.map(this.form_select_q, function(value) {
            _temp_one_4.push({
              value: value.code,
              label: value.name
            });
          });
        }
      );
    },
    change_3(val, cb) {
      //点击市区获取lable
      let objs = {};
      objs = this.form_one_4.find(item => {
        return item.value === val;
      });
      this.ruleForm.one_4s = objs.label;

      this.form_code_qs = {
        code: this.ruleForm.one_4,
        areaLevel: "city"
      };
      this.form_code_qs = JSON.stringify(this.form_code_qs);
      add_ajax.areaListService(
        this.form_code_qs,
        res => {
          //列表字典
          this.$emit("login-success", res);
        },
        res => {
          this.form_select_qs = res.body;
          this.form_add_1 = [];
          this.ruleForm.add_one_4 = "";
          var _temp_one_4 = this.form_add_1;
          $.map(this.form_select_qs, function(value) {
            _temp_one_4.push({
              value: value.code,
              label: value.name
            });
          });
        }
      );
    },
    change_4(val) {
      //点击县级获取lable
      let obj = {};
      obj = this.form_add_1.find(item => {
        return item.value === val;
      });
      this.ruleForm.add_one_4_s = obj.label;
    },
    add_affirm() {
      //提交按钮
      //        console.log(this.arr_find(this.ruleTwo.two_9))

      this.submitForm("ruleForm");
    },
    add_one() {
      //上一步
      this.resetForm("ruleTwo");
      this.istype = 1;
    },
    get_times(str) {
      //转换时间戳

      var temp = new Date(str).getTime();
      return temp;
    },
    resetForm(formName) {
      //表单重置验证
      this.$refs[formName].clearValidate();
    },
    arr_find(arr) {
      var _temp_arr = "";
      $.map(arr, function(data, index) {
        if (index == 0) {
          _temp_arr = data;
        } else {
          _temp_arr += "," + data;
        }
      });

      return _temp_arr;
    },
    submitForm(formName) {
      //表单提交验证
      if (this.checkExisted) {
        return this.$message("公司名称重复，请重新输入");
      }
      const that = this;
      this.$refs[formName].validate(valid => {
        if (valid && !this.checkExisted) {
          this.load_subit = true;
          let businessId = this.ruleForm.add_1;
          let businessName = "";
          if (Number.isNaN(Number(businessId))) {
            businessId = this.ruleForm.origin_add_1;
          }
          const businessUser = this.options4_s.find(
            item => item.value === businessId
          );
          if (businessUser) {
            businessName = businessUser.label;
          }
          // 没有改变过
          if (!businessUser && businessId) {
            businessName = this.ruleForm.add_1;
          }
          this.add_create = {
            name: this.ruleForm.one_1,
            address: this.ruleForm.add_9,
            businessName,
            businessId,
            businessPhone: this.ruleForm.businessPhone,
            companyLeaderName: this.ruleForm.companyLeaderName,
            companyLeaderPhone: this.ruleForm.companyLeaderPhone,
            siteLeaderName: this.ruleForm.siteLeaderName,
            siteLeaderPhone: this.ruleForm.siteLeaderPhone,
            registeredCapital: this.ruleForm.registeredCapital,
            companyPersonNumber: this.ruleForm.companyPersonNumber,
            companyNature: this.ruleForm.one_11,
            isDirectCustomer: this.ruleForm.isDirectCustomer,
            province: this.ruleForm.one_3s,
            city: this.ruleForm.one_4s,
            county: this.ruleForm.add_one_4_s,
            provinceCode: this.ruleForm.one_3,
            cityCode: this.ruleForm.one_4,
            countyCode: this.ruleForm.add_one_4,

            industry: this.ruleForm.one_2,
            usePowerType: this.ruleForm.two_4,
            yearUseAmount: this.ruleForm.two_2,
            electricType: this.ruleForm.add_6,
            loadNature: this.arr_find(this.ruleForm.two_1),
            loadLevel: this.ruleForm.loadLevel,
            transformerNumber: this.ruleForm.transformerNumber,
            transformerAmount: this.ruleForm.transformerAmount,
            voltageLevel: this.ruleForm.two_3,
            generatorPower: this.ruleForm.generatorPower,
            upsPower: this.ruleForm.upsPower,
            totalCompensationCapacity: this.ruleForm.totalCompensationCapacity,
            minPowerAmount: this.ruleForm.minPowerAmount,
            meterReadingDay: this.ruleForm.meterReadingDay,
            applyType: this.ruleForm.applyType,
            applyAmount: this.ruleForm.applyAmount,

            attachments: this.attachments
          };
          if (this.saleId) {
            this.add_create.id = this.saleId;
            this.add_create = JSON.stringify(this.add_create);
            return add_ajax.customerPortraitEditService(
              this.add_create,
              res => {
                that.load_subit = false;
                if (res.status === 200) {
                  this.$message({
                    message: "编辑成功",
                    type: "success"
                  });
                  this.$router.push("/Customer/portrait");
                }
              },
              err => {
                if (err.status !== 200) {
                  this.$message("创建失败!");
                }
                that.load_subit = false;
              }
            );
          }
          this.add_create = JSON.stringify(this.add_create);
          add_ajax.customerPortraitCreateService(
            this.add_create,
            res => {
              that.load_subit = false;
              if (res.status === 200) {
                this.$message({
                  message: "创建成功",
                  type: "success"
                });
                this.$router.push("/Customer/portrait");
              }
            },
            err => {
              if (err.status !== 200) {
                this.$message("创建失败!");
              }
              that.load_subit = false;
            }
          );
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    add_two() {
      //下一步
      this.submitForm("ruleForm");
    },
    checkName() {
      const that = this;
      if (!this.ruleForm.one_1) {
        return;
      }
      add_ajax.customerPortraitExistsService(
        JSON.stringify({ name: this.ruleForm.one_1 }),
        res => {
          this.checkExisted = res.body.exists;
          res.body.exists && this.$message("公司名称重复，请重新输入");
          if (!res.body.exists) {
            add_ajax.customerListService(
              "{'page':'1','limit':'999'}",
              listRes => {
                const target = listRes.body.list.find(
                  customer => customer.name === this.ruleForm.one_1
                );
                if (target) {
                  add_ajax.customerDetailService(
                    JSON.stringify({ id: target.id }),
                    customerRes => {
                      if (customerRes.status === 200) {
                        const usePowerType =
                          that.form_two_4.find(
                            item => item.label === customerRes.body.usePowerType
                          ) || {};
                        const companyNature =
                          that.form_one_11.find(
                            item =>
                              item.label === customerRes.body.companyNature
                          ) || {};
                        const voltageLevel =
                          that.form_two_3.find(
                            item => item.label === customerRes.body.voltageLevel
                          ) || {};
                        const electricType =
                          that.form_add_3.find(
                            item => item.label === customerRes.body.electricType
                          ) || {};
                        that.ruleForm.one_1 = customerRes.body.name;
                        that.ruleForm.add_9 = customerRes.body.contactAddress;
                        that.ruleForm.add_1 = customerRes.body.businessName; // 这里需特殊处理
                        that.ruleForm.origin_add_1 =
                          customerRes.body.businessId;
                        that.ruleForm.one_11 = companyNature.value;
                        that.ruleForm.one_3 = customerRes.body.provinceCode;
                        that.ruleForm.one_2 = customerRes.body.industry.substring(
                          0,
                          1
                        );
                        that.ruleForm.two_4 = usePowerType.value;
                        that.ruleForm.add_6 = electricType.value;
                        that.ruleForm.two_3 = voltageLevel.value;
                        that.ruleForm.two_1 = customerRes.body.loadNature.split(
                          ","
                        );
                        that.ruleForm.companyPersonNumber =
                          customerRes.body.companyScale;

                        // 延迟加载城市信息
                        setTimeout(() => {
                          that.ruleForm.one_4 = customerRes.body.cityCode;
                          that.change_3(that.ruleForm.one_4);
                        }, 500);
                        setTimeout(
                          () =>
                            (that.ruleForm.add_one_4 =
                              customerRes.body.countyCode),
                          1000
                        );
                      }
                    }
                  );
                }
              }
            );
          }
        },
        err => {
          if (err.status !== 200) {
            this.checkExisted = true;
            return this.$message("公司名称校验出错，请稍后重试");
          }
        }
      );
    }
  },

  //生命周期钩子函数，进入页面显示之前获取数据到store
  created() {
    const { id: saleId } = this.$route.query;
    // this.userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
    // console.log("userInfo", this.userInfo);
    // this.ruleForm.add_1 = this.userInfo.id;
    this.form_code = "{}";
    add_ajax.customerCodeService(
      this.form_code,
      res => {
        //列表字典
        this.$emit("login-success", res);
      },
      res => {
        if (res.status == 200) {
          this.form_select = res.body;
          var _temp_one_2 = this.form_one_2; //所属行业
          $.map(this.form_select.industry, function(value, key) {
            _temp_one_2.push({
              value: key,
              label: value
            });
          });
          var _temp_one_5 = this.form_one_5; //供电区域性质
          $.map(this.form_select.powerAreaNature, function(value, key) {
            _temp_one_5.push({
              value: key,
              label: value
            });
          });
          var _temp_one_6 = this.form_one_6; //所属省级电网
          $.map(this.form_select.provincePowerGrid, function(value) {
            _temp_one_6.push({
              value: value,
              label: value
            });
          });
          var _temp_one_7 = this.form_one_7; //客户类型
          $.map(this.form_select.customerType, function(value, key) {
            _temp_one_7.push({
              value: key,
              label: value
            });
          });
          var _temp_one_9 = this.form_one_9; //变电站资产归属权
          $.map(this.form_select.powerStationAssetOwner, function(value, key) {
            _temp_one_9.push({
              value: key,
              label: value
            });
          });
          var _temp_one_10 = this.form_one_10; //企业规模
          $.map(this.form_select.companyScale, function(value, key) {
            _temp_one_10.push({
              value: key,
              label: value
            });
          });
          var _temp_one_11 = this.form_one_11; //企业性质
          $.map(this.form_select.companyNature, function(value, key) {
            _temp_one_11.push({
              value: key,
              label: value
            });
          });
          var _temp_two_1 = this.form_two_1; //负荷性质
          $.map(this.form_select.loadNature, function(value, key) {
            _temp_two_1.push({
              value: key,
              label: value
            });
          });
          var _temp_two_3 = this.form_two_3; //电压等级
          $.map(this.form_select.voltageLevel, function(value, key) {
            _temp_two_3.push({
              value: key,
              label: value
            });
          });
          var _temp_two_4 = this.form_two_4; //用电类别
          $.map(this.form_select.usePowerType, function(value, key) {
            _temp_two_4.push({
              value: key,
              label: value
            });
          });
          var _temp_two_8 = this.form_two_8; //履约情况
          $.map(this.form_select.performanceSituation, function(value) {
            _temp_two_8.push({
              value: value,
              label: value
            });
          });
          var _temp_two_9 = this.form_two_9; //交易类型
          $.map(this.form_select.transactionType, function(value, key) {
            _temp_two_9.push({
              value: key,
              label: value
            });
          });

          var _temp_add_2 = this.form_add_2; //定价策略类型
          $.map(this.form_select.priceStrategy, function(value, key) {
            _temp_add_2.push({
              value: key,
              label: value
            });
          });

          var _temp_add_3 = this.form_add_3; //用电负荷类型
          $.map(this.form_select.electricType, function(value, key) {
            _temp_add_3.push({
              value: key,
              label: value
            });
          });

          var _temp_add_4 = this.form_add_4; //高耗能行业类别
          $.map(this.form_select.highEnergyCIndustry, function(value) {
            _temp_add_4.push({
              value: value,
              label: value
            });
          });
          var _temp_add_5 = this.form_add_5; //是否
          $.map(this.form_select.whether[0], function(value, key) {
            _temp_add_5.push({
              value: key,
              label: value
            });
          });
        }
      }
    );

    //获取省级下拉列表
    this.form_code_s = "{}";
    add_ajax.areaListService(
      this.form_code_s,
      res => {
        //列表区域字典
        this.$emit("login-success", res);
      },
      res => {
        this.form_select_s = res.body;
        //          form_one_3:[], //所在区域
        var _temp_one_3 = this.form_one_3; //所在区域
        $.map(this.form_select_s, function(value) {
          _temp_one_3.push({
            value: value.code,
            label: value.name
          });
        });

        //默认获取市级下拉列表
        this.form_code_q = {
          code: this.ruleForm.one_3,
          areaLevel: "province"
        };
        this.form_code_q = JSON.stringify(this.form_code_q);
        add_ajax.areaListService(
          this.form_code_q,
          res => {
            //列表字典
            this.$emit("login-success", res);
          },
          res => {
            this.form_select_q = res.body;
            this.form_one_4 = [];
            this.ruleForm.one_4 = "";
            var _temp_one_4 = this.form_one_4; //所在行政区域
            $.map(this.form_select_q, function(value) {
              _temp_one_4.push({
                value: value.code,
                label: value.name
              });
            });
          }
        );
      }
    );
    if (saleId !== "new") {
      this.title = "编辑报价";
      this.saleId = saleId;
      this.data_form = "{ 'id':" + saleId + "}";
      this_ajax.preCustomerDetailService(
        this.data_form,
        res => {
          this.$emit("login-success", res);
        },
        res => {
          if (res.status === 200) {
            // this.ruleForm = Object.assign(this.ruleForm, res.body);
            console.log(res.body);
            // 延迟加载城市信息
            setTimeout(() => {
              this.ruleForm.one_4 = res.body.cityCode;
              this.change_3(this.ruleForm.one_4);
            }, 500);
            setTimeout(
              () => (this.ruleForm.add_one_4 = res.body.countyCode),
              1000
            );
          }
        }
      );
    } else {
      this.title = "创建报价";
    }

    sys_ajax.contractTableListService({ limit: 99999 }, res => {
      this.tradingTypes = res.body.list || [];
    });
  }
};
</script>

<style scoped>
.competitionCompanyDialog .el-form {
  width: 480px;
  margin: 30px;
}
.input_div .el-input__icon {
  line-height: 30px !important;
}
p {
  margin: 0px;
  padding: 0px;
}
.marterial {
  width: 100%;
  min-height: calc(100vh - 51px - 28px);
  background-color: white;
  border: 1px solid rgba(229, 229, 229, 1);
  overflow: -webkit-paged-y;
}

.ma_title {
  width: 100%;
  height: 40px;
  /*background-color: #F5F6F7;*/
  border-bottom: 1px solid rgba(229, 229, 229, 1);
}
.ma_title_left {
  padding-right: 10px;
  float: left;
  cursor: pointer;
}
.ma_content {
  width: 100%;
  /*min-height: calc(100vh - 61px - 51px - 16px);*/
  min-height: calc(100vh - 61px - 51px - 30px);
}

.ma_title i {
  float: left;
  width: 9px;
  height: 15px;
  color: #0077de;
  font-weight: 800;
  margin-top: 12px;
  margin-left: 10px;
}
.ma_title p {
  font-size: 14px;
  height: 40px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  display: inline-block;
  line-height: 40px;
  float: left;
  margin-left: 10px;
}

.list_module {
  width: calc(100%);
  float: left;
  margin: 0px auto;
  padding-bottom: 10px;
}
.list_module_title {
  width: 100%;
  height: 70px;
  line-height: 50px;
  text-align: left;

  /*background-color: #fcfcfc;*/
  /*border-bottom: 1px solid rgba(240,241,242,1);*/
}
.title_ico_div {
  width: 344px;
  /*width: 300px;*/
  margin: 0 auto;
  padding-top: 10px;
  margin-bottom: 5px;
  position: relative;
}

.ico_div {
  width: 100%;
  float: left;
  text-align: center;
}
.text_div {
  width: 100%;
}
.text_div span {
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
.text_div span:nth-child(1) {
  margin-right: 98px;
  margin-left: -16px;
}
.text_div span:nth-child(2) {
  margin-right: 68px;
}
.text_div span:nth-child(3) {
  margin-right: 15px;
}
.text_div span:nth-child(4) {
  margin-right: 35px;
}

.ico_div div {
  float: left;
}
.ico {
  width: 20px;
  height: 20px;
  line-height: 22px;
  margin: 0 auto;
  border-radius: 50%;
  font-size: 14px;
  background-color: #8dbade;
  border: 2px solid #8dbade;
  text-align: center;
  color: #fff;
}
.ico_true {
  background-color: #fff;
  border: 2px solid #e5e5e5;
  color: #e5e5e5;
}
.ico_div span {
}
.ico_text_true {
  color: #cdcdcd !important;
}
.ico_border {
  width: 170px;
  height: 4px;
  margin-top: 10px;
  background-color: rgba(234, 234, 234, 1);
}

.list_con {
  width: calc(100% - 20px);
  height: auto;
  overflow: visible;
  padding: 26px 0;
}
.list_con_input {
  width: 36%;
  padding: 0 5%;
  float: left;
  height: 36px;
  margin-top: 15px;
}

.list_con_row {
  width: 82%;
  float: left;
  height: 36px;
  margin-top: 20px;
  padding: 0 5%;
}
.list_con_input p,
.list_con_row p {
  margin: 0px;
  padding: 0px;
  display: inline-block;
  float: left;
  text-align: right;
  width: 146px;
  font-size: 14px;
  color: rgba(120, 121, 123, 1);
  line-height: 36px;
  margin-right: 10px;
}
.list_con_input p span,
.list_con_row p span {
  color: red;
  font-size: 14px;
}
.list_con_input .input_div {
  float: left;
  max-width: 280px;
  width: 50%;
  height: 36px;
}
.list_con_row .input_div {
  float: left;
  /*max-width: 280px;*/
  width: 50%;
  height: 36px;
}
.el-select {
  width: 100%;
}
.input_div_two {
  width: 48%;
  height: auto;
  overflow: auto;
}
.input_div_two:nth-child(1) {
  float: left;
}
.input_div_two:nth-child(2) {
  float: right;
}
.el-input-group__append {
  background-color: #fff;
}
.dx_se div {
  margin-left: 0px !important;
}

.list_module_btn {
  margin: 0 auto;
  text-align: right;
  padding-top: 20px;
  padding-right: 20px;
}
.btn_aff {
  width: 140px;
}

.table_hint {
  width: 90%;
  margin: 0 auto;
  height: 20px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(176, 176, 176, 1);
  line-height: 20px;
  text-align: right;
  /*margin-top: 30px;*/
  /*margin-bottom: 10px;*/
}
.table {
  width: 90%;
  margin: 0 auto;
  border: 1px solid rgba(234, 234, 234, 1);
}
.table_tr {
  width: 100%;
  height: 50px;
}

.table .table_tr:nth-child(2n + 1) {
  background: rgba(249, 249, 249, 1);
}
.table_title {
  background: rgba(252, 252, 252, 1) !important;
  border-bottom: 1px solid rgba(234, 234, 234, 1);
}

.two_p p {
  height: 25px;
  line-height: 25px;
}

.table_td_w p span {
  color: red;
  font-size: 12px;
}

/*第三步骤的table宽度*/
.three_table .table_tr .table_td {
  width: calc(90% / 4);
  line-height: 50px;
  float: left;
}
.three_table .table_tr .table_td:nth-child(1) {
  width: calc(10%);
}
.three_table .table_title .table_td .table_td_w {
  width: 76%;
}
.three_table .table_td .table_td_w {
  width: 70%;
  margin: 0 auto;
  height: 32px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: rgba(96, 96, 96, 1);
}

/*第四步骤的table宽度*/
.four_table .table_tr .table_td {
  width: calc(80% / 2);
  line-height: 50px;
  float: left;
}
.four_table .table_tr .table_td:nth-child(1) {
  width: calc(20%);
}
.four_table .table_title .table_td .table_td_w {
  width: 40%;
}
.four_table .table_td .table_td_w {
  width: 40%;
  margin: 0 auto;
  height: 32px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: rgba(96, 96, 96, 1);
}

/*第五步骤的table宽度*/
.five_table .table_tr .table_td {
  width: calc(92% / 5);
  line-height: 50px;
  float: left;
}
.five_table .table_tr .table_td:nth-child(1) {
  width: calc(8%);
}
.five_table .table_title .table_td .table_td_w {
  width: 90%;
}
.five_table .table_td .table_td_w {
  width: 84%;
  margin: 0 auto;
  height: 32px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: rgba(96, 96, 96, 1);
}

.list_tile {
  width: calc(100% - 80px);
  float: left;
  font-size: 14px;
  margin: 0px 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(192, 192, 192, 0.47);
}
.list_margin_top {
  margin: 10px 40px;
}
.upload-wrap {
  padding: 25px 42px;
  overflow: hidden;
}
.page-list-title {
  font-size: 12px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 30px;
  padding-bottom: 10px;
}
.page-list-title .extra {
  float: right;
}
</style>
