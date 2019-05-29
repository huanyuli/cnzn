<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <div class="ma_title_left" @click="ret_add">
          <i class="el-icon-arrow-left"></i>
          <p>创建合同</p>
        </div>
      </div>
      <div class="ma_content add_input">
        <div v-if="istype == 1" class="list_module">
          <div class="list_module_title">
            <el-steps :active="istype - 1" align-center>
              <el-step v-for="item in stepNav" :key="item.id" :title="item.name"></el-step>
            </el-steps>
          </div>
          <div class="list_con">
            <el-form
              :model="ruleForm"
              :rules="rules"
              :ref="'form'+istype"
              label-width="180px"
              class="demo-ruleForm"
            >
              <div class="list_con_input">
                <el-form-item label="合同编号" prop="one_1">
                  <el-input v-model="ruleForm.one_1"></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="甲方" prop="one_2">
                  <el-select
                    style="width: 100%;"
                    @change="find_blur"
                    v-model="ruleForm.one_2"
                    filterable
                    clearable
                    remote
                    reserve-keyword
                    placeholder="请输入关键词"
                    :remote-method="remoteMethod"
                    :loading="loading"
                  >
                    <el-option
                      v-for="item in options4"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="用户代码" prop="one_15">
                  <el-input size="medium" v-model="ruleForm.one_15" placeholder></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="企业所在地" prop="one_3">
                  <el-input size="medium" v-model="ruleForm.one_3" placeholder></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="税务登记号" prop="one_4">
                  <el-input size="medium" v-model="ruleForm.one_4" placeholder></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="住所" prop="one_5">
                  <el-input size="medium" v-model="ruleForm.one_5" placeholder></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="法人代表/授权代理人" prop="one_6">
                  <el-input size="medium" v-model="ruleForm.one_6" placeholder></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="开户名称" prop="one_7">
                  <el-input size="medium" v-model="ruleForm.one_7" placeholder></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="开户银行" prop="one_8">
                  <el-input size="medium" v-model="ruleForm.one_8" placeholder></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="账号" prop="one_9">
                  <el-input size="medium" v-model="ruleForm.one_9" placeholder></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="联系人" prop="one_10">
                  <el-input size="medium" v-model="ruleForm.one_10" placeholder></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="电子邮箱" prop="one_11">
                  <el-input size="medium" v-model="ruleForm.one_11" placeholder></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="手机号" prop="one_12">
                  <el-input size="medium" v-model="ruleForm.one_12" placeholder></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="办公电话" prop="one_13">
                  <el-input size="medium" v-model="ruleForm.one_13" placeholder></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="通讯地址" prop="one_14">
                  <el-input size="medium" v-model="ruleForm.one_14" placeholder></el-input>
                </el-form-item>
              </div>
            </el-form>
          </div>
        </div>
        <div v-if="istype == 2" class="list_module">
          <div class="list_module_title">
            <el-steps :active="istype - 1" align-center>
              <el-step v-for="item in stepNav" :key="item.id" :title="item.name"></el-step>
            </el-steps>
          </div>
          <div class="list_con">
            <el-form
              :model="ruleTwo"
              :rules="rules_Two"
              :ref="'form'+istype"
              label-width="180px"
              class="demo-ruleForm"
            >
              <div class="list_con_input">
                <el-form-item label="企业地址" prop="two_1">
                  <el-input v-model="ruleTwo.two_1"></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="电压等级" prop="two_2">
                  <el-select size="medium" v-model="ruleTwo.two_2" filterable placeholder="请选择">
                    <el-option
                      v-for="item in yn_3"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="企业总用电量" prop="two_3">
                  <el-input type="number" size="medium" placeholder v-model.number="ruleTwo.two_3">
                    <template slot="append">兆瓦时</template>
                  </el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="变压器容量" prop="two_4">
                  <el-input type="number" size="medium" placeholder v-model.number="ruleTwo.two_4">
                    <template slot="append">kVA</template>
                  </el-input>
                </el-form-item>
              </div>
              <div class="list_con_input class_input">
                <el-form-item label="交易周期" prop="two_5">
                  <el-date-picker
                    style="width: 100%;"
                    v-model="ruleTwo.two_5"
                    type="year"
                    align="right"
                    size="mini"
                    placeholder="选择周期"
                  ></el-date-picker>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="预估总用电量" prop="two_6">
                  <el-input type="number" size="medium" placeholder v-model.number="ruleTwo.two_6">
                    <template slot="append">兆瓦时</template>
                  </el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="合同起止日期" prop="two_5s">
                  <el-date-picker
                    style="width: 100%;"
                    v-model="ruleTwo.two_5s"
                    type="daterange"
                    size="mini"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  ></el-date-picker>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="总用电容量" prop="two_6s">
                  <el-input type="number" size="medium" placeholder v-model.number="ruleTwo.two_6s">
                    <template slot="append">千瓦(KW)</template>
                  </el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="抄表例日" prop="two_7">
                  <el-input v-model="ruleTwo.two_7"></el-input>
                </el-form-item>
              </div>
              <div class="list_con_row">
                <el-form-item label="双方电量和电价约定" prop="two_8">
                  <el-input size="medium" v-model="ruleTwo.two_8" placeholder></el-input>
                </el-form-item>
              </div>
              <div class="list_con_row">
                <el-form-item label="双方违约条款约定" prop="two_9">
                  <el-input size="medium" v-model="ruleTwo.two_9" placeholder></el-input>
                </el-form-item>
              </div>
              <div class="list_con_row">
                <el-form-item label="不可抗力约定" prop="two_10">
                  <el-input size="medium" v-model="ruleTwo.two_10" placeholder></el-input>
                </el-form-item>
              </div>
            </el-form>
          </div>
        </div>
        <div class="list_module" v-for="(table,idx) in stepNav.slice(2)" :key="table.id">
          <div v-show="istype === idx + 3">
            <div class="list_module_title">
              <div class="title_ico_div">
                <el-steps :active="istype - 1" align-center>
                  <el-step v-for="item in stepNav" :key="item.id" :title="item.name"></el-step>
                </el-steps>
              </div>
            </div>
            <div class="list_con">
              <div class="table_hint">单位：兆瓦时、元/兆瓦时</div>
              <div class="table three_table list_table">
                <el-form :model="forms['table'+ table.id]" :ref="'form'+(idx + 3)">
                  <el-table :data="currentTableData" border>
                    <el-table-column prop="month" label="月份"></el-table-column>
                    <el-table-column
                      v-for="col in tableColumns['table'+ table.id]"
                      :key="col.columnCode"
                      :label="col.columnName"
                    >
                      <template slot-scope="scope">
                        <el-form-item
                          v-if="scope.row[col.columnCode]"
                          :prop="forms['table' + table.id][scope.$index][col.columnCode]"
                        >
                          <el-input
                            v-model="forms['table'+ table.id][scope.$index][col.columnCode]"
                          ></el-input>
                        </el-form-item>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-form>
              </div>
            </div>
          </div>
        </div>

        <div class="list_module" style="width:90%; ">
          <div class="list_module_btn">
            <el-button @click="add_cancel" size="small" plain>取消</el-button>
            <el-button v-if="istype < stepNav.length" @click="add_one" size="small" plain>上一步</el-button>
            <el-button
              v-if="istype > 1 && istype < stepNav.length"
              class="btn_aff"
              type="primary"
              size="small"
              @click="add_two"
            >保存并继续</el-button>
            <el-button
              v-if="istype === 1"
              class="btn_aff"
              type="primary"
              size="small"
              @click="add_two"
            >下一步</el-button>
            <el-button
              v-if="istype === stepNav.length"
              class="btn_aff"
              type="primary"
              size="small"
              :loading="this.load_save"
              @click="add_save"
            >保存</el-button>
            <el-button
              v-if="istype === stepNav.length"
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
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
// 引入axios
import add_ajax from "../../../api/contract";
import sys_ajax from "../../../api/sys";
import add_validator from "../../../utils/validator";

