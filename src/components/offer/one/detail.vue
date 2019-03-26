<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <div class="ma_title_left" @click="aff_cancel">
          <i class="el-icon-arrow-left"></i>
          <p>报量</p>
        </div>
      </div>
      <div class="ma_content">
        <div class="ma_screen">
          <div class="div_row">

            <div class="ma_ui_div ma_ui_title">
              <p>客户名称：</p>
              <div class="input_ss">{{this.par.client_name}}</div>
            </div>
            <div class="ma_ui_div ma_ui_title">
              <p>业务人员：</p>
              <div class="input_ss">{{ this.par.name}}</div>
            </div>
          </div>
          <div class="div_row">
            <div class="ma_ui_div">
              <p>年份：</p>
              <div class="input_ss">
                <el-select style="width: 100%;"  @change="find_screen"  size="medium" v-model="finds.find_1" placeholder="请选择">
                  <el-option
                    v-for="item in form_1"
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
          <el-button size="small" @click="reset_val" type="primary" >重置富余电</el-button>
        </div>
        <div v-if="this.no_val == 1" class="content_list">
          <div class="list_module   off_input">
            <div class="table_hint" style="margin-top: 20px">电量单位：千瓦时（kwh）</div>
            <div class="list_con" >

              <div class="table three_table">

                <div class="table_tr table_title">
                  <div class="table_td"><div class="table_td_w"> </div></div>
                  <div class="table_td"><div class="table_td_w"> </div></div>
                  <div class="table_td"><div class="table_td_w"> 计划用电量</div></div>
                  <div class="table_td"><div class="table_td_w"> 富余电</div></div>
                  <div class="table_td"><div class="table_td_w"> 直购电</div></div>
                </div>
                <el-form :model="ruleThree" :rules="rules_three" ref="ruleThree" label-width="0px" class="demo-ruleForm">
                  <div class="table_tr ">
                    <div class="table_td"><div class="table_td_w"><span>*</span>总电量</div></div>
                    <div class="table_td"><div class="table_td_w">/</div></div>
                    <div class="table_td"><div class="table_td_w table_td_color">{{division_num(add_num(ruleThree.one_1) + add_num(ruleThree.one_2) + add_num(ruleThree.one_3) + add_num(ruleThree.one_4) + add_num(ruleThree.one_5) + add_num(ruleThree.one_6) + add_num(ruleThree.one_7) + add_num(ruleThree.one_8) + add_num(ruleThree.one_9) + add_num(ruleThree.one_10) + add_num(ruleThree.one_11) + add_num(ruleThree.one_12))}}</div></div>
                    <div class="table_td" v-if="this.isBigIndustry == true"><div class="table_td_w table_td_color" ></div></div>
                    <div class="table_td" v-else=""><div class="table_td_w table_td_color" >{{division_num(add_num(ruleThree.two_6) + add_num(ruleThree.two_7) + add_num(ruleThree.two_8) + add_num(ruleThree.two_9) + add_num(ruleThree.two_10))}}</div></div>
                    <div class="table_td" v-if="this.isBigIndustry == true"><div class="table_td_w table_td_color">{{division_num(add_num(ruleThree.one_1) + add_num(ruleThree.one_2) + add_num(ruleThree.one_3) + add_num(ruleThree.one_4) + add_num(ruleThree.one_5) + add_num( ruleThree.one_6 ) + add_num( this.ruleThree.one_7) + add_num( this.ruleThree.one_8 ) + add_num( this.ruleThree.one_9 ) + add_num( this.ruleThree.one_10 ) + add_num(ruleThree.one_11) + add_num(ruleThree.one_12))}}</div></div>
                    <div class="table_td" v-else=""><div class="table_td_w table_td_color">{{division_num(add_num(ruleThree.one_1) + add_num(ruleThree.one_2) + add_num(ruleThree.one_3) + add_num(ruleThree.one_4) + add_num(ruleThree.one_5) + ( add_num(ruleThree.one_6) - add_num(ruleThree.two_6) ) + ( add_num(this.ruleThree.one_7) - add_num(this.ruleThree.two_7) ) + ( add_num(this.ruleThree.one_8 - this.ruleThree.two_8) ) + ( add_num(this.ruleThree.one_9) - add_num(this.ruleThree.two_9) ) + ( add_num(this.ruleThree.one_10) - add_num(this.ruleThree.two_10) ) + add_num(ruleThree.one_11) + add_num(ruleThree.one_12))}}</div></div>

                  </div>
                  <div class="table_tr ">
                    <div class="table_td"><div class="table_td_w">1月</div></div>
                    <div class="table_td"><div class="table_td_w">枯</div></div>
                    <div class="table_td"><div class="table_td_w">
                      <el-form-item label=""  prop="one_1">
                        <el-input type="number" @change="changes('one_1',ruleThree.one_1)" v-model.number ="ruleThree.one_1"></el-input>
                      </el-form-item>
                    </div></div>
                    <div class="table_td"><div class="table_td_w">/</div></div>
                    <div class="table_td"><div class="table_td_w">{{this.ruleThree.one_1}}</div></div>
                  </div>
                  <div class="table_tr ">
                    <div class="table_td"><div class="table_td_w">2月</div></div>
                    <div class="table_td"><div class="table_td_w">枯</div></div>
                    <div class="table_td"><div class="table_td_w">
                      <el-form-item label=""  prop="one_2">
                        <el-input type="number" @change="changes('one_2',ruleThree.one_2)" v-model.number ="ruleThree.one_2"></el-input>
                      </el-form-item>
                    </div></div>
                    <div class="table_td"><div class="table_td_w">/</div></div>
                    <div class="table_td"><div class="table_td_w">{{this.ruleThree.one_2}}</div></div>
                  </div>
                  <div class="table_tr ">
                    <div class="table_td"><div class="table_td_w">3月</div></div>
                    <div class="table_td"><div class="table_td_w">枯</div></div>
                    <div class="table_td"><div class="table_td_w">
                      <el-form-item label=""  prop="one_3">
                        <el-input type="number" @change="changes('one_3',ruleThree.one_3)" v-model.number ="ruleThree.one_3"></el-input>
                      </el-form-item>
                    </div></div>
                    <div class="table_td"><div class="table_td_w">/</div></div>
                    <div class="table_td"><div class="table_td_w">{{this.ruleThree.one_3}}</div></div>
                  </div>
                  <div class="table_tr ">
                    <div class="table_td"><div class="table_td_w">4月</div></div>
                    <div class="table_td"><div class="table_td_w">枯</div></div>
                    <div class="table_td"><div class="table_td_w">
                      <el-form-item label=""  prop="one_4">
                        <el-input type="number" @change="changes('one_4',ruleThree.one_4)" v-model.number ="ruleThree.one_4"></el-input>
                      </el-form-item>
                    </div></div>
                    <div class="table_td"><div class="table_td_w">/</div></div>
                    <div class="table_td"><div class="table_td_w">{{this.ruleThree.one_4}}</div></div>
                  </div>
                  <div class="table_tr ">
                    <div class="table_td"><div class="table_td_w">5月</div></div>
                    <div class="table_td"><div class="table_td_w">平</div></div>
                    <div class="table_td"><div class="table_td_w">
                      <el-form-item label=""  prop="one_5">
                        <el-input type="number" @change="changes('one_5',ruleThree.one_5)" v-model.number ="ruleThree.one_5"></el-input>
                      </el-form-item>
                    </div></div>
                    <div class="table_td"><div class="table_td_w">/</div></div>
                    <div class="table_td"><div class="table_td_w">{{this.ruleThree.one_5}}</div></div>
                  </div>
                  <div class="table_tr ">
                    <div class="table_td"><div class="table_td_w">6月</div></div>
                    <div class="table_td"><div class="table_td_w">丰</div></div>
                    <div class="table_td"><div class="table_td_w">
                      <el-form-item label=""  prop="one_6">
                        <el-input type="number" @change="change_s('one_6',ruleThree.one_6,'6')" v-model.number ="ruleThree.one_6"></el-input>
                      </el-form-item>
                    </div></div>
                    <div class="table_td" v-if="this.isBigIndustry == true"><div class="table_td_w">/</div></div>
                    <div  v-else="" class="table_td"><div class="table_td_w">
                      <el-form-item label=""  prop="two_6">
                        <el-input type="number" @change="changes('two_6',ruleThree.two_6)" v-model.number="ruleThree.two_6"></el-input>
                      </el-form-item>
                    </div></div>
                    <div class="table_td" v-if="this.isBigIndustry == true"><div class="table_td_w">{{this.ruleThree.one_6}}</div></div>
                    <div class="table_td" v-else=""><div class="table_td_w">{{this.ruleThree.one_6 - this.ruleThree.two_6}}</div></div>
                  </div>
                  <div class="table_tr ">
                    <div class="table_td"><div class="table_td_w">7月</div></div>
                    <div class="table_td"><div class="table_td_w">丰</div></div>
                    <div class="table_td"><div class="table_td_w">
                      <el-form-item label=""  prop="one_7">
                        <el-input type="number" @change="change_s('one_7',ruleThree.one_7,'7')" v-model.number ="ruleThree.one_7"></el-input>
                      </el-form-item>
                    </div></div>
                    <div class="table_td" v-if="this.isBigIndustry == true"><div class="table_td_w">/</div></div>
                    <div  v-else="" class="table_td"><div class="table_td_w">
                      <el-form-item label=""  prop="two_7">
                        <el-input type="number" @change="changes('two_7',ruleThree.two_7)" v-model.number="ruleThree.two_7"></el-input>
                      </el-form-item>
                    </div></div>
                    <div class="table_td"><div class="table_td_w">{{this.ruleThree.one_7 - this.ruleThree.two_7}}</div></div>
                  </div>
                  <div class="table_tr ">
                    <div class="table_td"><div class="table_td_w">8月</div></div>
                    <div class="table_td"><div class="table_td_w">丰</div></div>
                    <div class="table_td"><div class="table_td_w">
                      <el-form-item label=""  prop="one_8">
                        <el-input type="number" @change="change_s('one_8',ruleThree.one_8,'8')" v-model.number ="ruleThree.one_8"></el-input>
                      </el-form-item>
                    </div></div>
                    <div class="table_td" v-if="this.isBigIndustry == true"><div class="table_td_w">/</div></div>
                    <div  v-else="" class="table_td"><div class="table_td_w">
                      <el-form-item label=""  prop="two_8">
                        <el-input type="number" @change="changes('two_8',ruleThree.two_8)" v-model.number="ruleThree.two_8"></el-input>
                      </el-form-item>
                    </div></div>
                    <div class="table_td"><div class="table_td_w">{{this.ruleThree.one_8 - this.ruleThree.two_8}}</div></div>
                  </div>
                  <div class="table_tr ">
                    <div class="table_td"><div class="table_td_w">9月</div></div>
                    <div class="table_td"><div class="table_td_w">丰</div></div>
                    <div class="table_td"><div class="table_td_w">
                      <el-form-item label=""  prop="one_9">
                        <el-input type="number" @change="change_s('one_9',ruleThree.one_9,'9')" v-model.number ="ruleThree.one_9"></el-input>
                      </el-form-item>
                    </div></div>
                    <div class="table_td" v-if="this.isBigIndustry == true"><div class="table_td_w">/</div></div>
                    <div  v-else="" class="table_td"><div class="table_td_w">
                      <el-form-item label=""  prop="two_9">
                        <el-input type="number" @change="changes('two_9',ruleThree.two_9)" v-model.number="ruleThree.two_9"></el-input>
                      </el-form-item>
                    </div></div>
                    <div class="table_td"><div class="table_td_w">{{this.ruleThree.one_9 - this.ruleThree.two_9}}</div></div>
                  </div>
                  <div class="table_tr ">
                    <div class="table_td"><div class="table_td_w">10月</div></div>
                    <div class="table_td"><div class="table_td_w">丰</div></div>
                    <div class="table_td"><div class="table_td_w">
                      <el-form-item label=""  prop="one_10">
                        <el-input type="number" @change="change_s('one_10',ruleThree.one_10,'10')" v-model.number ="ruleThree.one_10"></el-input>
                      </el-form-item>
                    </div></div>
                    <div class="table_td" v-if="this.isBigIndustry == true"><div class="table_td_w">/</div></div>
                    <div  v-else="" class="table_td"><div class="table_td_w">
                      <el-form-item label=""  prop="two_10">
                        <el-input type="number" @change="changes('two_10',ruleThree.two_10)" v-model.number="ruleThree.two_10"></el-input>
                      </el-form-item>
                    </div></div>
                    <div class="table_td"><div class="table_td_w">{{this.ruleThree.one_10 - this.ruleThree.two_10}}</div></div>
                  </div>
                  <div class="table_tr ">
                    <div class="table_td"><div class="table_td_w">11月</div></div>
                    <div class="table_td"><div class="table_td_w">平</div></div>
                    <div class="table_td"><div class="table_td_w">
                      <el-form-item label=""  prop="one_11">
                        <el-input type="number" @change="changes('one_11',ruleThree.one_11)" v-model.number ="ruleThree.one_11"></el-input>
                      </el-form-item>
                    </div></div>
                    <div class="table_td" ><div class="table_td_w">/</div></div>
                    <div class="table_td"><div class="table_td_w">{{this.ruleThree.one_11}}</div></div>
                  </div>
                  <div class="table_tr ">
                    <div class="table_td"><div class="table_td_w">12月</div></div>
                    <div class="table_td"><div class="table_td_w">枯</div></div>
                    <div class="table_td"><div class="table_td_w">
                      <el-form-item label=""  prop="one_12">
                        <el-input type="number" @change="changes('one_12',ruleThree.one_12)" v-model.number ="ruleThree.one_12"></el-input>
                      </el-form-item>
                    </div></div>
                    <div class="table_td" ><div class="table_td_w">/</div></div>
                    <div class="table_td"><div class="table_td_w">{{this.ruleThree.one_12}}</div></div>
                  </div>
                </el-form>
              </div>

    <!--横向表格  开始   -->
              <!--<div class="table three_table">-->
                <!--<div class="table_tr table_title">-->
                  <!--<div class="table_td"><div class="table_td_w">类别</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w"><span>*</span>总电量</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">1月</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">2月</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">3月</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">4月</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">5月</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">6月</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">7月</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">8月</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">9月</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">10月</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">11月</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">12月</div></div>-->
                <!--</div>-->
                <!--<div class="table_tr">-->
                  <!--<div class="table_td"><div class="table_td_w"> </div></div>-->
                  <!--<div class="table_td"><div class="table_td_w"> </div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">枯</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">枯</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">枯</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">枯</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">平</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">丰</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">丰</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">丰</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">丰</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">丰</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">平</div></div>-->
                  <!--<div class="table_td"><div class="table_td_w">枯</div></div>-->
                <!--</div>-->
                <!--<el-form :model="ruleThree" :rules="rules_three" ref="ruleThree" label-width="0px" class="demo-ruleForm">-->
                  <!--<div class="table_tr">-->
                    <!--<div class="table_td"><div class="table_td_w">计划用电量</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w table_td_color">{{ruleThree.one_1 + ruleThree.one_2 + ruleThree.one_3 + ruleThree.one_4 + ruleThree.one_5 + ruleThree.one_6 + ruleThree.one_7 + ruleThree.one_8 + ruleThree.one_9 + ruleThree.one_10 + ruleThree.one_11 + ruleThree.one_12}}</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">-->
                      <!--<el-form-item label=""  prop="one_1">-->
                        <!--<el-input type="number" @change="changes('one_1',ruleThree.one_1)" v-model.number ="ruleThree.one_1"></el-input>-->
                      <!--</el-form-item>-->
                    <!--</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">-->
                      <!--<el-form-item label=""  prop="one_2">-->
                        <!--<el-input type="number" @change="changes('one_2',ruleThree.one_2)" v-model.number="ruleThree.one_2"></el-input>-->
                      <!--</el-form-item>-->
                    <!--</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">-->
                      <!--<el-form-item label=""  prop="one_3">-->
                        <!--<el-input type="number" @change="changes('one_3',ruleThree.one_3)" v-model.number="ruleThree.one_3"></el-input>-->
                      <!--</el-form-item>-->
                    <!--</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">-->
                      <!--<el-form-item label=""  prop="one_4">-->
                        <!--<el-input type="number" @change="changes('one_4',ruleThree.one_4)" v-model.number="ruleThree.one_4"></el-input>-->
                      <!--</el-form-item>-->
                    <!--</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">-->
                      <!--<el-form-item label=""  prop="one_5">-->
                        <!--<el-input type="number" @change="changes('one_5',ruleThree.one_5)" v-model.number="ruleThree.one_5"></el-input>-->
                      <!--</el-form-item>-->
                    <!--</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">-->
                      <!--<el-form-item label=""  prop="one_6">-->
                        <!--<el-input type="number" @change="changes('one_6',ruleThree.one_6)" v-model.number="ruleThree.one_6"></el-input>-->
                      <!--</el-form-item>-->
                    <!--</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">-->
                      <!--<el-form-item label=""  prop="one_7">-->
                        <!--<el-input type="number" @change="changes('one_7',ruleThree.one_7)" v-model.number="ruleThree.one_7"></el-input>-->
                      <!--</el-form-item>-->
                    <!--</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">-->
                      <!--<el-form-item label=""  prop="one_8">-->
                        <!--<el-input type="number" @change="changes('one_8',ruleThree.one_8)" v-model.number="ruleThree.one_8"></el-input>-->
                      <!--</el-form-item>-->
                    <!--</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">-->
                      <!--<el-form-item label=""  prop="one_9">-->
                        <!--<el-input type="number" @change="changes('one_9',ruleThree.one_9)" v-model.number="ruleThree.one_9"></el-input>-->
                      <!--</el-form-item>-->
                    <!--</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">-->
                      <!--<el-form-item label=""  prop="one_10">-->
                        <!--<el-input type="number" @change="changes('one_10',ruleThree.one_10)" v-model.number="ruleThree.one_10"></el-input>-->
                      <!--</el-form-item>-->
                    <!--</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">-->
                      <!--<el-form-item label=""  prop="one_11">-->
                        <!--<el-input type="number" @change="changes('one_11',ruleThree.one_11)" v-model.number="ruleThree.one_11"></el-input>-->
                      <!--</el-form-item>-->
                    <!--</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">-->
                      <!--<el-form-item label=""  prop="one_12">-->
                        <!--<el-input type="number" @change="changes('one_12',ruleThree.one_12)" v-model.number="ruleThree.one_12"></el-input>-->
                      <!--</el-form-item>-->
                    <!--</div></div>-->
                  <!--</div>-->
                  <!--<div class="table_tr">-->
                    <!--<div class="table_td"><div class="table_td_w">富余电</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w table_td_color" >{{ruleThree.two_6 + ruleThree.two_7 + ruleThree.two_8 + ruleThree.two_9 + ruleThree.two_10}}</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">/</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">/</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">/</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">/</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">/</div></div>-->
                    <!--<div v-if="this.isBigIndustry == true">-->
                      <!--<div class="table_td"><div class="table_td_w">/</div></div>-->
                      <!--<div class="table_td"><div class="table_td_w">/</div></div>-->
                      <!--<div class="table_td"><div class="table_td_w">/</div></div>-->
                      <!--<div class="table_td"><div class="table_td_w">/</div></div>-->
                      <!--<div class="table_td"><div class="table_td_w">/</div></div>-->
                    <!--</div>-->
                    <!--<div v-if="this.isBigIndustry == false">-->
                      <!--<div class="table_td"><div class="table_td_w">-->
                        <!--<el-form-item label=""  prop="two_6">-->
                          <!--<el-input type="number" @change="changes('two_6',ruleThree.two_6)" v-model.number="ruleThree.two_6"></el-input>-->
                        <!--</el-form-item>-->
                      <!--</div></div>-->
                      <!--<div class="table_td"><div class="table_td_w">-->
                        <!--<el-form-item label=""  prop="two_7">-->
                          <!--<el-input type="number" @change="changes('two_7',ruleThree.two_7)" v-model.number="ruleThree.two_7"></el-input>-->
                        <!--</el-form-item>-->
                      <!--</div></div>-->
                      <!--<div class="table_td"><div class="table_td_w">-->
                        <!--<el-form-item label=""  prop="two_8">-->
                          <!--<el-input type="number" @change="changes('two_8',ruleThree.two_8)" v-model.number="ruleThree.two_8"></el-input>-->
                        <!--</el-form-item>-->
                      <!--</div></div>-->
                      <!--<div class="table_td"><div class="table_td_w">-->
                        <!--<el-form-item label=""  prop="two_9">-->
                          <!--<el-input type="number" @change="changes('two_9',ruleThree.two_9)" v-model.number="ruleThree.two_9"></el-input>-->
                        <!--</el-form-item>-->
                      <!--</div></div>-->
                      <!--<div class="table_td"><div class="table_td_w">-->
                        <!--<el-form-item label=""  prop="two_10">-->
                          <!--<el-input type="number" @change="changes('two_10',ruleThree.two_10)" v-model.number="ruleThree.two_10"></el-input>-->
                        <!--</el-form-item>-->
                      <!--</div></div>-->
                    <!--</div>-->

                    <!--<div class="table_td"><div class="table_td_w">/</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">/</div></div>-->
                  <!--</div>-->
                  <!--<div class="table_tr table_tr_input">-->
                    <!--<div class="table_td"><div class="table_td_w">直购电</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w table_td_color">{{ruleThree.one_1 + ruleThree.one_2 + ruleThree.one_3 + ruleThree.one_4 + ruleThree.one_5 + ( ruleThree.one_6 - ruleThree.two_6 ) + ( this.ruleThree.one_7 - this.ruleThree.two_7 ) + ( this.ruleThree.one_8 - this.ruleThree.two_8 ) + ( this.ruleThree.one_9 - this.ruleThree.two_9 ) + ( this.ruleThree.one_10 - this.ruleThree.two_10 ) + ruleThree.one_11 + ruleThree.one_12}}</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">{{this.ruleThree.one_1}}</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">{{this.ruleThree.one_2}}</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">{{this.ruleThree.one_3}}</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">{{this.ruleThree.one_4}}</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">{{this.ruleThree.one_5}}</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">{{this.ruleThree.one_6 - this.ruleThree.two_6}}</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">{{this.ruleThree.one_7 - this.ruleThree.two_7}}</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">{{this.ruleThree.one_8 - this.ruleThree.two_8}}</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">{{this.ruleThree.one_9 - this.ruleThree.two_9}}</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">{{this.ruleThree.one_10 - this.ruleThree.two_10}}</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">{{this.ruleThree.one_11}}</div></div>-->
                    <!--<div class="table_td"><div class="table_td_w">{{this.ruleThree.one_12}}</div></div>-->
                  <!--</div>-->
                <!--</el-form>-->

              <!--</div>-->
    <!--横向表格  结束   -->

            </div>
          </div>
          <div class="ma_btn_S">
            <el-button style="float: right;margin-right:30px" @click="submits" size="small" type="primary" >保 存</el-button>
          </div>
        </div>
        <div v-if="this.no_val == 0" class="cont_div">
          <img src="../../../assets/aImg/notAvailable.png" alt="">
          <p>暂无合同</p>
        </div>
      </div>
    </div>
    <!--<router-view></router-view>-->

  </div>
