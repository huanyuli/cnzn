<template>
  <div>
    <el-form-item
      v-for="key in Object.keys(item)"
      :label="item[key].name"
      :prop="'columns.'+index+'.'+key+'.value'"
      :rules="item[key].rule"
      :key="key"
    >
      <el-select
        v-if="item[key].type === 'select'"
        v-model="itemForm.columns[index][key].value"
        multiple
        placeholder="请选择月份"
      >
        <el-option v-for="month in monthOptions" :key="month" :label="month+'月'" :value="month"></el-option>
      </el-select>
      <el-input v-if="item[key].type === 'input'" v-model="itemForm.columns[index][key].value"></el-input>
      <el-input-number
        v-if="item[key].type === 'inputNumber'"
        v-model="itemForm.columns[index][key].value"
        controls-position="right"
        :min="1"
      ></el-input-number>
      <el-switch v-if="item[key].type === 'switch'" v-model="itemForm.columns[index][key].value"></el-switch>
    </el-form-item>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    item: Array
  }
};
</script>