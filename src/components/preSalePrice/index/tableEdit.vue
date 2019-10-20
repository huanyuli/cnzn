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
      destroy-on-close
      width="1200px"
      title="测算信息"
      :visible.sync="dialogFormVisible"
      class="dialog-form"
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
              <el-input v-model="dialogForm.amountFeng"></el-input>
            </span>
            <span>
              <el-input v-model="dialogForm.amountPing"></el-input>
            </span>
            <span>
              <el-input v-model="dialogForm.amountKu"></el-input>
            </span>
          </div>
          <div>
            <span>比例</span>
            <span>
              <el-input v-model="dialogForm.rateFeng"></el-input>
            </span>
            <span>
              <el-input v-model="dialogForm.ratePing"></el-input>
            </span>
            <span>
              <el-input v-model="dialogForm.rateKu"></el-input>
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
              <el-input v-model="dialogForm.FENG['amount'+month]"></el-input>
            </span>
          </div>
          <div>
            <span>平</span>
            <span v-for="month in 12" :key="month">
              <el-input v-model="dialogForm.PING['amount'+month]"></el-input>
            </span>
          </div>
          <div>
            <span>枯</span>
            <span v-for="month in 12" :key="month">
              <el-input v-model="dialogForm.GU['amount'+month]"></el-input>
            </span>
          </div>
        </div>
        <hr />
        <div class="result">
          <h4>测算结果栏</h4>
          <p class="title">基础参数</p>
          <div class="list">
            <div>
              <span>变压器容量</span>
              <span>--</span>
            </div>
            <div>
              <span>按需/按容</span>
              <span>--</span>
            </div>
            <div>
              <span>电压等级</span>
              <span>--</span>
            </div>
            <div>
              <span>基金</span>
              <span>--</span>
            </div>
            <div>
              <span>常规价</span>
              <span>--</span>
            </div>
            <div>
              <span>弃水价</span>
              <span>--</span>
            </div>
            <div>
              <span>富余价</span>
              <span>--</span>
            </div>
          </div>
          <p class="title">测算结果</p>
          <div class="list">
            <div>
              <span>常规+富余电费</span>
              <span>--</span>
            </div>
            <div>
              <span>目录电费</span>
              <span>--</span>
            </div>
            <div>
              <span>纯富余电费</span>
              <span>--</span>
            </div>
            <div>
              <span>常规电费</span>
              <span>--</span>
            </div>
            <div>
              <span>弃水电费</span>
              <span>--</span>
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
const defaultDialogForm = {
  amountFeng: "",
  amountPing: "",
  amountKu: "",
  rateFeng: "",
  ratePing: "",
  rateKu: "",
  FENG: {},
  PING: {},
  GU: {}
};
export default {
  name: "month-table-input",
  data() {
    return {
      total: "",
      enableAll: true,
      formLabelWidth: 180,
      dialogForm: { ...defaultDialogForm },
      dialogFormVisible: false
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
    }
  },
  mounted() {
    if (this.months.length) {
      this.enableAll = false;
    }
  },
  methods: {
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
        abandonPrice
      } = this.baseParam;
      let data = {
        powerList,
        baseParam: {
          //基础参数
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
        console.log(res);
        const body = {
          directoryCost: 2714855.54765, //目录电费
          conventionalCost: 0, //纯常规电费
          conventionalSurplusCost: 0, //常规+富余电费
          surplusCost: 0, //纯富余电费
          abandonCost: 0 //弃水电费
        };
        if (!this.value[this.type].powerAmountCalculation) {
          this.value[this.type].powerAmountCalculation = {
            ...body
          };
        }
        this.value[this.type].powerAmountCalculation.records = powerList;
        // dialog 表单信息
      });
    },
    resetDialog() {
      this.dialogForm = { ...defaultDialogForm, FENG: {}, PING: {}, GU: {} };
      this.dialogFormVisible = false;
    },
    getRecords() {
      let records = [];
      records.push({ divisionTimeType: "FENG", ...this.dialogForm.FENG });
      records.push({ divisionTimeType: "PING", ...this.dialogForm.PING });
      records.push({ divisionTimeType: "GU", ...this.dialogForm.GU });
      return records;
    },
    handleConfirm() {
      let result = {};
      let records = this.getRecords();
      result = {
        records
      };
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
        console.log(
          Number(value) - Number(targetValue.SURPLUS_BASE[cur]  || 0)
        );
        targetValue[this.relate][cur] =
          Number(value) - Number(targetValue.SURPLUS_BASE[cur]  || 0);
      }
      if (this.type === "SURPLUS_BASE") {
          targetValue.REAL_MINUS_SURPLUS[cur] =
            Number(targetValue.REAL[cur] || 0) -
            Number(targetValue.SURPLUS_BASE[cur]  || 0);
          targetValue.CONTRACT_MINUS_SURPLUS[cur] =
            Number(targetValue.CONTRACT[cur]  || 0) -
            Number(targetValue.SURPLUS_BASE[cur]  || 0);
          targetValue.TENDER_MINUS_SURPLUS[cur] =
            Number(targetValue.TENDER[cur]  || 0) -
            Number(targetValue.SURPLUS_BASE[cur]  || 0);
      }
      this.total = Object.values(targetValue[this.type]).reduce(
        (total, cur) => Number(total) + Number(cur)
      );
      this.$emit("change", targetValue);
    },
    handleExpand() {
      this.dialogFormVisible = !this.dialogFormVisible;
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
  width: 80%;
  margin: 20px auto;
}
.result .list > div {
  display: inline-block;
  margin-bottom: 15px;
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