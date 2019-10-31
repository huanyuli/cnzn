<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <div class="ma_title_left" @click="aff_cancel">
          <i class="el-icon-arrow-left"></i>
          <p>报价详情</p>
        </div>
      </div>
      <div class="ma_content">
        <div class="top_title">
          <img class="title_ba" src="../../../assets/aImg/company.png" alt />
          <img
            class="title_type"
            v-if="date_list.submitStatus == 0"
            src="../../../assets/aImg/sub_0.png"
            alt
          />
          <img
            class="title_type"
            v-if="date_list.submitStatus == 10"
            src="../../../assets/aImg/sub_10.png"
            alt
          />
          <img
            class="title_type"
            v-if="date_list.submitStatus == 20"
            src="../../../assets/aImg/sub_20.png"
            alt
          />
          <img
            class="title_type"
            v-if="date_list.submitStatus == 30"
            src="../../../assets/aImg/sub_30.png"
            alt
          />
          <img
            class="title_type"
            v-if="date_list.submitStatus == 40"
            src="../../../assets/aImg/sub_40.png"
            alt
          />
        </div>
        <div class="top_name">
          <p>{{date_list.customerName}}</p>
          <p class="date">创建时间：{{get_date(date_list.createAt)}}</p>
        </div>
        <div class="top_btn">
          <el-button v-if="isEditAble" size="mini" @click="deta_edit" plain>编辑</el-button>
        </div>
        <div class="deta_div">
          <!--<div class="deta_div_title"><span>企业信息</span></div>-->
          <div class="deta_con">
            <div class="deta_con_title">
              <span>基本信息</span>
              <!--<p></p>-->
            </div>
            <div class="deta_con_p">
              <div v-for="item in baseInfo" :key="item.field">
                <label>{{item.name}}:</label>
                <p>{{date_list[item.field]}}</p>
              </div>
            </div>
          </div>
          <div class="deta_con">
            <div class="deta_con_title">
              <span>电量信息</span>
              <!--<p></p>-->
            </div>
            <div>
              <el-table :data="ElectricityInformation" border style="width: 100%">
                <el-table-column prop="type" width="150px">
                  <template slot-scope="scope">
                    <span>{{TYPES[scope.row.type]}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  v-for="month in 12"
                  :prop="'amount'+month"
                  :label="month+'月'"
                  :key="month"
                  width="130px"
                ></el-table-column>
                <el-table-column prop="total" label="合计" width="120px">
                  <template slot-scope="scope">
                    <span>{{scope.row.total}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="fengKuRate" label="丰枯比" width="120px"></el-table-column>
              </el-table>
              <div id="myCharts" ref="myCharts"></div>
            </div>
          </div>
          <div class="deta_con">
            <div class="deta_con_title">
              <span>竞争对手</span>
              <!--<p></p>-->
            </div>
            <el-table :data.sync="competitionCompanyList" border style="width: 100%">
              <el-table-column prop="companyName" label="企业名称" width="180"></el-table-column>
              <el-table-column label="常规直购电价" width="180">
                <template slot-scope="scope">
                  <span v-if="scope.row.conventionalPrice">{{scope.row.conventionalPrice}}</span>
                  <span
                    v-else
                  >丰:{{scope.row.conventionalPriceFeng}}平:{{scope.row.conventionalPricePing}}枯:{{scope.row.conventionalPriceKu}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="surplusPrice" label="富余价" width="180"></el-table-column>
              <el-table-column prop="abandonPrice" label="弃水价"></el-table-column>
              <el-table-column prop="incrementPrice" label="增量价"></el-table-column>
              <el-table-column prop="createAt" label="记录时间">
                <template slot-scope="scope">{{get_date(scope.row.createAt)}}</template>
              </el-table-column>
              <el-table-column prop="remark" label="备注"></el-table-column>
            </el-table>
          </div>
          <div class="deta_con">
            <div class="deta_con_title">
              <span>领导报价</span>
              <!--<p></p>-->
            </div>

            <el-table :data.sync="leaderOfferPrices" border style="width: 100%">
              <el-table-column prop="transactionVariety" label="交易品种" width="180"></el-table-column>
              <el-table-column prop="offerPrice" label="报价" width="180">
                <template slot-scope="scope">
                  <span v-if="scope.row.offerPrice">{{scope.row.offerPrice}}</span>
                  <span
                    v-else
                  >丰:{{scope.row.offerPriceFeng}}平:{{scope.row.offerPricePing}}枯:{{scope.row.offerPriceKu}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="incrementPrice" label="增量价" width="180"></el-table-column>
              <el-table-column prop="createAt" label="报价时间">
                <template slot-scope="scope">{{get_date(scope.row.createAt)}}</template>
              </el-table-column>
              <el-table-column prop="remark" label="备注"></el-table-column>
            </el-table>
          </div>
          <div class="deta_con">
            <div class="deta_con_title">
              <span>操作日志</span>
              <!--<p></p>-->
            </div>

            <el-table :data.sync="operationRecordList" border style="width: 100%">
              <el-table-column prop="operationType" label="操作类型" width="180"></el-table-column>
              <el-table-column prop="createUserName" label="操作者" width="180"></el-table-column>
              <el-table-column prop="operationContent" label="备注"></el-table-column>
              <el-table-column prop="createAt" label="操作时间">
                <template slot-scope="scope">{{get_date(scope.row.createAt)}}</template>
              </el-table-column>
            </el-table>
          </div>
          <div class="deta_con goback">
            <el-button
              type="danger"
              v-if="ISLEADER === 'Y'  && date_list.submitStatus === 10"
              @click="handleSendBack"
            >退回</el-button>
            <el-button
              v-if="ISLEADER === 'Y' && date_list.submitStatus === 10"
              type="primary"
              @click="addOfferPrice"
            >添加报价</el-button>
            <el-button
              v-if="userInfo.id == date_list.createUserId && date_list.submitStatus === 20"
              type="danger"
              @click="handleAbandon"
            >废  弃</el-button>
            <el-button
              v-if="userInfo.id == date_list.createUserId && date_list.submitStatus === 20"
              type="primary"
              @click="handleSignature"
            >签  章</el-button>
            <el-button @click="goback">返 回</el-button>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="领导报价" :visible.sync="offerPriceVisible">
      <el-form>
        <div class="input-item">
          <span>报价</span>
          <!-- <el-input v-model.number="offerPrice"></el-input> -->
          <direct-purchase-input v-model="offerPriceForm" />
        </div>
        <div class="input-item">
          <span>增量价</span>
          <el-input v-model.number="offerPriceForm.incrementPrice"></el-input>
        </div>
        <div class="input-item">
          <span>备注</span>
          <el-input type="textarea" :rows="10" v-model="offerPriceForm.remark"></el-input>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetOfferPrice">取 消</el-button>
        <el-button type="primary" @click="handleAddOfferPrice">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="报价退回" :visible.sync="sendbackModalVisible">
      <el-form>
        <div class="input-item">
          <span>退回意见</span>
          <el-input type="textarea" :rows="10" v-model="offerPriceForm.remark"></el-input>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetSendbackModal">取 消</el-button>
        <el-button type="primary" @click="sendBack">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// 引入axios
import ajax_list from "../../../api/customer ";
import this_ajax from "../../../api/preSalePrice";
import echarts from "echarts";
import directPurchaseInput from "./directPurchaseInput";

export default {
  components: {
    "direct-purchase-input": directPurchaseInput
  },
  data() {
    return {
      isEditAble: false,
      operationRecordList: [],
      sendbackModalVisible: false,
      operationContent: "",
      offerPriceForm: {
        conventionalPrice: "",
        conventionalPriceFeng: "",
        conventionalPricePing: "",
        conventionalPriceKu: "",
        remark: "",
        incrementPrice: ""
      },
      ISLEADER: "N",
      offerPriceVisible: false,
      TYPES: {
        REAL: "真实",
        CONTRACT: "合同",
        TENDER: "标书",
        SURPLUS_BASE: "富余电基数",
        REAL_MINUS_SURPLUS: "真实-扣富余",
        CONTRACT_MINUS_SURPLUS: "合同-扣富余",
        TENDER_MINUS_SURPLUS: "标书-扣富余",
        HISTORY_AMOUNT1: "历史电量",
        HISTORY_AMOUNT2: "历史电量",
        HISTORY_AMOUNT3: "历史电量"
      },
      tradingTypes: [
        {
          id: "DIRECTORY_COST",
          name: "目录"
        },
        {
          id: "CONVENTIONAL_COST",
          name: "纯常规"
        },
        {
          id: "CONVENTIONAL_SURPLUS_COST",
          name: "常规+富余"
        },
        {
          id: "SURPLUS_COST",
          name: "纯富余（目录+富余）"
        },
        {
          id: "ABANDON_COST",
          name: "弃水（目录+弃水）"
        }
      ], // 品种
      one_id: 0, //ID
      one_type: "", //签约状态
      data_form: "", //获取详情参数
      data_dele: "", //删除详情参数
      date_list: {}, //详情数据
      menuList: {},
      attachments: { file1: [], file2: [], file3: [] },
      competitionCompanyList: [],
      leaderOfferPrices: [],
      // 电量信息
      ElectricityInformation: [],
      codeNames: {
        companyNature: {},
        usePowerType: {},
        industry: {},
        voltageLevel: {}
      },
      baseInfo: [
        {
          field: "customerName",
          name: "客户名称"
        },
        {
          field: "customerNo",
          name: "客户编码"
        },
        {
          field: "transactionVariety",
          name: "交易品种"
        },
        {
          field: "industry",
          name: "行业"
        },
        {
          field: "address",
          name: "地址"
        },
        {
          field: "businessName",
          name: "客户经理"
        },
        {
          field: "year",
          name: "目标年份"
        },
        {
          field: "usePowerType",
          name: "用电分类"
        },
        {
          field: "isStateGrid",
          name: "是否国网"
        },
        {
          field: "transformerCapacity",
          name: "变压器容量"
        },
        {
          field: "voltageLevel",
          name: "电压等级"
        },
        {
          field: "score",
          name: "评分"
        },
        {
          field: "rebate",
          name: "#"
        },
        {
          field: "powerAmount",
          name: "大概电量"
        },
        {
          field: "conventionalPrice",
          name: "常规直购电价"
        },
        {
          field: "surplusPrice",
          name: "富余价"
        },
        {
          field: "abandonPrice",
          name: "弃水价"
        },
        {
          field: "remark",
          name: "备注"
        }
      ]
    };
  },
  // 映射store数据
  computed: {},

  methods: {
    getDetail() {
      const ISSTATEGRID = {
        Y: "是",
        N: "否"
      };
      this.menuList = JSON.parse(localStorage.getItem("menuList"));
      this.ISLEADER = localStorage.getItem("ISLEADER");
      this.userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
      this.one_id = this.$route.query.id;
      this.data_form = "{ 'id':" + this.one_id + "}";
      this_ajax.preCustomerDetailService(this.data_form, res => {
        if (res.status === 200) {
          this.date_list = res.body.customerInfo || {};
          this.date_list.address =
            this.date_list.province +
            "-" +
            this.date_list.city +
            "-" +
            this.date_list.county;
          // 是否可编辑

          if(this.date_list.submitStatus == 0 && this.userInfo.id === this.date_list.createUserId){
            this.isEditAble = true
          }
          if(this.date_list.submitStatus == 20 && this.userInfo.id === this.date_list.createUserId){
            this.isEditAble = true
          }          

          this.operationRecordList = res.body.operationRecordList || [];
          this.competitionCompanyList = res.body.competitionCompanyList || [];
          this.ElectricityInformation = res.body.powerAmountList || [];
          this.leaderOfferPrices = res.body.leaderOfferPrices || [];
          this.ElectricityInformation = this.ElectricityInformation.map(
            item => {
              return {
                ...item,
                total: Object.keys(item)
                  .filter(el => el.includes("amount"))
                  .map(key => Number(item[key]))
                  .reduce((total, cur) => Number(total) + Number(cur))
              };
            }
          );
          this.date_list.isStateGrid = ISSTATEGRID[this.date_list.isStateGrid];
          this.date_list.voltageLevel = this.codeNames.voltageLevel[
            this.date_list.voltageLevel
          ];
          this.date_list.usePowerType = this.codeNames.usePowerType[
            this.date_list.usePowerType
          ];
          this.date_list.industry = this.codeNames.industry[
            this.date_list.industry
          ];
          const tradingType =
            this.tradingTypes.find(
              item => item.id === this.date_list.transactionVariety
            ) || {};
          this.date_list.transactionVariety = tradingType.name;
          this.TYPES.HISTORY_AMOUNT1 =
            Number(this.date_list.year) - 1 + "历史电量";
          this.TYPES.HISTORY_AMOUNT2 =
            Number(this.date_list.year) - 2 + "历史电量";
          this.TYPES.HISTORY_AMOUNT3 =
            Number(this.date_list.year) - 3 + "历史电量";
          this.initChart();
        }
      });
    },
    handleAddOfferPrice() {
      const id = this.one_id;
      // if (!this.offerPriceForm.offerPrice && !this.offerPriceForm) {
      //   this.$message("请填写报价");
      //   return;
      // }
      this_ajax.preCustomerLeaderEditService(
        {
          id,
          offerPrice: this.offerPriceForm.conventionalPrice,
          offerPriceFeng: this.offerPriceForm.conventionalPriceFeng,
          offerPricePing: this.offerPriceForm.conventionalPricePing,
          offerPriceKu: this.offerPriceForm.conventionalPriceKu
        },
        res => {
          if (res.status === 200) {
            this.getDetail();
          }
          this.resetOfferPrice();
        }
      );
    },
    handleLeaderNextStep(){
      const id = this.one_id;
      const submitStatus = 20
      this_ajax.preCustomerStatusModifyService({
        id,
        submitStatus
      })
    },
    addOfferPrice() {
      this.offerPriceVisible = true;
    },
    resetOfferPrice() {
      this.offerPriceForm.conventionalPrice = "";
      this.offerPriceForm.conventionalPriceFeng = "";
      this.offerPriceForm.conventionalPricePing = "";
      this.offerPriceForm.conventionalPriceKu = "";
      this.offerPriceForm.incrementPrice = "";
      this.offerPriceForm.remark = "";
      this.offerPriceVisible = false;
    },
    initChart() {
      let mychart = echarts.init(document.getElementById("myCharts"));
      const types = [
        "REAL",
        "CONTRACT",
        "TENDER",
        "HISTORY_AMOUNT1",
        "HISTORY_AMOUNT2",
        "HISTORY_AMOUNT3"
      ];
      const data = this.ElectricityInformation.filter(item =>
        types.includes(item.type)
      );
      mychart.setOption({
        title: { text: "" },
        tooltip: {},
        legend: {
          show: true,
          data: data.map(item => this.TYPES[item.type])
        },
        xAxis: {
          data: Array.from(Array(12)).map((v, k) => k + 1 + "月")
        },
        yAxis: {},
        series: data.map(item => {
          return {
            name: this.TYPES[item.type],
            type: "line",
            data: Object.keys(item)
              .filter(el => el.includes("amount"))
              .map(key => item[key])
          };
        })
      });
    },
    goback() {
      this.$router.push("/preSalePrice/index");
    },
    resetSendbackModal() {
      this.operationContent = "";
      this.sendbackModalVisible = false;
    },
    handleSendBack() {
      this.sendbackModalVisible = true;
    },
    handleSignature() {
      const id = this.one_id;
      const submitStatus = 30;
      this_ajax.preCustomerStatusModifyService(
        {
          id,
          submitStatus
        },
        res => {
          if (res.status === 200) {
            this.$message("签章成功！");
            this.$router.push("/preSalePrice/index");
          } else {
            this.$message(res.message);
          }
        }
      );
    },
    handleAbandon() {
      const id = this.one_id;
      const submitStatus = 40;
      this_ajax.preCustomerStatusModifyService(
        {
          id,
          submitStatus
        },
        res => {
          if (res.status === 200) {
            this.$message("该报价已废弃！");
            this.$router.push("/preSalePrice/index");
          } else {
            this.$message(res.message);
          }
        }
      );
    },
    sendBack() {
      const id = this.one_id;
      const operationContent = this.operationContent;

      this_ajax.preCustomerStatusModifyService(
        { id, submitStatus: 20, operationType: "退回", operationContent },
        res => {
          if (res.status === 200) {
            this.$message("该报价已退回！");
            this.$router.push("/preSalePrice/index");
          } else {
            this.$message(res.message);
          }
        }
      );
    },
    get_date(arr) {
      var now = new Date(arr * 1000),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
      return y + "." + (m < 10 ? "0" + m : m) + "." + (d < 10 ? "0" + d : d);
    },
    aff_cancel() {
      this.$router.push("/preSalePrice/index");
    },
    deta_edit() {
      const id = this.one_id;
      this.$router.push({ path: "/preSalePrice/edit", query: { id } });
    },
    leader_edit() {
      // const id = this.one_id;
      // this.$router.push({ path: "/preSalePrice/leader", query: { id } });
    },
    show_map(id) {
      let obj = {};
      if (this.menuList != "") {
        obj = this.menuList.find(item => {
          return item.id === id;
        });

        if (obj != undefined) {
          return obj.id;
        } else {
          return "";
        }
      } else {
        return "";
      }
    }
  },
  created() {
    this.getDetail();
    ajax_list.customerCodeService(
      "{}",
      res => {
        //列表字典
        this.$emit("login-success", res);
      },
      res => {
        this.codeNames.companyNature = res.body.companyNature;
        this.codeNames.usePowerType = res.body.usePowerType;
        this.codeNames.industry = res.body.industry;
        this.codeNames.voltageLevel = res.body.voltageLevel;
      }
    );
  }
};
</script>

<style scoped>
.input-item {
  display: flex;
  width: 300px;
  padding: 20px;
}
.input-item span {
  min-width: 100px;
  max-width: 100px;
  text-align: right;
  padding: 0 12px;
}
.leader-operate {
  width: 100%;
  text-align: right;
}
.goback {
  height: 80px;
  padding: 50px;
  text-align: center;
}
#myCharts {
  width: 100%;
  height: 320px;
  margin-top: 30px;
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

.ma_content {
  width: calc(100%);
  min-height: calc(100vh - 61px - 101px - 30px);
  background-color: #fff;
}

.top_title {
  width: 100%;
  height: 110px;
  text-align: center;
  /*background: url("../../assets/aImg/Group.png") center no-repeat;*/
  background-size: 100% 100%;
  position: relative;
}
.top_title .title_ba {
  width: 100%;
  height: 80px;
}

.top_title .title_type {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 62px;
  left: 50%;
  margin-left: -30px;
}

.top_name {
  width: 100%;
  margin-top: 15px;
}
.top_name p {
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 16px;
  color: rgba(63, 63, 63, 1);
  line-height: 18px;
  margin-bottom: 5px;
}
.top_name p span {
  font-size: 10px;
  display: inline-block;
  color: rgba(126, 179, 217, 1);
  padding: 1px 2px 0px 2px;
  line-height: 13px;
  text-align: center;
  border-radius: 2px;
  margin-left: 8px;
  position: relative;
  top: -2px;
  border: 1px solid rgba(126, 179, 217, 1);
}
.top_name p.date {
  font-size: 12px;
  color: #999;
}
.top_de {
  width: 100%;
  margin-top: 10px;
  text-align: center;
}
.top_de span {
  font-size: 12px;
  color: rgba(144, 144, 144, 1);
  line-height: 17px;
  padding: 0 8px;
  border-left: 1px solid rgba(240, 241, 242, 1);
}
.top_de span:nth-child(1) {
  border-left: 0px solid rgba(240, 241, 242, 1);
}
.deta_div {
  width: 90%;
  margin: 0 auto;
}
.deta_div_title {
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding: 10px 0px;
  border-bottom: 2px solid rgba(240, 241, 242, 1);
  border-radius: 2px;
}

.deta_div_title span {
  font-size: 14px;
  color: rgba(63, 63, 63, 1);
  padding-bottom: 16.5px;
  padding-left: 2px;
  border-bottom: 2px solid rgba(93, 179, 247, 1);
}
.deta_con {
  width: 96%;
  margin: 0 auto;
  margin-top: 10px;
}
.deta_con_title {
  width: 100%;
  height: 50px;
  margin: 30px 0 0 0;
}
.deta_con_title span {
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  color: rgb(20, 20, 20);
  padding: 10px 0;
}
.deta_con_title p {
  width: calc(100% - 70px);
  height: 2px;
  background: rgba(240, 241, 242, 1);
  border-radius: 2px;
  float: right;
  margin-top: 10px;
}
.deta_con_p {
  width: 100%;
  margin: 0 auto;
  overflow: auto;
  margin-top: 5px;
}
.deta_con_p div {
  display: inline-block;
  width: calc(100% / 3);
  margin: 6px 0px;
  /* float: left; */
}
.deta_con_p div label {
  width: calc(40% - 10px);
  float: left;
  text-align: right;
  font-size: 12px;
  color: rgba(120, 121, 123, 1);
}
.deta_con_p div p {
  width: 60%;
  float: right;
  text-align: left;
  font-size: 12px;
  color: rgba(65, 65, 65, 1);
}
@media screen and (max-width: 1430px) {
  .deta_con_p div label {
    width: calc(50% - 10px);
    float: left;
    text-align: right;
    font-size: 12px;
    color: rgba(120, 121, 123, 1);
  }
  .deta_con_p div p {
    width: 50%;
    float: right;
    text-align: left;
    font-size: 12px;
    color: rgba(65, 65, 65, 1);
  }
}
.top_btn {
  width: 100%;
  margin-top: 10px;
  text-align: center;
}
</style>
