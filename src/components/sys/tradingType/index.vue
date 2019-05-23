<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <span></span>
        <p>交易类型管理</p>
      </div>
      <div class="ma_content">
        <div class="content_list">
          <el-tabs
            type="border-card"
            addable
            @tab-click="handleClickType"
            @tab-add="dialogVisible = true"
          >
            <el-tab-pane v-for="item in list" :key="item.id" :label="item.name" :id="item.id">
              <span v-for="col in currentItem" :key="col.columnCode">{{col.columnName}}</span>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>

    <el-dialog title="交易类型" :visible.sync="dialogVisible" width="70%">
      <div class="add_div">
        <div class="add_div_one">
          <div class="one_con">
            <el-form ref="itemForm" :model="itemForm">
              <el-form-item
                label="交易类型名称"
                prop="tableName"
                :rules="{ required: true, message: '请输入类型名称', trigger: 'blur' }"
              >
                <el-input v-model="itemForm.tableName"></el-input>
              </el-form-item>
              <p v-if="!itemForm.columns.length">点击增加表列，开始增加表列...</p>
              <div class="columns-item" v-for="(item,index) in itemForm.columns" :key="index">
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
                    <el-option
                      v-for="month in monthOptions"
                      :key="month"
                      :label="month+'月'"
                      :value="month"
                    ></el-option>
                  </el-select>
                  <el-input
                    v-if="item[key].type === 'input'"
                    v-model="itemForm.columns[index][key].value"
                  ></el-input>
                  <el-input-number
                    v-if="item[key].type === 'inputNumber'"
                    v-model="itemForm.columns[index][key].value"
                    controls-position="right"
                    :min="1"
                  ></el-input-number>
                  <el-switch
                    v-if="item[key].type === 'switch'"
                    v-model="itemForm.columns[index][key].value"
                  ></el-switch>
                </el-form-item>
                <el-button
                  class="delete-item"
                  type="danger"
                  icon="el-icon-delete"
                  @click="handleDeleteItem(index)"
                ></el-button>
              </div>
            </el-form>
          </div>
        </div>
        <div class="add_div_two" slot="footer">
          <el-button class="wi_btn" @click="dialogVisible = false">取 消</el-button>
          <el-button type="success" @click="handleAddColumns">增加表列</el-button>
          <el-button class="cont_btn" type="primary" @click="handleSubmit">确 定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// 引入axios
import ajax_list from "../../../api/sys";

export default {
  data() {
    return {
      dialogVisible: false,
      itemForm: {
        tableName: "",
        columns: []
      },
      list: [],
      currentItem: [],
      monthOptions: Array.from({ length: 12 }, (v, k) => k + 1)
    };
  },
  methods: {
    validateColumnName(rule, value, cb) {
      if (!value) {
        cb(new Error("请输入列名称"));
      } else {
        if (
          this.itemForm.columns.filter(item => item.columnName.value === value)
            .length > 1
        ) {
          return cb(new Error("列名称重复，请重新输入"));
        } else {
          cb();
        }
      }
    },
    validateColumnOrder(rule, value, cb) {
      if (
        this.itemForm.columns.filter(item => item.orderIndex.value === value)
          .length > 1
      ) {
        return cb(new Error("列序号重复，请重新输入"));
      }
      cb();
    },
    handleSubmit() {
      this.$refs.itemForm.validate(valid => {
        if (valid) {
          const columns = this.itemForm.columns.map(item => {
            return {
              canWriteMonth: item.canWriteMonth.value.join(","),
              isYearAmount: item.isYearAmount.value ? "Y" : "N",
              orderIndex: item.orderIndex.value,
              columnCode: "col" + item.orderIndex.value,
              columnName: item.columnName.value
            };
          });
          ajax_list.contractTableCreateService(
            {
              tableName: this.itemForm.tableName,
              columns
            },
            res => {
              this.dialogVisible = false;
              ajax_list.contractTableListService(
                {},
                this.handleContractTableListServiceOk,
                this.handleContractTableListServiceErros
              );
            }
          );
        }
      });
    },
    handleDeleteItem(index) {
      this.itemForm.columns.splice(index, 1);
    },
    handleAddColumns() {
      this.itemForm.columns.push({
        columnName: {
          name: "列名称",
          type: "input",
          value: "",
          rule: [
            { required: true, message: "请输入表格列名称", trigger: "blur" },
            { validator: this.validateColumnName, trigger: ["blur", "change"] }
          ]
        },
        canWriteMonth: {
          name: "能写入的月份",
          type: "select",
          value: "",
          rule: { required: true, message: "请选择月份", trigger: "blur" }
        },
        orderIndex: {
          name: "列序号",
          type: "inputNumber",
          value: this.itemForm.columns.length + 1,
          rule: [
            { required: true, message: "请输入排序号", trigger: "blur" },
            { validator: this.validateColumnOrder, trigger: ["blur", "change"] }
          ]
        },
        isYearAmount: {
          name: "是否年度交易电量",
          type: "switch",
          value: false
        }
      });
      //   this.$nextTick(() => {
      //     this.$refs.itemForm.validate();
      //   });
    },
    handleAddType() {},
    handleClickType(tab) {
      ajax_list.contractTableDetailService({ tableId: tab.$attrs.id }, res => {
        this.currentItem = res.body;
      });
    },
    handleContractTableListServiceOk(res) {
      this.list = res.body || [];
      if (this.list.length) {
        ajax_list.contractTableDetailService(
          { tableId: this.list[0].id },
          res => {
            this.currentItem = res.body;
          }
        );
      }
    },
    handleContractTableListServiceErros(res) {
      console.log(res);
    }
  },

  created() {
    ajax_list.contractTableListService(
      {},
      this.handleContractTableListServiceOk,
      this.handleContractTableListServiceErros
    );
  }
};
</script>

