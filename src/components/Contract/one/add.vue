<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <div class="ma_title_left" @click="ret_add">
          <i class="el-icon-arrow-left"></i>
          <p>创建合同</p>
        </div>
      </div>
      <div class="ma_content  add_input"  >
        <div  v-if="this.istype == 1" class="list_module">
            <div class="list_module_title">
              <div class="title_ico_div">
                <div class="ico_div">
                  <div style="margin-left: 20px" class="ico">1</div>
                  <div class="ico_border"></div>
                  <div class="ico ico_true">2</div>
                  <div class="ico_border"></div>
                  <div class="ico ico_true">3</div>
                  <div class="ico_border"></div>
                  <div class="ico ico_true">4</div>
                  <div class="ico_border"></div>
                  <div class="ico ico_true">5</div>
                </div>
                <div class="text_div ">
                  <span>填写甲方基础信息</span>
                  <span class="ico_text_true">填写甲方其它信息</span>
                  <span class="ico_text_true">填写全年协议电量交易价格表</span>
                  <span class="ico_text_true">填写协议外月度与富余电量交易价格表</span>
                  <span class="ico_text_true">填写全年协议电量表</span>
                </div>
              </div>
            </div>
            <div  class="list_con">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px" class="demo-ruleForm">
                <div class="list_con_input">
                  <el-form-item label="合同编号"  prop="one_1">
                    <el-input v-model="ruleForm.one_1"></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="甲方" prop="one_2">
                    <el-select style="width: 100%;" @change="find_blur"   v-model="ruleForm.one_2"  filterable clearable remote reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
                      <el-option
                        v-for="item in options4"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="企业所在地" prop="one_3">
                    <el-input size="medium" v-model="ruleForm.one_3" placeholder=""></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="税务登记号" prop="one_4">
                    <el-input size="medium" v-model="ruleForm.one_4" placeholder=""></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="住所" prop="one_5">
                    <el-input size="medium" v-model="ruleForm.one_5" placeholder=""></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item  label="法人代表/授权代理人" prop="one_6">
                    <el-input size="medium" v-model="ruleForm.one_6" placeholder=""></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="开户名称" prop="one_7">
                    <el-input size="medium" v-model="ruleForm.one_7" placeholder=""></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="开户银行" prop="one_8">
                    <el-input size="medium" v-model="ruleForm.one_8" placeholder=""></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="账号" prop="one_9">
                    <el-input size="medium" v-model="ruleForm.one_9" placeholder=""></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="联系人" prop="one_10">
                    <el-input size="medium" v-model="ruleForm.one_10" placeholder=""></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="电子邮箱" prop="one_11">
                    <el-input size="medium" v-model="ruleForm.one_11" placeholder=""></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="手机号" prop="one_12">
                    <el-input size="medium" v-model="ruleForm.one_12" placeholder=""></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="办公电话" prop="one_13">
                    <el-input size="medium" v-model="ruleForm.one_13" placeholder=""></el-input>
                  </el-form-item>
                </div>
                <div class="list_con_input">
                  <el-form-item label="通讯地址" prop="one_14">
                    <el-input size="medium" v-model="ruleForm.one_14" placeholder=""></el-input>
                  </el-form-item>
                </div>
              </el-form>
            </div>
          </div>
        <div v-else-if="this.istype == 2" class="list_module">
          <div class="list_module_title">
            <div class="title_ico_div">
              <div class="ico_div">
                <div style="margin-left: 20px" class="ico">1</div>
                <div class="ico_border"></div>
                <div class="ico">2</div>
                <div class="ico_border"></div>
                <div class="ico ico_true">3</div>
                <div class="ico_border"></div>
                <div class="ico ico_true">4</div>
                <div class="ico_border"></div>
                <div class="ico ico_true">5</div>
              </div>
              <div class="text_div ">
                <span>填写甲方基础信息</span>
                <span>填写甲方其它信息</span>
                <span class="ico_text_true">填写全年协议电量交易价格表</span>
                <span class="ico_text_true">填写协议外月度与富余电量交易价格表</span>
                <span class="ico_text_true">填写全年协议电量表</span>
              </div>
            </div>
          </div>
          <div class="list_con" >
            <el-form :model="ruleTwo" :rules="rules_Two" ref="ruleTwo" label-width="180px" class="demo-ruleForm">
              <div class="list_con_input">
                <el-form-item label="企业地址"  prop="two_1">
                  <el-input v-model="ruleTwo.two_1"></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="电压等级"  prop="two_2">
                  <el-select size="medium" v-model="ruleTwo.two_2" filterable placeholder="请选择">
                    <el-option
                      v-for="item in yn_3"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="企业总用电量"  prop="two_3">
                  <el-input type="number" size="medium" placeholder="" v-model.number="ruleTwo.two_3">
                    <template slot="append">兆瓦时</template>
                  </el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="变压器容量"  prop="two_4">
                  <el-input type="number" size="medium" placeholder="" v-model.number="ruleTwo.two_4">
                    <template slot="append">kVA</template>
                  </el-input>
                </el-form-item>
              </div>
              <div class="list_con_input class_input">
                <el-form-item label="交易周期"  prop="two_5">
                  <el-date-picker style="width: 100%;" v-model="ruleTwo.two_5" type="year" align="right" size="mini" placeholder="选择周期"> </el-date-picker>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="预估总用电量"  prop="two_6">
                  <el-input type="number" size="medium" placeholder="" v-model.number="ruleTwo.two_6">
                    <template slot="append">兆瓦时</template>
                  </el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="合同起止日期"  prop="two_5s">
                  <el-date-picker
                    style="width: 100%;"
                    v-model="ruleTwo.two_5s"
                    type="daterange"
                    size="mini"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                  </el-date-picker>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="总用电容量"  prop="two_6s">
                  <el-input type="number" size="medium" placeholder="" v-model.number="ruleTwo.two_6s">
                    <template slot="append">千瓦(KW)</template>
                  </el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="抄表例日"  prop="two_7">
                  <el-input v-model="ruleTwo.two_7"></el-input>
                </el-form-item>
              </div>
              <div class="list_con_row">
                <el-form-item label="双方电量和电价约定"  prop="two_8">
                  <el-input size="medium" v-model="ruleTwo.two_8" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_row">
                <el-form-item label="双方违约条款约定"  prop="two_9">
                  <el-input size="medium" v-model="ruleTwo.two_9" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_row">
                <el-form-item label="不可抗力约定"  prop="two_10">
                  <el-input size="medium" v-model="ruleTwo.two_10" placeholder=""></el-input>
                </el-form-item>
              </div>
            </el-form>
          </div>
        </div>
        <div v-else-if="this.istype == 3" class="list_module">
          <div class="list_module_title">
            <div class="title_ico_div">
              <div class="ico_div">
                <div style="margin-left: 20px" class="ico">1</div>
                <div class="ico_border"></div>
                <div class="ico">2</div>
                <div class="ico_border"></div>
                <div class="ico">3</div>
                <div class="ico_border"></div>
                <div class="ico ico_true">4</div>
                <div class="ico_border"></div>
                <div class="ico ico_true">5</div>
              </div>
              <div class="text_div ">
                <span>填写甲方基础信息</span>
                <span>填写甲方其它信息</span>
                <span>填写全年协议电量交易价格表</span>
                <span class="ico_text_true">填写协议外月度与富余电量交易价格表</span>
                <span class="ico_text_true">填写全年协议电量表</span>
              </div>
            </div>
          </div>
          <div class="list_con" >
            <div class="table_hint">单位：元/兆瓦时</div>
            <div class="table three_table list_table">
              <div class="table_tr table_title">
                <div class="table_td"><div class="table_td_w">时间</div></div>
                <div class="table_td"><div class="table_td_w two_p">
                  <p>常规直接交</p>
                  <p>（水电电量交易价格）</p>
                </div></div>
                <div class="table_td">
                  <div class="table_td_w two_p">
                    <p><span>*</span>长期战略协议直接交易</p>
                    <p>（水电电量交易价格）</p>
                  </div>
                </div>
                <div class="table_td">
                  <div class="table_td_w">
                    <p><span>*</span>自备替代直接交易</p>
                  </div>
                </div>
                <div class="table_td">
                  <div class="table_td_w">
                    <p><span>*</span>电能替代直接交易</p>
                  </div>
                </div>
              </div>
              <el-form :model="ruleThree" :rules="rules_three" ref="ruleThree" label-width="0px" class="demo-ruleForm">
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">1月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleThree.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_1_2">
                      <el-input type="number" v-model.number="ruleThree.three_1_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_1_3">
                      <el-input type="number"  v-model.number="ruleThree.three_1_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_1_4">
                      <el-input type="number"  v-model.number="ruleThree.three_1_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">2月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleThree.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_2_2">
                      <el-input type="number" v-model="ruleThree.three_2_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_2_3">
                      <el-input type="number" v-model.number="ruleThree.three_2_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_2_4">
                      <el-input  type="number"  v-model.number="ruleThree.three_2_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">3月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleThree.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_3_2">
                      <el-input type="number"  v-model.number="ruleThree.three_3_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_3_3">
                      <el-input  type="number" v-model.number="ruleThree.three_3_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_3_4">
                      <el-input type="number" v-model.number="ruleThree.three_3_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">4月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleThree.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_4_2">
                      <el-input type="number" v-model.number="ruleThree.three_4_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_4_3">
                      <el-input type="number" v-model.number="ruleThree.three_4_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_4_4">
                      <el-input type="number" v-model.number="ruleThree.three_4_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">5月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleThree.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_5_2">
                      <el-input type="number" v-model.number="ruleThree.three_5_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_5_3">
                      <el-input type="number" v-model.number="ruleThree.three_5_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_5_4">
                      <el-input type="number" v-model.number="ruleThree.three_5_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">6月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleThree.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_6_2">
                      <el-input type="number" v-model.number="ruleThree.three_6_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_6_3">
                      <el-input type="number" v-model.number="ruleThree.three_6_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_6_4">
                      <el-input type="number" v-model.number="ruleThree.three_6_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">7月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleThree.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_7_2">
                      <el-input type="number" v-model.number="ruleThree.three_7_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_7_3">
                      <el-input type="number" v-model.number="ruleThree.three_7_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_7_4">
                      <el-input type="number" v-model.number="ruleThree.three_7_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">8月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleThree.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_8_2">
                      <el-input type="number" v-model.number="ruleThree.three_8_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_8_3">
                      <el-input type="number" v-model.number="ruleThree.three_8_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_8_4">
                      <el-input type="number" v-model.number="ruleThree.three_8_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">9月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleThree.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_9_2">
                      <el-input type="number" v-model.number="ruleThree.three_9_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_9_3">
                      <el-input type="number" v-model.number="ruleThree.three_9_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_9_4">
                      <el-input type="number" v-model.number="ruleThree.three_9_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">10月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleThree.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_10_2">
                      <el-input type="number" v-model.number="ruleThree.three_10_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_10_3">
                      <el-input type="number" v-model.number="ruleThree.three_10_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_10_4">
                      <el-input type="number" v-model.number="ruleThree.three_10_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">11月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleThree.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_11_2">
                      <el-input type="number" v-model.number="ruleThree.three_11_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_11_3">
                      <el-input type="number" v-model.number="ruleThree.three_11_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_11_4">
                      <el-input type="number" v-model.number="ruleThree.three_11_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">12月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleThree.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_12_2">
                      <el-input type="number" v-model.number="ruleThree.three_12_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_12_3">
                      <el-input type="number" v-model.number="ruleThree.three_12_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="three_12_4">
                      <el-input type="number" v-model.number="ruleThree.three_12_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
              </el-form>
            </div>
          </div>
        </div>
        <div v-else-if="this.istype == 4" class="list_module">
          <div class="list_module_title">
            <div class="title_ico_div">
              <div class="ico_div">
                <div style="margin-left: 20px" class="ico">1</div>
                <div class="ico_border"></div>
                <div class="ico">2</div>
                <div class="ico_border"></div>
                <div class="ico">3</div>
                <div class="ico_border"></div>
                <div class="ico">4</div>
                <div class="ico_border"></div>
                <div class="ico ico_true">5</div>
              </div>
              <div class="text_div ">
                <span>填写甲方基础信息</span>
                <span>填写甲方其它信息</span>
                <span>填写全年协议电量交易价格表</span>
                <span>填写协议外月度与富余电量交易价格表</span>
                <span class="ico_text_true">填写全年协议电量表</span>
              </div>
            </div>
          </div>
          <div class="list_con" >
            <div class="table_hint">单位：元/兆瓦时</div>
            <div class="table four_table list_table">
              <div class="table_tr table_title">
                <div class="table_td"><div class="table_td_w">月份</div></div>
                <div class="table_td"><div class="table_td_w two_p">
                  <p>协议外月度电量交易价</p>
                  <p>（水电电量交易价格）</p>
                </div></div>
                <div class="table_td">
                  <div class="table_td_w">
                    <p><span>*</span>月度富余电量交易价</p>
                  </div>
                </div>
              </div>
              <el-form :model="ruleFour" :rules="rules_four" ref="ruleFour" label-width="0px" class="demo-ruleForm">

                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">1月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_1_1">
                      <el-input type="number" v-model.number="ruleFour.four_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_1_2">
                      <el-input type="number" v-model.number="ruleFour.four_1_2"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">2月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_2_1">
                      <el-input type="number" v-model.number="ruleFour.four_2_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_2_2">
                      <el-input type="number" v-model.number="ruleFour.four_2_2"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">3月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_3_1">
                      <el-input type="number" v-model.number="ruleFour.four_3_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_3_2">
                      <el-input type="number" v-model.number="ruleFour.four_3_2"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">4月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_4_1">
                      <el-input type="number" v-model.number="ruleFour.four_4_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_4_2">
                      <el-input type="number" v-model.number="ruleFour.four_4_2"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">5月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_5_1">
                      <el-input type="number" v-model.number="ruleFour.four_5_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_5_2">
                      <el-input type="number" v-model.number="ruleFour.four_5_2"></el-input>
                    </el-form-item>
                  </div></div>
                </div>

                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">6月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_6_1">
                      <el-input type="number" v-model.number="ruleFour.four_6_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_6_2">
                      <el-input type="number" v-model.number="ruleFour.four_6_2"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">7月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_7_1">
                      <el-input type="number" v-model.number="ruleFour.four_7_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_7_2">
                      <el-input type="number" v-model.number="ruleFour.four_7_2"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">8月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_8_1">
                      <el-input type="number" v-model.number="ruleFour.four_8_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_8_2">
                      <el-input type="number" v-model.number="ruleFour.four_8_2"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">9月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_9_1">
                      <el-input type="number" v-model.number="ruleFour.four_9_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_9_2">
                      <el-input type="number" v-model.number="ruleFour.four_9_2"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">10月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_10_1">
                      <el-input type="number" v-model.number="ruleFour.four_10_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_10_2">
                      <el-input type="number" v-model.number="ruleFour.four_10_2"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">11月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_11_1">
                      <el-input type="number" v-model.number="ruleFour.four_11_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_11_2">
                      <el-input type="number" v-model.number="ruleFour.four_11_2"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">12月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_12_1">
                      <el-input type="number" v-model.number="ruleFour.four_12_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="four_12_2">
                      <el-input type="number" v-model.number="ruleFour.four_12_2"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
              </el-form>
            </div>
          </div>
        </div>
        <div v-else-if="this.istype == 5" class="list_module">
          <div class="list_module_title">
            <div class="title_ico_div">
              <div class="ico_div">
                <div style="margin-left: 20px" class="ico">1</div>
                <div class="ico_border"></div>
                <div class="ico">2</div>
                <div class="ico_border"></div>
                <div class="ico">3</div>
                <div class="ico_border"></div>
                <div class="ico">4</div>
                <div class="ico_border"></div>
                <div class="ico ">5</div>
              </div>
              <div class="text_div ">
                <span>填写甲方基础信息</span>
                <span>填写甲方其它信息</span>
                <span>填写全年协议电量交易价格表</span>
                <span class="">填写协议外月度与富余电量交易价格表</span>
                <span class="">填写全年协议电量表</span>
              </div>
            </div>
          </div>
          <div class="list_con" >
            <div class="table_hint">单位：兆瓦时</div>
            <div class="table five_table list_table">
              <div class="table_tr table_title">
                <div class="table_td"><div class="table_td_w">时间</div></div>
                <div class="table_td"><div class="table_td_w">
                  <p><span>*</span>交易总量</p>
                </div></div>
                <div class="table_td">
                  <div class="table_td_w">
                    <p><span>*</span>常规直接交易电量</p>
                  </div>
                </div>
                <div class="table_td">
                  <div class="table_td_w">
                    <p><span>*</span>长期战略协议直接交易电量</p>
                  </div>
                </div>
                <div class="table_td">
                  <div class="table_td_w">
                    <p><span>*</span>自备替代直接交易</p>
                  </div>
                </div>
                <div class="table_td">
                  <div class="table_td_w">
                    <p><span>*</span>电能替代直接交易</p>
                  </div>
                </div>
              </div>
              <el-form :model="ruleFive" :rules="rules_five" ref="ruleFive" label-width="0px" class="demo-ruleForm">
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">1月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_1_1">
                      <el-input type="number" v-model.number="ruleFive.five_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_1_2">
                      <el-input type="number" v-model.number="ruleFive.five_1_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_1_3">
                      <el-input type="number" v-model.number="ruleFive.five_1_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_1_4">
                      <el-input type="number" v-model.number="ruleFive.five_1_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_1_5">
                      <el-input type="number" v-model.number="ruleFive.five_1_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">2月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_2_1">
                      <el-input type="number" v-model.number="ruleFive.five_2_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_2_2">
                      <el-input type="number" v-model.number="ruleFive.five_2_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_2_3">
                      <el-input type="number" v-model.number="ruleFive.five_2_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_2_4">
                      <el-input type="number" v-model.number="ruleFive.five_2_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_2_5">
                      <el-input type="number" v-model.number="ruleFive.five_2_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">3月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_3_1">
                      <el-input type="number" v-model.number="ruleFive.five_3_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_3_2">
                      <el-input type="number" v-model.number="ruleFive.five_3_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_3_3">
                      <el-input type="number" v-model.number="ruleFive.five_3_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_3_4">
                      <el-input type="number" v-model.number="ruleFive.five_3_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_3_5">
                      <el-input type="number" v-model.number="ruleFive.five_3_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">4月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_4_1">
                      <el-input type="number" v-model.number="ruleFive.five_4_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_4_2">
                      <el-input type="number" v-model.number="ruleFive.five_4_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_4_3">
                      <el-input type="number" v-model.number="ruleFive.five_4_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_4_4">
                      <el-input type="number" v-model.number="ruleFive.five_4_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_4_5">
                      <el-input type="number" v-model.number="ruleFive.five_4_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">5月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_5_1">
                      <el-input type="number" v-model.number="ruleFive.five_5_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_5_2">
                      <el-input type="number" v-model.number="ruleFive.five_5_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_5_3">
                      <el-input type="number" v-model.number="ruleFive.five_5_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_5_4">
                      <el-input type="number" v-model.number="ruleFive.five_5_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_5_5">
                      <el-input type="number" v-model.number="ruleFive.five_5_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">6月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_6_1">
                      <el-input type="number" v-model.number="ruleFive.five_6_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_6_2">
                      <el-input type="number" v-model.number="ruleFive.five_6_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_6_3">
                      <el-input type="number" v-model.number="ruleFive.five_6_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_6_4">
                      <el-input type="number" v-model.number="ruleFive.five_6_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_6_5">
                      <el-input type="number" v-model.number="ruleFive.five_6_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">7月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_7_1">
                      <el-input type="number" v-model.number="ruleFive.five_7_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_7_2">
                      <el-input type="number" v-model.number="ruleFive.five_7_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_7_3">
                      <el-input type="number" v-model.number="ruleFive.five_7_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_7_4">
                      <el-input type="number" v-model.number="ruleFive.five_7_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_7_5">
                      <el-input type="number" v-model.number="ruleFive.five_7_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">8月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_8_1">
                      <el-input type="number" v-model.number="ruleFive.five_8_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_8_2">
                      <el-input type="number" v-model.number="ruleFive.five_8_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_8_3">
                      <el-input type="number" v-model.number="ruleFive.five_8_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_8_4">
                      <el-input type="number" v-model.number="ruleFive.five_8_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_8_5">
                      <el-input type="number" v-model.number="ruleFive.five_8_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">9月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_9_1">
                      <el-input type="number" v-model.number="ruleFive.five_9_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_9_2">
                      <el-input type="number" v-model.number="ruleFive.five_9_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_9_3">
                      <el-input type="number" v-model.number="ruleFive.five_9_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_9_4">
                      <el-input type="number" v-model.number="ruleFive.five_9_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_9_5">
                      <el-input type="number" v-model.number="ruleFive.five_9_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">10月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_10_1">
                      <el-input type="number" v-model.number="ruleFive.five_10_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_10_2">
                      <el-input type="number" v-model.number="ruleFive.five_10_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_10_3">
                      <el-input type="number" v-model.number="ruleFive.five_10_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_10_4">
                      <el-input type="number" v-model.number="ruleFive.five_10_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_10_5">
                      <el-input type="number" v-model.number="ruleFive.five_10_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">11月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_11_1">
                      <el-input type="number" v-model.number="ruleFive.five_11_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_11_2">
                      <el-input type="number" v-model.number="ruleFive.five_11_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_11_3">
                      <el-input type="number" v-model.number="ruleFive.five_11_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_11_4">
                      <el-input type="number" v-model.number="ruleFive.five_11_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_11_5">
                      <el-input type="number" v-model.number="ruleFive.five_11_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">12月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_12_1">
                      <el-input type="number" v-model.number="ruleFive.five_12_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_12_2">
                      <el-input type="number" v-model.number="ruleFive.five_12_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_12_3">
                      <el-input type="number" v-model.number="ruleFive.five_12_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_12_4">
                      <el-input type="number" v-model.number="ruleFive.five_12_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  prop="five_12_5">
                      <el-input type="number" v-model.number="ruleFive.five_12_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
              </el-form>

            </div>
          </div>
        </div>

        <div class="list_module" style="width:90%; ">
          <div class="list_module_btn">
            <el-button @click="add_cancel" size="small" plain>取消</el-button>
            <el-button v-if="this.istype != 1" @click="add_one" size="small" plain>上一步</el-button>
            <el-button v-if="this.istype != 5" class="btn_aff" type="primary" size="small" @click="add_two">下一步</el-button>
            <el-button v-if="this.istype == 5" class="btn_aff" type="primary" size="small" :loading="this.load_save"   @click="add_save">保存</el-button>
            <el-button v-if="this.istype == 5" class="btn_aff" type="primary" size="small" :loading="this.load_subit"  @click="add_affirm">提交</el-button>
          </div>
        </div>
      </div>

    </div>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  // 引入axios
  import add_ajax from '../../../api/contract'
  import add_validator from '../../../utils/validator'

  export default {
    data() {
      return {
        istype:1,
        load_save:false,
        load_subit:false,
        customerId:0,
        add_Type:"",

        ruleForm: {  //第一步
          one_1:"",
          one_2: [],   //购电方选中的值
          one_3:"",
          one_4:"",
          one_5:"",
          one_6:"",
          one_7:"",
          one_8:"",
          one_9:"",
          one_10:"",
          one_11:"",
          one_12:"",
          one_13:"",
          one_14:"",

        },
        rules: {  //第一步的验证
//          one_1: [
//            { required: true, message: '请输入合同编号', trigger: 'blur' },
////            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
//          ],
          one_2: [
            { required: true, message: '请选择甲方', trigger: 'change' }
          ],
          one_3:[
              { required: true, message: '请输入企业所在地', trigger: 'blur' },
          ],
          one_4:[
            { required: true, message: '请输入税务登记号', trigger: 'blur' },
          ],
          one_5:[
            { required: true, message: '请输入住所', trigger: 'blur' },
          ],
          one_6:[
            { required: true, message: '请输入法人代表/授权代理人', trigger: 'blur' },
          ],
          one_7:[
            { required: true, message: '请输入开户名称', trigger: 'blur' },
          ],
          one_8:[
            { required: true, message: '请输入开户银行', trigger: 'blur' },
          ],
          one_9:[
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          one_10:[
            { required: true, message: '请输入联系人', trigger: 'blur' },
            { validator: add_validator.is_name, trigger: 'blur' },
          ],
          one_11:[
            { required: true, message: '请输入电子邮箱', trigger: 'blur' },
            { type:"email", required: true, message: '电子邮箱格式不正确', trigger: 'blur' },
          ],
          one_12:[
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { validator: add_validator.is_Phone, trigger: 'blur' },
          ],
          one_13:[
            { required: true, message: '请输入办公电话', trigger: 'blur' },
          ],
          one_14:[
            { required: true, message: '请输入通讯地址', trigger: 'blur' },
          ],

        },
        options4: [],  //购电方选择框数组
        list: [],  //购电方过滤
        loading: false, //是否正在从远程获取数据
        gd_list:[], //购电方后台返回数据
        states: [],  //筛选出购电方名称数组
        add_create:{}, //提交按钮所有参数
        add_list:{
          list3:[],
          list4:[],
          list:[],
        },
        con_id:'',


        ruleTwo:{
          two_1:"",
          two_2:"",
          two_3:"",
          two_4:"",
          two_5:"",
          two_5s:"",
          two_6:"",
          two_6s:"",
          two_7:"",
          two_8:"",
          two_9:"",
          two_10:"",
        },
        rules_Two:{
          two_1:[
            { required: true, message: '请输入企业地址', trigger: 'blur' },
          ],
          two_2:[
            { required: true, message: '请选择电压等级', trigger: 'change' },
          ],
          two_5:[
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' },
          ],
          two_5s:[
            { required: true, message: '请输入合同起止时间', trigger: 'change' },
          ],
          two_6:[
            { required: true, message: '请输入预估总用电量', trigger: 'blur' },
          ],
          two_6s:[
            { required: true, message: '请输入总用电容量', trigger: 'blur' },
          ],
          two_7:[
            { required: true, message: '请输入抄表例日', trigger: 'blur' },
          ],
        },
        ruleThree:{
          three_1_1:"",
          three_1_2:"",
          three_1_3:"",
          three_1_4:"",
          three_2_1:"",
          three_2_2:"",
          three_2_3:"",
          three_2_4:"",
          three_3_1:"",
          three_3_2:"",
          three_3_3:"",
          three_3_4:"",
          three_4_1:"",
          three_4_2:"",
          three_4_3:"",
          three_4_4:"",
          three_5_1:"",
          three_5_2:"",
          three_5_3:"",
          three_5_4:"",
          three_6_1:"",
          three_6_2:"",
          three_6_3:"",
          three_6_4:"",
          three_7_1:"",
          three_7_2:"",
          three_7_3:"",
          three_7_4:"",
          three_8_1:"",
          three_8_2:"",
          three_8_3:"",
          three_8_4:"",
          three_9_1:"",
          three_9_2:"",
          three_9_3:"",
          three_9_4:"",
          three_10_1:"",
          three_10_2:"",
          three_10_3:"",
          three_10_4:"",
          three_11_1:"",
          three_11_2:"",
          three_11_3:"",
          three_11_4:"",
          three_12_1:"",
          three_12_2:"",
          three_12_3:"",
          three_12_4:"",
        },
        rules_three:{
          three_1_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_1_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_1_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_2_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_2_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_2_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_3_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_3_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_3_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_4_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_4_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_4_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_5_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_5_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_5_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_6_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_6_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_6_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_7_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_7_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_7_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_8_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_8_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_8_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_9_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_9_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_9_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_10_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_10_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_10_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_11_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_11_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_11_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_12_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_12_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          three_12_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
        },
        ruleFour:{
          four_1_1:"",
          four_2_1:"",
          four_3_1:"",
          four_4_1:"",
          four_5_1:"",
          four_6_1:"",
          four_6_2:"",
          four_7_1:"",
          four_7_2:"",
          four_8_1:"",
          four_8_2:"",
          four_9_1:"",
          four_9_2:"",
          four_10_1:"",
          four_10_2:"",
          four_11_1:"",
          four_11_2:"",
          four_12_1:"",
          four_12_2:"",
        },
        rules_four:{
          four_1_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          four_2_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          four_3_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          four_4_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          four_5_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          four_6_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          four_7_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          four_8_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          four_9_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          four_10_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          four_11_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          four_12_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
        },
        ruleFive:{
          five_1_1:"",
          five_1_2:"",
          five_1_3:"",
          five_1_4:"",
          five_1_5:"",
          five_2_1:"",
          five_2_2:"",
          five_2_3:"",
          five_2_4:"",
          five_2_5:"",
          five_3_1:"",
          five_3_2:"",
          five_3_3:"",
          five_3_4:"",
          five_3_5:"",
          five_4_1:"",
          five_4_2:"",
          five_4_3:"",
          five_4_4:"",
          five_4_5:"",
          five_5_1:"",
          five_5_2:"",
          five_5_3:"",
          five_5_4:"",
          five_5_5:"",
          five_6_1:"",
          five_6_2:"",
          five_6_3:"",
          five_6_4:"",
          five_6_5:"",
          five_7_1:"",
          five_7_2:"",
          five_7_3:"",
          five_7_4:"",
          five_7_5:"",
          five_8_1:"",
          five_8_2:"",
          five_8_3:"",
          five_8_4:"",
          five_8_5:"",
          five_9_1:"",
          five_9_2:"",
          five_9_3:"",
          five_9_4:"",
          five_9_5:"",
          five_10_1:"",
          five_10_2:"",
          five_10_3:"",
          five_10_4:"",
          five_10_5:"",
          five_11_1:"",
          five_11_2:"",
          five_11_3:"",
          five_11_4:"",
          five_11_5:"",
          five_12_1:"",
          five_12_2:"",
          five_12_3:"",
          five_12_4:"",
          five_12_5:"",
        },
        rules_five:{
          five_1_1:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_1_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_1_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_1_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_1_5:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_2_1:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_2_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_2_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_2_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_2_5:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_3_1:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_3_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_3_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_3_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_3_5:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_4_1:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_4_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_4_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_4_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_4_5:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_5_1:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_5_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_5_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_5_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_5_5:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_6_1:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_6_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_6_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_6_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_6_5:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_7_1:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_7_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_7_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_7_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_7_5:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_8_1:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_8_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_8_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_8_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_8_5:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_9_1:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_9_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_9_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_9_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_9_5:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_10_1:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_10_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_10_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_10_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_10_5:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_11_1:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_11_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_11_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_11_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_11_5:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_12_1:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_12_2:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_12_3:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_12_4:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
          five_12_5:[
            { required: true, message: '不可为空', trigger: 'blur' },
          ],
        },
        Service_con:{},
        yn_3:[],
      }

    },
// 映射store数据
    computed: {

    },
    methods: {
      ret_add(){
        this.$router.push('/Contract/sellElectric');
      },
      add_cancel(){ //返回取消按钮
        this.$router.go(-1);
      },
      add_affirm(){ //提交按钮
        this.submitForm('ruleFive',5,"submit");
      },
      add_save(){  //保存
        this.submitForm('ruleFive',5,"save");
      },
      add_cont(type_name){
        var _templist = {
          temp_3:[],
          temp_4:[],
          temp_5:[],
        };
        this.add_list.list3 = _templist.temp_3;
        this.add_list.list4 = _templist.temp_4;
        this.add_list.list5 = _templist.temp_5;
        for (var i = 0; i < 12; i++) {
          var _temp3 = {
            month:(i + 1), //月份
            conventionalPrice:this.ruleThree.three_1_1, //常规直接交易价格（元/千瓦时）
            longPrice:this.ruleThree['three_'+ (i + 1) +'_2'], //长期战略协议直接交易价格（元/千瓦时）
            selfPrice:this.ruleThree['three_'+ (i + 1) +'_3'], //自备替代直接交易价格（元/千瓦时）
            electricEnergyPrice:this.ruleThree['three_'+ (i + 1) +'_4'], //电能替代直接交易价格（元/千瓦时）
          }


          var _temp4 = {
            month:(i + 1),  //月份
            monthPowerPrice:this.ruleFour['four_'+ (i + 1) +'_1'],  //协议外月度电量交易价
            monthSurplusPowerPrice:this.ruleFour['four_'+ (i + 1) +'_2'],  //月度富余电量交易价
          }


          var _temp5 = {
            month:(i + 1),  //月份
            totalAmount:this.ruleFive['five_'+ (i + 1) +'_1'], //交易总量（元/兆瓦时）
            conventionalAmount:this.ruleFive['five_'+ (i + 1) +'_2'], //常规直接交易电量（元/兆瓦时）
            longAmount:this.ruleFive['five_'+ (i + 1) +'_3'], //长期战略协议直接交易电量（元/兆瓦时）
            selfAmount:this.ruleFive['five_'+ (i + 1) +'_4'], //自备替代直接交易电量（元/兆瓦时）
            electricEnergyAmount:this.ruleFive['five_'+ (i + 1) +'_5'], //电能替代直接交易电量（元/兆瓦时）
          }
          _templist.temp_3.push(_temp3)
          _templist.temp_4.push(_temp4)
          _templist.temp_5.push(_temp5)
        }
        //提交参数
        this.add_create = {
          number:this.ruleForm.one_1, //合同编号
          action:type_name, //合同保存方式
          contractType:this.add_Type, //合同类型
          customerId:this.customerId,  //客户id
          customerName:this.ruleForm.one_2, //客户名称(甲方)
          taxNumber:this.ruleForm.one_4, //税务登记号
          residence:this.ruleForm.one_5, //甲方住所
          accountName:this.ruleForm.one_7, //甲方开户名称
          accountBank:this.ruleForm.one_8, //甲方开户银行
          accountNumber:this.ruleForm.one_9, //甲方开户账号
          contactAddress:this.ruleForm.one_14, //甲方通讯地址
          companyAddress:this.ruleTwo.two_1, //甲方企业地址
          totalUsePowerAmount:this.ruleTwo.two_3, //企业总用电量
          transformerCapacity:this.ruleTwo.two_4, //变压器容量
          transactionCycle:(this.get_times(this.ruleTwo.two_5) / 1000) , //交易周期
          estimateTotalUsePowerAmount:this.ruleTwo.two_6, // 预估总用电量
          meterReadingDay:this.ruleTwo.two_7, // 抄表例日
          powerAmountPricePromise:this.ruleTwo.two_8, // 双方电量和电价约定
          defaultClausePromise:this.ruleTwo.two_9, // 双方违约条款约定
          forceMajeurePromise:this.ruleTwo.two_10, // 不可抗力约定

          contractStartTime:(this.get_times(this.ruleTwo.two_5s[0]) / 1000), // 合同开始时间
          contractEndTime:(this.get_times(this.ruleTwo.two_5s[1]) / 1000), // 合同结束时间
          list3:this.add_list.list3,
          list4:this.add_list.list4,
          list5:this.add_list.list5,
          customer:{
            id:this.customerId,  //客户id
            address:this.ruleForm.one_3, //所在地
            representative:this.ruleForm.one_6, //法人代表
            contact:this.ruleForm.one_10,  //联系人
            email:this.ruleForm.one_11, //电子邮箱
            phone:this.ruleForm.one_12, //手机号
            contactNumber:this.ruleForm.one_13, //办公电话
            voltageLevel:this.ruleTwo.two_2, //电压等级
            totalUsePowerAmount:this.ruleTwo.two_6s, //总用电容量
          },
        }
        this.add_create = JSON.stringify(this.add_create);
        add_ajax.contractCreateService(this.add_create, res => {  //创建
          this.$emit('login-success', res);
        }, (res) => {
          if(res.status == 200){
            this.con_id = res.body;

            var _temp_id = 0
            if(type_name == "save"){
              _temp_id = 2
              this.load_save = false
            }else if(type_name == "submit"){
              _temp_id = 1
              this.load_subit = false
            }
            if(_temp_id != 0){
              this.$router.push({name:'addSucceed',params:{btn_id:_temp_id,cont_id:this.con_id}});
            }

          }
        });
      },
      add_one(){
        var _temp = this.istype;
        if(_temp == 5){
          this.resetForm('ruleFive')
          this.istype = 4
        }else if(_temp == 4){
          this.resetForm('ruleFour')
          this.istype = 3
        }else if(_temp == 3){
            this.resetForm('ruleThree')
          this.istype = 2
        }else if(_temp == 2){
          this.resetForm('ruleTwo')
          this.istype = 1
        }
      },
      get_times(str){ //转换时间戳
//        console.log(str)
       var temp =  (new Date(str)).getTime()
        return temp;
      },
      resetForm(formName) {  //表单重置验证
        this.$refs[formName].clearValidate();
      },
      submitForm(formName,type,action) {  //表单提交验证
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(type == 1){
              this.resetForm('ruleForm')
              this.istype = 2
            }else if(type == 2){
              this.resetForm('ruleTwo')
              this.istype = 3
            }else if(type == 3){
              this.resetForm('ruleThree')
              this.istype = 4
            }else if(type == 4){
              this.resetForm('ruleFour')
              this.istype = 5
            }else if(type == 5){ //提交
              if(action == "submit"){
                this.load_subit = true
              }else if(action == "save"){
                this.load_save = true
              }
              this.add_cont(action)
            }
            return true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      add_two(){  //下一步
        var _temp = this.istype;
        if(_temp == 1){
          this.submitForm('ruleForm',_temp);
        }else if(_temp == 2){
          this.submitForm('ruleTwo',_temp);
        }else if(_temp == 3){
          this.submitForm('ruleThree',_temp);
        }else if(_temp == 4){
          this.submitForm('ruleFour',_temp);
        }

      },
      remoteMethod(query) { //购电方远程搜索选择
        if (query !== '') {
          /*清空临时数组*/
          this.states = [];
          this.list = [];
          this.options4 = [];

          this.loading = true;
          this.name_list = "{'name': '"+ query +"'}",
            setTimeout(() => {
              this.loading = false;
              add_ajax.customerListService(this.name_list, res => {  //购电方
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
      zh_val(list,label){
        let obj = {};
        obj = list.find((item)=>{
          return item.label === label;
        });
       // console.log(obj.value)
        return obj.value
      },
      find_blur(){ //选择甲方名称后
        if(this.ruleForm.one_2 != ""){
          var _index; //选中的值的下标
          for(var i=0;i<this.states.length;i++){ //获取选中的值的下标
            if(this.states[i]==this.ruleForm.one_2){
              _index = i;
            }
          }
        }else{
          this.one_2 = ""
        }

       var gd_info = this.gd_list[_index];
      // console.log(gd_info)



        if(gd_info != undefined){
          if(gd_info.id != "" && gd_info.id != undefined){
            this.customerId = gd_info.id  //客户ID
          }
          if(gd_info.powerAddress != "" && gd_info.powerAddress != undefined){
            this.ruleForm.one_3 = gd_info.powerAddress;  //企业所在地
          }
          if(gd_info.taxNumber != "" && gd_info.taxNumber != undefined){
            this.ruleForm.one_4 = gd_info.taxNumber;  //税务登记号
          }
          if(gd_info.representative != "" && gd_info.representative != undefined){
            this.ruleForm.one_6 = gd_info.representative; //法人代表
          }


          if(gd_info.openAcctName != "" && gd_info.openAcctName != undefined){
            this.ruleForm.one_7 = gd_info.openAcctName; //开户名称
          }
          if(gd_info.openBank != "" && gd_info.openBank != undefined){
            this.ruleForm.one_8 = gd_info.openBank; //开户银行
          }
          if(gd_info.openAcctNo != "" && gd_info.openAcctNo != undefined){
            this.ruleForm.one_9 = gd_info.openAcctNo; //开户账号
          }
          if(gd_info.contactAddress != "" && gd_info.contactAddress != undefined){
            this.ruleForm.one_14 = gd_info.contactAddress; //通讯地址
          }

          if(gd_info.email != "" && gd_info.email != undefined){
            this.ruleForm.one_11 = gd_info.email; //电子邮箱
          }
          if(gd_info.contactNumber != "" && gd_info.contactNumber != undefined){
            this.ruleForm.one_13 = gd_info.contactNumber; //联系电话（办公电话）
          }
          if(gd_info.phone != "" && gd_info.phone != undefined){
            this.ruleForm.one_12 = gd_info.phone; //手机
          }
          if(gd_info.registerAddress != "" && gd_info.registerAddress != undefined){
            this.ruleTwo.two_1 = gd_info.registerAddress; //企业地址（注册地址）
          }
          if(gd_info.contact != "" && gd_info.contact != undefined){
            this.ruleForm.one_10 = gd_info.contact; //联系人
          }
          if(gd_info.voltageLevel != "" && gd_info.voltageLevel != undefined){

            this.ruleTwo.two_2 = this.zh_val(this.yn_3,gd_info.voltageLevel); //电压等级
          }

          if(gd_info.totalUsePowerAmount != "" && gd_info.totalUsePowerAmount != undefined){
            this.ruleTwo.two_6s = gd_info.totalUsePowerAmount; //总用电容量
          }

        }




//        this.one_5 = gd_info.Contact; //电压等级


      },
    },
//生命周期钩子函数，进入页面显示之前获取数据到store
    created() {
        //判断合同类型
        if(this.bus.add_contractType == 1){
          this.add_Type = "STANDARD";
        }else if(this.bus.add_contractType == 2){
          this.add_Type = "CUSTOMIZE";
        }

        var _temp_zd = "{}"
      add_ajax.contractCodeService(_temp_zd, res => {  //合同字典
        this.$emit('login-success', res);
      }, (res) => {
        this.Service_con = res.body;
        var _temp_Status = this.yn_3;
        $.map(this.Service_con.voltageLevel,function(value,key){
          _temp_Status.push({
            value:key,
            label:value
          });
        });


      });

    }
  }
</script>

<style scoped>
 .input_div .el-input__icon {
    line-height: 30px!important;
  }
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
  .ma_content {
    width: 100%;
    /*min-height: calc(100vh - 61px - 51px - 16px);*/
    min-height: calc(100vh - 61px - 51px - 30px);

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
    width: calc(100% - 40px);
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

  .table_td_w p span{
    color: red;
    font-size: 12px;
  }

/*第三步骤的table宽度*/
  .three_table .table_tr .table_td{
    width: calc(90% / 4);
    line-height: 50px;
    float: left;
  }
  .three_table  .table_tr .table_td:nth-child(1){
    width: calc(10%);
  }
  .three_table .table_title .table_td .table_td_w{
    width: 76%;
  }
  .three_table  .table_td .table_td_w{
    width: 70%;
    margin: 0 auto;
    height: 32px;
    font-size:12px;
    font-weight:400;
    text-align: center;
    color:rgba(96,96,96,1);
  }

  /*第四步骤的table宽度*/
  .four_table .table_tr .table_td{
    width: calc(80% / 2);
    line-height: 50px;
    float: left;
  }
  .four_table  .table_tr .table_td:nth-child(1){
    width: calc(20%);
  }
  .four_table .table_title .table_td .table_td_w{
    width: 40%;
  }
  .four_table  .table_td .table_td_w{
    width: 40%;
    margin: 0 auto;
    height: 32px;
    font-size:12px;
    font-weight:400;
    text-align: center;
    color:rgba(96,96,96,1);
  }

  /*第五步骤的table宽度*/
  .five_table .table_tr .table_td{
    width: calc(92% / 5);
    line-height: 50px;
    float: left;
  }
  .five_table  .table_tr .table_td:nth-child(1){
    width: calc(8%);
  }
  .five_table .table_title .table_td .table_td_w{
    width: 90%;
  }
  .five_table  .table_td .table_td_w{
    width: 84%;
    margin: 0 auto;
    height: 32px;
    font-size:12px;
    font-weight:400;
    text-align: center;
    color:rgba(96,96,96,1);
  }

 @media screen and (max-width: 1420px) {
   .list_con_input{
     width:42%;
     padding:0 1%;
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
