<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
       <p @click="add_cancel"><i></i>创建客户</p>
      </div>
      <div class="ma_content">
        <div v-if="this.istype == 1" class="list_module">
          <div class="list_module_title">
            <div class="title_ico_div">
              <div class="ico_div">
                <div style="margin-left: 20px" class="ico">1</div>
                <div class="ico_border"></div>
                <div class="ico ico_true">2</div>
              </div>
              <div class="text_div ">
                <span>基础性新</span>
                <span class="ico_text_true">用能信息</span>
              </div>
            </div>
          </div>
          <div  class="list_con">
            <div class="list_con_input">
              <p><span>*</span>客户名称</p>
              <div class="input_div">
                <el-input size="medium" v-model="kh_name" placeholder="请输入内容"></el-input>
              </div>
            </div>
            <div class="list_con_input">
              <p><span>*</span>所属行业</p>
              <div class="input_div">
                <el-select size="medium" v-model="value2" filterable placeholder="请选择">
                  <el-option
                    v-for="item in industry"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="list_con_input">
              <p><span>*</span>所在区域</p>
              <div class="input_div">
                <el-select size="medium" @change="change_2" v-model="pr_value" placeholder="请选择">
                  <el-option

                    v-for="item in province"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="list_con_input">
              <p>行政区域</p>
              <div class="input_div">
                <div class="input_div_two">
                  <el-select size="medium" @change="change_3" v-model="value3" placeholder="请选择">
                    <el-option
                      v-for="item in select_3"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="input_div_two">
                  <el-select size="medium" v-model="value4" placeholder="请选择">
                    <el-option
                      v-for="item in select_4"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div>
            <div class="list_con_input">
              <p><span>*</span>供电区域性质</p>
              <div class="input_div">
                <el-select size="medium" v-model="value5" placeholder="请选择">
                  <el-option
                    v-for="item in select_5"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="list_con_input">
              <p>所属省级电网</p>
              <div class="input_div">
                <el-select size="medium" v-model="value6" placeholder="请选择">
                  <el-option
                    v-for="item in select_6"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="list_con_input">
              <p>客户类型</p>
              <div class="input_div">
                <el-select size="medium" v-model="value7" placeholder="请选择">
                  <el-option
                    v-for="item in select_7"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="list_con_input">
              <p>主要电源</p>
              <div class="input_div">
                <el-input size="medium" placeholder="请输入内容" v-model="value8">
                  <template slot="append">个</template>
                </el-input>
              </div>
            </div>
            <div class="list_con_input">
              <p>变电站的资产归属权</p>
              <div class="input_div">
                <el-select size="medium" v-model="value9" placeholder="请选择">
                  <el-option
                    v-for="item in select_9"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="list_con_input">
              <p>企业规模</p>
              <div class="input_div">
                <el-select size="medium" v-model="value10" placeholder="请选择">
                  <el-option
                    v-for="item in select_10"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="list_con_input">
              <p>企业性质</p>
              <div class="input_div">
                <el-select size="medium" v-model="value11" placeholder="请选择">
                  <el-option
                    v-for="item in select_11"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="list_con_input">
              <p>注册地址</p>
              <div class="input_div">
                <el-input size="medium" v-model="value12" placeholder="请输入内容"></el-input>
              </div>
            </div>
            <div class="list_con_input">
              <p>法人</p>
              <div class="input_div">
                <el-input size="medium" v-model="value13" placeholder="请输入内容"></el-input>
              </div>
            </div>
            <div class="list_con_input">
              <p>联系电话</p>
              <div class="input_div">
                <el-input size="medium" v-model="value14" placeholder="请输入内容"></el-input>
              </div>
            </div>
            <div class="list_con_input">
              <p>联系人</p>
              <div class="input_div">
                <el-input size="medium" v-model="value15" placeholder="请输入内容"></el-input>
              </div>
            </div>
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
                <span>基础性新</span>
                <span>用能信息</span>
              </div>
            </div>
          </div>
          <div class="list_con" >
            <div class="list_con_input">
              <p>负荷性质</p>
              <div class="input_div dx_se">
                <el-select
                  v-model="yn1"
                  size="medium"
                  multiple
                  collapse-tags
                  style="margin-left: 20px;"
                  placeholder="请选择">
                  <el-option
                    v-for="item in yn_1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="list_con_input">
              <p>用电量</p>
              <div class="input_div">
                <el-input size="medium" placeholder="请输入内容" v-model="yn2">
                  <template slot="append">万千万时</template>
                </el-input>
              </div>
            </div>
            <div class="list_con_input">
              <p><span>*</span>电压等级</p>
              <div class="input_div">
                <el-select size="medium" v-model="yn3" filterable placeholder="请选择">
                  <el-option
                    v-for="item in yn_3"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="list_con_input">
              <p>用电类别</p>
              <div class="input_div">
                <el-select size="medium" v-model="yn4" filterable placeholder="请选择">
                  <el-option
                    v-for="item in yn_4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="list_con_input">
              <p><span>*</span>原用电价格</p>
              <div class="input_div">
                <el-input size="medium" placeholder="请输入内容" v-model="yn5">
                  <template slot="append">元/kwh</template>
                </el-input>
              </div>
            </div>
            <div class="list_con_input">
              <p>报装容量</p>
              <div class="input_div">
                <el-input size="medium" placeholder="请输入内容" v-model="yn6">
                  <template slot="append">kw</template>
                </el-input>
              </div>
            </div>
            <div class="list_con_input">
              <p>签约电量</p>
              <div class="input_div">
                <el-input size="medium" placeholder="请输入内容" v-model="yn7">
                  <template slot="append">万千瓦时</template>
                </el-input>
              </div>
            </div>
            <div class="list_con_input">
              <p>履约情况</p>
              <div class="input_div">
                <el-select size="medium" v-model="yn8" filterable placeholder="请选择">
                  <el-option
                    v-for="item in yn_8"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="list_con_input">
              <p>交易类型</p>
              <div class="input_div dx_se">
                <el-select
                  v-model="yn9"
                  size="medium"
                  multiple
                  collapse-tags
                  style="margin-left: 20px;"
                  placeholder="请选择">
                  <el-option
                    v-for="item in yn_9"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="list_con_input">
              <p>用电单位</p>
              <div class="input_div">
                <el-input size="medium" v-model="yn10" placeholder="请输入内容"></el-input>
              </div>
            </div>
            <div class="list_con_input">
              <p>所属集团</p>
              <div class="input_div">
                <el-input size="medium" v-model="yn11" placeholder="请输入内容"></el-input>
              </div>
            </div>
          </div>
        </div>
        <div class="list_module" style="border-top: 1px solid #F0F1F2;width:90%; ">
          <div class="list_module_btn">

            <el-button @click="add_cancel" size="small" plain>取消</el-button>
            <el-button v-if="this.istype == 2" @click="add_one" size="small" plain>上一步</el-button>
            <el-button v-if="this.istype == 1" class="btn_aff" type="primary" size="small" @click="add_two">下一步</el-button>
            <el-button v-if="this.istype == 2" class="btn_aff" type="primary" size="small" @click="add_affirm">提交</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入axios

  export default {
    data() {
      return {
        istype:1,
        kh_name:"",
        value2:"",
        pr_value:"",
        select_3:[],
        value3:"",
        select_4:[],
        value4:"",
        value5:"",
        value6:"",
        value7:"",
        value8:"",
        value9:"",
        value10:"",
        value11:"",
        value12:"",
        value13:"",
        value14:"",
        value15:"",
        yn1:"",
        yn2:"",
        yn3:"",
        yn4:"",
        yn5:"",
        yn6:"",
        yn7:"",
        yn8:"",
        yn9:"",
        yn10:"",
        yn11:"",
        industry: [{
          value: '选项1',
          label: 'A 农、林、牧、渔业'
        }, {
          value: '选项2',
          label: 'B 采矿业'
        }, {
          value: '选项3',
          label: 'C 制造业'
        },{
            value: '选项7',
            label: 'D 电力、热力、燃气及水生产和供应业'
          }, {
            value: '选项8',
            label: 'E 建筑业'
          }, {
            value: '选项9',
            label: 'F 批发和零售业'
          },
          {
            value: '选项10',
            label: 'G 交通运输、仓储和邮政业'
          }, {
            value: '选项11',
            label: 'H 住宿和餐饮业'
          }, {
            value: '选项12',
            label: 'I 信息传输、软件和信息技术服务业'
          },
          {
            value: '选项13',
            label: 'J 金融业'
          }, {
            value: '选项14',
            label: 'K 房地产业'
          }, {
            value: '选项15',
            label: 'L 租赁和商务服务业'
          }, {
            value: '选项16',
            label: 'M 科学研究和技术服务业'
          },
          {
            value: '选项17',
            label: 'N 水利、环境和公共设施管理业'
          }, {
            value: '选项18',
            label: 'O 居民服务、修理和其他服务业'
          }, {
            value: '选项19',
            label: 'P 教育'
          },
          {
            value: '选项20',
            label: 'Q 卫生和社会工作'
          }, {
            value: '选项21',
            label: 'R 文化、体育和娱乐业'
          }, {
            value: '选项22',
            label: 'S 公共管理、社会保障和社会组织'
          }],
        province: [{
          value: '北京市',
          label: '北京市',
        }, {
          value: '天津市',
          label: '天津市'
        }, {
          value: '河北省',
          label: '河北省',
        },
          {
            value: '山西省',
            label: '山西省'
          }, {
            value: '内蒙古自治区',
            label: '内蒙古自治区'
          }, {
            value: '辽宁省',
            label: '辽宁省'
          }, {
            value: '吉林省',
            label: '吉林省'
          }, {
            value: '黑龙江省',
            label: '黑龙江省'
          }, {
            value: '上海市',
            label: '上海市'
          }, {
            value: '江苏省',
            label: '江苏省'
          }, {
            value: '浙江省',
            label: '浙江省'
          },
          {
            value: '安徽省',
            label: '安徽省'
          }, {
            value: '福建省',
            label: '福建省'
          }, {
            value: '江西省',
            label: '江西省'
          }, {
            value: '山东省',
            label: '山东省'
          }, {
            value: '河南省',
            label: '河南省'
          }, {
            value: '湖北省',
            label: '湖北省'
          }, {
            value: '湖南省',
            label: '湖南省'
          }, {
            value: '广东省',
            label: '广东省'
          }, {
            value: '广西壮族自治区',
            label: '广西壮族自治区'
          }, {
            value: '海南省',
            label: '海南省'
          }, {
            value: '四川省',
            label: '四川省'
          }, {
            value: '贵州省',
            label: '贵州省'
          }, {
            value: '云南省',
            label: '云南省'
          }, {
            value: '重庆市',
            label: '重庆市'
          }, {
            value: '西藏自治区',
            label: '西藏自治区'
          }, {
            value: '甘肃省',
            label: '甘肃省'
          }, {
            value: '青海省',
            label: '青海省'
          }, {
            value: '宁夏回族自治区',
            label: '宁夏回族自治区'
          }, {
            value: '新疆维吾尔自治区',
            label: '新疆维吾尔自治区'
          }, {
            value: '香港特别行政区',
            label: '香港特别行政区'
          }, {
            value: '澳门特别行政区',
            label: '澳门特别行政区'
          }, {
            value: '台湾省',
            label: '台湾省'
          }],
        select_6: [{
          value: '北京市',
          label: '北京市',
        }, {
          value: '天津市',
          label: '天津市'
        }, {
          value: '河北省',
          label: '河北省',
        },
          {
            value: '山西省',
            label: '山西省'
          }, {
            value: '内蒙古自治区',
            label: '内蒙古自治区'
          }, {
            value: '辽宁省',
            label: '辽宁省'
          }, {
            value: '吉林省',
            label: '吉林省'
          }, {
            value: '黑龙江省',
            label: '黑龙江省'
          }, {
            value: '上海市',
            label: '上海市'
          }, {
            value: '江苏省',
            label: '江苏省'
          }, {
            value: '浙江省',
            label: '浙江省'
          },
          {
            value: '安徽省',
            label: '安徽省'
          }, {
            value: '福建省',
            label: '福建省'
          }, {
            value: '江西省',
            label: '江西省'
          }, {
            value: '山东省',
            label: '山东省'
          }, {
            value: '河南省',
            label: '河南省'
          }, {
            value: '湖北省',
            label: '湖北省'
          }, {
            value: '湖南省',
            label: '湖南省'
          }, {
            value: '广东省',
            label: '广东省'
          }, {
            value: '广西壮族自治区',
            label: '广西壮族自治区'
          }, {
            value: '海南省',
            label: '海南省'
          }, {
            value: '四川省',
            label: '四川省'
          }, {
            value: '贵州省',
            label: '贵州省'
          }, {
            value: '云南省',
            label: '云南省'
          }, {
            value: '重庆市',
            label: '重庆市'
          }, {
            value: '西藏自治区',
            label: '西藏自治区'
          }, {
            value: '甘肃省',
            label: '甘肃省'
          }, {
            value: '青海省',
            label: '青海省'
          }, {
            value: '宁夏回族自治区',
            label: '宁夏回族自治区'
          }, {
            value: '新疆维吾尔自治区',
            label: '新疆维吾尔自治区'
          }, {
            value: '香港特别行政区',
            label: '香港特别行政区'
          }, {
            value: '澳门特别行政区',
            label: '澳门特别行政区'
          }, {
            value: '台湾省',
            label: '台湾省'
          }],
        select_5:[{
          value: '直供电',
          label: '直供电'
        },{
          value:'趸售',
          label: '趸售'
        }],
       select_7:[{
         value: '大工业',
         label: '大工业'
       },{
         value:'中小型工业',
         label: '中小型工业'
       },{
         value: '一般工商业',
         label: '一般工商业'
       },{
         value:'其他',
         label: '其他'
       }],
        select_9:[{
          value: '自己',
          label: '自己'
        },{
          value:'电力公司',
          label: '电力公司'
        },{
          value: '政府',
          label: '政府'
        },{
          value:'第三方投资',
          label: '第三方投资'
        }],
        select_10:[{
          value: '0-99人',
          label: '0-99人'
        },{
          value:'200-299人',
          label: '200-299人'
        },{
          value: '300-399人',
          label: '300-399人'
        },{
          value:'400人以上',
          label: '400人以上'
        }],
        select_11:[{
          value: '合资',
          label: '合资'
        },{
          value:'独资',
          label: '独资'
        },{
          value: '国有',
          label: '国有'
        },{
          value:'私营',
          label: '私营'
        },{
          value:'全民所有制',
          label: '全民所有制'
        },{
          value: '集体所有制',
          label: '集体所有制'
        },
          {
          value:'股份制',
          label: '股份制'
        }],
        yn_1:[{
          value: '非居民照明',
          label: '非居民照明'
        },{
          value:'工业用电',
          label: '工业用电'
        },{
          value: '一般工商业用电',
          label: '一般工商业用电'
        },{
          value:'其他',
          label: '其他'
        }],
        yn_3:[{
          value: '10kV',
          label: '10kV'
        },{
          value:'35kV',
          label: '35kV'
        },{
          value: '110kV',
          label: '110kV'
        },{
          value:'220kV',
          label: '220kV'
        }],
        yn_4:[{
          value: '工业用电',
          label: '工业用电'
        },{
          value:'商业用电',
          label: '商业用电'
        },{
          value: '照明用电',
          label: '照明用电'
        },{
          value:'其他',
          label: '其他'
        }],
        yn_8:[{
          value: '优',
          label: '优'
        },{
          value:'良',
          label: '良'
        },{
          value: '中',
          label: '中'
        },{
          value:'差',
          label: '差'
        }],
        yn_9:[{
          value: '年度常规交易',
          label: '年度常规交易'
        },{
          value:'单独富余电量交易',
          label: '单独富余电量交易'
        },{
          value: '单独自备替代',
          label: '单独自备替代'
        },{
          value:'电能替代',
          label: '电能替代'
        },{
          value:'长期战略协议',
          label: '长期战略协议'
        }],
      }

    },
    // 映射store数据
    computed: {

    },
    methods:{
      add_cancel(){ //返回取消按钮
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
      add_affirm(){ //确认按钮
        this.$router.push('/Customer/addAffirm');
      },
      add_one(){
        this.istype = 1;
      },
      add_two(){

        this.istype = 2;
      }
    },
    //生命周期钩子函数，进入页面显示之前获取数据到store
    created() {
    }
  }
</script>

<style scoped>
  .marterial{
    width: 100%;
    height: 100vh;
    overflow: auto;
    background-color: #f0f1f2;
  }

  .ma_title{
    width: 100%;
    height: 44px;
    position: fixed;
    top: 0px;
    z-index: 999;
    background-color: #fff;
    border-bottom: 1px solid #ececec;
  }
  .ma_title p{
    display: inline-block;
    margin: 0px;
    padding: 13px;
    cursor: pointer;
    color:rgba(63,63,63,1);
    vertical-align: middle;
  }

  .ma_title p i{
    width: 9px;
    height: 15px;
    margin-right: 8px;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    top: -2px;
    left: 0px;
    /*background:url("../../assets/aImg/back.png") center no-repeat ;*/
    background-size: 100% 100%;
  }
  .ma_content{
    width: calc(100% - 30px);
    margin: 60px auto;
    margin-bottom: 30px;
    min-height: calc(100vh - 90px);
    background-color: #fff;
  }



  .list_module{
    width: calc(100%);
    margin: 10px auto;
    padding-bottom: 20px;
  }
  .list_module_title{
    width: 100%;
    height: 70px;
    line-height: 50px;
    text-align:left;

    background-color: #fcfcfc;
    border-bottom: 1px solid rgba(240,241,242,1);
  }
  .title_ico_div{
    width: 300px;
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
    width: 70px;
    height: 30px;
    line-height: 30px;
    float: left;
    display: block;
    color: #78797B;
    font-size: 12px;
    text-align: center;
    margin-top: 2px;
  }
  .text_div span:nth-child(1){
    margin-right: 140px;
  }

.ico_div div{float: left}
  .ico{
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin: 0 auto;
    border-radius: 50%;
    background-color:#8DBADE ;
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
    color: #BDBDBD!important;
  }
  .ico_border{
    width: 190px;
    height: 4px;
    margin-top: 10px;
    background-color: rgba(223,223,223,1);
  }

  .list_con{
    width: calc(100% - 40px);
    height: auto;
    overflow: auto;
  }
.list_con_input{
  width: 50%;
  float: left;
  height: 36px;
  margin-top: 20px;
}
  .list_con_input p{
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
  .list_con_input p span{
   color: red;
    font-size: 14px;
  }
  .list_con_input .input_div{
    float: left;
    max-width: 280px;
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
</style>
