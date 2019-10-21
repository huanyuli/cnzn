<template>
  <div>
    <div class="table-inputs">
      <div class="input-label">{{label}}</div>
      <div class="month-list">
        <div v-for="month in 12" :key="month">
          <span v-if="isHead">{{month}}月</span>
          <span v-if="!isHead">
            <el-input
              size="small"
              v-model.number="value[type]['amount'+month]"
              @input="onChange($event,month)"
              :disabled="!enableAll && !months.includes(month)"
            ></el-input>
          </span>
        </div>
        <div v-if="isHead">
          <span>合计</span>
        </div>
        <div v-else>
          <span>{{total}}</span>
        </div>
      </div>
      <i v-if="showExpand" class="el-icon-setting" @click="handleExpand"></i>
    </div>
    <el-dialog
      width="1200px"
      title="测算信息"
      :visible.sync="dialogFormVisible"
      class="dialog-form"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <el-form :model="dialogForm">
        <div class="input_3_3">
          <div>
            <span>分水期</span>
            <span>丰</span>
            <span>平</span>
            <span>枯</span>
          </div>
          <div>
            <span>电量</span>
            <span>
              <el-input
                v-model="dialogForm.amountFeng"
                @change="onChangeRate($event, 'total','Feng')"
              ></el-input>
            </span>
            <span>
              <el-input
                v-model="dialogForm.amountPing"
                @change="onChangeRate($event, 'total','Ping')"
              ></el-input>
            </span>
            <span>
              <el-input v-model="dialogForm.amountKu" @change="onChangeRate($event, 'total','Ku')"></el-input>
            </span>
          </div>
          <div>
            <span>比例</span>
            <span>
              <el-input v-model="dialogForm.rateFeng" @change="onChangeRate($event, 'rate','Feng')"></el-input>
            </span>
            <span>
              <el-input v-model="dialogForm.ratePing" @change="onChangeRate($event, 'rate','Ping')"></el-input>
            </span>
            <span>
              <el-input v-model="dialogForm.rateKu" @change="onChangeRate($event, 'rate','Ku')"></el-input>
            </span>
          </div>
        </div>
        <hr />
        <div class="input_36">
          <div>
            <span>月份</span>
            <span v-for="month in 12" :key="month">{{month}}月</span>
          </div>
          <div>
            <span>峰</span>
            <span v-for="month in 12" :key="month">
              <el-input v-model="FENG['amount'+month]" @change="onChangeMonthInput"></el-input>
            </span>
          </div>
          <div>
            <span>平</span>
            <span v-for="month in 12" :key="month">
              <el-input v-model="PING['amount'+month]" @change="onChangeMonthInput"></el-input>
            </span>
          </div>
          <div>
            <span>枯</span>
            <span v-for="month in 12" :key="month">
              <el-input v-model="GU['amount'+month]" @change="onChangeMonthInput"></el-input>
            </span>
          </div>
        </div>
        <hr />
        <div class="result">
          <h4>测算结果栏</h4>
          <p class="title">基础参数</p>
          <div class="list">
            <el-form :rules="dialogRules" :model="dialogBaseParam" :inline="true">
              <el-form-item label="变压器容量" prop="transformerCapacity">
                <el-input
                  placeholder="请输入"
                  size="medium"
                  v-model.number="dialogBaseParam.transformerCapacity"
                >
                  <template slot="append">MVA</template>
                </el-input>
              </el-form-item>
              <el-form-item label="申报类型" prop="applyType">
                <el-select
                  size="medium"
                  v-model="dialogBaseParam.applyType"
                  clearable
                  placeholder="请选择"
                >
                  <el-option label="按需" value="按需"></el-option>
                  <el-option label="按容" value="按容"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="电压等级" prop="two_3">
                <el-select
                  size="medium"
                  v-model="dialogBaseParam.two_3"
                  clearable
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in selectOptions.form_two_3"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="基金" prop="fund">
                <el-input size="medium" v-model="dialogBaseParam.fund"></el-input>
              </el-form-item>
              <el-form-item label="常规价">
                <el-input size="medium" v-model="dialogBaseParam.conventionalPrice"></el-input>
              </el-form-item>
              <el-form-item label="弃水价">
                <el-input size="medium" v-model="dialogBaseParam.abandonPrice"></el-input>
              </el-form-item>
              <el-form-item label="富余价">
                <el-input size="medium" v-model="dialogBaseParam.surplusPrice"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <p class="title">测算结果</p>
          <div class="list">
            <div>
              <span>常规+富余电费</span>
              <span>{{dialogResult.conventionalSurplusCost}}</span>
            </div>
            <div>
              <span>目录电费</span>
              <span>{{dialogResult.directoryCost}}</span>
            </div>
            <div>
              <span>纯富余电费</span>
              <span>{{dialogResult.surplusCost}}</span>
            </div>
            <div>
              <span>常规电费</span>
              <span>{{dialogResult.conventionalCost}}</span>
            </div>
            <div>
              <span>弃水电费</span>
              <span>{{dialogResult.abandonCost}}</span>
            </div>
          </div>
          <div class="handleCalc">
            <el-button type="primary" @click="preCustomerCalculationService">测算</el-button>
          </div>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetDialog">取 消</el-button>
        <el-button type="primary" @click="handleConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import this_ajax from "../../../api/preSalePrice";
