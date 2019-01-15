<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <div class="ma_title_left" @click="add_cancel">
          <i class="el-icon-arrow-left"></i>
          <p>编辑合同</p>
        </div>
      </div>
      <div class="ma_content edit_input"  >
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
        <div  class="list_module">
          <div class="list_module_title">
            <p>甲方基础信息</p>
          </div>
          <div  class="list_con">
              <div class="list_con_input">
                <el-form-item label="合同编号"  prop="one_1">
                  <el-input v-model="ruleForm.one_1"></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="甲方" prop="one_2">
                  <el-select style="width: 100%;" @change="find_blur"   v-model="ruleForm.one_2" clearable filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
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
          </div>
        </div>
        <div  class="list_module">
          <div class="list_module_title">
            <p>甲方其他信息 </p>
          </div>
          <div class="list_con" >

              <div class="list_con_input">
                <el-form-item label="企业地址"  prop="two_1">
                  <el-input v-model="ruleForm.two_1"></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="电压等级"  prop="two_2">
                  <el-select size="medium" v-model="ruleForm.two_2" filterable placeholder="请选择">
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
                  <el-input size="medium" placeholder="" type="number" v-model.number="ruleForm.two_3">
                    <template slot="append">兆瓦时</template>
                  </el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="变压器容量"  prop="two_4">
                  <el-input size="medium" placeholder="" type="number" v-model.number="ruleForm.two_4">
                    <template slot="append">kVA</template>
                  </el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="交易周期"  prop="two_5">
                  <el-date-picker style="width: 100%;"  v-model="ruleForm.two_5" type="year" align="right" size="mini" placeholder="选择周期"> </el-date-picker>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="预估总用电量"  prop="two_6">
                  <el-input size="medium" placeholder="" type="number" v-model.number="ruleForm.two_6">
                    <template slot="append">兆瓦时</template>
                  </el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="合同起止日期"  prop="two_5s">
                  <el-date-picker
                    style="width: 100%;"
                    v-model="ruleForm.two_5s"
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
                <el-input type="number" size="medium" placeholder="" v-model.number="ruleForm.two_6s">
                  <template slot="append">千瓦(KW)</template>
                </el-input>
              </el-form-item>
            </div>
              <div class="list_con_input">
                <el-form-item label="抄表例日"  prop="two_7">
                  <el-input v-model="ruleForm.two_7"></el-input>
                </el-form-item>
              </div>
              <div class="list_con_row">
                <el-form-item label="双方电量和电价约定"  prop="two_8">
                  <el-input size="medium" v-model="ruleForm.two_8" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_row">
                <el-form-item label="双方违约条款约定"  prop="two_9">
                  <el-input size="medium" v-model="ruleForm.two_9" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_row">
                <el-form-item label="不可抗力约定"  prop="two_10">
                  <el-input size="medium" v-model="ruleForm.two_10" placeholder=""></el-input>
                </el-form-item>
              </div>

          </div>
        </div>
        <div  class="list_module">
          <div class="list_module_title">
            <p>全年协议电量交易价格表</p>
          </div>
          <div class="list_con" >
            <div class="table_hint">单位：元/兆瓦时</div>
            <div class="table three_table  list_table">
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

                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">1月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  label-width="0px"  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleForm.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  label-width="0px"  prop="three_1_2">
                      <el-input type="number" v-model.number="ruleForm.three_1_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label="" label-width="0px"   prop="three_1_3">
                      <el-input type="number" v-model.number="ruleForm.three_1_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label="" label-width="0px"   prop="three_1_4">
                      <el-input type="number" v-model.number="ruleForm.three_1_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">2月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  label-width="0px"  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleForm.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_2_2">
                      <el-input type="number" v-model.number="ruleForm.three_2_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_2_3">
                      <el-input type="number" v-model.number="ruleForm.three_2_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_2_4">
                      <el-input type="number" v-model.number="ruleForm.three_2_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">3月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  label-width="0px"  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleForm.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_3_2">
                      <el-input type="number" v-model.number="ruleForm.three_3_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_3_3">
                      <el-input type="number" v-model.number="ruleForm.three_3_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_3_4">
                      <el-input type="number" v-model.number="ruleForm.three_3_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">4月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  label-width="0px"  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleForm.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_4_2">
                      <el-input type="number" v-model.number="ruleForm.three_4_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_4_3">
                      <el-input type="number" v-model.number="ruleForm.three_4_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_4_4">
                      <el-input type="number" v-model.number="ruleForm.three_4_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">5月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  label-width="0px"  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleForm.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_5_2">
                      <el-input type="number" v-model.number="ruleForm.three_5_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_5_3">
                      <el-input type="number" v-model.number="ruleForm.three_5_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_5_4">
                      <el-input type="number" v-model.number="ruleForm.three_5_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">6月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  label-width="0px"  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleForm.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_6_2">
                      <el-input type="number" v-model.number="ruleForm.three_6_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_6_3">
                      <el-input type="number" v-model.number="ruleForm.three_6_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_6_4">
                      <el-input type="number" v-model.number="ruleForm.three_6_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">7月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  label-width="0px"  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleForm.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_7_2">
                      <el-input type="number" v-model.number="ruleForm.three_7_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_7_3">
                      <el-input type="number" v-model.number="ruleForm.three_7_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_7_4">
                      <el-input type="number" v-model.number="ruleForm.three_7_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">8月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  label-width="0px"  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleForm.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_8_2">
                      <el-input type="number" v-model.number="ruleForm.three_8_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_8_3">
                      <el-input type="number" v-model.number="ruleForm.three_8_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_8_4">
                      <el-input type="number" v-model.number="ruleForm.three_8_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">9月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  label-width="0px"  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleForm.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_9_2">
                      <el-input type="number" v-model.number="ruleForm.three_9_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_9_3">
                      <el-input type="number" v-model.number="ruleForm.three_9_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_9_4">
                      <el-input type="number" v-model.number="ruleForm.three_9_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">10月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  label-width="0px"  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleForm.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_10_2">
                      <el-input type="number" v-model.number="ruleForm.three_10_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_10_3">
                      <el-input type="number" v-model.number="ruleForm.three_10_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_10_4">
                      <el-input type="number" v-model.number="ruleForm.three_10_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">11月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  label-width="0px"  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleForm.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_11_2">
                      <el-input type="number" v-model.number="ruleForm.three_11_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_11_3">
                      <el-input type="number" v-model.number="ruleForm.three_11_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_11_4">
                      <el-input type="number" v-model.number="ruleForm.three_11_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">12月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label=""  label-width="0px"  prop="three_1_1">
                      <el-input type="number" v-model.number="ruleForm.three_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_12_2">
                      <el-input type="number" v-model.number="ruleForm.three_12_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_12_3">
                      <el-input type="number" v-model.number="ruleForm.three_12_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px"  prop="three_12_4">
                      <el-input type="number" v-model.number="ruleForm.three_12_4"></el-input>
                    </el-form-item>
                  </div></div>
                </div>

            </div>
          </div>
        </div>
        <div  class="list_module">
          <div class="list_module_title">
            <p>协议外月度与富余电量交易价格表</p>
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
              <div class="table_tr">
                <div class="table_td"><div class="table_td_w">1月</div></div>
                <div class="table_td"><div class="table_td_w">
                  <el-form-item label="" label-width="0px"  prop="four_1_1">
                    <el-input type="number" v-model.number="ruleForm.four_1_1"></el-input>
                  </el-form-item>
                </div></div>
                <div class="table_td"><div class="table_td_w">
                  <el-form-item label-width="0px" prop="four_1_2">
                    <el-input type="number" v-model.number="ruleForm.four_1_2"></el-input>
                  </el-form-item>
                </div></div>
              </div>
              <div class="table_tr">
                <div class="table_td"><div class="table_td_w">2月</div></div>
                <div class="table_td"><div class="table_td_w">
                  <el-form-item label="" label-width="0px"  prop="four_2_1">
                    <el-input type="number" v-model.number="ruleForm.four_2_1"></el-input>
                  </el-form-item>
                </div></div>
                <div class="table_td"><div class="table_td_w">
                  <el-form-item label-width="0px" prop="four_2_2">
                    <el-input type="number" v-model.number="ruleForm.four_2_2"></el-input>
                  </el-form-item>
                </div></div>
              </div>
              <div class="table_tr">
                <div class="table_td"><div class="table_td_w">3月</div></div>
                <div class="table_td"><div class="table_td_w">
                  <el-form-item label="" label-width="0px"  prop="four_3_1">
                    <el-input type="number" v-model.number="ruleForm.four_3_1"></el-input>
                  </el-form-item>
                </div></div>
                <div class="table_td"><div class="table_td_w">
                  <el-form-item label-width="0px" prop="four_3_2">
                    <el-input type="number" v-model.number="ruleForm.four_3_2"></el-input>
                  </el-form-item>
                </div></div>
              </div>
              <div class="table_tr">
                <div class="table_td"><div class="table_td_w">4月</div></div>
                <div class="table_td"><div class="table_td_w">
                  <el-form-item label="" label-width="0px"  prop="four_4_1">
                    <el-input type="number" v-model.number="ruleForm.four_4_1"></el-input>
                  </el-form-item>
                </div></div>
                <div class="table_td"><div class="table_td_w">
                  <el-form-item label-width="0px" prop="four_4_2">
                    <el-input type="number" v-model.number="ruleForm.four_4_2"></el-input>
                  </el-form-item>
                </div></div>
              </div>
              <div class="table_tr">
                <div class="table_td"><div class="table_td_w">5月</div></div>
                <div class="table_td"><div class="table_td_w">
                  <el-form-item label="" label-width="0px"  prop="four_5_1">
                    <el-input type="number" v-model.number="ruleForm.four_5_1"></el-input>
                  </el-form-item>
                </div></div>
                <div class="table_td"><div class="table_td_w">
                  <el-form-item label-width="0px" prop="four_5_2">
                    <el-input type="number" v-model.number="ruleForm.four_5_2"></el-input>
                  </el-form-item>
                </div></div>
              </div>

                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">6月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label="" label-width="0px"  prop="four_6_1">
                      <el-input type="number" v-model.number="ruleForm.four_6_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="four_6_2">
                      <el-input type="number" v-model.number="ruleForm.four_6_2"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">7月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="four_7_1">
                      <el-input type="number" v-model.number="ruleForm.four_7_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="four_7_2">
                      <el-input type="number" v-model.number="ruleForm.four_7_2"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">8月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="four_8_1">
                      <el-input type="number" v-model.number="ruleForm.four_8_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="four_8_2">
                      <el-input type="number" v-model.number="ruleForm.four_8_2"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">9月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="four_9_1">
                      <el-input type="number" v-model.number="ruleForm.four_9_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="four_9_2">
                      <el-input type="number" v-model.number="ruleForm.four_9_2"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">10月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="four_10_1">
                      <el-input type="number" v-model.number="ruleForm.four_10_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="four_10_2">
                      <el-input type="number" v-model.number="ruleForm.four_10_2"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">11月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="four_11_1">
                      <el-input type="number" v-model.number="ruleForm.four_11_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="four_11_2">
                      <el-input type="number" v-model.number="ruleForm.four_11_2"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">12月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="four_12_1">
                      <el-input type="number" v-model.number="ruleForm.four_12_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="four_12_2">
                      <el-input type="number" v-model.number="ruleForm.four_12_2"></el-input>
                    </el-form-item>
                  </div></div>
                </div>

            </div>
          </div>
        </div>
        <div  class="list_module">
          <div class="list_module_title">
            <p>全年协议电量表</p>
          </div>
          <div class="list_con" >
            <div class="table_hint">单位：兆瓦时</div>
            <div class="table list_table five_table">
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

                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">1月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_1_1">
                      <el-input type="number" v-model.number="ruleForm.five_1_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_1_2">
                      <el-input type="number" v-model.number="ruleForm.five_1_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_1_3">
                      <el-input type="number" v-model.number="ruleForm.five_1_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_1_4">
                      <el-input type="number" v-model.number="ruleForm.five_1_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_1_5">
                      <el-input type="number" v-model.number="ruleForm.five_1_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">2月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_2_1">
                      <el-input type="number" v-model.number="ruleForm.five_2_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_2_2">
                      <el-input type="number" v-model.number="ruleForm.five_2_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_2_3">
                      <el-input type="number" v-model.number="ruleForm.five_2_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_2_4">
                      <el-input type="number" v-model.number="ruleForm.five_2_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_2_5">
                      <el-input type="number" v-model.number="ruleForm.five_2_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">3月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_3_1">
                      <el-input type="number" v-model.number="ruleForm.five_3_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_3_2">
                      <el-input type="number" v-model.number="ruleForm.five_3_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_3_3">
                      <el-input type="number" v-model.number="ruleForm.five_3_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_3_4">
                      <el-input type="number" v-model.number="ruleForm.five_3_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_3_5">
                      <el-input type="number" v-model.number="ruleForm.five_3_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">4月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_4_1">
                      <el-input type="number" v-model.number="ruleForm.five_4_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_4_2">
                      <el-input type="number" v-model.number="ruleForm.five_4_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_4_3">
                      <el-input type="number" v-model.number="ruleForm.five_4_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_4_4">
                      <el-input type="number" v-model.number="ruleForm.five_4_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_4_5">
                      <el-input type="number" v-model.number="ruleForm.five_4_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">5月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_5_1">
                      <el-input type="number" v-model.number="ruleForm.five_5_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_5_2">
                      <el-input type="number" v-model.number="ruleForm.five_5_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_5_3">
                      <el-input type="number" v-model.number="ruleForm.five_5_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_5_4">
                      <el-input type="number" v-model.number="ruleForm.five_5_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_5_5">
                      <el-input type="number" v-model.number="ruleForm.five_5_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">6月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_6_1">
                      <el-input type="number" v-model.number="ruleForm.five_6_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_6_2">
                      <el-input type="number" v-model.number="ruleForm.five_6_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_6_3">
                      <el-input type="number" v-model.number="ruleForm.five_6_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_6_4">
                      <el-input type="number" v-model.number="ruleForm.five_6_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_6_5">
                      <el-input type="number" v-model.number="ruleForm.five_6_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">7月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_7_1">
                      <el-input type="number" v-model.number="ruleForm.five_7_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_7_2">
                      <el-input type="number" v-model.number="ruleForm.five_7_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_7_3">
                      <el-input type="number" v-model.number="ruleForm.five_7_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_7_4">
                      <el-input type="number" v-model.number="ruleForm.five_7_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_7_5">
                      <el-input type="number" v-model.number="ruleForm.five_7_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">8月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_8_1">
                      <el-input type="number" v-model.number="ruleForm.five_8_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_8_2">
                      <el-input type="number" v-model.number="ruleForm.five_8_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_8_3">
                      <el-input type="number" v-model.number="ruleForm.five_8_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_8_4">
                      <el-input type="number" v-model.number="ruleForm.five_8_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_8_5">
                      <el-input type="number" v-model.number="ruleForm.five_8_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">9月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_9_1">
                      <el-input type="number" v-model.number="ruleForm.five_9_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_9_2">
                      <el-input type="number" v-model.number="ruleForm.five_9_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_9_3">
                      <el-input type="number" v-model.number="ruleForm.five_9_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_9_4">
                      <el-input type="number" v-model.number="ruleForm.five_9_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_9_5">
                      <el-input type="number" v-model.number="ruleForm.five_9_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">10月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_10_1">
                      <el-input type="number" v-model.number="ruleForm.five_10_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_10_2">
                      <el-input type="number" v-model.number="ruleForm.five_10_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_10_3">
                      <el-input type="number" v-model.number="ruleForm.five_10_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_10_4">
                      <el-input type="number" v-model.number="ruleForm.five_10_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_10_5">
                      <el-input type="number" v-model.number="ruleForm.five_10_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">11月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_11_1">
                      <el-input type="number" v-model.number="ruleForm.five_11_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_11_2">
                      <el-input type="number" v-model.number="ruleForm.five_11_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_11_3">
                      <el-input type="number" v-model.number="ruleForm.five_11_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_11_4">
                      <el-input type="number" v-model.number="ruleForm.five_11_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_11_5">
                      <el-input type="number" v-model.number="ruleForm.five_11_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
                <div class="table_tr">
                  <div class="table_td"><div class="table_td_w">12月</div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_12_1">
                      <el-input type="number" v-model.number="ruleForm.five_12_1"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_12_2">
                      <el-input type="number" v-model.number="ruleForm.five_12_2"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_12_3">
                      <el-input type="number" v-model.number="ruleForm.five_12_3"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_12_4">
                      <el-input type="number" v-model.number="ruleForm.five_12_4"></el-input>
                    </el-form-item>
                  </div></div>
                  <div class="table_td"><div class="table_td_w">
                    <el-form-item label-width="0px" prop="five_12_5">
                      <el-input type="number" v-model.number="ruleForm.five_12_5"></el-input>
                    </el-form-item>
                  </div></div>
                </div>
            </div>
          </div>
        </div>
        </el-form>
        <div class="list_module" style="width:90%; ">
          <div class="list_module_btn">
            <el-button @click="ret_add" size="small" plain>取消</el-button>
            <el-button class="btn_aff" type="primary" size="small" :loading="this.load_save"  @click="add_save">保存</el-button>
            <el-button class="btn_aff" type="primary" size="small" :loading="this.load_subit"  @click="add_affirm">提交</el-button>
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
        c_backfill:{},
        load_save:false,
        load_subit:false,
        contractType:"", //合同类型
        customerId:"", //客户ID
        add_con_id:"",
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
          four_1_1:"",
          four_1_2:"",
          four_2_1:"",
          four_2_2:"",
          four_3_1:"",
          four_3_2:"",
          four_4_1:"",
          four_4_2:"",
          four_5_1:"",
          four_5_2:"",
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

          two_1:[
            { required: true, message: '请输入企业地址', trigger: 'blur' },
          ],
          two_2:[
            { required: true, message: '请选择电压等级', trigger: 'change' },
          ],
          two_5:[
            {  required: true, message: '请选择时间', trigger: 'change' },
          ],
          two_5s:[
            { required: true, message: '请输入合同起止地址', trigger: 'change' },
          ],
          two_6:[
            { required: true, message: '请输入预估总用电量', trigger: 'blur' },
          ],
          two_7:[
            { required: true, message: '请输入抄表例日', trigger: 'blur' },
          ],

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
        add_list:{  //后面三个步骤list数据暂存
          list3:[],
          list4:[],
          list:[],
        },
        options4: [],  //购电方选择框数组
        list: [],  //购电方过滤
        loading: false, //是否正在从远程获取数据
        gd_list:[], //购电方后台返回数据
        states: [],  //筛选出购电方名称数组
        find_id:"",  //参数ID
        add_create:{}, //提交按钮所有参数
        save_create:{}, //保存按钮所有参数
        con_id:'',
        timeFormat:{  //日期回填
          twoTime5:"",
          twoTime5s:[],
        },
        Service_con:{},
        yn_3:[],

      }
    },