export default {
  data() {
    return {
      tableColumns: {}, // 表列信息
      currentTableData: [], // 当前表格数据
      forms: {},
      stepNav: [],
      istype: 1,
      load_save: false,
      load_subit: false,
      customerId: 0,
      add_Type: "",

      ruleForm: {
        //第一步
        one_1: "",
        one_2: [], //购电方选中的值
        one_3: "",
        one_4: "",
        one_5: "",
        one_6: "",
        one_7: "",
        one_8: "",
        one_9: "",
        one_10: "",
        one_11: "",
        one_12: "",
        one_13: "",
        one_14: "",
        one_15: "" //用户代码
      },
      rules: {
        //第一步的验证
        //          one_1: [
        //            { required: true, message: '请输入合同编号', trigger: 'blur' },
        ////            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        //          ],
        one_2: [{ required: true, message: "请选择甲方", trigger: "change" }],
        one_3: [
          { required: false, message: "请输入企业所在地", trigger: "blur" }
        ],
        one_4: [
          { required: false, message: "请输入税务登记号", trigger: "blur" }
        ],
        one_5: [{ required: false, message: "请输入住所", trigger: "blur" }],
        one_6: [
          {
            required: false,
            message: "请输入法人代表/授权代理人",
            trigger: "blur"
          }
        ],
        one_7: [
          { required: false, message: "请输入开户名称", trigger: "blur" }
        ],
        one_8: [
          { required: false, message: "请输入开户银行", trigger: "blur" }
        ],
        one_9: [{ required: false, message: "请输入账号", trigger: "blur" }],
        one_10: [
          { required: false, message: "请输入联系人", trigger: "blur" }
          // { required: false, validator: add_validator.is_name, trigger: 'blur' },
        ],
        one_11: [
          // { required: false, message: '请输入电子邮箱', trigger: 'blur' },
          {
            type: "email",
            required: false,
            message: "电子邮箱格式不正确",
            trigger: "blur"
          }
        ],
        one_12: [
          {
            validator: add_validator.is_Phone,
            required: false,
            trigger: "blur"
          }
          // {  message: '请输入手机号', trigger: 'blur' },
        ],
        one_13: [
          { required: false, message: "请输入办公电话", trigger: "blur" }
        ],
        one_14: [
          { required: false, message: "请输入通讯地址", trigger: "blur" }
        ],
        one_15: [{ required: true, message: "请输入账号", trigger: "blur" }]
      },
      options4: [], //购电方选择框数组
      list: [], //购电方过滤
      loading: false, //是否正在从远程获取数据
      gd_list: [], //购电方后台返回数据
      states: [], //筛选出购电方名称数组
      add_create: {}, //提交按钮所有参数
      add_list: {
        list3: [],
        list4: [],
        list: []
      },
      con_id: "", // 合同id

      ruleTwo: {
        two_1: "",
        two_2: "",
        two_3: "",
        two_4: "",
        two_5: "",
        two_5s: "",
        two_6: "",
        two_6s: "",
        two_7: "",
        two_8: "",
        two_9: "",
        two_10: ""
      },
      rules_Two: {
        two_1: [
          { required: false, message: "请输入企业地址", trigger: "blur" }
        ],
        two_2: [
          { required: false, message: "请选择电压等级", trigger: "change" }
        ],
        two_5: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        two_5s: [
          { required: true, message: "请输入合同起止时间", trigger: "change" }
        ],
        two_6: [
          { required: false, message: "请输入预估总用电量", trigger: "blur" }
        ],
        two_6s: [
          { required: false, message: "请输入总用电容量", trigger: "blur" }
        ],
        two_7: [{ required: true, message: "请输入抄表例日", trigger: "blur" }]
      },
      ruleThree: {
        three_1_1: "",
        three_1_2: "",
        three_1_3: "",
        three_1_4: "",
        three_2_1: "",
        three_2_2: "",
        three_2_3: "",
        three_2_4: "",
        three_3_1: "",
        three_3_2: "",
        three_3_3: "",
        three_3_4: "",
        three_4_1: "",
        three_4_2: "",
        three_4_3: "",
        three_4_4: "",
        three_5_1: "",
        three_5_2: "",
        three_5_3: "",
        three_5_4: "",
        three_6_1: "",
        three_6_2: "",
        three_6_3: "",
        three_6_4: "",
        three_7_1: "",
        three_7_2: "",
        three_7_3: "",
        three_7_4: "",
        three_8_1: "",
        three_8_2: "",
        three_8_3: "",
        three_8_4: "",
        three_9_1: "",
        three_9_2: "",
        three_9_3: "",
        three_9_4: "",
        three_10_1: "",
        three_10_2: "",
        three_10_3: "",
        three_10_4: "",
        three_11_1: "",
        three_11_2: "",
        three_11_3: "",
        three_11_4: "",
        three_12_1: "",
        three_12_2: "",
        three_12_3: "",
        three_12_4: "",

        three_1_5: "",
        three_2_5: "",
        three_3_5: "",
        three_4_5: "",
        three_5_5: "",
        three_6_5: "",
        three_7_5: "",
        three_8_5: "",
        three_9_5: "",
        three_10_5: "",
        three_11_5: "",
        three_12_5: "",

        three_1_6: "",
        three_2_6: "",
        three_3_6: "",
        three_4_6: "",
        three_5_6: "",
        three_6_6: "",
        three_7_6: "",
        three_8_6: "",
        three_9_6: "",
        three_10_6: "",
        three_11_6: "",
        three_12_6: ""
      },
      rules_three: {
        //          three_1_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_1_3:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_1_4:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_2_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_2_3:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_2_4:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_3_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_3_3:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_3_4:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_4_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_4_3:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_4_4:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_5_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_5_3:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_5_4:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_6_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_6_3:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_6_4:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_7_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_7_3:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_7_4:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_8_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_8_3:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_8_4:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_9_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_9_3:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_9_4:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_10_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_10_3:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_10_4:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_11_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_11_3:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_11_4:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_12_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_12_3:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          three_12_4:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
      },
      ruleFour: {
        four_1_1: "",
        four_1_2: "",
        four_1_3: "",
        four_1_4: "",
        four_2_1: "",
        four_2_2: "",
        four_2_3: "",
        four_2_4: "",
        four_3_1: "",
        four_3_2: "",
        four_3_3: "",
        four_3_4: "",
        four_4_1: "",
        four_4_2: "",
        four_4_3: "",
        four_4_4: "",
        four_5_1: "",
        four_5_2: "",
        four_5_3: "",
        four_5_4: "",
        four_6_1: "",
        four_6_2: "",
        four_6_3: "",
        four_6_4: "",
        four_7_1: "",
        four_7_2: "",
        four_7_3: "",
        four_7_4: "",
        four_8_1: "",
        four_8_2: "",
        four_8_3: "",
        four_8_4: "",
        four_9_1: "",
        four_9_2: "",
        four_9_3: "",
        four_9_4: "",
        four_10_1: "",
        four_10_2: "",
        four_10_3: "",
        four_10_4: "",
        four_11_1: "",
        four_11_2: "",
        four_11_3: "",
        four_11_4: "",
        four_12_1: "",
        four_12_2: "",
        four_12_3: "",
        four_12_4: "",
        four_1_5: "",
        four_2_5: "",
        four_3_5: "",
        four_4_5: "",
        four_5_5: "",
        four_6_5: "",
        four_7_5: "",
        four_8_5: "",
        four_9_5: "",
        four_10_5: "",
        four_11_5: "",
        four_12_5: "",
        four_1_6: "",
        four_2_6: "",
        four_3_6: "",
        four_4_6: "",
        four_5_6: "",
        four_6_6: "",
        four_7_6: "",
        four_8_6: "",
        four_9_6: "",
        four_10_6: "",
        four_11_6: "",
        four_12_6: ""
      },
      rules_four: {
        //          four_1_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          four_2_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          four_3_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          four_4_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          four_5_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          four_6_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          four_7_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          four_8_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          four_9_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          four_10_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          four_11_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
        //          four_12_2:[
        //            { required: true, message: '不可为空', trigger: 'blur' },
        //          ],
      },

      Service_con: {},
      yn_3: []
    };
  },
  // 映射store数据
  computed: {},
  methods: {
    generateRows() {
      // 前两个不加载
      const id = this.stepNav[this.istype - 1].id;
      sys_ajax.contractTableDetailService(
        { tableId: this.stepNav[this.istype - 1].id },
        res => {
          let data = Array.from({ length: 12 }, (v, k) => k);
          const resData = res.body || [];
          data = data.map(month => {
            let col = { month: month + 1 + "月" };
            resData.forEach(item => {
              col[item.columnCode] = item.canWriteMonth
                .split(",")
                .includes(String(month + 1));
              if (!this.forms["table" + id]) {
                this.forms["table" + id] = {};
              }
              if (!this.forms["table" + id][month]) {
                this.forms["table" + id][month] = {};
              }
              this.forms["table" + id][month][item.columnCode] = "";
            });
            return col;
          });
          this.tableColumns["table" + id] = resData;
          this.currentTableData = data;
        }
      );
    },
    ret_add() {
      this.$router.push("/Contract/sellElectric");
    },
    add_cancel() {
      //返回取消按钮
      this.$router.go(-1);
    },
    add_affirm() {
      //提交按钮
      this.submitForm("form" + this.istype, this.stepNav.length, "submit");
    },
    add_save() {
      //保存
      this.submitForm("form" + this.istype, this.stepNav.length, "save");
    },
    add_cont(type_name) {
      //提交参数
      this.add_create = {
        number: this.ruleForm.one_1, //合同编号
        action: type_name, //合同保存方式
        contractType: this.add_Type, //合同类型
        customerId: this.customerId, //客户id
        customerName: this.ruleForm.one_2, //客户名称(甲方)
        taxNumber: this.ruleForm.one_4, //税务登记号
        residence: this.ruleForm.one_5, //甲方住所
        accountName: this.ruleForm.one_7, //甲方开户名称
        accountBank: this.ruleForm.one_8, //甲方开户银行
        accountNumber: this.ruleForm.one_9, //甲方开户账号
        contactAddress: this.ruleForm.one_14, //甲方通讯地址
        companyAddress: this.ruleTwo.two_1, //甲方企业地址
        totalUsePowerAmount: this.ruleTwo.two_3, //企业总用电量
        transformerCapacity: this.ruleTwo.two_4, //变压器容量
        transactionCycle: this.get_times(this.ruleTwo.two_5) / 1000, //交易周期
        estimateTotalUsePowerAmount: this.ruleTwo.two_6, // 预估总用电量
        meterReadingDay: this.ruleTwo.two_7, // 抄表例日
        powerAmountPricePromise: this.ruleTwo.two_8, // 双方电量和电价约定
        defaultClausePromise: this.ruleTwo.two_9, // 双方违约条款约定
        forceMajeurePromise: this.ruleTwo.two_10, // 不可抗力约定

        contractStartTime: this.get_times(this.ruleTwo.two_5s[0]) / 1000, // 合同开始时间
        contractEndTime: this.get_times(this.ruleTwo.two_5s[1]) / 1000, // 合同结束时间
        customer: {
          id: this.customerId, //客户id
          address: this.ruleForm.one_3, //所在地
          representative: this.ruleForm.one_6, //法人代表
          contact: this.ruleForm.one_10, //联系人
          email: this.ruleForm.one_11, //电子邮箱
          phone: this.ruleForm.one_12, //手机号
          contactNumber: this.ruleForm.one_13, //办公电话
          voltageLevel: this.ruleTwo.two_2, //电压等级
          totalUsePowerAmount: this.ruleTwo.two_6s, //总用电容量
          customerCode: this.ruleForm.one_15 //用户代码
        }
      };

      console.log(this.add_create);
      this.add_create = JSON.stringify(this.add_create);
      add_ajax.contractCreateService(
        this.add_create,
        res => {
          //创建
          this.$emit("login-success", res);
        },
        res => {
          if (res.status == 200) {
            this.con_id = res.body;
            this.istype = this.istype + 1;
            // 加载附表
            this.generateRows();
            // var _temp_id = 0;
            // if (type_name == "save") {
            //   _temp_id = 2;
            // } else if (type_name == "submit") {
            //   _temp_id = 1;
            // }
            // if (_temp_id != 0) {
            //   this.$router.push({
            //     name: "addSucceed",
            //     params: { btn_id: _temp_id, cont_id: this.con_id }
            //   });
            // }
          } else {
            this.$message({ message: "创建失败" });
          }
          this.load_save = false;
          this.load_subit = false;
        }
      );
    },
    number_s(val) {
      return val * 1000;
    },
    toFixeds(val) {
      if (val != 0) {
        return (val / 1000).toFixed(2);
      } else {
        return val / 1000;
      }
    },
    add_one() {
      const _temp = this.istype;
      this.resetForm("form" + _temp);
      this.istype = _temp - 1;
    },
    get_times(str) {
      //转换时间戳
      //        console.log(str)
      var temp = new Date(str).getTime();
      return temp;
    },
    resetForm(form) {
      //表单重置验证
      form.clearValidate();
    },
    // 附表保存
    addSubTable(type_name) {
      const tableId = this.stepNav[this.istype - 1].id;
      const tableColumn = this.tableColumns["table" + tableId];
      const contractId = this.con_id;
      // 重新组装数据结构
      let columns = [];
      tableColumn.forEach(col => {
        let currentCol = {
          columnCode: col.columnCode,
          columnName: col.columnName
        };
        Object.keys(this.forms["table" + tableId]).forEach(month => {
          currentCol["monthValue" + month] = this.forms["table" + tableId][
            month
          ][col.columnCode];
        });
        columns.push(currentCol);
      });
      add_ajax.contractTableSaveService(
        { tableId, contractId, columns },
        res => {
          // 最后一个附表，成功后跳转
          if (this.istype === this.stepNav.length) {
            let _temp_id = 0;
            if (type_name == "save") {
              _temp_id = 2;
            } else if (type_name == "submit") {
              _temp_id = 1;
            }

            this.$router.push({
              name: "addSucceed",
              params: { btn_id: _temp_id, cont_id: this.con_id }
            });

            return;
          }
          this.istype = this.istype + 1;
          this.generateRows();
          this.load_save = false;
          this.load_subit = false;
        },
        res => {
          this.load_save = false;
          this.load_subit = false;
        }
      );
    },
    submitForm(formName, type, action) {
      let form = this.$refs[formName];
      this["load_" + action] = true;
      // 第1个表单需要校验
      if (type === 1) {
        form.validate(valid => {
          if (valid) {
            this.resetForm(form);
            this.istype = type + 1;
            return true;
          } else {
            return false;
          }
        });
      }
      // 第二个表单需要校验
      if (type === 2) {
        form.validate(valid => {
          if (valid) {
            this.resetForm(form);
            this.add_cont(action);
            return true;
          } else {
            return false;
          }
        });
      }
      if (type > 2) {
        this.addSubTable(action);
      }
    },
    add_two() {
      //下一步
      const _temp = this.istype;
      this.submitForm("form" + this.istype, _temp, "save");
    },
    remoteMethod(query) {
      //购电方远程搜索选择
      if (query !== "") {
        /*清空临时数组*/
        this.states = [];
        this.list = [];
        this.options4 = [];

        this.loading = true;
        (this.name_list = "{'name': '" + query + "'}"),
          setTimeout(() => {
            this.loading = false;
            add_ajax.customerListService(
              this.name_list,
              res => {
                //购电方
                this.$emit("login-success", res);
              },
              res => {
                this.gd_list = res.body.list;
                for (var i = 0; i < this.gd_list.length; i++) {
                  this.states.push(this.gd_list[i].name);
                }
                this.list = this.states.map(item => {
                  return { value: item, label: item };
                });
                this.options4 = this.list.filter(item => {
                  return (
                    item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
                  );
                });
              }
            );
          }, 200);
      } else {
        this.options4 = [];
      }
    },
    zh_val(list, label) {
      let obj = {};
      obj = list.find(item => {
        return item.label === label;
      });
      // console.log(obj.value)
      return obj.value;
    },
    find_blur() {
      //选择甲方名称后
      if (this.ruleForm.one_2 != "") {
        var _index; //选中的值的下标
        for (var i = 0; i < this.states.length; i++) {
          //获取选中的值的下标
          if (this.states[i] == this.ruleForm.one_2) {
            _index = i;
          }
        }
      } else {
        this.one_2 = "";
      }

      var gd_info = this.gd_list[_index];
      // console.log(gd_info)

      if (gd_info != undefined) {
        if (gd_info.id != "" && gd_info.id != undefined) {
          this.customerId = gd_info.id; //客户ID
        }
        if (gd_info.powerAddress != "" && gd_info.powerAddress != undefined) {
          this.ruleForm.one_3 = gd_info.powerAddress; //企业所在地
        }
        if (gd_info.taxNumber != "" && gd_info.taxNumber != undefined) {
          this.ruleForm.one_4 = gd_info.taxNumber; //税务登记号
        }
        if (
          gd_info.representative != "" &&
          gd_info.representative != undefined
        ) {
          this.ruleForm.one_6 = gd_info.representative; //法人代表
        }

        if (gd_info.openAcctName != "" && gd_info.openAcctName != undefined) {
          this.ruleForm.one_7 = gd_info.openAcctName; //开户名称
        }
        if (gd_info.openBank != "" && gd_info.openBank != undefined) {
          this.ruleForm.one_8 = gd_info.openBank; //开户银行
        }
        if (gd_info.openAcctNo != "" && gd_info.openAcctNo != undefined) {
          this.ruleForm.one_9 = gd_info.openAcctNo; //开户账号
        }
        if (
          gd_info.contactAddress != "" &&
          gd_info.contactAddress != undefined
        ) {
          this.ruleForm.one_14 = gd_info.contactAddress; //通讯地址
        }
        if (gd_info.customerCode != "" && gd_info.customerCode != undefined) {
          this.ruleForm.one_15 = gd_info.customerCode; //用户代码
        }

        if (gd_info.email != "" && gd_info.email != undefined) {
          this.ruleForm.one_11 = gd_info.email; //电子邮箱
        }
        if (gd_info.contactNumber != "" && gd_info.contactNumber != undefined) {
          this.ruleForm.one_13 = gd_info.contactNumber; //联系电话（办公电话）
        }
        if (gd_info.phone != "" && gd_info.phone != undefined) {
          this.ruleForm.one_12 = gd_info.phone; //手机
        }
        if (
          gd_info.registerAddress != "" &&
          gd_info.registerAddress != undefined
        ) {
          this.ruleTwo.two_1 = gd_info.registerAddress; //企业地址（注册地址）
        }
        if (gd_info.contact != "" && gd_info.contact != undefined) {
          this.ruleForm.one_10 = gd_info.contact; //联系人
        }
        if (gd_info.voltageLevel != "" && gd_info.voltageLevel != undefined) {
          this.ruleTwo.two_2 = this.zh_val(this.yn_3, gd_info.voltageLevel); //电压等级
        }

        if (
          gd_info.totalUsePowerAmount != "" &&
          gd_info.totalUsePowerAmount != undefined
        ) {
          this.ruleTwo.two_6s = gd_info.totalUsePowerAmount; //总用电容量
        }
      }

      //        this.one_5 = gd_info.Contact; //电压等级
    }
  },
  //生命周期钩子函数，进入页面显示之前获取数据到store
  created() {
    //判断合同类型
    if (this.bus.add_contractType == 1) {
      this.add_Type = "STANDARD";
    } else if (this.bus.add_contractType == 2) {
      this.add_Type = "CUSTOMIZE";
    }

    this.tradingTypes = this.bus.tradingTypes;
    const stepNav = [
      {
        id: "00001",
        name: "填写甲方基础信息"
      },
      {
        id: "00002",
        name: "填写甲方其他信息"
      },
      ...this.tradingTypes
    ];
    this.stepNav = stepNav;
    stepNav.forEach((item, index) => {
      if (index > 1) {
        this.$set(this.forms, "table" + item.id, {});
      }
    });
    var _temp_zd = "{}";
    add_ajax.contractCodeService(
      _temp_zd,
      res => {
        //合同字典
        this.$emit("login-success", res);
      },
      res => {
        this.Service_con = res.body;
        var _temp_Status = this.yn_3;
        $.map(this.Service_con.voltageLevel, function(value, key) {
          _temp_Status.push({
            value: key,
            label: value
          });
        });
      }
    );
  }
};
</script>