<style scoped>
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

.ma_content {
  width: 100%;
  min-height: calc(100vh - 61px - 101px - 16px);
}

.ma_title span {
  display: inline-block;
  width: 4px;
  height: 16px;
  margin-top: 12px;
  margin-left: 10px;
  border-radius: 2px;
  background: rgba(0, 119, 221, 1);
  float: left;
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
.ma_screen {
  width: 100%;
  height: 60px;
  padding-top: 10px;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
}
.ma_btn {
  width: calc(100% - 20px);
  padding: 9px 10px;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
}

.div_row {
  width: 100%;
  overflow: auto;
}
.div_row .row_right {
  width: 46%;
  float: right;
}
.div_row .row_left {
  width: 46%;
  float: left;
}
.ma_ui_div {
  width: 370px;
  height: 30px;
  float: left;
  margin-left: 30px;
  margin-top: 10px;
  margin-bottom: 5px;
}

.ma_ui_div p {
  width: 60px;
  height: 30px;
  line-height: 30px;
  float: left;
  font-size: 12px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
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

.content_list {
  width: calc(100% - 30px);
  margin: 0 auto;
  padding-top: 20px;
  min-height: calc(100vh - 352px);
  background-color: white;
}
.list_table {
  width: 96%;
  margin: 0px auto;
  margin-top: 40px;
  margin-bottom: 10px;
  border: 1px solid rgba(234, 234, 234, 1);
}

/*** 弹窗 ***/

.add_div {
  background-color: white;
  padding-bottom: 1px;
}
.add_div_one {
  width: 100%;
  min-height: 150px;
  /*background:rgba(73,138,243,1);*/
}
.add_div_one .one_title {
  margin-left: 28px;
  padding-top: 20px;
  font-size: 16px;
  font-weight: bold;
  color: rgba(254, 254, 254, 1);
}
.add_div_one .one_title i {
  float: right;
  margin-right: 28px;
  font-size: 18px;
  margin-top: 2px;
}
.one_con {
  width: 86%;
  margin: 0px auto;
  margin-top: 50px;
}

.one_con_img {
  width: 50%;
  float: left;
  margin-top: 10px;
}
.one_con_img p {
  margin-top: 30px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: rgba(254, 254, 254, 1);
}
.one_con_img div {
  width: 130px;
  height: 130px;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 50%;
}
.one_con .one_img {
  background: url("../../../assets/aImg/one_con1s.png") center no-repeat;
}
.one_con .one_imgs {
  background: url("../../../assets/aImg/one_con1.png") center no-repeat;
}
.two_img {
  background: url("../../../assets/aImg/one_con2.png") center no-repeat;
}
.two_imgs {
  background: url("../../../assets/aImg/one_con2s.png") center no-repeat;
}
.add_div_two {
  width: 400px;
  margin: 30px auto;
  overflow: auto;
  display: flex;
  justify-content: center;
}
.cont_btn {
  width: 100px;
}
.cont_btn button {
  width: 100%;
  font-size: 14px;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 1);
  background: rgba(93, 179, 247, 1);
}
.wi_btn {
  width: 100px;
}
.wi_btn button {
  width: 100%;
  font-size: 14px;
  margin-bottom: 10px;
  color: rgba(150, 150, 150, 1);
  background: #fff;
}

/*** 弹窗结束 **/
</style>
<style>
.el-dialog__header {
  background: rgba(73, 138, 243, 1) !important;
}
.el-dialog__title {
  color: white;
  font-size: 16px;
}

.el-dialog__headerbtn .el-dialog__close {
  color: white;
}
.el-dialog__body {
  padding: 0;
}
.el-message .el-icon-success {
  color: #3364e4;
}
.el-message--success .el-message__content {
  color: #606060;
}
.el-message--success {
  background-color: rgba(242, 245, 255, 1);
  border-color: #e1f3d8;
}
.el-table .cell {
  font-size: 12px;
  font-weight: 400;
  color: #606060;
}
.el-table th > .cell {
  font-size: 14px;
}

.add_alert .el-button {
  padding: 8px 12px;
  font-size: 12px;
}
/* .one_con .el-button {
  color: rgba(0, 132, 238, 0.67);
  border: 1px solid rgba(0, 132, 238, 0.67);
} */
.list_table .el-button {
  padding: 8px 12px;
  font-size: 10px;
}

.list_table .el-button:nth-child(1) {
  color: #0077dd;
  border: 1px solid #0077dd;
}
.list_table .el-button:nth-child(2):hover {
  color: #5a5e66;
  border: 1px solid #d8dce5;
}
.el-tabs__new-tab {
  border: 1px solid #3a8ee6;
  color: #409eff;
  margin: 12px 10px 9px 10px;
}
.columns-item {
  border: 1px solid #3a8ee6;
  padding: 10px 0 0 10px;
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.addColumns {
  text-align: center;
}
.el-form-item {
  display: flex;
  width: 50%;
}
.delete-item {
  position: absolute;
  top: 50%;
  margin-top: -15px;
  right: -50px;
  border-radius: 50%;
  padding: 12px;
  color: #fff !important;
  background-color: #f56c6c;
  border-color: #f56c6c !important;
}
</style>