</template>

<script>
  // 引入axios
  import ajax_list from '../../../api/offer'

  export default {
    data() {
      return {
        no_val:1,
        finds:{
          find_1:0,
          find_2:"",
          find_3:"",
          find_4:"",
        },
        isBigIndustry:false,
        surplusAvg:0,  //平均数
        par:{
          id:"",
          name:"", //业务员
          client_name:"",  //客户名称
          client_id:"",  //客户ID
          name_id:"", //业务员ID
        },
        form_1:[],
        ruleThree:{
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

          two_5:0,
          two_6:0,
          two_7:0,
          two_8:0,
          two_9:0,
          two_10:0,
          two_11:0,
          two_12:0,

          three_1:0,
          three_2:0,
          three_3:0,
          three_4:0,
          three_5:0,
          three_6:0,
          three_7:0,
          three_8:0,
          three_9:0,
          three_10:0,
          three_11:0,
          three_12:0,
        },
        rules_three:{
//          one_1:[
//            {  required: true, message: '请输入', trigger: 'blur' },
//            { type: 'number', message: '年龄必须为数字值'}
//          ],
//          one_2:[
//            { required: true, message: '请输入', trigger: 'blur' },
//          ],
//          one_3:[
//            { required: true, message: '请输入', trigger: 'blur' },
//          ],
//          one_4:[
//            { required: true, message: '请输入', trigger: 'blur' },
//          ],
//          one_5:[
//            { required: true, message: '请输入', trigger: 'blur' },
//          ],
//          one_6:[
//            { required: true, message: '请输入', trigger: 'blur' },
//          ],
//          one_7:[
//            { required: true, message: '请输入', trigger: 'blur' },
//          ],
//          one_8:[
//            { required: true, message: '请输入', trigger: 'blur' },
//          ],
//          one_9:[
//            { required: true, message: '请输入', trigger: 'blur' },
//          ],
//          one_10:[
//            { required: true, message: '请输入', trigger: 'blur' },
//          ],
//          one_11:[
//            { required: true, message: '请输入', trigger: 'blur' },
//          ],
//          one_12:[
//            { required: true, message: '请输入', trigger: 'blur' },
//          ],
        },


        par_form:{
          area:"",
          find_area:"",
          rest_list:"",
          find_list:{
            direct:{}, //直购电
            plan:{},  //计划用电
            surplus:{}, //富裕电
          },

        },

        bj_list:{
            id_1:"",
            id_2:"",
            id_3:"",

        },


      }
    },
// 映射store数据
    computed: {

    },
    methods: {
      changes(name,item){  //name 指input的位置，item 指input的内容    (判断输入的值是否为数字或空)
        //console.log(name,item)
        if(isNaN(item) || item == ""){
          item = 0;
          this.ruleThree[name] = 0
        }
      },
      change_s(name,item,names){  //name 指input的位置，item 指input的内容
      //  console.log(isNaN(item))
        if(isNaN(item) || item == ""){
          item = 0;
          this.ruleThree[name] = 0
        }else {  //(计划用电量-富余电前三年的平均数，且大于等于1万度(1万千瓦时)才显示，否则为空)
          if((item - this.surplusAvg) >= 10000){
            this.ruleThree["two_" + names ] = item - this.surplusAvg
          }else{
            this.ruleThree["two_" + names ] = 0
          }
        }
      },
      find_list(data){ //查询列表
        ajax_list.quotedDetailService(data, res => {  //
          this.$emit('login-success', res);
        }, (res) => {
          this.par_form.find_list = res.body;
          this.ruleThree.one_1 = this.par_form.find_list.plan.month1
          this.ruleThree.one_2 = this.par_form.find_list.plan.month2
          this.ruleThree.one_3 = this.par_form.find_list.plan.month3
          this.ruleThree.one_4 = this.par_form.find_list.plan.month4
          this.ruleThree.one_5 = this.par_form.find_list.plan.month5
          this.ruleThree.one_6 = this.par_form.find_list.plan.month6
          this.ruleThree.one_7 = this.par_form.find_list.plan.month7
          this.ruleThree.one_8 = this.par_form.find_list.plan.month8
          this.ruleThree.one_9 = this.par_form.find_list.plan.month9
          this.ruleThree.one_10 = this.par_form.find_list.plan.month10
          this.ruleThree.one_11 = this.par_form.find_list.plan.month11
          this.ruleThree.one_12 = this.par_form.find_list.plan.month12

          this.ruleThree.two_6 = this.par_form.find_list.surplus.month6
          this.ruleThree.two_7 = this.par_form.find_list.surplus.month7
          this.ruleThree.two_8 = this.par_form.find_list.surplus.month8
          this.ruleThree.two_9 = this.par_form.find_list.surplus.month9
          this.ruleThree.two_10 = this.par_form.find_list.surplus.month10

          this.bj_list.id_1 = this.par_form.find_list.plan.id
          this.bj_list.id_2 = this.par_form.find_list.surplus.id
          this.bj_list.id_3 = this.par_form.find_list.direct.id
          this.isBigIndustry = this.par_form.find_list.isBigIndustry
          this.surplusAvg = this.par_form.find_list.surplusAvg
        });
      },
      find_screen(){ //筛选
        this.par_form.find_area = "{'year':'"+ this.finds.find_1 +"','customerId':'"+ this.par.client_id  +"','businessUserId':'"+ this.par.name_id  + "'}"
        this.find_list(this.par_form.find_area)
      },
      empty_find(){ //清空

        var date=new Date;
        var _temp_year =  0
        $.map(this.form_1,function(value,index){

          if(date.getFullYear() == value.value){
            _temp_year = date.getFullYear()
          }else if(index == 0){
            _temp_year = value.value
          }
        });
        this.finds.find_1 = _temp_year
        console.log(this.finds.find_1)
      },
      reset_val(){ //重置富裕电
       var _temp_data = {
         customerQuotedId: this.par.id,
         plan:{
           month1:this.ruleThree.one_1,
           month2:this.ruleThree.one_2,
           month3:this.ruleThree.one_3,
           month4:this.ruleThree.one_4,
           month5:this.ruleThree.one_5,
           month6:this.ruleThree.one_6,
           month7:this.ruleThree.one_7,
           month8:this.ruleThree.one_8,
           month9:this.ruleThree.one_9,
           month10:this.ruleThree.one_10,
           month11:this.ruleThree.one_11,
           month12:this.ruleThree.one_12,
         }
       }
        _temp_data = JSON.stringify(_temp_data);
        ajax_list.quotedReSetService(_temp_data, res => {  //重置
          this.$emit('login-success', res);
        }, (res) => {
            this.par_form.rest_list = res.body

          this.ruleThree.one_1 = this.par_form.rest_list.plan.month1
          this.ruleThree.one_2 = this.par_form.rest_list.plan.month2
          this.ruleThree.one_3 = this.par_form.rest_list.plan.month3
          this.ruleThree.one_4 = this.par_form.rest_list.plan.month4
          this.ruleThree.one_5 = this.par_form.rest_list.plan.month5
          this.ruleThree.one_6 = this.par_form.rest_list.plan.month6
          this.ruleThree.one_7 = this.par_form.rest_list.plan.month7
          this.ruleThree.one_8 = this.par_form.rest_list.plan.month8
          this.ruleThree.one_9 = this.par_form.rest_list.plan.month9
          this.ruleThree.one_10 = this.par_form.rest_list.plan.month10
          this.ruleThree.one_11 = this.par_form.rest_list.plan.month11
          this.ruleThree.one_12 = this.par_form.rest_list.plan.month12

          this.ruleThree.two_6 = this.par_form.rest_list.surplus.month6
          this.ruleThree.two_7 = this.par_form.rest_list.surplus.month7
          this.ruleThree.two_8 = this.par_form.rest_list.surplus.month8
          this.ruleThree.two_9 = this.par_form.rest_list.surplus.month9
          this.ruleThree.two_10 = this.par_form.rest_list.surplus.month10

        });
      },
      submits(){ //提交
console.log(this.ruleThree.one_1 != "" && this.ruleThree.one_1 != 0)
//        if(this.ruleThree.one_1 != "" && this.ruleThree.one_2 != "" && this.ruleThree.one_3 != "" && this.ruleThree.one_4 != "" && this.ruleThree.one_5 != "" && this.ruleThree.one_6 != "" && this.ruleThree.one_7 != "" && this.ruleThree.one_8 != "" && this.ruleThree.one_9 != "" && this.ruleThree.one_10 != "" && this.ruleThree.one_11 != "" && this.ruleThree.one_12 != "" ){

            var _temp_sub = {
              customerQuotedId:this.par.id,
              plan:{
                id:this.bj_list.id_1,
                month1:this.ruleThree.one_1,
                month2:this.ruleThree.one_2,
                month3:this.ruleThree.one_3,
                month4:this.ruleThree.one_4,
                month5:this.ruleThree.one_5,
                month6:this.ruleThree.one_6,
                month7:this.ruleThree.one_7,
                month8:this.ruleThree.one_8,
                month9:this.ruleThree.one_9,
                month10:this.ruleThree.one_10,
                month11:this.ruleThree.one_11,
                month12:this.ruleThree.one_12,
              },
              surplus:{
                id:this.bj_list.id_2,
                month6:this.ruleThree.two_6,
                month7:this.ruleThree.two_7,
                month8:this.ruleThree.two_8,
                month9:this.ruleThree.two_9,
                month10:this.ruleThree.two_10,
              },
              direct:{
                id:this.bj_list.id_3,
                month1:this.ruleThree.one_1,
                month2:this.ruleThree.one_2,
                month3:this.ruleThree.one_3,
                month4:this.ruleThree.one_4,
                month5:this.ruleThree.one_5,
                month6:this.ruleThree.one_6 - this.ruleThree.two_6,
                month7:this.ruleThree.one_7 - this.ruleThree.two_7 ,
                month8:this.ruleThree.one_8 - this.ruleThree.two_8,
                month9:this.ruleThree.one_9 - this.ruleThree.two_9,
                month10:this.ruleThree.one_10 - this.ruleThree.two_10,
                month11:this.ruleThree.one_11,
                month12:this.ruleThree.one_12,
              }
            }
          _temp_sub = JSON.stringify(_temp_sub);
          ajax_list.quotedEditService(_temp_sub, res => {  //报价修改
            this.$emit('login-success', res);
          }, (res) => {
            if(res.status == 200){
              this.$message({
                message: '保存成功',
                type: 'success'
              });
            }
          });


//        }else{
//          this.$alert('请填写计划用电量', '提示', {
//            confirmButtonText: '确定',
//            callback: action => {
////              this.$message({
////                type: 'info',
////                message: `action: ${ action }`
////              });
//            }
//          });
//        }
      },
      aff_cancel(){ //返回取消按钮
        this.$router.go(-1);
      },


      add_num(val){   //小数相加，出现精度问题  先乘
//        一是JS浮点数计算的bug, 另一个是和计算机最终转换成二进制计算有关系
         return val * 1000

      },
      division_num(val){  //小数相加，出现精度问题 后除
        return (val / 1000).toFixed(2)

      },

    },
//生命周期钩子函数，进入页面显示之前获取数据到store
    created () {
      this.par.id = this.$route.params.one
      this.par.name = this.$route.params.two
      this.par.name_id = this.$route.params.twos
      this.par.client_name = this.$route.params.three
      this.par.client_id = this.$route.params.threes
      this.par_form.find_area = "{'customerQuotedId':'"+ this.par.id +"'}"
      this.find_list(this.par_form.find_area)

      this.par_form.area = "{'customerId':'"+ this.par.client_id  +"','businessUserId':'"+ this.par.name_id  + "'}"
      ajax_list.customerQuotedYearListService(this.par_form.area, res => {  //年份
        this.$emit('login-success', res);
      }, (res) => {
        var temp_year_list = res.body.list;
        var _temp_one_1 = this.form_1;   //所在区域
        var date=new Date;
        var _temp_year =  0
        $.map(temp_year_list,function(value,index){
          _temp_one_1.push({
            value:value,
            label:value
          });
          if(date.getFullYear() == value){
            _temp_year = date.getFullYear()
          }else if(index == 0){
              console.log(value)
            _temp_year = value
          }

        });
        this.finds.find_1 = _temp_year
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
  .ma_title_left{
    padding-right: 10px;
    float: left;
    cursor: pointer;
  }
  .ma_title i{
    float: left;
    width: 9px;
    height: 15px;
    color: #0077de;
    font-weight: 800;
    margin-top: 12px;
    margin-left: 10px;
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
  .ma_btn_S{
    width: calc(100% - 20px);
    padding: 9px 10px;
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
    margin-bottom: 5px;
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
  .ma_ui_title{
    width: auto;
    margin-left: 55px;
  }
  .ma_ui_title .input_ss{
    width: auto;
    height: 30px;
    line-height: 30px;
    font-size:12px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(0,119,221,1);
  }
  .content_list{
    width: calc(100% - 10px);
    margin: 0 auto;
    min-height: calc(100vh - 352px);
    background-color: white;
  }
  .list_table{
    width: 90%;
    margin: 0 auto;
    margin-top: 40px;
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
    overflow: auto;
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
    width: 90%;
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
    width: calc(96% / 5);
    line-height: 50px;
    float: left;
  }
  .three_table  .table_tr .table_td:nth-child(1){
    /*width: calc(10%);*/
  }
  .three_table .table_title .table_td .table_td_w{
    width: 90%;
  }
  .three_table  .table_td .table_td_w{
    width: 86%;
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
    height: 150px;
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
    width: 70%;
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

</style>
<style>
  .off_input .el-input__inner{
    padding: 0px 1px;
    margin-top: 10px;
    text-align: center;
  }

  .table_tr_input .el-input.is-disabled .el-input__inner{
    border: 0;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
     color: rgba(96,96,96,1)!important;

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
