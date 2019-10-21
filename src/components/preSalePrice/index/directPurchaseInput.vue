<template>
  <div class="direct-purchase-input">
    <el-form-item v-if="isOne">
      <el-input v-model="value.conventionalPrice"></el-input>
    </el-form-item>
    <el-form-item v-else>
      <el-col :span="7">
        <el-input placeholder="丰" v-model="value.conventionalPriceFeng"></el-input>
      </el-col>
      <el-col :span="7" :offset="1">
        <el-input placeholder="平" v-model="value.conventionalPricePing"></el-input>
      </el-col>
      <el-col :span="7" :offset="2">
        <el-input placeholder="枯" v-model="value.conventionalPriceKu"></el-input>
      </el-col>
    </el-form-item>
    <i class="el-icon-sort" v-if="isOne" @click="handleSwitch">一口价</i>
    <i class="el-icon-sort" v-else @click="handleSwitch">分水期</i>
  </div>
</template>
<script>
export default {
  name: "direct-purchase-input",
  data() {
    return {
      isOne: true // 输入类型, 一口价，分水期
    };
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: Object,
      default: () => ({
        conventionalPrice: "",
        conventionalPriceFeng: "",
        conventionalPricePing: "",
        conventionalPriceKu: ""
      })
    }
  },
  created() {},
  methods: {
    handleSwitch() {
      if (this.isOne) {
        this.value.conventionalPrice = "";
      } else {
        this.value.conventionalPriceFeng = "";
        this.value.conventionalPricePing = "";
        this.value.conventionalPriceKu = "";
      }
      console.log(this.value)
      this.isOne = !this.isOne;
      this.$forceUpdate();
    }
  }
};
</script>
<style scoped>
.direct-purchase-input {
  display: inline-block;
  position: relative;
}
.direct-purchase-input .el-icon-sort {
  position: absolute;
  right: -75px;
  cursor: pointer;
  top: 13px;
  color: #409eff;
}
</style>