<style scoped>
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
  margin: 0px auto;
  /*padding-bottom:10px;*/
}
.list_module_title {
  width: 100%;
  margin-top: 15px;
  /* height: 70px; */
  /* line-height: 50px; */
  /* text-align: left; */

  /*background-color: #fcfcfc;*/
  /*border-bottom: 1px solid rgba(240,241,242,1);*/
}
.list_module_title .el-step__title {
  font-size: 14px;
}
.title_ico_div {
  /*!*width: 860px;*!  五个步骤的宽度*/
  width: 690px;
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
  /*margin-right: 68px;*/
  margin-right: 115px;
}
.text_div span:nth-child(3) {
  /*margin-right: 15px;*/
  margin-right: 115px;
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
  width: calc(100% - 40px);
  height: auto;
  overflow: auto;
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
  width: calc(100% / 7);
  line-height: 50px;
  float: left;
}

.three_table .table_tr .table_td_2 {
  width: calc((100% / 7) * 2);
  line-height: 50px;
  float: left;
}
.three_table .table_tr .table_td:nth-child(1) {
  width: calc(10%);
}
.three_table .table_title .table_td .table_td_w {
  width: 80%;
}
.three_table .table_title .table_td_2 .table_td_w {
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
.three_table .table_td_2 .table_td_w {
  width: 70%;
  margin: 0 auto;
  height: 25px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: rgba(96, 96, 96, 1);
}

.three_table .table_td_2 .table_td_ws {
  width: 100%;
  margin: 0 auto;
  height: 25px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: rgba(96, 96, 96, 1);
}
.three_table .table_td_2 .table_td_ws p {
  width: 50%;
  height: 25px;
  line-height: 25px;
  float: left;
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

@media screen and (max-width: 1420px) {
  .list_con_input {
    width: 42%;
    padding: 0 1%;
    float: left;
    height: 36px;
    margin-top: 15px;
  }
}
</style>
<style>
/*.add_input .list_module .el-input__inner{*/
/*padding: 0 15px!important;*/
/*margin-top: 0px!important;*/
/*}*/
</style>
