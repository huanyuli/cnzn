<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <div class="ma_title_left" @click="ret_add">
          <i class="el-icon-arrow-left"></i>
          <p>创建客户</p>
        </div>
      </div>
      <div class="ma_content user_input">
        <div  v-if="this.istype == 1" class="list_module">
          <div class="list_module_title">
            <div class="title_ico_div">
              <div class="ico_div">
                <div style="margin-left: 20px" class="ico">1</div>
                <div class="ico_border"></div>
                <div class="ico ico_true">2</div>
              </div>
              <div class="text_div ">
                <span>填写客户基础信息</span>
                <span class="ico_text_true">填写客户用能信息</span>
              </div>
            </div>
          </div>
          <div  class="list_con">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px" class="demo-ruleForm">
              <div class="list_tile">基本信息</div>
              <div class="list_con_input">
                <el-form-item label="所属客户经理" prop="add_1">
                  <el-select style="width: 100%;"  v-model="ruleForm.add_1"  filterable clearable remote reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod_s" :loading="loading_s">
                    <el-option
                      v-for="item in options4_s"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="曾用名" prop="add_2">
                  <el-input v-model="ruleForm.add_2"></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="企业名称"  prop="one_1">
                  <el-input v-model="ruleForm.one_1"></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="用户代码" prop="add_14">
                  <el-input v-model="ruleForm.add_14"></el-input>
                </el-form-item>
              </div>

              <div class="list_con_input">
                <el-form-item label="企业简称" prop="add_3">
                  <el-input v-model="ruleForm.add_3"></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="用电单元名称" prop="add_4">
                  <el-input v-model="ruleForm.add_4"></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="所属行业"  prop="one_2">
                  <el-select size="medium" v-model="ruleForm.one_2"  clearable placeholder="请选择">
                    <el-option
                      v-for="item in form_one_2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="所在区域" prop="one_3">
                  <el-select size="medium" @change="change_2" v-model="ruleForm.one_3" clearable placeholder="请选择">
                    <el-option
                      v-for="item in form_one_3"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="行政区域">
                  <el-col style="width: 48%; margin-right: 3%">
                    <el-form-item  prop="one_4">
                      <el-select size="medium" @change="change_3" v-model="ruleForm.one_4" clearable placeholder="请选择">
                        <el-option
                          v-for="item in form_one_4"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col style="width: 48%; ">
                    <el-form-item prop="add_one_4">
                      <el-select  size="medium" @change="change_4" v-model="ruleForm.add_one_4" clearable placeholder="请选择">
                        <el-option
                          v-for="item in form_add_1"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>

                    </el-form-item>
                  </el-col>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="用电类别"  prop="two_4">
                  <el-select  size="medium" v-model="ruleForm.two_4"  clearable placeholder="请选择">
                    <el-option
                      v-for="item in form_two_4"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="定价策略类型"  prop="">
                  <el-select  size="medium" v-model="ruleForm.add_5"  clearable placeholder="请选择">
                    <el-option
                      v-for="item in form_add_2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="供电区域性质" prop="one_5">
                  <el-select size="medium" v-model="ruleForm.one_5" clearable placeholder="请选择">
                    <el-option
                      v-for="item in form_one_5"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item  label="所属省级电网" prop="one_6">
                  <el-select size="medium" v-model="ruleForm.one_6"  clearable placeholder="请选择">
                    <el-option
                      v-for="item in form_one_6"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>

              <div class="list_con_input">
                <el-form-item label="主要电源" prop="one_8">
                  <el-input type="number" size="medium" placeholder="请输入内容" v-model.number="ruleForm.one_8">
                    <template slot="append">个</template>
                  </el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="客户类型" prop="one_7">
                  <el-select size="medium" v-model="ruleForm.one_7" clearable  placeholder="请选择">
                    <el-option
                      v-for="item in form_one_7"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="变电站资产归属权" prop="one_9">
                  <el-select size="medium" v-model="ruleForm.one_9" clearable  placeholder="请选择">
                    <el-option
                      v-for="item in form_one_9"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="企业规模" prop="one_10">
                  <el-select size="medium" v-model="ruleForm.one_10"  clearable placeholder="请选择">
                    <el-option
                      v-for="item in form_one_10"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="企业性质" prop="one_11">
                  <el-select size="medium" v-model="ruleForm.one_11" clearable  placeholder="请选择">
                    <el-option
                      v-for="item in form_one_11"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="用电负荷类型"  prop="">
                  <el-select  size="medium" v-model="ruleForm.add_6"  clearable placeholder="请选择">
                    <el-option
                      v-for="item in form_add_3"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="售电结算单位" prop="">
                  <el-input size="medium" v-model="ruleForm.add_7" placeholder=""></el-input>
                </el-form-item>
              </div>


              <div class="list_tile list_margin_top">联系方式</div>

              <div class="list_con_input">
                <el-form-item label="联系人" prop="one_15">
                  <el-input size="medium" v-model="ruleForm.one_15" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="联系人职务" prop="">
                  <el-input size="medium" v-model="ruleForm.add_8" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="通讯地址" prop="">
                  <el-input size="medium" v-model="ruleForm.add_9" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="邮政编码" prop="">
                  <el-input size="medium" v-model="ruleForm.add_10" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="办公电话" prop="">
                  <el-input size="medium" v-model="ruleForm.add_11" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="手机电话" prop="one_14">
                  <el-input  size="medium" v-model.number="ruleForm.one_14" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="传真号码" prop="">
                  <el-input size="medium" v-model="ruleForm.add_12" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="电子邮箱" prop="one_16">
                  <el-input size="medium" v-model="ruleForm.one_16" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="网址" prop="">
                  <el-input size="medium" v-model="ruleForm.add_13" placeholder=""></el-input>
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
              </div>
              <div class="text_div ">
                <span>填写客户基础信息</span>
                <span>填写客户用能信息</span>
              </div>
            </div>
          </div>
          <div class="list_con" >
            <el-form :model="ruleTwo" :rules="rules_Two" ref="ruleTwo" label-width="180px" class="demo-ruleForm">
              <div class="list_tile">商务信息</div>
              <div class="list_con_input">
                <el-form-item label="统一社会信用代码" prop="add_two_1">
                  <el-input size="medium" v-model="ruleTwo.add_two_1" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="企业法人" prop="one_13">
                  <el-input size="medium" v-model="ruleTwo.one_13" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="注册地址" prop="one_12">
                  <el-input size="medium" v-model="ruleTwo.one_12" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="法定代表人姓名" prop="">
                  <el-input size="medium" v-model="ruleTwo.add_two_2" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="开户银行" prop="">
                  <el-input size="medium" v-model="ruleTwo.add_two_3" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="开户名称" prop="">
                  <el-input size="medium" v-model="ruleTwo.add_two_4" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="开户账号" prop="">
                  <el-input size="medium" v-model="ruleTwo.add_two_5" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="税务登记号" prop="">
                  <el-input size="medium" v-model="ruleTwo.add_two_6" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="组织机构代码" prop="">
                  <el-input size="medium" v-model="ruleTwo.add_two_7" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="营业期限" prop="">
                  <el-input size="medium" v-model="ruleTwo.add_two_8" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_tile list_margin_top">参数信息</div>

              <div class="list_con_input">
                <el-form-item label="用电量"  prop="two_2">
                  <el-input type="number" size="medium" placeholder="" v-model.number="ruleTwo.two_2">
                    <template slot="append">兆瓦时</template>
                  </el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="负荷性质"  prop="two_1">
                  <el-select size="medium" v-model="ruleTwo.two_1"  multiple  collapse-tags clearable  placeholder="请选择">
                    <el-option
                      v-for="item in form_two_1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.label">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="电压等级"  prop="two_3">
                  <el-select size="medium" v-model="ruleTwo.two_3" clearable placeholder="请选择">
                    <el-option
                      v-for="item in form_two_3"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>

              <div class="list_con_input">
                <el-form-item label="营销目录价格"  prop="two_5">
                  <el-input type="number"  size="medium" placeholder="" v-model.number="ruleTwo.two_5">
                    <template slot="append">元/kWh</template>
                  </el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="报装容量"  prop="two_6">
                  <el-input type="number"  size="medium" placeholder="" v-model.number="ruleTwo.two_6">
                    <template slot="append">kW</template>
                  </el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="签约电量"  prop="two_7">
                  <el-input type="number"  size="medium" placeholder="" v-model.number="ruleTwo.two_7">
                    <template slot="append">兆瓦时</template>
                  </el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="用电户号"  prop="two_12">
                  <el-input size="medium" v-model="ruleTwo.two_12" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="用电单位"  prop="two_10">
                  <el-input size="medium" v-model="ruleTwo.two_10" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="交易类型"  prop="two_9">
                  <el-select size="medium" v-model="ruleTwo.two_9" multiple collapse-tags placeholder="请选择">
                    <el-option
                      v-for="item in form_two_9"
                      :key="item.value"
                      :label="item.label"
                      :value="item.label">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="履约情况"  prop="two_8">
                  <el-select size="medium" v-model="ruleTwo.two_8" clearable placeholder="请选择">
                    <el-option
                      v-for="item in form_two_8"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>


              <div class="list_con_input">
                <el-form-item label="所属集团"  prop="two_10s">
                  <el-input size="medium" v-model="ruleTwo.two_10s" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="所属供电公司"  prop="two_11">
                  <el-input size="medium" v-model="ruleTwo.two_11" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="总用电容量"  prop="two_13">
                  <el-input type="number"  size="medium" placeholder="" v-model.number="ruleTwo.two_13">
                    <template slot="append">KVA</template>
                  </el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="最大需量"  prop="">
                  <el-input type="number"  size="medium" placeholder="" v-model.number="ruleTwo.add_two_9">
                    <template slot="append">MVA</template>
                  </el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="用电地址"  prop="">
                  <el-input size="medium" v-model="ruleTwo.add_two_10" placeholder=""></el-input>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="高耗能行业类别"  prop="">
                  <el-select size="medium" v-model="ruleTwo.add_two_11" clearable placeholder="请选择">
                    <el-option
                      v-for="item in form_add_4"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="是否执行峰谷标志"  prop="">
                  <el-select size="medium" v-model="ruleTwo.add_two_12" clearable placeholder="请选择">
                    <el-option
                      v-for="item in form_add_5"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="是否核定了输配"  prop="">
                  <el-select size="medium" v-model="ruleTwo.add_two_13" clearable placeholder="请选择">
                    <el-option
                      v-for="item in form_add_5"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_con_input">
                <el-form-item label="是否电能替代项目"  prop="">
                  <el-select size="medium" v-model="ruleTwo.add_two_14" clearable placeholder="请选择">
                    <el-option
                      v-for="item in form_add_5"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="list_tile list_margin_top">变压器容量</div>
              <div class="add_app">
                <div v-for="(list,index) in lists">

                  <div class="list_con_input">
                    <el-form-item label="营销用户号"  prop="">
                      <el-input size="medium" v-model="list.userNo" placeholder=""></el-input>
                    </el-form-item>
                  </div>
                  <div class="list_con_input">
                    <el-form-item label="营销用户名称"  prop="">
                      <el-input size="medium" v-model="list.userName" placeholder=""></el-input>
                    </el-form-item>
                  </div>
                  <div class="list_con_input">
                    <el-form-item label="变压器容量"  prop="">
                      <el-input size="medium" placeholder="请输入内容" v-model="list.capacity">
                        <template slot="append">MVA</template>
                      </el-input>
                    </el-form-item>
                  </div>
                  <div class="list_con_input">
                    <el-form-item label="计量点编号"  prop="">
                      <el-input size="medium" v-model="list.number" placeholder=""></el-input>
                    </el-form-item>
                  </div>
                  <div class="list_con_input">
                    <el-form-item label="计量点名称"  prop="">
                      <el-input size="medium" v-model="list.name" placeholder=""></el-input>
                    </el-form-item>
                  </div>
                  <div class="list_con_input"  v-if="index == 0">
                    <el-button   @click="add_lists(index)" class="btn_aff" style="margin-left: 180px" size="small" type="primary" >添 加</el-button>
                  </div>
                  <div class="list_con_input" v-if="index != 0">
                    <el-button @click="del_lists(index)" class="btn_aff" style="margin-left: 180px" size="small" type="primary" >删 除</el-button>
                  </div>
                </div>
              </div>
            </el-form>
          </div>
        </div>


        <div class="list_module" style="width:90%; ">
          <div class="list_module_btn">
            <el-button @click="add_cancel" size="small" plain>取消</el-button>
            <el-button v-if="this.istype != 1" @click="add_one" size="small" plain>上一步</el-button>
            <el-button v-if="this.istype != 2" class="btn_aff" type="primary" size="small" @click="add_two">下一步</el-button>
            <el-button v-if="this.istype == 2" class="btn_aff" type="primary" size="small" :loading="this.load_subit" @click="add_affirm">提交</el-button>
          </div>
        </div>
      </div>

    </div>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  // 引入axios
  import add_ajax from '../../../api/customer '

  export default {
    data() {
      var checkAge = (rule, value, callback) => {  //联系电话
        if (value) {
          setTimeout(() => {
            if (!Number.isInteger(value)) {
              callback(new Error('请输入正确的号码'));
            }else {
              callback();
            }
          }, 1000);
        }else{
          callback();
        }
      };
      var checkEmail  = (rule, value, callback) => {  //联系电话
        if (value) {
          var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
          setTimeout(() => {
           //   console.log(re.test(value))
            if (!re.test(value)) {
              callback(new Error('邮箱格式不正确'));
            }else {
              callback();
            }
          }, 1000);
        }else{
          callback();
        }
      };
      return {
        istype:1,
//        customerId:0,
        load_subit:false,
        add_Type:"",
        add_create:{}, //提交按钮所有参数
        con_id:'',
        form_code:"", //获取客户资料字典参数
        form_select:"", //获取客户资料字典列表
        form_code_s:"", //获取省份参数
        form_select_s:"", //获取省份字典列表
        form_code_q:"",
        form_code_qs:"",
        form_select_q:"",
        form_select_qs:"",

        ruleForm: {  //第一步
          one_1:"",
          one_2:"",
          one_3:"510000000000",  //默认为四川
          one_3s:"四川省",  //省份lable
          one_4s:"",//市lable
          one_4:"",  //市val
          one_5:"",
          one_6:"国网四川省电力公司",
          one_7:"",
          one_8:"",
          one_9:"",
          one_10:"",
          one_11:"",

          one_14:"",
          one_15:"",
          one_16:"",

          add_1:"",  //所属客户经理
          add_2:"",  //曾用名
          add_3:"",  //企业简称
          add_4:"",  //用电单元名称

          add_one_4:"", //区val
          add_one_4_s:"", //区lable
          two_4:"",  //用电类别
          add_5:"",  //定价策略类型
          add_6:"",  //用电负荷类型
          add_7:"",  //售电结算单位
          add_8:"",  //联系人职务
          add_9:"",  //通讯地址
          add_10:"",  //邮政编码
          add_11:"",  //办公电话
          add_12:"",  //传真号码
          add_13:"",  //网址
          add_14:"",  //用户代码
        },
        rules: {  //第一步的验证
          one_1: [
            { required: true, message: '请输入客户名称', trigger: 'blur' }
          ],
          one_2: [
            { required: false, message: '请选择所属行业', trigger: 'change' }
          ],
          one_3:[
            { required: false, message: '请选择所在区域', trigger: 'change' },
          ],
          one_4:[
            { required: false, message: '请选择市', trigger: 'change' },
          ],
          add_one_4:[
            { required: false, message: '请选择区县', trigger: 'change' },
          ],
          one_5:[
            { required: false, message: '请选择供电区域性质', trigger: 'blur' },
          ],
          one_14:[
            // { validator: checkAge, trigger: 'blur' }
            { required: false, trigger: 'blur' }
          ],
          one_16:[
            // { validator: checkEmail, trigger: 'blur' }
            { required: false, trigger: 'blur' }
          ],
          two_4:[
            { required: false, message: '请选择用电类别', trigger: 'blur' },
          ],
          add_14: [
            { required: true, message: '请输入用户代码', trigger: 'blur' }
          ],
        },
        ruleTwo:{
          two_1:[],
          two_2:"",
          two_3:"",
//          two_4:"",
          two_5:"",
          two_6:"",
          two_7:"",
          two_8:"",
          two_9:[],
          two_10:"",
          two_10s:"",
          two_11:"",
          two_12:"",
          two_13:"",

          one_12:"",
          one_13:"",

          add_two_1:"",  //社会信用代码
          add_two_2:"",  //法定代表人姓名
          add_two_3:"",  //开户银行
          add_two_4:"",  //开户名称
          add_two_5:"",  //开户账号
          add_two_6:"",  //税务登记号
          add_two_7:"",  //组织机构代码
          add_two_8:"",  //营业期限
          add_two_9:"",  //最大需量
          add_two_10:"",  //用电地址
          add_two_11:"",  //高耗能行业类别
          add_two_12:"",  //是否执行峰谷标志
          add_two_13:"",  //是否核定了输配
          add_two_14:"",  //是否电能替代项目
        },
        rules_Two:{
          two_5:[
            { required: false, message: '请输入原用电价格', trigger: 'blur' },
          ],
          two_3:[
            { required: false, message: '请选择电压等级', trigger: 'change' },
          ],
          two_11:[
            { required: false, message: '请输入所属供电公司', trigger: 'blur' },
          ],
          two_12:[
            { required: false, message: '请输入用电户号', trigger: 'blur' },
          ],
          two_13:[
            { required: false, message: '请输入总用电容量', trigger: 'blur' },
          ],
          add_two_1:[
            { required: false, message: '请输入统一社会信用代码', trigger: 'blur' },
          ],
        },
        lists:[{
          userNo:"",  //营销用户号
          userName:"",  //营销用户名称
          capacity:"",  //变压器容量
          number:"",  //计量点编号
          name:"",  //计量点名称
        }],
        form_one_2:[],  //所属行业
        form_one_3:[], //所在区域
        form_one_4:[], //行政市
        form_one_5:[], //供电区域性质
        form_one_6:[], //所属省级电网
        form_one_7:[], //客户类型
        form_one_9:[], //变电站资产归属权
        form_one_10:[], //企业规模
        form_one_11:[], //企业性质

        form_two_1:[], //负荷性质
        form_two_3:[], //电压等级
        form_two_4:[], //用电类别
        form_two_8:[], //履约情况
        form_two_9:[], //交易类型

        form_add_1:[], //行政区县
        form_add_2:[], //定价策略类型
        form_add_3:[], //用电负荷类型
        form_add_4:[], //高耗能行业类别
        form_add_5:[], //是否执行


        options4_s: [],  //购电方选择框数组
        list_s: [],  //购电方过滤
        loading_s: false, //是否正在从远程获取数据
        gd_list_s:[], //购电方后台返回数据
        states_s: [],  //筛选出购电方名称数组

      }
    },
// 映射store数据
    computed: {

    },
    methods: {

      add_lists(index){
         index = index + 1
          if(index != 0){
              var _temp_index = this.lists[index -1]
            if(_temp_index.userNo != "" && _temp_index.userName != "" && _temp_index.capacity != "" && _temp_index.number != "" && _temp_index.name != ""){
              let cope = {
                userNo:"",  //营销用户号
                userName:"",  //营销用户名称
                capacity:"",  //变压器容量
                number:"",  //计量点编号
                name:"",  //计量点名称
              }
              this.lists.push(cope);
            }else{
              this.$message.error('请将上一条内容填写完整，在进行添加');
            }
          }
        console.log(this.lists)
      },
      del_lists(index){
        this.lists.splice(index,1);
        console.log(this.lists)
      },
      remoteMethod_s(query) { //客户名称远程搜索选择(带客户ID)
        if (query !== '') {
          /*清空临时数组*/
          this.states_s = [];
          this.list_s = [];
          this.options4_s = [];

          this.loading_s = true;
          this.name_list_s = "{'username': '"+ query +"'}",
            setTimeout(() => {
              this.loading_s = false;
              add_ajax.userListService(this.name_list_s, res => {  //name
                this.$emit('login-success', res);
              }, (res) => {
                this.gd_list_s = res.body.list;
                for (var i = 0; i < this.gd_list_s.length; i++) {
                  this.states_s.push({name:this.gd_list_s[i].username,id:this.gd_list_s[i].id});
                }
                this.list_s = this.states_s.map(item => {

                  return { value: item.id, label: item.name };
                });

                this.options4_s = this.list_s.filter(item => {
                  return item.label.toLowerCase()
                      .indexOf(query.toLowerCase()) > -1;
                });

              });

            }, 200);
        } else {
          this.options4_s = [];
        }
      },
      add_contract(){
        this.$router.push('/Customer/details');
      },
      ret_add(){
        this.$router.go(-1);
      },
      add_cancel(){ //取消按钮
        this.$router.push('/Customer/material');
      },
      change_2(val){  //点击省份获取市数据
        let obj = {};
        obj = this.form_one_3.find((item)=>{
          return item.value === val;
        });
        this.ruleForm.one_3s = obj.label

        this.form_code_q ={
          code:this.ruleForm.one_3,
          areaLevel:"province"
        }
        this.form_code_q = JSON.stringify(this.form_code_q);
        add_ajax.areaListService(this.form_code_q, res => {  //列表字典
          this.$emit('login-success', res);
        }, (res) => {
          this.form_select_q = res.body;
          this.form_one_4 = []
          this.ruleForm.one_4 = ""
          var _temp_one_4 = this.form_one_4;   //所在行政区域
          $.map(this.form_select_q,function(value){
            _temp_one_4.push({
              value:value.code,
              label:value.name
            });
          });
        });

      },
      change_3(val){  //点击市区获取lable
        let objs = {};
        objs = this.form_one_4.find((item)=>{
          return item.value === val;
        });
        this.ruleForm.one_4s = objs.label

        this.form_code_qs ={
          code:this.ruleForm.one_4,
          areaLevel:"city"
        }
        this.form_code_qs = JSON.stringify(this.form_code_qs);
        add_ajax.areaListService(this.form_code_qs, res => {  //列表字典
          this.$emit('login-success', res);
        }, (res) => {
          this.form_select_qs = res.body;
          this.form_add_1 = []
          this.ruleForm.add_one_4 = ""
          var _temp_one_4 = this.form_add_1;
          $.map(this.form_select_qs,function(value){
            _temp_one_4.push({
              value:value.code,
              label:value.name
            });
          });

        });

      },
      change_4(val){  //点击县级获取lable
        let obj = {};
        obj = this.form_add_1.find((item)=>{
          return item.value === val;
        });
        this.ruleForm.add_one_4_s = obj.label
      },
      add_affirm(){ //提交按钮
//        console.log(this.arr_find(this.ruleTwo.two_9))

        this.submitForm('ruleTwo');
      },
      add_one(){ //上一步
          this.resetForm('ruleTwo')
          this.istype = 1
      },
      get_times(str){  //转换时间戳

        var temp =  (new Date(str)).getTime()
        return temp;
      },
      resetForm(formName) {  //表单重置验证
        this.$refs[formName].clearValidate();
      },
      arr_find(arr){
          var _temp_arr = ""
        $.map(arr,function(data,index){

            if(index == 0){
              _temp_arr = data
            }else{
              _temp_arr += "," +  data
            }
        });

          return _temp_arr
      },
      submitForm(formName) {  //表单提交验证

        this.$refs[formName].validate((valid) => {
          if (valid) {

            var _temp = this.istype;
            if(_temp == 1){
              this.resetForm('ruleForm')
              this.istype = 2
            }else if(_temp == 2) {
              this.load_subit = true
              this.add_create ={
                name:this.ruleForm.one_1,
                industry:this.ruleForm.one_2,
                province:this.ruleForm.one_3s,
                provinceCode:this.ruleForm.one_3,
                city:this.ruleForm.one_4s,
                cityCode:this.ruleForm.one_4,
                county:this.ruleForm.add_one_4_s,
                countyCode:this.ruleForm.add_one_4,
                powerAreaNature:this.ruleForm.one_5,
                provincePowerGrid:this.ruleForm.one_6,
                customerType:this.ruleForm.one_7,
                mainPower:this.ruleForm.one_8,
                powerStationAssetOwner:this.ruleForm.one_9,
                companyScale:this.ruleForm.one_10,
                companyNature:this.ruleForm.one_11,
                registerAddress:this.ruleTwo.one_12,
                representative:this.ruleTwo.one_13,
                contact:this.ruleForm.one_15,
                contactNumber:this.ruleForm.add_11,
                phone:this.ruleForm.one_14,
                email:this.ruleForm.one_16,
                loadNature:this.arr_find(this.ruleTwo.two_1),
                useElectricity:this.ruleTwo.two_2,
                voltageLevel:this.ruleTwo.two_3,
                usePowerType:this.ruleForm.two_4,
                originalPowerPrice:this.ruleTwo.two_5,
                applyCapacity:this.ruleTwo.two_6,
                signingElectricity:this.ruleTwo.two_7,
                performanceSituation:this.ruleTwo.two_8,
                transactionType:this.arr_find(this.ruleTwo.two_9),
                useElectricityCompany:this.ruleTwo.two_10,
                ownerGroup:this.ruleTwo.two_10s,
                powerCompany:this.ruleTwo.two_11,
                usePowerNumber:this.ruleTwo.two_12,
                totalUsePowerAmount:this.ruleTwo.two_13,

                businessId:this.ruleForm.add_1,
                otherName:this.ruleForm.add_2,
                companySimpleName:this.ruleForm.add_3,
                powerUnit:this.ruleForm.add_4,
                priceStrategy:this.ruleForm.add_5,
                electricType:this.ruleForm.add_6,
                saleSettlementCompany:this.ruleForm.add_7,
                contactDuty:this.ruleForm.add_8,
                contactAddress:this.ruleForm.add_9,
                contactZipCode:this.ruleForm.add_10,
//                contactOfficePhoneNo:this.ruleForm.add_11,
                contactFax:this.ruleForm.add_12,
                contactWeb:this.ruleForm.add_13,
                customerCode:this.ruleForm.add_14,

                socialCreditCode:this.ruleTwo.add_two_1,
                representativeName:this.ruleTwo.add_two_2,
                openBank:this.ruleTwo.add_two_3,
                openAcctName:this.ruleTwo.add_two_4,
                openAcctNo:this.ruleTwo.add_two_5,
                taxNumber:this.ruleTwo.add_two_6,
                orgNo:this.ruleTwo.add_two_7,
                businessTerm:this.ruleTwo.add_two_8,
                maxNeedElectric:this.ruleTwo.add_two_9,
                powerAddress:this.ruleTwo.add_two_10,
                highEnergyCIndustry:this.ruleTwo.add_two_11,
                valleyFlag:this.ruleTwo.add_two_12,
                checkTransFlag:this.ruleTwo.add_two_13,
                substitutionFlag:this.ruleTwo.add_two_14,
                transformerList:this.lists,  //客户变压器容量列表
              }
              this.add_create = JSON.stringify(this.add_create);
              add_ajax.customerCreateService(this.add_create, res => {  //创建
                this.$emit('login-success', res);
              }, (res) => {
                if(res.status == 200){
                  this.con_id = res.body;
                  if(this.con_id != undefined){
                    this.load_subit = false
  //                  this.$router.push({path:'/Contract/addSucceed',query:{btn_id:1,cont_id:this.con_id}});
                    this.$router.push({name:'customer_succeed',params:{one:this.con_id}});
                  }
                }
              });
            }
            return true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      add_two(){  //下一步
//        var _temp_name = "{'customerName':'"+ this.ruleForm.one_1 +"','customerCode':'"+ this.ruleForm.add_14 +"'}"
        var _temp_name = "{'customerCode':'"+ this.ruleForm.add_14 +"'}"
        add_ajax.customerExistsService(_temp_name, res => {  //判断用户名是否重复
          this.$emit('login-success', res);
        }, (res) => {
          if(!res.body.exists){
            this.submitForm('ruleForm');
          }else{
            this.$message({
              message: '用户代码重复，请重新输入',
              type: 'warning'
            });
          }
        });

      },
    },
//生命周期钩子函数，进入页面显示之前获取数据到store
    created() {
      this.form_code = "{}";
      add_ajax.customerCodeService(this.form_code, res => {  //列表字典
        this.$emit('login-success', res);
      }, (res) => {
          if(res.status == 200) {
            this.form_select = res.body;
            var _temp_one_2 = this.form_one_2;   //所属行业
            $.map(this.form_select.industry, function (value, key) {
              _temp_one_2.push({
                value: key,
                label: value
              });
            });
            var _temp_one_5 = this.form_one_5;  //供电区域性质
            $.map(this.form_select.powerAreaNature, function (value, key) {
              _temp_one_5.push({
                value: key,
                label: value
              });
            });
            var _temp_one_6 = this.form_one_6;  //所属省级电网
            $.map(this.form_select.provincePowerGrid, function (value) {
              _temp_one_6.push({
                value: value,
                label: value
              });
            });
            var _temp_one_7 = this.form_one_7;  //客户类型
            $.map(this.form_select.customerType, function (value, key) {
              _temp_one_7.push({
                value: key,
                label: value
              });
            });
            var _temp_one_9 = this.form_one_9;  //变电站资产归属权
            $.map(this.form_select.powerStationAssetOwner, function (value, key) {
              _temp_one_9.push({
                value: key,
                label: value
              });
            });
            var _temp_one_10 = this.form_one_10;  //企业规模
            $.map(this.form_select.companyScale, function (value, key) {
              _temp_one_10.push({
                value: key,
                label: value
              });

            });
            var _temp_one_11 = this.form_one_11;  //企业性质
            $.map(this.form_select.companyNature, function (value, key) {
              _temp_one_11.push({
                value: key,
                label: value
              });

            });
            var _temp_two_1 = this.form_two_1;  //负荷性质
            $.map(this.form_select.loadNature, function (value, key) {
              _temp_two_1.push({
                value: key,
                label: value
              });
            });
            var _temp_two_3 = this.form_two_3;  //电压等级
            $.map(this.form_select.voltageLevel, function (value, key) {
              _temp_two_3.push({
                value: key,
                label: value
              });
            });
            var _temp_two_4 = this.form_two_4;  //用电类别
            $.map(this.form_select.usePowerType, function (value, key) {
              _temp_two_4.push({
                value: key,
                label: value
              });
            });
            var _temp_two_8 = this.form_two_8;  //履约情况
            $.map(this.form_select.performanceSituation, function (value) {
              _temp_two_8.push({
                value: value,
                label: value
              });
            });
            var _temp_two_9 = this.form_two_9;  //交易类型
            $.map(this.form_select.transactionType, function (value, key) {

              _temp_two_9.push({
                value: key,
                label: value
              });
            });


            var _temp_add_2 = this.form_add_2;  //定价策略类型
            $.map(this.form_select.priceStrategy, function (value, key) {

              _temp_add_2.push({
                value: key,
                label: value
              });
            });

            var _temp_add_3 = this.form_add_3;  //用电负荷类型
            $.map(this.form_select.electricType, function (value, key) {
              _temp_add_3.push({
                value: key,
                label: value
              });
            });

            var _temp_add_4 = this.form_add_4;  //高耗能行业类别
            $.map(this.form_select.highEnergyCIndustry, function (value) {
              _temp_add_4.push({
                value: value,
                label: value
              });
            });
            var _temp_add_5 = this.form_add_5;  //是否
            $.map(this.form_select.whether[0], function (value, key) {
              _temp_add_5.push({
                value: key,
                label: value
              });
            });


          }
      });

      //获取省级下拉列表
      this.form_code_s ="{}"
      add_ajax.areaListService(this.form_code_s, res => {  //列表区域字典
        this.$emit('login-success', res);
      }, (res) => {
        this.form_select_s = res.body;
//          form_one_3:[], //所在区域
        var _temp_one_3 = this.form_one_3;   //所在区域
        $.map(this.form_select_s,function(value){
          _temp_one_3.push({
            value:value.code,
            label:value.name
          });
        });


        //默认获取市级下拉列表
        this.form_code_q ={
          code:this.ruleForm.one_3,
          areaLevel:"province"
        }
        this.form_code_q = JSON.stringify(this.form_code_q);
        add_ajax.areaListService(this.form_code_q, res => {  //列表字典
          this.$emit('login-success', res);
        }, (res) => {
          this.form_select_q = res.body;
          this.form_one_4 = []
          this.ruleForm.one_4 = ""
          var _temp_one_4 = this.form_one_4;   //所在行政区域
          $.map(this.form_select_q,function(value){
            _temp_one_4.push({
              value:value.code,
              label:value.name
            });
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
    float: left;
    margin: 0px auto;
    padding-bottom:10px;
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
    width: 344px;
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
    overflow: visible;
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

  .list_tile{
    width: calc(100% - 80px);
    float: left;
    font-size: 14px;
    margin: 0px 40px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(192, 192, 192, 0.47);
  }
  .list_margin_top{
    margin: 10px 40px;
  }

</style>
<style>
  /*.user_input .list_module .el-input__inner{*/
    /*padding: 0 15px!important;*/
    /*margin-top: 0px!important;*/
  /*}*/
</style>
