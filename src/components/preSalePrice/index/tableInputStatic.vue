<template>
  <div>
    <div class="table-inputs">
      <div class="input-label">{{label}}</div>
      <div class="month-list">
        <div v-for="month in 12" :key="month">
          <span>
            <el-input size="small" v-model="value[type]['amount'+month]" disabled></el-input>
          </span>
        </div>
        <div>
          <span>{{total}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import this_ajax from "../../../api/preSalePrice";

export default {
  name: "table-input-static",
  data() {
    return {
      total: ""
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
    type: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    }
  },
  mounted() {
    console.log(this.value[this.type]);
  },
  methods: {}
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