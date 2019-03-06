<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <div class="ma_title_left" @click="aff_cancel">
          <i class="el-icon-arrow-left"></i>
          <p>客户详情</p>
        </div>
      </div>
      <div class="ma_content">
        <div class="top_title">
          <img class="title_ba" src="../../../assets/aImg/company.png" alt="">
          <img  class="title_type" v-if="this.one_type == '未签约'" src="../../../assets/aImg/kh_01.png" alt="">
          <img  class="title_type" v-if="this.one_type == '已签约'" src="../../../assets/aImg/kh_02.png" alt="">
          <img  class="title_type" v-if="this.one_type == '待续约'" src="../../../assets/aImg/kh_03.png" alt="">
        </div>
        <div class="top_name"><p>{{this.date_list.name}}<span>{{this.one_type}}</span></p></div>
        <div class="top_de"><span>{{this.date_list.industry}}</span><span>{{this.date_list.province}}</span><span>创建人：{{this.date_list.createUserName}}</span><span>创建日期：{{ get_date(this.date_list.createAt)}}</span></div>
        <div class="top_btn">
          <el-button size="mini" @click="deta_edit" plain>编辑</el-button>
          <el-button v-if="show_map(24) == 24" size="mini" @click="open2" plain>删除</el-button>
        </div>
        <div class="deta_div">
          <!--<div class="deta_div_title"><span>企业信息</span></div>-->
          <div class="deta_con">
            <div class="deta_con_title">
              <span>基础信息</span>
              <!--<p></p>-->
            </div>
            <div class="deta_con_p">
              <div><label>所属客户经理:</label><p>{{this.date_list.businessName}}</p></div>
              <div><label>企业名称:</label><p>{{this.date_list.name}}</p></div>
              <div><label>曾用名:</label><p>{{this.date_list.otherName}}</p></div>
              <div><label>企业简称:</label><p>{{this.date_list.companySimpleName}}</p></div>
              <div><label>用电单元名称:</label><p>{{this.date_list.powerUnit}}</p></div>
              <div><label>所属行业:</label><p>{{this.date_list.industry}}</p></div>
              <div><label>所在区域:</label><p>{{this.date_list.province}}</p></div>
              <div><label>行政区域:</label><p>{{this.date_list.city}}{{this.date_list.county}}</p></div>
              <div><label>用电类别:</label><p>{{this.date_list.usePowerType}}</p></div>
              <div><label>定价策略类型:</label><p>{{this.date_list.priceStrategy}}</p></div>

              <div><label>供电区域性质:</label><p>{{this.date_list.powerAreaNature}}</p></div>
              <div><label>所属省级电网:</label><p>{{this.date_list.provincePowerGrid}}</p></div>
              <div><label>客户类型:</label><p>{{this.date_list.customerType}}</p></div>

              <div><label>主要电源:</label><p>{{this.date_list.mainPower}}</p></div>
              <div><label>变电站的资产归属权:</label><p>{{this.date_list.powerStationAssetOwner}}</p></div>
              <div><label>企业规模:</label><p>{{this.date_list.companyScale}}</p></div>
              <div><label>企业性质:</label><p>{{this.date_list.companyNature}}</p></div>
              <div><label>用电负荷类型:</label><p>{{this.date_list.electricType}}</p></div>
              <div><label>售电结算单位:</label><p>{{this.date_list.saleSettlementCompany}}</p></div>
              <div><label>联系人:</label><p>{{this.date_list.contact}}</p></div>
              <div><label>联系人职务:</label><p>{{this.date_list.contactDuty}}</p></div>
              <div><label>联系人通讯地址:</label><p>{{this.date_list.contactAddress}}</p></div>
              <div><label>邮政编码:</label><p>{{this.date_list.contactZipCode}}</p></div>
              <div><label>办公电话:</label><p>{{this.date_list.contactNumber}}</p></div>
              <div><label>手机电话:</label><p>{{this.date_list.phone}}</p></div>
              <div><label>电子邮箱:</label><p>{{this.date_list.email}}</p></div>
              <div><label>传真:</label><p>{{this.date_list.contactFax}}</p></div>
              <div><label>网址:</label><p>{{this.date_list.contactWeb}}</p></div>
            </div>
          </div>
          <div class="deta_con">
            <div class="deta_con_title">
              <span>用能信息</span>
              <!--<p></p>-->
            </div>
            <div class="deta_con_p">
              <div><label>统一社会信用代码:</label><p>{{this.date_list.socialCreditCode}}</p></div>
              <div><label>企业法人:</label><p>{{this.date_list.representative}}</p></div>
              <div><label>注册地址:</label><p>{{this.date_list.registerAddress}}</p></div>
              <div><label>法定代表人姓名:</label><p>{{this.date_list.representativeName}}</p></div>
              <div><label>开户银行:</label><p>{{this.date_list.openBank}}</p></div>
              <div><label>开户名称:</label><p>{{this.date_list.openAcctName}}</p></div>
              <div><label>开户账号:</label><p>{{this.date_list.openAcctNo}}</p></div>
              <div><label>组织机构代码:</label><p>{{this.date_list.orgNo}}</p></div>
              <div><label>税务登记号:</label><p>{{this.date_list.taxNumber}}</p></div>
              <div><label>营业期限:</label><p>{{this.date_list.businessTerm}}</p></div>
              <div><label>负荷性质:</label><p>{{this.date_list.loadNature}}</p></div>
              <div><label>用电量:</label><p>{{this.date_list.useElectricity}}兆瓦时</p></div>
              <div><label>电压等级:</label><p>{{this.date_list.voltageLevel}}</p></div>
              <div><label>营销目录价格:</label><p>{{this.date_list.originalPowerPrice}}元/kWh</p></div>
              <div><label>报装容量:</label><p>{{this.date_list.applyCapacity}} kW</p></div>
              <div><label>签约电量:</label><p>{{this.date_list.signingElectricity}}兆瓦时</p></div>
              <div><label>履约情况:</label><p>{{this.date_list.performanceSituation}}</p></div>
              <div><label>交易类型:</label><p>{{this.date_list.transactionType}}</p></div>
              <div><label>用电单位:</label><p>{{this.date_list.useElectricityCompany}}</p></div>
              <div><label>用电户号:</label><p>{{this.date_list.usePowerNumber}}</p></div>
              <div><label>所属集团:</label><p>{{this.date_list.ownerGroup}}</p></div>
              <div><label>所属供电公司:</label><p>{{this.date_list.powerCompany}}</p></div>
              <div><label>总用电容量:</label><p>{{this.date_list.totalUsePowerAmount}}KW</p></div>
              <div><label>最大需量:</label><p>{{this.date_list.maxNeedElectric}}MVA</p></div>
              <div><label>用电地址:</label><p>{{this.date_list.powerAddress}}</p></div>
              <div><label>高耗能行业类别:</label><p>{{this.date_list.highEnergyCIndustry}}</p></div>
              <div><label>是否执行峰谷标志:</label><p>{{this.date_list.valleyFlag}}</p></div>
              <div><label>是否核定了输配:</label><p>{{this.date_list.checkTransFlag}}</p></div>
              <div><label>是否电能替代项目:</label><p>{{this.date_list.substitutionFlag}}</p></div>
            </div>
            <div class="deta_con_title">
              <span>变压器容量（用户号对应的变压器容量）(MVA)</span>
            </div>
            <div class="deta_con_p" v-for='(item,index) in this.date_list.transformerList'>
              <div><label>营销户号:</label><p>{{item.userNo}}</p></div>
              <div><label>营销用户名称:</label><p>{{item.userName}}</p></div>
              <div><label>变压器容量:</label><p>{{item.capacity}}</p></div>
              <div><label>计量点编号:</label><p>{{item.number}}</p></div>
              <div><label>计量点名称:</label><p>{{item.name}}</p></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  // 引入axios
  import ajax_list from '../../../api/customer '
  export default {
    data() {
      return {
        one_id:0,  //ID
        one_type:"",  //签约状态
        data_form:"",  //获取客户详情参数
        data_dele:"",  //删除客户详情参数

        date_list:"", //客户详情数据
        menuList:{}
    }

    },
    // 映射store数据
    computed: {

    },
    methods:{
        get_date(arr){
          var now = new Date(arr * 1000),
            y = now.getFullYear(),
            m = now.getMonth() + 1,
            d = now.getDate();
          return y + "." + (m < 10 ? "0" + m : m) + "." + (d < 10 ? "0" + d : d);
        },
      aff_cancel(){ //返回取消按钮
//        this.$router.go(-1);
        this.$router.push('/Customer/material');
      },
      deta_edit(){
        this.$router.push({name:'customer_edit',params:{one:this.one_id}});
      },
      open2() {
        this.$confirm('确定删除该企业信息?', '确认删除', {
          cancelButtonText: '取消',
          confirmButtonText: '确定',
          type: 'warning'
        }).then(() => {
          this.data_form = "{ 'id':"+ this.one_id +"}"
          ajax_list.customerDeleteService(this.data_form, res => {
            this.$emit('login-success', res);
          }, (res) => {
            if(res.status == 200){
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.$router.push('/Customer/material');
            }
          });
        }).catch(() => {
//          this.$message({
//            type: 'info',
//            message: '已取消删除'
//          });
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
    created() {
      this.menuList = JSON.parse(localStorage.getItem('menuList'));
      this.one_id = this.$route.params.one
      this.one_type = this.$route.params.two
      this.data_form = "{ 'id':"+ this.one_id +"}"
      ajax_list.customerDetailService(this.data_form, res => {
        this.$emit('login-success', res);
      }, (res) => {
        this.date_list = res.body;
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

  .ma_content{
    width: calc(100%);
    min-height: calc(100vh - 61px - 101px - 30px);
    background-color: #fff;
  }

  .top_title{
    width: 100%;
    height: 110px;
    text-align: center;
    /*background: url("../../assets/aImg/Group.png") center no-repeat;*/
    background-size: 100% 100%;
    position: relative;
  }
  .top_title .title_ba{
    width: 100%;
    height: 80px;
  }

  .top_title .title_type{
    width: 60px;
    height: 60px;
    position: absolute;
    top: 50px;
    left:50%;
    margin-left: -30px;
  }

  .top_name{
    width:100%;
    margin-top: 15px;
  }
  .top_name p{
    margin: 0;
    padding: 0;
    text-align: center;
    font-size:16px;
    color:rgba(63,63,63,1);
    line-height:18px;
    margin-bottom: 5px;
  }
  .top_name p span{
    font-size: 10px;
    display: inline-block;
    color: rgba(126,179,217,1);
    padding: 1px 2px 0px 2px;
    line-height: 13px;
    text-align: center;
    border-radius: 2px;
    margin-left: 8px;
    position: relative;
    top: -2px;
    border: 1px solid rgba(126,179,217,1);
  }
  .top_de{
    width: 100%;
    margin-top: 10px;
    text-align: center;
  }
  .top_de span{
    font-size:12px;
    color:rgba(144,144,144,1);
    line-height:17px;
    padding: 0 8px;
    border-left: 1px solid rgba(240,241,242,1);
  }
  .top_de span:nth-child(1){
    border-left: 0px solid rgba(240,241,242,1);
  }
  .deta_div{
    width: 90%;
    margin: 0 auto;
  }
  .deta_div_title{
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding: 10px 0px;
    border-bottom: 2px solid rgba(240,241,242,1);
    border-radius: 2px;
  }

  .deta_div_title span{
    font-size:14px;
    color:rgba(63,63,63,1);
    padding-bottom: 16.5px;
    padding-left: 2px;
    border-bottom: 2px solid rgba(93,179,247,1);
  }
  .deta_con{
    width: 96%;
    margin: 0 auto;
    margin-top: 10px;
  }
  .deta_con_title{
    width: 100%;
    height: 20px;
    margin: 10px auto;
    line-height: 20px;
  }
  .deta_con_title span{
    display: inline-block;
    font-size:14px;
    line-height: 20px;
    color:rgba(120,121,123,1);
  }
  .deta_con_title p{
    width: calc(100% - 70px);
    height: 2px;
    background:rgba(240,241,242,1);
    border-radius: 2px;
    float: right;
    font-size:14px;
    margin-top: 10px;
    color:rgba(63,63,63,1);
  }
  .deta_con_p{
    width: 100%;
    margin: 0 auto;
    overflow: auto;
    margin-top: 5px;
  }
  .deta_con_p div{
    width: calc(100% / 3);
    margin: 6px 0px;
    float: left;
  }
  .deta_con_p div label{
    width: calc(40% - 10px);
    float: left;
    text-align: right;
    font-size:12px;
    color:rgba(120,121,123,1);
  }
  .deta_con_p div p{
    width: 60%;
    float: right;
    text-align: left;
    font-size:12px;
    color:rgba(65,65,65,1);
  }
  @media screen and (max-width: 1430px) {
    .deta_con_p div label{
      width: calc(50% - 10px);
      float: left;
      text-align: right;
      font-size:12px;
      color:rgba(120,121,123,1);
    }
    .deta_con_p div p{
      width: 50%;
      float: right;
      text-align: left;
      font-size:12px;
      color:rgba(65,65,65,1);
    }
  }
  .top_btn{
    width: 100%;
    margin-top: 10px;
    text-align: center;
  }
</style>