// 映射store数据
    computed: {

    },
    methods: {
      zh_val(list,label){
        let obj = {};
        obj = list.find((item)=>{
          return item.label === label;
        });
      //  console.log(obj.value)
        return obj.value
      },
      add_contract(){
        this.$router.push('/Customer/details');
      },
      ret_add(){  //返回取消按钮
        this.$router.push('/Contract/sellElectric');
      },

      add_cancel(){
        this.$router.go(-1);
      },
      change_2(){  //点击省份获取市数据
        this.select_3 = []
        this.value3 =""
        this.select_4 = []
        this.value4 =""
        if(this.pr_value == "北京市"){
          this.select_3 = [{
            value: '北京市',
            label: '北京市'
          }]
        }
      },
      change_3(){  //点击市区获取区县数据
        this.select_4 = []
        this.value4 =""
        if(this.value3 == "北京市"){
          this.select_4 = [{
            value: '东城区',
            label: '东城区',
          },{
            value: '西城区',
            label: '西城区',
          },{
            value: '崇文区',
            label: '崇文区',
          },{
            value: '宣武区',
            label: '宣武区',
          },{
            value: '朝阳区',
            label: '朝阳区',
          },{
            value: '丰台区',
            label: '丰台区',
          },{
            value: '石景山区',
            label: '石景山区',
          },{
            value: '海淀区',
            label: '海淀区',
          },{
            value: '门头沟区',
            label: '门头沟区',
          },{
            value: '房山区',
            label: '房山区',
          },{
            value: '通州区',
            label: '通州区',
          },{
            value: '顺义区',
            label: '顺义区',
          },{
            value: '昌平区',
            label: '昌平区',
          },{
            value: '平谷区',
            label: '平谷区',
          },{
            value: '大兴区',
            label: '大兴区',
          },{
            value: '怀柔区',
            label: '怀柔区',
          },{
            value: '密云县',
            label: '密云县',
          },{
            value: '延庆县',
            label: '延庆县',
          }]
        }
      },
      add_affirm(){ //提交按钮

        this.submitForm('ruleForm','submit');
      },
      add_save(){

        this.submitForm('ruleForm','save');
      },

      get_times(str){ //转换时间戳
      //  console.log(str)
        var temp =  (new Date(str)).getTime()
        return temp;
      },
      get_utc(arr){ //时间戳（秒）转换UTC时间格式
        return  new Date( ((arr * 1000) + 8 * 3600 * 1000)).toISOString();
      },
      resetForm(formName) {  //表单重置验证
        this.$refs[formName].clearValidate();
      },
      submitForm(formName,s_type) {  //表单提交验证
        this.$refs[formName].validate((valid) => {
          if (valid) {
              if(s_type == "submit"){
                this.load_subit = true
              }else if(s_type == "save"){
                this.load_save = true
              }
            this.add_list.list3 = [];
            this.add_list.list4 = [];
            this.add_list.list5 = [];
            var _templist = {
              temp_3:[],
              temp_4:[],
              temp_5:[],
            };
            for (var i = 0; i < 12; i++) {
              var _temp3 = {
                month:(i + 1), //月份
                conventionalPrice:this.ruleForm.three_1_1, //常规直接交易价格（元/千瓦时）
                longPrice:this.ruleForm['three_'+ (i + 1) +'_2'], //长期战略协议直接交易价格（元/千瓦时）
                selfPrice:this.ruleForm['three_'+ (i + 1) +'_3'], //自备替代直接交易价格（元/千瓦时）
                electricEnergyPrice:this.ruleForm['three_'+ (i + 1) +'_4'], //电能替代直接交易价格（元/千瓦时）
              }
              var _temp4 = {
                month:(i + 1),  //月份
                monthPowerPrice:this.ruleForm['four_'+ (i + 1) +'_1'],  //协议外月度电量交易价
                monthSurplusPowerPrice:this.ruleForm['four_'+ (i + 1) +'_2'],  //月度富余电量交易价
              }
              var _temp5 = {
                month:(i + 1),  //月份
                totalAmount:this.ruleForm['five_'+ (i + 1) +'_1'], //交易总量（万/千瓦时）
                conventionalAmount:this.ruleForm['five_'+ (i + 1) +'_2'], //常规直接交易电量（万/千瓦时）
                longAmount:this.ruleForm['five_'+ (i + 1) +'_3'], //长期战略协议直接交易电量（万/千瓦时）
                selfAmount:this.ruleForm['five_'+ (i + 1) +'_4'], //自备替代直接交易电量（万/千瓦时）
                electricEnergyAmount:this.ruleForm['five_'+ (i + 1) +'_5'], //电能替代直接交易电量（万/千瓦时）
              }

              _templist.temp_3.push(_temp3)
              _templist.temp_4.push(_temp4)
              _templist.temp_5.push(_temp5)
            }
            this.add_list.list3 = _templist.temp_3;
            this.add_list.list4 = _templist.temp_4;
            this.add_list.list5 = _templist.temp_5;
            if(this.contractType == "标准"){
              this.contractType  = "STANDARD"
            }else if(this.contractType == "自定义"){
              this.contractType  = "CUSTOMIZE"
            }
            this.add_create = {  //提交参数
              number:this.ruleForm.one_1, //合同编号
              action:s_type, //合同保存方式
              id:this.add_con_id, //合同ID
              contractType:this.contractType, //合同类型
              customerId:this.customerId,  //客户id
              customerName:this.ruleForm.one_2, //客户名称(甲方)
              taxNumber:this.ruleForm.one_4, //税务登记号
              residence:this.ruleForm.one_5, //甲方住所
              accountName:this.ruleForm.one_7, //甲方开户名称
              accountBank:this.ruleForm.one_8, //甲方开户银行
              accountNumber:this.ruleForm.one_9, //甲方开户账号
              contactAddress:this.ruleForm.one_14, //甲方通讯地址
              companyAddress:this.ruleForm.two_1, //甲方企业地址
              totalUsePowerAmount:this.ruleForm.two_3, //企业总用电量
              transformerCapacity:this.ruleForm.two_4, //变压器容量
              transactionCycle:(this.get_times(this.ruleForm.two_5) / 1000) , //交易周期
              estimateTotalUsePowerAmount:this.ruleForm.two_6, // 预估总用电量
              meterReadingDay:this.ruleForm.two_7, // 抄表例日
              powerAmountPricePromise:this.ruleForm.two_8, // 双方电量和电价约定
              defaultClausePromise:this.ruleForm.two_9, // 双方违约条款约定
              forceMajeurePromise:this.ruleForm.two_10, // 不可抗力约定
              contractStartTime:(this.get_times(this.ruleForm.two_5s[0]) / 1000), // 合同开始时间
              contractEndTime:(this.get_times(this.ruleForm.two_5s[1]) / 1000), // 合同结束时间
              list3:this.add_list.list3,
              list4:this.add_list.list4,
              list5:this.add_list.list5,
              customer:{
                id:this.customerId, //客户ID
                address:this.ruleForm.one_3, //所在地
                representative:this.ruleForm.one_6, //法人代表
                contact:this.ruleForm.one_10,  //联系人
                email:this.ruleForm.one_11, //电子邮箱
                phone:this.ruleForm.one_12, //手机号
                contactNumber:this.ruleForm.one_13, //办公电话
                voltageLevel:this.ruleForm.two_2, //电压等级
                totalUsePowerAmount:this.ruleForm.two_6s, //总用电容量
              },
            }
         //   console.log( this.add_create )
            this.add_create = JSON.stringify(this.add_create);
            add_ajax.contractEditService(this.add_create, res => {  //合同编辑
              this.$emit('login-success', res);
            }, (res) => {
//              this.con_id = res.message;
              if(res.status == 200){
                //  console.log(s_type)
                  if(s_type == "submit"){
                    this.load_subit = false
                    this.$router.push({name:'addSucceed',params:{btn_id:1,cont_id:this.add_con_id}});
                  }else{
                    this.load_save = false
                    this.$router.push({name:'addSucceed',params:{btn_id:2,cont_id:this.add_con_id}});
//                    this.$router.push({path:'/Contract/addSucceed',query:{btn_id:2,cont_id:this.add_con_id}});
                  }
              }
            });
            return true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
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
//        console.log(gd_info)
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

        if(gd_info.Email != "" && gd_info.Email != undefined){
          this.ruleForm.one_11 = gd_info.Email; //电子邮箱
        }
        if(gd_info.contactNumber != "" && gd_info.contactNumber != undefined){
          this.ruleForm.one_13 = gd_info.contactNumber; //联系电话（办公电话）
        }
        if(gd_info.voltageLevel != "" && gd_info.voltageLevel != undefined){

          this.ruleForm.two_2 = this.zh_val(this.yn_3,gd_info.voltageLevel); //电压等级
        }
        if(gd_info.phone != "" && gd_info.phone != undefined){
          this.ruleForm.one_12 = gd_info.phone; //手机
        }
        if(gd_info.registerAddress != "" && gd_info.registerAddress != undefined){
          this.ruleForm.two_1 = gd_info.registerAddress; //企业地址（注册地址）
        }
        if(gd_info.Contact != "" && gd_info.Contact != undefined){
          this.ruleForm.one_5 = gd_info.Contact; //联系人
        }
        if(gd_info.totalUsePowerAmount != "" && gd_info.totalUsePowerAmount != undefined){
          this.ruleForm.two_6s = gd_info.totalUsePowerAmount; //总用电容量
        }



//        this.one_5 = gd_info.Contact; //电压等级


      },
    },
//生命周期钩子函数，进入页面显示之前获取数据到store
    created() {
//      this.add_con_id = this.$route.query.cont_id  //合同id
      this.add_con_id  = this.$route.params.one //合同id
      this.find_id = "{id:"+ this.add_con_id +"}"
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
      add_ajax.contractDetailService(this.find_id, res => {  //合同详情
        this.$emit('login-success', res);
      }, (res) => {
        if(res.status == 200) {
          this.c_backfill = res.body;
          this.contractType = this.c_backfill.contract.contractType; //合同类型
          this.customerId = this.c_backfill.contract.customerId; //客户ID
          this.ruleForm.one_1 = this.c_backfill.contract.number; //合同编号
          this.ruleForm.one_2 = this.c_backfill.contract.customerName; ////客户名称(甲方)
          this.ruleForm.one_4 = this.c_backfill.contract.taxNumber; //税务登记号
          this.ruleForm.one_5 = this.c_backfill.contract.residence; //甲方住所
          this.ruleForm.one_7 = this.c_backfill.contract.accountName; //甲方开户名称
          this.ruleForm.one_8 = this.c_backfill.contract.accountBank; //甲方开户银行
          this.ruleForm.one_9 = this.c_backfill.contract.accountNumber; //甲方开户账号
          this.ruleForm.one_14 = this.c_backfill.contract.contactAddress; //甲方通讯地址
          this.ruleForm.two_1 = this.c_backfill.contract.companyAddress; //甲方企业地址
          this.ruleForm.two_3 = this.c_backfill.contract.totalUsePowerAmount; //甲方企业地址
          this.ruleForm.two_4 = this.c_backfill.contract.transformerCapacity; //变压器容量
          this.ruleForm.two_5 = this.get_utc(this.c_backfill.contract.transactionCycle); //交易周期
          this.ruleForm.two_5s = [this.get_utc(this.c_backfill.contract.contractStartTime), this.get_utc(this.c_backfill.contract.contractEndTime)]
          this.ruleForm.two_6 = this.c_backfill.contract.estimateTotalUsePowerAmount; //预估总用电量
          this.ruleForm.two_7 = this.c_backfill.contract.meterReadingDay; //抄表例日
          this.ruleForm.two_8 = this.c_backfill.contract.powerAmountPricePromise; //双方电量和电价约定
          this.ruleForm.two_9 = this.c_backfill.contract.defaultClausePromise; //双方违约条款约定
          this.ruleForm.two_10 = this.c_backfill.contract.forceMajeurePromise; //不可抗力约定

          this.ruleForm.one_3 = this.c_backfill.customer.address; //所在地
          this.ruleForm.one_6 = this.c_backfill.customer.representative; //法人代表
          this.ruleForm.one_10 = this.c_backfill.customer.contact; //联系人
          this.ruleForm.one_11 = this.c_backfill.customer.email; //电子邮箱
          this.ruleForm.one_12 = this.c_backfill.customer.phone; //手机号
          this.ruleForm.one_13 = this.c_backfill.customer.contactNumber; //联系电话
          this.ruleForm.two_2 = this.zh_val(this.yn_3,this.c_backfill.customer.voltageLevel); //电压等级
          this.ruleForm.two_6s = this.c_backfill.customer.totalUsePowerAmount; //总用电容量

//          console.log(this.c_backfill.customer.voltageLevel)

          for (var i = 0; i < this.c_backfill.list3.length; i++) {
            this.ruleForm.three_1_1 = this.c_backfill.list3[i].conventionalPrice;  //常规直接交易价格（元/千瓦时）
            this.ruleForm['three_' + (i + 1) + '_2'] = this.c_backfill.list3[i].longPrice;  //常规直接交易价格（元/千瓦时）
            this.ruleForm['three_' + (i + 1) + '_3'] = this.c_backfill.list3[i].selfPrice;  //常规直接交易价格（元/千瓦时）
            this.ruleForm['three_' + (i + 1) + '_4'] = this.c_backfill.list3[i].electricEnergyPrice;  //常规直接交易价格（元/千瓦时）
          }
          for (var i = 0; i < this.c_backfill.list4.length; i++) {
            this.ruleForm['four_' + (i + 1) + '_1'] = this.c_backfill.list4[i].monthPowerPrice;  //协议外月度电量交易价
            this.ruleForm['four_' + (i + 1) + '_2'] = this.c_backfill.list4[i].monthSurplusPowerPrice;  //月度富余电量交易价
          }
          for (var i = 0; i < this.c_backfill.list5.length; i++) {
            this.ruleForm['five_' + (i + 1) + '_1'] = this.c_backfill.list5[i].totalAmount;  ////交易总量（万/千瓦时）
            this.ruleForm['five_' + (i + 1) + '_2'] = this.c_backfill.list5[i].conventionalAmount;  //常规直接交易电量（万/千瓦时）
            this.ruleForm['five_' + (i + 1) + '_3'] = this.c_backfill.list5[i].longAmount; //长期战略协议直接交易电量（万/千瓦时）
            this.ruleForm['five_' + (i + 1) + '_4'] = this.c_backfill.list5[i].selfAmount;  //自备替代直接交易电量（万/千瓦时）
            this.ruleForm['five_' + (i + 1) + '_5'] = this.c_backfill.list5[i].electricEnergyAmount;  //电能替代直接交易电量（万/千瓦时）
          }
        }
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
    width: 95%;
    margin: 0 auto;
    height: 50px;
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height: 50px;
    text-align:left;

    /*background-color: #fcfcfc;*/
    border-bottom: 2px solid rgba(235,235,235,1);;
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
    padding-bottom: 10px;
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

  @media screen and (max-width: 1400px) {
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
  /*.edit_input .list_module .el-input__inner{*/
    /*padding: 0 15px!important;*/
    /*margin-top: 0px!important;*/
  /*}*/
  /*.el-input--prefix .el-input__inner {*/
    /*padding-left: 30px;*/
  /*}*/

  .list_table .el-input__inner {
    text-align: center;
  }
</style>
