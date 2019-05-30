<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <span></span>
        <p>交易品种表管理</p>
      </div>
      <div class="ma_content">
        <div class="content_list">
          <div class="buttons">
            <el-button type="primary" @click="dialogVisible = true">新增品种</el-button>
          </div>
          <el-tabs type="border-card" @tab-click="handleClickType">
            <el-tab-pane
              v-for="item in list"
              :key="item.id"
              :label="item.name"
              :id="item.id"
              :tableName="item.name"
            >
              <div class="table-title">
                <el-button type="primary" @click="hanldeEdit(item)" icon="el-icon-edit" title="修改"></el-button>
              </div>
              <el-table :data="generateRows()" border size="small">
                <el-table-column prop="month" label="月份"></el-table-column>
                <el-table-column
                  v-for="col in currentItem"
                  :key="col.columnCode"
                  :prop="col.columnCode"
                  :label="col.columnName"
                >
                  <template slot-scope="scope">
                    <span v-if="scope.row[col.columnCode]">
                      <el-input></el-input>
                    </span>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
          <el-pagination
            background
            layout="prev, pager, next"
            :current-page="query.page"
            :page-size="query.limit"
            :total="query.count"
            @current-change="onChangePage"
            @prev-click="onChangePage"
            @next-click="onChangePage"
          ></el-pagination>
        </div>
      </div>
    </div>

    <el-dialog title="交易品种" :visible.sync="dialogVisible" width="70%">
      <div class="add_div">
        <div class="add_div_one">
          <div class="one_con">
            <el-form ref="itemForm" :model="itemForm">
              <div style="width:100%;display:flex;justify-content: space-between">
                <el-form-item
                  label="品种名称"
                  prop="tableName"
                  :rules="{ required: true, message: '请输入品种名称', trigger: 'blur' }"
                >
                  <el-input v-model="itemForm.tableName"></el-input>
                </el-form-item>
                <el-form-item label="有效月份" prop="canWriteMonth">
                  <el-select
                    v-model="itemForm.canWriteMonth"
                    multiple
                    collapse-tags
                    placeholder="请选择有效月份"
                  >
                    <el-option
                      v-for="month in monthOptions"
                      :key="month"
                      :label="month+'月'"
                      :value="month"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>

              <p v-if="!itemForm.columns.length">点击增加表列，开始增加表列...</p>
              <div class="columns-item" v-for="(item,index) in itemForm.columns" :key="index">
                <div
                  v-if="item.children.length > 0"
                  style="width:100%;display:flex;flex-wrap:wrap;"
                >
                  <div style="width:100%;display:flex;">
                    <el-form-item
                      label="组合列名称"
                      :prop="'columns.'+index+'.columnName.value'"
                      :rules="item.columnName.rule"
                    >
                      <el-input v-model="itemForm.columns[index].columnName.value"></el-input>
                    </el-form-item>
                    <el-form-item
                      label="组合列序号"
                      :rules="item.orderIndex.rule"
                      :prop="'columns.'+index+'.orderIndex.value'"
                    >
                      <el-input-number
                        controls-position="right"
                        :min="1"
                        v-model="itemForm.columns[index].orderIndex.value"
                      ></el-input-number>
                    </el-form-item>
                  </div>
                  <div class="child-columns-item" v-for="(child,idx) in item.children" :key="idx">
                    <el-form-item
                      v-for="key in fields"
                      :label="child[key].name"
                      :prop="'columns.'+idx+'.'+key+'.value'"
                      :rules="child[key].rule"
                      :key="key"
                    >
                      <el-select
                        v-if="child[key].type === 'select'"
                        v-model="itemForm.columns[index].children[idx][key].value"
                        multiple
                        collapse-tags
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
                        v-if="child[key].type === 'input'"
                        v-model="itemForm.columns[index].children[idx][key].value"
                      ></el-input>
                      <el-input-number
                        v-if="child[key].type === 'inputNumber'"
                        v-model="itemForm.columns[index].children[idx][key].value"
                        controls-position="right"
                        :min="1"
                      ></el-input-number>
                      <el-switch
                        v-if="child[key].type === 'switch'"
                        v-model="itemForm.columns[index].children[idx][key].value"
                      ></el-switch>
                    </el-form-item>
                  </div>
                  <el-button
                    class="delete-item"
                    type="danger"
                    icon="el-icon-delete"
                    @click="handleDeleteItem(index)"
                  ></el-button>
                  <!-- <el-button
                    class="add-child"
                    type="success"
                    icon="el-icon-plus"
                    @click="handleAddChild(index)"
                  ></el-button>-->
                </div>
                <div
                  v-if="item.children.length === 0"
                  style="width:100%;display:flex;flex-wrap:wrap;"
                >
                  <el-form-item
                    v-for="key in fields"
                    :label="item[key].name"
                    :prop="'columns.'+index+'.'+key+'.value'"
                    :rules="item[key].rule"
                    :key="key"
                  >
                    <el-select
                      v-if="item[key].type === 'select'"
                      v-model="itemForm.columns[index][key].value"
                      multiple
                      collapse-tags
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
                  <!-- <el-button
                    class="add-child"
                    type="success"
                    icon="el-icon-plus"
                    @click="handleAddChild(index)"
                  ></el-button>-->
                </div>
              </div>
            </el-form>
          </div>
        </div>
        <div class="add_div_two" slot="footer">
          <el-button class="wi_btn" @click="handleCloseModal">取 消</el-button>
          <el-button type="success" @click="handleAddColumns()">增加表列</el-button>
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
      tableId: null,
      isEidt: false,
      dialogVisible: false,
      fields: ["columnName", "canWriteMonth", "orderIndex", "isYearAmount"],
      fieldsOption: {
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
          value: ""
        },
        orderIndex: {
          name: "列序号",
          type: "inputNumber",
          value: 1,
          rule: [
            { required: true, message: "请输入排序号", trigger: "blur" },
            { validator: this.validateColumnOrder, trigger: ["blur", "change"] }
          ]
        },
        isYearAmount: {
          name: "是否年度交易电量",
          type: "switch",
          value: false
        },
        children: []
      },
      itemForm: {
        tableName: "",
        canWriteMonth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        columns: []
      },
      list: [],
      currentItem: [],
      query: {
        limit: 10,
        page: 1,
        count: 0
      },
      monthOptions: Array.from({ length: 12 }, (v, k) => k + 1)
    };
  },
  methods: {
    onChangePage(page) {
      this.query.page = page;
      ajax_list.contractTableListService(
        this.query,
        this.handleContractTableListServiceOk,
        this.handleContractTableListServiceErros
      );
    },
    compare(property) {
      return function(a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
      };
    },
    generateRows() {
      let data = Array.from({ length: 12 }, (v, k) => k);
      data = data.map(month => {
        let col = { month: month + 1 + "月" };
        this.currentItem.forEach(item => {
          col[item.columnCode] = item.canWriteMonth
            .split(",")
            .includes(String(month + 1));
        });
        return col;
      });
      return data;
    },
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
    handleCloseModal() {
      this.dialogVisible = false;
      this.isEidt = false;
      this.tableId = null;
      this.itemForm = {
        tableName: "",
        columns: []
      };
    },
    handleSubmit() {
      this.$refs.itemForm.validate(valid => {
        if (valid) {
          const columns = this.itemForm.columns.map(item => {
            return {
              canWriteMonth: item.canWriteMonth.value.join(","),
              isYearAmount: item.isYearAmount.value ? "Y" : "N",
              orderIndex: item.orderIndex.value,
              columnCode:
                item.columnCode.value || "col" + item.orderIndex.value,
              columnName: item.columnName.value
            };
          });
          if (this.isEidt) {
            ajax_list.contractTableEditService(
              {
                tableName: this.itemForm.tableName,
                canWriteMonth: this.itemForm.canWriteMonth,
                columns,
                tableId: this.tableId
              },
              res => {
                const tableId = this.tableId;
                this.dialogVisible = false;
                this.isEidt = false;
                this.tableId = null;
                this.itemForm = {
                  tableName: "",
                  columns: [],
                  canWriteMonth: [1,2,3,4,,5,6,7,8,9,10,11,12]
                };
                ajax_list.contractTableListService(
                  this.query,
                  res => this.handleContractTableListServiceOk(res, tableId),
                  this.handleContractTableListServiceErros
                );
              }
            );
          } else {
            ajax_list.contractTableCreateService(
              {
                tableName: this.itemForm.tableName,
                columns
              },
              res => {
                this.dialogVisible = false;
                this.isEidt = false;
                this.tableId = null;
                this.itemForm = {
                  tableName: "",
                  columns: []
                };
                ajax_list.contractTableListService(
                  this.query,
                  this.handleContractTableListServiceOk,
                  this.handleContractTableListServiceErros
                );
              }
            );
          }
        }
      });
    },
    hanldeEdit(item) {
      this.dialogVisible = true;
      this.isEidt = true;
      this.tableId = item.id;
      const columns = this.currentItem.map(item => {
        return {
          columnName: {
            ...this.fieldsOption.columnName,
            value: item.columnName
          },

          canWriteMonth: {
            ...this.fieldsOption.canWriteMonth,
            value: item.canWriteMonth.split(",").map(s => Number(s))
          },
          columnCode: {
            ...this.fieldsOption.columnCode,
            value: item.columnCode
          },
          isYearAmount: {
            ...this.fieldsOption.isYearAmount,
            value: item.isYearAmount === "Y"
          },
          orderIndex: {
            ...this.fieldsOption.orderIndex,
            value: item.orderIndex
          },
          children: []
        };
      });
      this.itemForm.columns = columns;
      this.itemForm.tableName = item.name;
    },
    handleDeleteItem(index) {
      this.itemForm.columns.splice(index, 1);
    },
    handleAddChild(index) {
      this.handleAddColumns(this.itemForm.columns[index].children);
    },
    handleAddColumns(target) {
      target = target ? target : this.itemForm.columns;
      target.push({
        columnName: {
          ...this.fieldsOption.columnName,
          value: ""
        },

        canWriteMonth: {
          ...this.fieldsOption.canWriteMonth,
          value: ""
        },
        columnCode: {
          ...this.fieldsOption.columnCode,
          value: ""
        },
        isYearAmount: {
          ...this.fieldsOption.isYearAmount,
          value: false
        },
        orderIndex: {
          ...this.fieldsOption.orderIndex,
          value: this.itemForm.columns.length + 2
        },
        children: []
      });
      console.log(this.itemForm);
      //   this.$nextTick(() => {
      //     this.$refs.itemForm.validate();
      //   });
    },
    handleAddType() {},
    handleClickType(tab) {
      this.tableId = tab.$attrs.id;
      this.itemForm.tableName = tab.$attrs.tableName;
      ajax_list.contractTableDetailService({ tableId: tab.$attrs.id }, res => {
        this.currentItem = res.body || [];
        this.currentItem.sort(this.compare("orderIndex"));
      });
    },
    handleContractTableListServiceOk(res, tableId) {
      this.list = res.body.list || [];
      this.query.count = res.body.count || 0;
      if (this.list.length) {
        ajax_list.contractTableDetailService(
          { tableId: tableId || this.list[0].id },
          res => {
            this.currentItem = res.body || [];
            this.currentItem.sort(this.compare("orderIndex"));
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
      this.query,
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
.content_list .buttons {
  margin-bottom: 15px;
  text-align: right;
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
  padding: 10px 10px 0 10px;
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.child-columns-item {
  border: 1px solid #3a8ee6;
  padding: 10px 10px 0 10px;
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.addColumns {
  text-align: center;
}
.columns-item .el-form-item {
  display: flex;
  width: 50%;
}
.delete-item {
  position: absolute;
  top: 32%;
  margin-top: -15px;
  right: -50px;
  border-radius: 50%;
  padding: 12px;
  color: #fff !important;
  background-color: #f56c6c;
  border-color: #f56c6c !important;
}
.add-child {
  position: absolute;
  top: 68%;
  margin-top: -15px;
  right: -50px;
  border-radius: 50%;
  padding: 12px;
  color: #fff !important;
}
.edit-table {
  position: absolute;
  top: 40px;
  right: 0px;
  z-index: 999;
  padding: 10px 10px;
  border-radius: 50%;
}
.right_two .el-tabs__content {
  padding: 20px 30px;
}
.el-tabs__content .table-title {
  margin-bottom: 10px;
}
.el-tabs__content .table-title button {
  width: 40px;
  height: 30px;
  padding: 0;
  line-height: 30px;
  float: right;
  clear: both;
  margin-bottom: 5px;
}
.el-pagination {
  text-align: center;
  margin-top: 20px;
}
</style>