export default {
  name: "month-table-input",
  data() {
    return {
      isLoadedData: false,
      total: "",
      enableAll: true,
      formLabelWidth: 180,
      FENG: {},
      PING: {},
      GU: {},
      dialogBaseParam: {},
      dialogForm: {
        amountFeng: "",
        amountPing: "",
        amountKu: "",
        rateFeng: "",
        ratePing: "",
        rateKu: ""
      },
      dialogFormVisible: false,
      dialogResult: {},
      dialogRules: {
        fund: [{ required: true, message: "请输入", trigger: "blur" }],
        transformerCapacity: [{ required: true, message: "请输入", trigger: "blur" }],
        two_3: [{ required: true, message: "请选择", trigger: "blur" }],
        applyType: [{ required: true, message: "请选择", trigger: "blur" }],
      }
    };
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: Object,
      default: () => {}
    },
    baseParam: {
      type: Object,
      default: () => {}
    },
    months: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: ""
    },
    showExpand: {
      type: Boolean,
      default: true
    },
    showTotal: {
      type: Boolean,
      default: true
    },
    isHead: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ""
    },
    relate: {
      type: String,
      default: ""
    },
    selectOptions: {
      type: Object,
      default: () => {}
    },
    powerAmountCalculation: {
      type: Object,
      default: () => {}
    }

  },
  mounted() {
    if (this.months.length) {
      this.enableAll = false;
    }
  },
  methods: {
    onChangeMonthInput() {
      this.dialogForm = {
        amountFeng: "",
        amountPing: "",
        amountKu: "",
        rateFeng: "",
        ratePing: "",
        rateKu: ""
      };
    },
    onChangeRate(value, type, name) {
      const that = this;
      let rates = [];
      if (type === "total") {
        rates = that.dialogForm["rate" + name].split(":");
      } else if (type === "rate") {
        rates = value.split(":");
      } else {
        return;
      }
      if (rates.length && rates[0] !== "") {
        let months = [];
        let total = "";
        if (name === "Feng") {
          months = [6, 7, 8, 9, 10];
          total = this.dialogForm.amountFeng;
        }
        if (name === "Ping") {
          months = [5, 11];
          total = this.dialogForm.amountPing;
        }
        if (name === "Ku") {
          months = [1, 2, 3, 4, 12];
          total = this.dialogForm.amountKu;
        }

        const firstNum = (Number(total) * Number(rates[0])) / 100;
        const secondNum = (Number(total) * Number(rates[1])) / 100;
        const thirdNum = (Number(total) * Number(rates[2])) / 100;

        months.forEach(month => {
          that.FENG["amount" + month] = firstNum;
          that.PING["amount" + month] = secondNum;
          that.GU["amount" + month] = thirdNum;
        });
      }
      this.$forceUpdate();
    },
    preCustomerCalculationService() {
      const powerList = this.getRecords();
      const {
        transformerCapacity,
        two_3: voltageLevel,
        applyType,
        conventionalPrice,
        conventionalPriceFeng,
        conventionalPricePing,
        conventionalPriceKu,
        surplusPrice,
        abandonPrice,
        fund,
      } = this.dialogBaseParam;
      let data = {
        surplusBase: this.value.SURPLUS_BASE,
        powerList,
        baseParam: {
          //基础参数
          fund,
          transformerCapacity, //变压器容量
          voltageLevel, //LEVEL_0_4KV，LEVEL_6_3KV，LEVEL_10KV，LEVEL_35KV，LEVEL_110KV，LEVEL_220KV
          applyType,
          conventionalPrice, //常规直购电价-一口价
          conventionalPriceFeng, //常规直购电价-分水期-丰
          conventionalPricePing, //常规直购电价-分水期-平
          conventionalPriceKu, //常规直购电价-分水期-枯
          surplusPrice, //富余价
          abandonPrice //弃水价
        }
      };
      this_ajax.preCustomerCalculationService(data, res => {
        if (res.status === 200) {
          this.dialogResult = res.body || {};
        } else {
          this.$message(res.message);
        }
        // 构造请求数据
        if (!this.value[this.type].powerAmountCalculation) {
          this.value[this.type].powerAmountCalculation = {
            ...res.body
          };
        }
        this.value[this.type].powerAmountCalculation.records = powerList;
      });
    },
    resetDialog() {
      // this.dialogForm = { ...defaultDialogForm, FENG: {}, PING: {}, GU: {} };
      this.dialogFormVisible = false;
    },
    getRecords() {
      let records = [];
      records.push({ divisionTimeType: "FENG", ...this.FENG });
      records.push({ divisionTimeType: "PING", ...this.PING });
      records.push({ divisionTimeType: "GU", ...this.GU });
      return records;
    },
    handleConfirm() {
      this.resetDialog();
    },
    onChange(value, month) {
      console.log(this.value[this.type]);
      const cur = "amount" + month;
      let targetValue = {
        ...this.value,
        [this.type]: { ...this.value[this.type], [cur]: value }
      };
      if (this.relate) {
        targetValue[this.relate][cur] =
          Number(value) - Number(targetValue.SURPLUS_BASE[cur] || 0);
      }
      if (this.type === "SURPLUS_BASE") {
        targetValue.REAL_MINUS_SURPLUS[cur] =
          Number(targetValue.REAL[cur] || 0) -
          Number(targetValue.SURPLUS_BASE[cur] || 0);
        targetValue.CONTRACT_MINUS_SURPLUS[cur] =
          Number(targetValue.CONTRACT[cur] || 0) -
          Number(targetValue.SURPLUS_BASE[cur] || 0);
        targetValue.TENDER_MINUS_SURPLUS[cur] =
          Number(targetValue.TENDER[cur] || 0) -
          Number(targetValue.SURPLUS_BASE[cur] || 0);
      }
      this.total = Object.values(targetValue[this.type]).reduce(
        (total, cur) => Number(total) + Number(cur)
      );
      this.$emit("change", targetValue);
    },
    handleExpand() {
      this.dialogFormVisible = true;
      if (!this.isLoadedData) {
        this.dialogBaseParam = { ...this.baseParam };
        this.FENG = {...this.powerAmountCalculation[this.type].FENG};
        this.PING = {...this.powerAmountCalculation[this.type].PING};
        this.GU = {...this.powerAmountCalculation[this.type].GU};
        this.isLoadedData = true;
      }
    }
  }
};
</script>
<style scoped>
.table-inputs {
  display: flex;
  flex-wrap: nowrap;
  margin: 15px 0;
  position: relative;
}
.table-inputs .input-label {
  width: 160px;
  line-height: 2;
  font-size: 14px;
}
.table-inputs .month-list {
  width: 82%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.table-inputs .month-list > div {
  width: 7%;
}

.table-inputs .month-list > div span {
  text-align: center;
  display: inline-block;
  width: 100%;
  margin: 0 3px;
}
.table-inputs .el-icon-setting {
  position: absolute;
  right: 0;
  top: 6px;
  cursor: pointer;
}
.dialog-form {
}
.dialog-form  .el-form--inline .el-form-item{
  width: 40%;
}
.result .el-form--inline .el-form-item__label{
  width: 120px;
}

.dialog-form .input_3_3,
.dialog-form .input_36 {
  margin: 15px 0;
}
.dialog-form .input_3_3 > div,
.dialog-form .input_36 > div {
  margin-top: 10px;
}
.dialog-form .input_3_3 > div span,
.dialog-form .input_36 > div span {
  display: inline-block;
  width: 80px;
  text-align: center;
  margin: 0 3px;
}
.result {
  margin: 20px;
}
.result p.title {
  text-align: center;
  font-weight: bold;
}
.result .list {
  width: 85%;
  margin: 20px auto;
}
.result .list > div {
  width: 30%;
  display: inline-block;
  margin: 7px;
}

.result .list > div span {
  width: 100px;
  display: inline-block;
  text-align: left;
}
.handleCalc {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}
.handleCalc .el-button {
  width: 20%;
}
</style>