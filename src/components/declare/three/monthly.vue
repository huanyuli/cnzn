<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <span></span>
        <p>电量池月度交易</p>
      </div>
      <div class="ma_content">
        <div class="ma_screen">
          <!--<div class="div_row">-->
            <!--<div class="ma_ui_div">-->
              <!--<p>地区：</p>-->
              <!--<div class="input_ss">-->
                <!--<el-select style="width: 49%;" @change="change_3"   size="medium" v-model="finds.find_1" placeholder="">-->
                  <!--<el-option-->
                    <!--v-for="item in form_1"-->
                    <!--:key="item.value"-->
                    <!--:label="item.label"-->
                    <!--:value="item.value">-->
                  <!--</el-option>-->
                <!--</el-select>-->
                <!--<el-select style="width: 49%;"  size="medium" v-model="finds.find_2" placeholder="">-->
                  <!--<el-option-->
                    <!--v-for="item in form_2"-->
                    <!--:key="item.value"-->
                    <!--:label="item.label"-->
                    <!--:value="item.value">-->
                  <!--</el-option>-->
                <!--</el-select>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <div class="div_row">
            <div class="ma_ui_div">
              <p>年份：</p>
              <div class="input_ss">
                <el-select style="width: 49%;" size="medium" v-model="finds.find_3" placeholder="">
                  <el-option
                    v-for="item in form_3"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-select style="width: 49%;"  size="medium" v-model="finds.find_4" placeholder="">
                  <el-option
                    v-for="item in form_4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="ma_ui_div" style="padding-bottom: 10px">
              <el-button size="small" type="primary" @click="find_screen">查询</el-button>
              <el-button size="small" @click="empty_find">清空</el-button>
            </div>
          </div>

        </div>
        <div class="ma_btn">
          <el-button v-if="show_map(18) == 18"  size="small" @click="add_alert" type="primary" >模拟冻结</el-button>
          <el-button size="small" type="primary" @click="import_list">导出列表</el-button>
        </div>
        <div class="content_list">
          <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="客户用电情况" name="first">
              <p class="table_title_s">电量单位：千瓦时（kWh）</p>
              <div class="list_table">
                <el-table
                  :data="tableData"
                  stripe
                  show-summary
                  style="width: 100%;text-align: center">
                  <el-table-column
                    prop="data_0"
                    align="center"
                    label="用户代码"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_1"
                    align="center"
                    label="客户"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_2"
                    align="center"
                    label="当月合同直购电量"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_3"
                    align="center"
                    label="当月富余电基数"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_4"
                    align="center"
                    label="本月计划用电量"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_5"
                    align="center"
                    label="其中富余电"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_6"
                    align="center"
                    label="其中直购电"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_7"
                    align="center"
                    label="可做富余电"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="data_8"
                    align="center"
                    label="剩余直购电"
                  >
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="已购电及缺口情况（向电厂购买）" name="second">
              <p class="table_title_s">电量单位：千瓦时（kWh）</p>
              <div class="list_module">
                <div class="list_con" >
                  <div class="table three_table">
                    <div class="table_tr table_title">
                      <div class="table_td"><div class="table_td_w"></div></div>
                      <div class="table_td"><div class="table_td_w">直购电已买电量</div></div>
                      <div class="table_td"><div class="table_td_w">富余电已买电量</div></div>
                    </div>
                    <div class="table_tr">
                      <div class="table_td"><div class="table_td_w">年度已购电</div></div>
                      <div class="table_td"><div class="table_td_w">{{this.year_yg}}</div></div>
                      <div class="table_td"><div class="table_td_w">NA</div></div>
                    </div>
                    <el-form :model="ruleThree" :rules="rules_three" ref="ruleThree" label-width="0px" class="demo-ruleForm">
                      <div class="table_tr">
                        <div class="table_td"><div class="table_td_w">第1次购电</div></div>
                        <div class="table_td"><div class="table_td_w">
                          <el-form-item label=""  prop="one_1">
                            <el-input type="number" @change="changes('one_1',ruleThree.one_1)" v-model.number="ruleThree.one_1"></el-input>
                          </el-form-item>
                        </div></div>
                        <div class="table_td"><div class="table_td_w">
                          <el-form-item label=""  prop="one_2">
                            <el-input type="number" @change="changes('one_2',ruleThree.one_2)" v-model.number="ruleThree.one_2"></el-input>
                          </el-form-item>
                        </div></div>
                      </div>
                      <div class="table_tr">

                        <div class="table_td"><div class="table_td_w">第2次购电</div></div>
                        <div class="table_td"><div class="table_td_w">
                          <el-form-item label=""  prop="one_3">
                            <el-input type="number" @change="changes('one_3',ruleThree.one_3)" v-model.number="ruleThree.one_3"></el-input>
                          </el-form-item>
                        </div></div>
                        <div class="table_td"><div class="table_td_w">
                          <el-form-item label=""  prop="one_4">
                            <el-input type="number" @change="changes('one_4',ruleThree.one_4)" v-model.number="ruleThree.one_4"></el-input>
                          </el-form-item>
                        </div></div>
                      </div>
                      <div class="table_tr">
                        <div class="table_td"><div class="table_td_w">第3次购电</div></div>
                        <div class="table_td"><div class="table_td_w">
                          <el-form-item label=""  prop="one_5">
                            <el-input type="number" @change="changes('one_5',ruleThree.one_5)" v-model.number="ruleThree.one_5"></el-input>
                          </el-form-item>
                        </div></div>
                        <div class="table_td"><div class="table_td_w">
                          <el-form-item label=""  prop="one_6">
                            <el-input type="number" @change="changes('one_6',ruleThree.one_6)" v-model.number="ruleThree.one_6"></el-input>
                          </el-form-item>
                        </div></div>
                      </div>
                      <div class="table_tr">
                        <div class="table_td"><div class="table_td_w">第4次购电</div></div>
                        <div class="table_td"><div class="table_td_w">
                          <el-form-item label=""  prop="one_7">
                            <el-input type="number" @change="changes('one_7',ruleThree.one_7)" v-model.number="ruleThree.one_7"></el-input>
                          </el-form-item>
                        </div></div>
                        <div class="table_td"><div class="table_td_w">
                          <el-form-item label=""  prop="one_8">
                            <el-input type="number" @change="changes('one_8',ruleThree.one_8)" v-model.number="ruleThree.one_8"></el-input>
                          </el-form-item>
                        </div></div>
                      </div>
                      <div class="table_tr">
                        <div class="table_td"><div class="table_td_w">第5次购电</div></div>
                        <div class="table_td"><div class="table_td_w">
                          <el-form-item label=""  prop="one_9">
                            <el-input type="number" @change="changes('one_9',ruleThree.one_9)" v-model.number="ruleThree.one_9"></el-input>
                          </el-form-item>
                        </div></div>
                        <div class="table_td"><div class="table_td_w">
                          <el-form-item label=""  prop="one_10">
                            <el-input type="number" @change="changes('one_10',ruleThree.one_10)" v-model.number="ruleThree.one_10"></el-input>
                          </el-form-item>
                        </div></div>
                      </div>

                      <div class="table_tr">
                        <div class="table_td"><div class="table_td_w">已购合计</div></div>
                        <div class="table_td"><div class="table_td_w">{{ruleThree.one_1 + ruleThree.one_3 + ruleThree.one_5 + ruleThree.one_7 + ruleThree.one_9}}</div></div>
                        <div class="table_td"><div class="table_td_w">{{ruleThree.one_2 + ruleThree.one_4 + ruleThree.one_6 + ruleThree.one_8 + ruleThree.one_10}}</div></div>
                      </div>
                      <div class="table_tr">
                        <div class="table_td"><div class="table_td_w">按客户要求现存缺口</div></div>
                        <div class="table_td"><div class="table_td_w">{{this.par_data.b - (ruleThree.one_1 + ruleThree.one_3 + ruleThree.one_5 + ruleThree.one_7 + ruleThree.one_9)}}</div></div>
                        <div class="table_td"><div class="table_td_w">{{this.par_data.a - (ruleThree.one_2 + ruleThree.one_4 + ruleThree.one_6 + ruleThree.one_8 + ruleThree.one_10)}}</div></div>
                      </div>
                      <div class="table_tr">
                        <div class="table_td"><div class="table_td_w">按最大化富余电现存缺口</div></div>
                        <div class="table_td"><div class="table_td_w">{{this.par_data.d - (ruleThree.one_1 + ruleThree.one_3 + ruleThree.one_5 + ruleThree.one_7 + ruleThree.one_9)}}</div></div>
                        <div class="table_td"><div class="table_td_w">{{this.par_data.c - (ruleThree.one_2 + ruleThree.one_4 + ruleThree.one_6 + ruleThree.one_8 + ruleThree.one_10)}}</div></div>
                      </div>
                      <div class="table_tr">
                        <div class="table_td"><div class="table_td_w">本次拟购</div></div>
                        <div class="table_td"><div class="table_td_w">
                          <el-form-item label=""  prop="one_11">
                            <el-input type="number" @change="changes('one_11',ruleThree.one_11)" v-model.number="ruleThree.one_11"></el-input>
                          </el-form-item>
                        </div></div>
                        <div class="table_td"><div class="table_td_w">
                          <el-form-item label=""  prop="one_12">
                            <el-input type="number" @change="changes('one_12',ruleThree.one_12)" v-model.number="ruleThree.one_12"></el-input>
                          </el-form-item>
                        </div></div>
                      </div>
                      <div class="table_tr">
                        <div class="table_td"><div class="table_td_w">按客户要求剩余缺口</div></div>
                        <div class="table_td"><div class="table_td_w">{{(this.par_data.b - (ruleThree.one_1 + ruleThree.one_3 + ruleThree.one_5 + ruleThree.one_7 + ruleThree.one_9)) - ruleThree.one_11}}</div></div>
                        <div class="table_td"><div class="table_td_w">{{(this.par_data.a - (ruleThree.one_2 + ruleThree.one_4 + ruleThree.one_6 + ruleThree.one_8 + ruleThree.one_10)) - ruleThree.one_12}}</div></div>
                      </div>
                      <div class="table_tr">
                        <div class="table_td"><div class="table_td_w">按最大化富余电剩余缺口</div></div>
                        <div class="table_td"><div class="table_td_w">{{(this.par_data.d - (ruleThree.one_1 + ruleThree.one_3 + ruleThree.one_5 + ruleThree.one_7 + ruleThree.one_9)) - ruleThree.one_11 }}</div></div>
                        <div class="table_td"><div class="table_td_w">{{(this.par_data.c - (ruleThree.one_2 + ruleThree.one_4 + ruleThree.one_6 + ruleThree.one_8 + ruleThree.one_10)) - ruleThree.one_12}}</div></div>
                      </div>
                      <div class="table_tr">
                        <div class="table_td"><div class="table_td_w">按客户要求剩余缺口的偏差率</div></div>
                        <div class="table_td"><div class="table_td_w">{{toPercent(((this.par_data.b - (ruleThree.one_1 + ruleThree.one_3 + ruleThree.one_5 + ruleThree.one_7 + ruleThree.one_9)) - ruleThree.one_11) /  ((ruleThree.one_1 + ruleThree.one_3 + ruleThree.one_5 + ruleThree.one_7 + ruleThree.one_9) + ruleThree.one_11))}}</div></div>
                        <div class="table_td"><div class="table_td_w">{{toPercent(((this.par_data.a - (ruleThree.one_2 + ruleThree.one_4 + ruleThree.one_6 + ruleThree.one_8 + ruleThree.one_10)) - ruleThree.one_12) / ((ruleThree.one_2 + ruleThree.one_4 + ruleThree.one_6 + ruleThree.one_8 + ruleThree.one_10) + ruleThree.one_12))}}</div></div>
                      </div>
                      <div class="table_tr">
                        <div class="table_td"><div class="table_td_w">按最大化富余电剩余缺口的偏差率</div></div>
                        <div class="table_td"><div class="table_td_w">{{toPercent(((this.par_data.d - (ruleThree.one_1 + ruleThree.one_3 + ruleThree.one_5 + ruleThree.one_7 + ruleThree.one_9)) - ruleThree.one_11) / ((ruleThree.one_1 + ruleThree.one_3 + ruleThree.one_5 + ruleThree.one_7 + ruleThree.one_9) + ruleThree.one_11))}}</div></div>
                        <div class="table_td"><div class="table_td_w">{{toPercent(((this.par_data.c - (ruleThree.one_2 + ruleThree.one_4 + ruleThree.one_6 + ruleThree.one_8 + ruleThree.one_10)) - ruleThree.one_12) / ((ruleThree.one_2 + ruleThree.one_4 + ruleThree.one_6 + ruleThree.one_8 + ruleThree.one_10) + ruleThree.one_12))}}</div></div>
                      </div>
                    </el-form>

                  </div>
                </div>
              </div>
              <div class="ma_btn_S">
                <el-button style="float: right;margin-right:30px" @click="submits" size="small" type="primary" >保 存</el-button>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div v-if="this.no_val == 0" class="cont_div">
          <img src="../../../assets/aImg/notAvailable.png" alt="">
          <p>暂无合同</p>
        </div>
      </div>
    </div>
    <!--<router-view></router-view>-->
    <div class="add_alert">
      <el-dialog  title="模拟冻结" width="30%"  :visible.sync="linkAlert">
        <div class='add_div'>
          <div class='add_div_one'>
            <div class='one_con'>
              <el-form :model="ruleForms"  :rules="rules" ref="ruleForms"   label-width="100px" class="demo-ruleForm">
                <el-form-item label="请选择数据"  prop="vue_0">
                  <el-select style="width: 100%;"  size="medium" v-model="ruleForms.vue_0" placeholder="请选择">
                    <el-option
                      v-for="item in form_alert"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class='add_div_two' slot="footer" >
            <div class='wi_btn'><el-button plain @click="linkAlert = false">取消</el-button></div>
            <div class='cont_btn' ><el-button @click="add_bj"  type='primary'>确认</el-button></div>
          </div>
        </div>
      </el-dialog>
    </div>
    <div class="alert_list">
      <el-dialog  title="模拟冻结" lock-scroll width="90%"  top="0" fullscreen  :visible.sync="ListAlert">
        <div class='add_div'>
          <div class='add_div_one'>
            <div class='one_con'>
              <el-tabs v-model="activeName3" type="card">
                <el-tab-pane label="客户用电情况" name="one_pane">
                  <p class="table_title_s">电量单位：千瓦时（kWh）</p>
                  <div class="list_table">
                    <el-table
                      :data="tableData_1"
                      stripe
                      show-summary
                      style="width: 100%;text-align: center">
                      <el-table-column
                        prop="data_0"
                        align="center"
                        label="用户代码"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="data_1"
                        align="center"
                        label="客户"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="data_2"
                        align="center"
                        label="当月合同直购电量"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="data_3"
                        align="center"
                        label="当月富余电基数"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="data_4"
                        align="center"
                        label="本月计划用电量"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="data_5"
                        align="center"
                        label="其中富余电"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="data_6"
                        align="center"
                        label="其中直购电"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="data_7"
                        align="center"
                        label="可做富余电"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="data_8"
                        align="center"
                        label="剩余直购电"
                      >
                      </el-table-column>
                    </el-table>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="已购电及缺口情况（向电厂购买）" name="two_pane">
                  <p class="table_title_s">电量单位：千瓦时（kWh）</p>
                  <div class="list_module">
                    <div class="list_con" >
                      <div class="table three_table">
                        <div class="table_tr table_title">
                          <div class="table_td"><div class="table_td_w"></div></div>
                          <div class="table_td"><div class="table_td_w">直购电已买电量</div></div>
                          <div class="table_td"><div class="table_td_w">富余电已买电量</div></div>
                        </div>
                        <div class="table_tr">
                          <div class="table_td"><div class="table_td_w">年度已购电</div></div>
                          <div class="table_td"><div class="table_td_w">{{this.mn_year_yg}}</div></div>
                          <div class="table_td"><div class="table_td_w">NA</div></div>
                        </div>
                        <el-form :model="ruleTwo" :rules="rules_two" ref="ruleTwo" label-width="0px" class="demo-ruleForm">
                          <div class="table_tr">
                            <div class="table_td"><div class="table_td_w">第1次购电</div></div>
                            <div class="table_td"><div class="table_td_w">
                              <el-form-item label=""  prop="one_1">
                                <el-input type="number" @change="mn_changes('one_1',ruleTwo.one_1)" v-model.number="ruleTwo.one_1"></el-input>
                              </el-form-item>
                            </div></div>
                            <div class="table_td"><div class="table_td_w">
                              <el-form-item label=""  prop="one_2">
                                <el-input type="number" @change="mn_changes('one_2',ruleTwo.one_2)" v-model.number="ruleTwo.one_2"></el-input>
                              </el-form-item>
                            </div></div>
                          </div>
                          <div class="table_tr">

                            <div class="table_td"><div class="table_td_w">第2次购电</div></div>
                            <div class="table_td"><div class="table_td_w">
                              <el-form-item label=""  prop="one_3">
                                <el-input type="number" @change="mn_changes('one_3',ruleTwo.one_3)" v-model.number="ruleTwo.one_3"></el-input>
                              </el-form-item>
                            </div></div>
                            <div class="table_td"><div class="table_td_w">
                              <el-form-item label=""  prop="one_4">
                                <el-input type="number" @change="mn_changes('one_4',ruleTwo.one_4)" v-model.number="ruleTwo.one_4"></el-input>
                              </el-form-item>
                            </div></div>
                          </div>
                          <div class="table_tr">
                            <div class="table_td"><div class="table_td_w">第3次购电</div></div>
                            <div class="table_td"><div class="table_td_w">
                              <el-form-item label=""  prop="one_5">
                                <el-input type="number" @change="mn_changes('one_5',ruleTwo.one_5)" v-model.number="ruleTwo.one_5"></el-input>
                              </el-form-item>
                            </div></div>
                            <div class="table_td"><div class="table_td_w">
                              <el-form-item label=""  prop="one_6">
                                <el-input type="number" @change="mn_changes('one_6',ruleTwo.one_6)" v-model.number="ruleTwo.one_6"></el-input>
                              </el-form-item>
                            </div></div>
                          </div>
                          <div class="table_tr">
                            <div class="table_td"><div class="table_td_w">第4次购电</div></div>
                            <div class="table_td"><div class="table_td_w">
                              <el-form-item label=""  prop="one_7">
                                <el-input type="number" @change="mn_changes('one_7',ruleTwo.one_7)" v-model.number="ruleTwo.one_7"></el-input>
                              </el-form-item>
                            </div></div>
                            <div class="table_td"><div class="table_td_w">
                              <el-form-item label=""  prop="one_8">
                                <el-input type="number" @change="mn_changes('one_8',ruleTwo.one_8)" v-model.number="ruleTwo.one_8"></el-input>
                              </el-form-item>
                            </div></div>
                          </div>
                          <div class="table_tr">
                            <div class="table_td"><div class="table_td_w">第5次购电</div></div>
                            <div class="table_td"><div class="table_td_w">
                              <el-form-item label=""  prop="one_9">
                                <el-input type="number" @change="mn_changes('one_9',ruleTwo.one_9)" v-model.number="ruleTwo.one_9"></el-input>
                              </el-form-item>
                            </div></div>
                            <div class="table_td"><div class="table_td_w">
                              <el-form-item label=""  prop="one_10">
                                <el-input type="number" @change="mn_changes('one_10',ruleTwo.one_10)" v-model.number="ruleTwo.one_10"></el-input>
                              </el-form-item>
                            </div></div>
                          </div>

                          <div class="table_tr">
                            <div class="table_td"><div class="table_td_w">已购合计</div></div>
                            <div class="table_td"><div class="table_td_w">{{ruleTwo.one_1 + ruleTwo.one_3 + ruleTwo.one_5 + ruleTwo.one_7 + ruleTwo.one_9}}</div></div>
                            <div class="table_td"><div class="table_td_w">{{ruleTwo.one_2 + ruleTwo.one_4 + ruleTwo.one_6 + ruleTwo.one_8 + ruleTwo.one_10}}</div></div>
                          </div>
                          <div class="table_tr">
                            <div class="table_td"><div class="table_td_w">按客户要求现存缺口</div></div>
                            <div class="table_td"><div class="table_td_w">{{this.mn_par_data.b - (ruleTwo.one_1 + ruleTwo.one_3 + ruleTwo.one_5 + ruleTwo.one_7 + ruleTwo.one_9)}}</div></div>
                            <div class="table_td"><div class="table_td_w">{{this.mn_par_data.a - (ruleTwo.one_2 + ruleTwo.one_4 + ruleTwo.one_6 + ruleTwo.one_8 + ruleTwo.one_10)}}</div></div>
                          </div>
                          <div class="table_tr">
                            <div class="table_td"><div class="table_td_w">按最大化富余电现存缺口</div></div>
                            <div class="table_td"><div class="table_td_w">{{this.mn_par_data.d - (ruleTwo.one_1 + ruleTwo.one_3 + ruleTwo.one_5 + ruleTwo.one_7 + ruleTwo.one_9)}}</div></div>
                            <div class="table_td"><div class="table_td_w">{{this.mn_par_data.c - (ruleTwo.one_2 + ruleTwo.one_4 + ruleTwo.one_6 + ruleTwo.one_8 + ruleTwo.one_10)}}</div></div>
                          </div>
                          <div class="table_tr">
                            <div class="table_td"><div class="table_td_w">本次拟购</div></div>
                            <div class="table_td"><div class="table_td_w">
                              <el-form-item label=""  prop="one_11">
                                <el-input type="number" @change="mn_changes('one_11',ruleTwo.one_11)" v-model.number="ruleTwo.one_11"></el-input>
                              </el-form-item>
                            </div></div>
                            <div class="table_td"><div class="table_td_w">
                              <el-form-item label=""  prop="one_12">
                                <el-input type="number" @change="mn_changes('one_12',ruleTwo.one_12)" v-model.number="ruleTwo.one_12"></el-input>
                              </el-form-item>
                            </div></div>
                          </div>
                          <div class="table_tr">
                            <div class="table_td"><div class="table_td_w">按客户要求剩余缺口</div></div>
                            <div class="table_td"><div class="table_td_w">{{(this.mn_par_data.b - (ruleTwo.one_1 + ruleTwo.one_3 + ruleTwo.one_5 + ruleTwo.one_7 + ruleTwo.one_9)) - ruleTwo.one_11}}</div></div>
                            <div class="table_td"><div class="table_td_w">{{(this.mn_par_data.a - (ruleTwo.one_2 + ruleTwo.one_4 + ruleTwo.one_6 + ruleTwo.one_8 + ruleTwo.one_10)) - ruleTwo.one_12}}</div></div>
                          </div>
                          <div class="table_tr">
                            <div class="table_td"><div class="table_td_w">按最大化富余电剩余缺口</div></div>
                            <div class="table_td"><div class="table_td_w">{{(this.mn_par_data.d - (ruleTwo.one_1 + ruleTwo.one_3 + ruleTwo.one_5 + ruleTwo.one_7 + ruleTwo.one_9)) - ruleTwo.one_11 }}</div></div>
                            <div class="table_td"><div class="table_td_w">{{(this.mn_par_data.c - (ruleTwo.one_2 + ruleTwo.one_4 + ruleTwo.one_6 + ruleTwo.one_8 + ruleTwo.one_10)) - ruleTwo.one_12}}</div></div>
                          </div>
                          <div class="table_tr">
                            <div class="table_td"><div class="table_td_w">按客户要求剩余缺口的偏差率</div></div>
                            <div class="table_td"><div class="table_td_w">{{toPercent(((this.mn_par_data.b - (ruleTwo.one_1 + ruleTwo.one_3 + ruleTwo.one_5 + ruleTwo.one_7 + ruleTwo.one_9)) - ruleTwo.one_11) /  ((ruleTwo.one_1 + ruleTwo.one_3 + ruleTwo.one_5 + ruleTwo.one_7 + ruleTwo.one_9) + ruleTwo.one_11))}}</div></div>
                            <div class="table_td"><div class="table_td_w">{{toPercent(((this.mn_par_data.a - (ruleTwo.one_2 + ruleTwo.one_4 + ruleTwo.one_6 + ruleTwo.one_8 + ruleTwo.one_10)) - ruleTwo.one_12) / ((ruleTwo.one_2 + ruleTwo.one_4 + ruleTwo.one_6 + ruleTwo.one_8 + ruleTwo.one_10) + ruleTwo.one_12))}}</div></div>
                          </div>
                          <div class="table_tr">
                            <div class="table_td"><div class="table_td_w">按最大化富余电剩余缺口的偏差率</div></div>
                            <div class="table_td"><div class="table_td_w">{{toPercent(((this.mn_par_data.d - (ruleTwo.one_1 + ruleTwo.one_3 + ruleTwo.one_5 + ruleTwo.one_7 + ruleTwo.one_9)) - ruleTwo.one_11) / ((ruleTwo.one_1 + ruleTwo.one_3 + ruleTwo.one_5 + ruleTwo.one_7 + ruleTwo.one_9) + ruleTwo.one_11))}}</div></div>
                            <div class="table_td"><div class="table_td_w">{{toPercent(((this.mn_par_data.c - (ruleTwo.one_2 + ruleTwo.one_4 + ruleTwo.one_6 + ruleTwo.one_8 + ruleTwo.one_10)) - ruleTwo.one_12) / ((ruleTwo.one_2 + ruleTwo.one_4 + ruleTwo.one_6 + ruleTwo.one_8 + ruleTwo.one_10) + ruleTwo.one_12))}}</div></div>
                          </div>
                        </el-form>

                      </div>
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
          <div class='add_div_two' slot="footer" >
            <div class='wi_btn'><el-button plain @click="ListAlert = false">取消</el-button></div>
            <!--<div class='cont_btn' ><el-button @click="add_bj"  type='primary'>确认</el-button></div>-->
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  // 引入axios
  import ajax_list from '../../../api/declare'

  export default {
    data() {
      return {
        no_val:1,
        linkAlert:false,
        ListAlert:false,
        activeName2: 'first',
        activeName3: 'one_pane',
        add_create:"",
        menuList:[],
        form_1:[
          {
            value: '',
            label: '全部地区',
          }
        ],
        form_alert:[
          {
            value: 1,
            label: '第一次',
          },
          {
            value: 2,
            label: '第二次',
          },  {
            value: 3,
            label: '第三次',
          },  {
            value: 4,
            label: '第四次',
          },  {
            value: 5,
            label: '第五次',
          },
        ],
        ruleForms:{
          vue_0:1
        },

        form_2:[],
        form_3:[],
        form_4:[
          {
            value: 1,
            label: '1月',
          },
          {
            value: 2,
            label: '2月',
          },
          {
            value: 3,
            label: '3月',
          }
          ,
          {
            value:4,
            label: '4月',
          }
          ,
          {
            value:5,
            label: '5月',
          },
          {
            value: 6,
            label: '6月',
          },
          {
            value: 7,
            label: '7月',
          },
          {
            value: 8,
            label: '9月',
          },
          {
            value: 10,
            label: '10月',
          },
          {
            value: 11,
            label: '11月',
          },
          {
            value: 12,
            label: '12月',
          }
        ],

        form_select:[],
        finds:{
          find_1:"",
          find_2:"",
          find_3:2018,
          find_4:6,
        },
        ruleForm:{
          vue_0:"",
          vue_1:"",
          vue_2:"",
        },
        rules:{
          vue_0:[
            { required: true, message: '请选择年份', trigger: 'change' },
          ],
          vue_1:[
            { required: true, message: '请选择业务人员', trigger: 'change' },
          ],
          vue_2:[
            { required: true, message: '请输入客户名称', trigger: 'blur' },
          ],
        },
        ruleThree:{
            year:0,
          month:0,
          one_1:0,
          one_2:0,
          one_3:0,
          one_4:0,
          one_5:0,
          one_6:0,
          one_7:0,
          one_8:0,
          one_9:0,
          one_10:0,
          one_11:0,
          one_12:0,
        },
        rules_three:{
//          one_1: [
//            { required: true, message: '', trigger: 'blur' }
//          ],
//          one_2: [
//            { required: true, message: '', trigger: 'blur' }
//          ],
//          one_3: [
//            { required: true, message: '', trigger: 'blur' }
//          ],
//          one_4: [
//            { required: true, message: '', trigger: 'blur' }
//          ],
        },

        ruleTwo:{
          year:0,
          month:0,
          one_1:0,
          one_2:0,
          one_3:0,
          one_4:0,
          one_5:0,
          one_6:0,
          one_7:0,
          one_8:0,
          one_9:0,
          one_10:0,
          one_11:0,
          one_12:0,
        },
        rules_two:{
//          one_1: [
//            { required: true, message: '', trigger: 'blur' }
//          ],
//          one_2: [
//            { required: true, message: '', trigger: 'blur' }
//          ],
//          one_3: [
//            { required: true, message: '', trigger: 'blur' }
//          ],
//          one_4: [
//            { required: true, message: '', trigger: 'blur' }
//          ],
        },
        options4: [],  //客户名称选择框数组
        list: [],  //客户名称过滤
        loading: false, //是否正在从远程获取数据
        gd_list:[], //客户名称后台返回数据
        states: [],  //筛选出客户名称数组
        name_list:"",

        par_form:{
          area:"",
          area_list:{},
          ares_s:"",
          ares_lists:{},
          find_area:"",
          find_list:{
            list:[],
            totalMap:{}
          },
          param_list:{
            param:{}
          },
          year_list:{},

          mn_find_list:{   //模拟数据
            list:[],
            totalMap:{}
          },
          mn_param_list:{   //模拟数据
            param:{}
          },

        },

        par_data:{
            a:0,  //其中富余电
            b:0,  //其中直购电
            c:0,  //可做富余电
            d:0,  //剩余直购电
        },
        mn_par_data:{  //模拟数据
          a:0,  //其中富余电
          b:0,  //其中直购电
          c:0,  //可做富余电
          d:0,  //剩余直购电
        },

        year_yg:"",
        mn_year_yg:"",

        tableData:[],
        tableData_1:[],   //模拟数据

      }
    },
// 映射store数据
    computed: {

    },
    methods: {
      add_alert(){
        if (this.$refs["ruleForms"]!==undefined) {
          this.$refs["ruleForms"].resetFields();
        }
        this.linkAlert = true
      },
      import_list(){
//        var _temp_Export = "{'year':"+ this.finds.find_3 +",'month':"+ this.finds.find_4 +"}"
        var _temp_Export = {
            "year":this.finds.find_3,
          "month": this.finds.find_4
        }
        _temp_Export = JSON.stringify(_temp_Export)
        console.log(_temp_Export)
        ajax_list.poolMonthCustomerExportService(_temp_Export, res => {  //导出
          this.$emit('login-success', res);
        }, (res) => {

        });
      },
      changes(name,item){  //name 指input的位置，item 指input的内容
      //  console.log(isNaN(item))
          if(isNaN(item) || item == ""){
            item = 0;
            this.ruleThree[name] = 0
          }
      },
      mn_changes(name,item){  //name 指input的位置，item 指input的内容
       // console.log(isNaN(item))
        if(isNaN(item) || item == ""){
          item = 0;
          this.ruleTwo[name] = 0
        }
      },
      submits(){
        this.$refs["ruleThree"].validate((valid) => {
          if (valid) {
            this.add_create ={
              year:this.ruleThree.year,
              month:this.ruleThree.month,
              directPowerAmount1:this.ruleThree.one_1,
              surplusPowerAmount1:this.ruleThree.one_2,
              directPowerAmount2:this.ruleThree.one_3,
              surplusPowerAmount2:this.ruleThree.one_4,
              directPowerAmount3:this.ruleThree.one_5,
              surplusPowerAmount3:this.ruleThree.one_6,
              directPowerAmount4:this.ruleThree.one_7,
              surplusPowerAmount4:this.ruleThree.one_8,
              directPowerAmount5:this.ruleThree.one_9,
              surplusPowerAmount5:this.ruleThree.one_10,
              currentDirectPowerAmount:this.ruleThree.one_11,
              currentSurplusPowerAmount:this.ruleThree.one_12,
            }
            this.add_create = JSON.stringify(this.add_create);
            ajax_list.monthGapParamSaveService(this.add_create, res => {  //创建
              this.$emit('login-success', res);
            }, (res) => {
              if(res.status == 200){
                this.$message({
                  message: '保存成功',
                  type: 'success'
                });
              }
            });

            return true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });

      },
      toPercent(point){
          var str=0
          if(!isNaN(point)){
            str=Number(point*100).toFixed(2);
            str+="%";
          }else{
              str ="0%"
          }


        return str;
      },
      change_3(){ //地区
        if(this.finds.find_1 != ""){
          this.par_form.ares_s ={
            code:this.finds.find_1,
            areaLevel:"province"
          }
          this.par_form.ares_s= JSON.stringify(this.par_form.ares_s);
          ajax_list.areaListService(this.par_form.ares_s, res => {  //列表字典
            this.$emit('login-success', res);
          }, (res) => {
            this.par_form.ares_lists = res.body;
            this.form_2 = []
            this.finds.find_2 = ""
            var _temp_one_2 = this.form_2   //所在行政区域
            $.map(this.par_form.ares_lists,function(value){
              _temp_one_2.push({
                value:value.code,
                label:value.name
              });
            });
          });
        }

      },
      find_list(data){ //查询列表
        ajax_list.customerMonthPlanCurrentListService(data, res => {  //name
          this.$emit('login-success', res);
        }, (res) => {
          this.par_form.find_list = res.body
          this.par_data.a = this.par_form.find_list.totalMap.lastSurplusPower
          this.par_data.b = this.par_form.find_list.totalMap.directPower
          this.par_data.c = this.par_form.find_list.totalMap.canDoSurplusPower
          this.par_data.d = this.par_form.find_list.totalMap.remainderDirectPower

          this.tableData = []
          if(this.par_form.find_list.list.length != 0){
            var _temp_type = this.tableData;
            $.map( this.par_form.find_list.list,function(data){
              _temp_type.push({
                data_0: data.customerCode, //用户代码
                data_1: data.customerName, //客户名称
                data_2: data.contractPowerAmount, //月合同直购电量
                data_3: data.surplusPowerBase, //当月富余电基数
                data_4: data.lastUsePowerAmount,  //本次计划用电量
                data_5: data.lastSurplusPower, //其中富余电
                data_6: data.directPower, //其中直购电
                data_7: data.canDoSurplusPower , //可做富余电
                data_8: data.remainderDirectPower  // 剩余直购电
              });
            });
          }

        });

        ajax_list.monthGapParamDetailService (data, res => {  //
          this.$emit('login-success', res);
        }, (res) => {
            if(res.body.param){
              this.par_form.param_list = res.body.param
              this.ruleThree.one_1 = this.par_form.param_list.directPowerAmount1
              this.ruleThree.one_2 = this.par_form.param_list.surplusPowerAmount1
              this.ruleThree.one_3 = this.par_form.param_list.directPowerAmount2
              this.ruleThree.one_4 = this.par_form.param_list.surplusPowerAmount2
              this.ruleThree.one_5 = this.par_form.param_list.directPowerAmount3
              this.ruleThree.one_6 = this.par_form.param_list.surplusPowerAmount3
              this.ruleThree.one_7 = this.par_form.param_list.directPowerAmount4
              this.ruleThree.one_8 = this.par_form.param_list.surplusPowerAmount4
              this.ruleThree.one_9 = this.par_form.param_list.directPowerAmount5
              this.ruleThree.one_10 = this.par_form.param_list.surplusPowerAmount5
              this.ruleThree.one_11 = this.par_form.param_list.currentDirectPowerAmount
              this.ruleThree.one_12 = this.par_form.param_list.currentSurplusPowerAmount
              this.ruleThree.year = this.par_form.param_list.year
              this.ruleThree.month = this.par_form.param_list.month
            }else{
              this.ruleThree.one_1 = 0
              this.ruleThree.one_2 = 0
              this.ruleThree.one_3 = 0
              this.ruleThree.one_4 = 0
              this.ruleThree.one_5 = 0
              this.ruleThree.one_6 = 0
              this.ruleThree.one_7 = 0
              this.ruleThree.one_8 = 0
              this.ruleThree.one_9 = 0
              this.ruleThree.one_10 = 0
              this.ruleThree.one_11 = 0
              this.ruleThree.one_12 = 0
              this.ruleThree.year = this.finds.find_3
              this.ruleThree.month = this.finds.find_4
            }

        });

        var _year = "{'year':"+ this.finds.find_3 +"}"
        ajax_list.poolYearPurchasedPowerListService (_year, res => {  //
          this.$emit('login-success', res);
        }, (res) => {
          if(res.body.totalAmountMap){
            this.year_yg = res.body.totalAmountMap['totalAmount' + this.finds.find_4]
          }else{
            this.year_yg = 0
          }

        });

      },
      find_screen(){ //筛选
        this.par_form.find_area = "{'year':"+ this.finds.find_3 +",'month':"+ this.finds.find_4 +"}"
        this.find_list(this.par_form.find_area)
      },
      empty_find(){ //清空
        this.finds.find_1 = ""
        this.finds.find_2 = ""
        var date=new Date;
        this.finds.find_3 = date.getFullYear()
        this.finds.find_4 = date.getMonth() + 1
        this.par_form.find_area = "{'year':"+ this.finds.find_3 +",'month':"+ this.finds.find_4 +"}"
        this.find_list(this.par_form.find_area)
      },
//      handleClick(obj){
////          console.log(obj)
//        this.$router.push({name:'tacheList',params:{one:obj.data_id,two:obj.data_7,three:obj.data_1}});
////          console.log(obj)
//
//      },
      handleClick(tab) {
       // console.log(tab.index, tab.label);
      },
      remoteMethod(query) { //客户名称远程搜索选择
        if (query !== '') {
          /*清空临时数组*/
          this.states = [];
          this.list = [];
          this.options4 = [];

          this.loading = true;
          this.name_list = "{'name': '"+ query +"'}",
            setTimeout(() => {
              this.loading = false;
              ajax_list.customerListService(this.name_list, res => {  //name
                this.$emit('login-success', res);
              }, (res) => {
                this.gd_list = res.body.list;
                for (var i = 0; i < this.gd_list.length; i++) {
                  this.states.push(this.gd_list[i].name);
                }
                this.list = this.states.map(item => {
                  return { value: item, label: item };
                });
                this.options4 = this.list.filter(item => {
                  return item.label.toLowerCase()
                      .indexOf(query.toLowerCase()) > -1;
                });
              });

            }, 200);
        } else {
          this.options4 = [];
        }
      },
      add_bj(){
        this.$refs["ruleForms"].validate((valid) => {
          if (valid) {
            var _temp_data  = "{'year':"+ this.ruleThree.year +",'month':"+ this.ruleThree.month +",'number':"+ this.ruleForms.vue_0 +"}"
            ajax_list.customerMonthPlanCurrentListService(_temp_data, res => {  //冻结数据
              this.$emit('login-success', res);
            }, (res) => {
                if(res.status == 200){
                    this.linkAlert = false
                    this.ListAlert = true
                  this.activeName2 = 'first'
                  this.activeName3 = 'one_pane'
                  this.par_form.mn_find_list = res.body
                  this.mn_par_data.a = this.par_form.mn_find_list.totalMap.lastSurplusPower
                  this.mn_par_data.b = this.par_form.mn_find_list.totalMap.directPower
                  this.mn_par_data.c = this.par_form.mn_find_list.totalMap.canDoSurplusPower
                  this.mn_par_data.d = this.par_form.mn_find_list.totalMap.remainderDirectPower

                  this.tableData_1 = []
                  var _temp_type = this.tableData_1;
                  $.map( this.par_form.mn_find_list.list,function(data){
                    _temp_type.push({
                      data_0: data.customerCode, //客户名称
                      data_1: data.customerName, //客户名称
                      data_2: data.contractPowerAmount, //月合同直购电量
                      data_3: data.surplusPowerBase, //当月富余电基数
                      data_4: data.lastUsePowerAmount,  //本次计划用电量
                      data_5: data.lastSurplusPower, //其中富余电
                      data_6: data.directPower, //其中直购电
                      data_7: data.canDoSurplusPower , //可做富余电
                      data_8: data.remainderDirectPower  // 剩余直购电
                    });
                  });


                  var _temp_mn = "{'year':"+ this.ruleThree.year +",'month':"+ this.ruleThree.month +"}"
                  ajax_list.monthGapParamDetailService (_temp_mn, res => {  //
                    this.$emit('login-success', res);
                  }, (res) => {

                    this.ruleTwo.one_1 = 0
                    this.ruleTwo.one_2 = 0
                    this.ruleTwo.one_3 = 0
                    this.ruleTwo.one_4 = 0
                    this.ruleTwo.one_5 = 0
                    this.ruleTwo.one_6 = 0
                    this.ruleTwo.one_7 = 0
                    this.ruleTwo.one_8 = 0
                    this.ruleTwo.one_9 = 0
                    this.ruleTwo.one_10 = 0
                    this.ruleTwo.one_11 = 0
                    this.ruleTwo.one_12 = 0

                    if(res.body.param){
                      this.par_form.mn_param_list = res.body.param
                      this.ruleTwo.one_1 = this.par_form.mn_param_list.directPowerAmount1
                      this.ruleTwo.one_2 = this.par_form.mn_param_list.surplusPowerAmount1
                      this.ruleTwo.one_3 = this.par_form.mn_param_list.directPowerAmount2
                      this.ruleTwo.one_4 = this.par_form.mn_param_list.surplusPowerAmount2
                      this.ruleTwo.one_5 = this.par_form.mn_param_list.directPowerAmount3
                      this.ruleTwo.one_6 = this.par_form.mn_param_list.surplusPowerAmount3
                      this.ruleTwo.one_7 = this.par_form.mn_param_list.directPowerAmount4
                      this.ruleTwo.one_8 = this.par_form.mn_param_list.surplusPowerAmount4
                      this.ruleTwo.one_9 = this.par_form.mn_param_list.directPowerAmount5
                      this.ruleTwo.one_10 = this.par_form.mn_param_list.surplusPowerAmount5
                      this.ruleTwo.one_11 = this.par_form.mn_param_list.currentDirectPowerAmount
                      this.ruleTwo.one_12 = this.par_form.mn_param_list.currentSurplusPowerAmount
                      this.ruleTwo.year = this.par_form.mn_param_list.year
                      this.ruleTwo.month = this.par_form.mn_param_list.month
                    }

                  });


                  var _year = "{'year':"+ this.ruleThree.year +"}"
                  ajax_list.poolYearPurchasedPowerListService (_year, res => {  //
                    this.$emit('login-success', res);
                  }, (res) => {
                    if(res.body.totalAmountMap){
                      this.mn_year_yg = res.body.totalAmountMap['totalAmount' + this.ruleThree.month ]
                    }else{
                      this.mn_year_yg = 0
                    }

                  });


                }
            });



            return true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });


      },
      show_map(id){
        let obj = {};
        if( this.menuList != ""){
          obj =  this.menuList.find((item)=>{
            return item.id === id;
          });
          if(obj != undefined){
            return obj.id
          }else{
            return ""
          }
        }else {
          return ""
        }


      },
    },
//生命周期钩子函数，进入页面显示之前获取数据到store
    created () {
      this.menuList = JSON.parse(localStorage.getItem('menuList'));
      var date=new Date;
      this.finds.find_3 = date.getFullYear()
      this.finds.find_4 = date.getMonth() + 1
      this.par_form.find_area = "{'year':"+ this.finds.find_3 +",'month':"+ this.finds.find_4 +"}"
      this.find_list(this.par_form.find_area)
      this.par_form.area = "{}"
      ajax_list.areaListService(this.par_form.area, res => {  //地区
        this.$emit('login-success', res);
      }, (res) => {
        this.par_form.area_list = res.body;
        var _temp_one_1 = this.form_1;   //所在区域
        $.map(this.par_form.area_list,function(value){
          _temp_one_1.push({
            value:value.code,
            label:value.name
          });
        });
      });


      this.par_form.area = "{}"
      ajax_list.constatsService(this.par_form.area, res => {  //年份
        this.$emit('login-success', res);
      }, (res) => {
        this.par_form.year_list = res.body.YearList;
        var _temp_one_3 = this.form_3;
        $.map(this.par_form.year_list,function(value){
          _temp_one_3.push({
            value:value,
            label:value
          });
        });
      });

    }
  }
</script>

<style scoped>

  p{
    margin: 0px;
    padding: 0px;
  }
  .marterial {
    width: 100%;
    min-height:calc(100vh - 51px - 28px);
    background-color: white;
    border:1px solid rgba(229,229,229,1);
    overflow: -webkit-paged-y;
  }

  .ma_title {
    width: 100%;
    height: 40px;
    /*background-color: #F5F6F7;*/
    border-bottom:1px solid rgba(229,229,229,1);
  }

  .ma_content {
    width: 100%;
    min-height: calc(100vh - 61px - 101px - 16px);
  }

  .ma_title span{
    display: inline-block;
    width: 4px;
    height: 16px;
    margin-top: 12px;
    margin-left: 10px;
    border-radius: 2px;
    background:rgba(0,119,221,1);
    float: left;
  }
  .ma_title p{
    font-size:14px;
    height: 40px;
    font-weight:bold;
    color:rgba(51,51,51,1);
    display: inline-block;
    line-height: 40px;
    float: left;
    margin-left: 10px;
  }
  .ma_screen{
    width: 100%;
    height:110px;
    padding-top: 20px;
    border-bottom:1px solid rgba(229,229,229,1);
  }
  .ma_btn{
    width: calc(100% - 20px);
    padding: 9px 10px;
    border-bottom:1px solid rgba(229,229,229,1);
  }

  .div_row{
    width: 100%;
    overflow: auto;
  }
  .ma_ui_div{
    width: 370px;
    height: 30px;
    float: left;
    margin-left: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .ma_ui_div p{
    width:60px;
    height:30px;
    line-height: 30px;
    float: left;
    font-size:12px;
    font-weight:400;
    color:rgba(51,51,51,1);
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

  .content_list{
    width: calc(100% - 10px);
    margin: 0 auto;
    min-height: calc(100vh - 352px);
    background-color: white;
  }
  .table_title_s{
    padding: 0px;
    width: 86%;
    margin: 20px auto;
    text-align: right;
    font-weight:400;
    color:rgba(112,112,112,1);
    font-size: 12px;
  }
  .list_table{
    width: 98%;
    margin:0px auto;
    margin-top: 40px;
    margin-bottom: 10px;
    border: 1px solid rgba(234,234,234,1);
  }
  .list_module{
    width: calc(100%);
    margin: 0px auto;
    /*padding-bottom:10px;*/
  }
  .list_module_title{
    width: 100%;
    height: 70px;
    line-height: 50px;
    text-align:left;

    /*background-color: #fcfcfc;*/
    /*border-bottom: 1px solid rgba(240,241,242,1);*/
  }
  .title_ico_div{
    width: 860px;
    /*width: 300px;*/
    margin:0 auto;
    padding-top: 10px;
    margin-bottom: 5px;
    position: relative;

  }

  .ico_div{
    width: 100%;
    float: left;
    text-align: center;
  }
  .text_div{
    width: 100%;
  }
  .text_div span{
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
  .text_div span:nth-child(1){
    margin-right: 98px;
    margin-left: -16px;
  }
  .text_div span:nth-child(2){
    margin-right: 68px;
  }
  .text_div span:nth-child(3){
    margin-right: 15px;
  }
  .text_div span:nth-child(4){
    margin-right: 35px;
  }


  .ico_div div{float: left}
  .ico{
    width: 20px;
    height: 20px;
    line-height: 22px;
    margin: 0 auto;
    border-radius: 50%;
    font-size: 14px;
    background-color: #8DBADE;
    border: 2px solid #8DBADE;
    text-align: center;
    color: #fff;
  }
  .ico_true{
    background-color:#fff ;
    border: 2px solid #E5E5E5;
    color:#E5E5E5 ;
  }
  .ico_div span{

  }
  .ico_text_true{
    color:#CDCDCD!important;
  }
  .ico_border{
    width: 170px;
    height: 4px;
    margin-top: 10px;
    background-color: rgba(234,234,234,1);
  }

  .list_con{
    width: calc(100% - 0px);
    margin: 0 auto;
    height: auto;
    /*overflow: auto;*/
    padding: 26px 0;
  }
  .list_con_input{
    width:36%;
    padding:0 5%;
    float: left;
    height: 36px;
    margin-top: 15px;
  }

  .list_con_row{
    width: 82%;
    float: left;
    height: 36px;
    margin-top: 20px;
    padding: 0 5%;
  }
  .list_con_input p,.list_con_row p{
    margin: 0px;
    padding: 0px;
    display: inline-block;
    float: left;
    text-align: right;
    width: 146px;
    font-size:14px;
    color:rgba(120,121,123,1);
    line-height: 36px;
    margin-right: 10px;
  }
  .list_con_input p span,.list_con_row p span{
    color: red;
    font-size: 14px;
  }
  .list_con_input .input_div{
    float: left;
    max-width: 280px;
    width: 50%;
    height: 36px;
  }
  .list_con_row .input_div{
    float: left;
    /*max-width: 280px;*/
    width: 50%;
    height: 36px;
  }
  .el-select{
    width: 100%;
  }
  .input_div_two{
    width:48%;
    height: auto;
    overflow: auto;
  }
  .input_div_two:nth-child(1){
    float: left;
  }
  .input_div_two:nth-child(2){
    float: right;
  }
  .el-input-group__append {
    background-color: #fff;
  }
  .dx_se div{
    margin-left: 0px!important;
  }

  .list_module_btn{
    margin: 0 auto;
    text-align: right;
    padding-top: 20px;
    padding-right: 20px;
  }
  .btn_aff{
    width: 140px;
  }

  .table_hint{
    width: 90%;
    margin: 0 auto;
    height:20px;
    font-size:12px;
    font-weight:400;
    color:rgba(176,176,176,1);
    line-height:20px;
    text-align: right;
    /*margin-top: 30px;*/
    /*margin-bottom: 10px;*/
  }
  .table{
    width: 96%;
    margin: 0 auto;
    border:1px solid rgba(234,234,234,1)
  }
  .table_tr{
    width: 100%;
    height: 50px;
  }

  .table .table_tr:nth-child(2n+1){
    background:rgba(249,249,249,1);
  }
  .table_title{
    background:rgba(252,252,252,1)!important;
    border-bottom:1px solid rgba(234,234,234,1)
  }

  .two_p p{
    height: 25px;
    line-height: 25px;
  }

  .table_td_w span{
    color: red;
    font-size: 12px;
  }

  /*第三步骤的table宽度*/
  .three_table .table_tr .table_td{
    width: calc(90% / 3);
    line-height: 50px;
    float: left;
  }
  .three_table  .table_tr .table_td:nth-child(1){
    width: calc(90% / 3);
  }
  .three_table .table_title .table_td .table_td_w{
    width: 80%;
  }
  .three_table  .table_td .table_td_w{
    width: 80%;
    margin: 0 auto;
    height: 32px;
    font-size:14px;
    font-weight:400;
    text-align: center;
    color:rgba(96,96,96,1);
  }

  .table_td_color{
    font-size:14px!important;
    color:rgba(0,119,221,1)!important;
  }

  /*** 弹窗 ***/

  .add_div{
    background-color: white;
  }
  .add_div_one{
    width: 100%;
    min-height: 150px;
    /*background:rgba(73,138,243,1);*/
  }
  .add_div_one .one_title{
    margin-left: 28px;
    padding-top: 20px;
    font-size:16px;
    font-weight:bold;
    color:rgba(254,254,254,1);
  }
  .add_div_one .one_title i{
    float: right;
    margin-right: 28px;
    font-size: 18px;
    margin-top: 2px;
  }
  .one_con{
    width: 96%;
    margin: 0px auto;
    margin-top: 50px;
  }

  .one_con_img{
    width: 50%;
    float: left;
    margin-top:10px;
  }
  .one_con_img p{
    margin-top: 30px;
    font-size:18px;
    font-weight:400;
    text-align: center;
    color:rgba(254,254,254,1);
  }
  .one_con_img div{
    width: 130px;
    height: 130px;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 50%;
  }
  .one_con .one_img{
    background: url("../../../assets/aImg/one_con1s.png") center no-repeat;
  }
  .one_con .one_imgs{
    background: url("../../../assets/aImg/one_con1.png") center no-repeat;
  }
  .two_img{
    background: url("../../../assets/aImg/one_con2.png") center no-repeat;
  }
  .two_imgs{
    background: url("../../../assets/aImg/one_con2s.png") center no-repeat;
  }
  .add_div_two{
    width: 250px;
    margin: 30px auto;
    overflow: auto;
  }
  .cont_btn{
    width: 100px;
    float: left;

  }
  .cont_btn button{
    width: 100%;
    font-size:14px;
    margin-bottom: 10px;
    color:rgba(255,255,255,1);
    background:rgba(93,179,247,1);
  }
  .wi_btn{
    width: 100px;
    float: left;
    margin-right: 30px;
  }
  .wi_btn button{
    width: 100%;
    font-size:14px;
    margin-bottom: 10px;
    color:rgba(150,150,150,1);
    background:#fff;
  }

  /*** 弹窗结束 **/

  /**  alert_list 弹窗 **/
  .alert_list   .add_div_one{
    width: 100%;
    min-height: 63vh;
    /*background:rgba(73,138,243,1);*/
  }

  .alert_list  .list_table{
    width: 98%;
    margin:0px auto;
    margin-top: 20px;
    margin-bottom: 10px;
    border: 1px solid rgba(234,234,234,1);
  }

  .alert_list .one_con[data-v-020abec6] {
    width: 90%;
    margin: 0px auto;
    margin-top: 30px;
  }
</style>
<style>

  .alert_list .el-dialog{
    margin-top: 5vh!important;
    height: calc(100% - 10vh);
  }

  .three_table .el-input__inner{
    text-align: center;
  }
  .el-dialog__header {
    background: rgba(73,138,243,1)!important;
  }
  .el-dialog__title{
    color:white;
    font-size: 16px;
  }

  .el-dialog__headerbtn .el-dialog__close{
    color:white;
  }
  .el-dialog__body{
    padding:0;
  }
  .el-message .el-icon-success{
    color: #3364e4;
  }
  .el-message--success .el-message__content {
    color: #606060;
  }
  .el-message--success {
    background-color: rgba(242,245,255,1);
    border-color: #e1f3d8;
  }
  .el-table .cell{
    font-size:12px;
    font-weight:400;
    color:#606060;
  }
  .el-table th>.cell{
    font-size:14px;
  }

  .add_alert .el-button{
    padding: 8px 12px;
    font-size: 12px;
  }
  .one_con .el-button{
    color: rgba(0, 132, 238, 0.67);
    border: 1px solid rgba(0, 132, 238, 0.67);
  }
  .list_table .el-button{
    padding: 8px 12px;
    font-size: 10px;
  }

  .list_table .el-button:nth-child(1){
    color: #0077DD;
    border: 1px solid #0077DD;
  }
  .list_table .el-button:nth-child(2):hover{
    color: #5a5e66;
    border: 1px solid #d8dce5;
  }
</style>
