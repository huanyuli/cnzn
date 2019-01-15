<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <div class="ma_title_left" @click="ret_add">
          <i class="el-icon-arrow-left"></i>
          <p>创建客户</p>
        </div>
      </div>
      <div class="ma_content">
        <div class="cont_div">
          <img src="../../../assets/aImg/success.png" alt="">
          <p>创建成功</p>

          <div class="cont_btn"><el-button @click="aff_add" type="primary">继续创建客户</el-button></div>
          <div class="wi_btn"><el-button @click="aff_details" plain>查看客户详情</el-button></div>
          <div class="text_btn"><el-button @click="aff_list" type="text">返回客户资料列表</el-button></div>
        </div>
      </div>
    </div>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  // 引入axios

  export default {
    data() {
      return {
        succeed_id:"",  //id
      }

    },
// 映射store数据
    computed: {

    },
    methods: {
      ret_add(){  //返回
        this.$router.go(-1);
      },
      aff_list(){ //返回售电列表
        this.$router.push('/Customer/material');
      },
      aff_details(){ //查看详情
        this.$router.push({name:'CustomerDetails',params:{one:this.succeed_id,two:"未签约"}});
      },
      aff_add(){ //继续创建客户
        this.$router.push('/Customer/add');
      },
    },
//生命周期钩子函数，进入页面显示之前获取数据到store
    created() {
      this.succeed_id = this.$route.params.one
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

  .cont_div{
    width: 240px;
    padding: 50px;
    margin: 0 auto;

  }
  .cont_div img{
    width: 68px;
    height: 68px;
    margin-left: 86px;
    text-align: center;

  }
  .cont_div p{
    margin: 0px;
    padding: 0px;
    margin-top: 15px;
    font-size:20px;
    text-align: center;
    line-height: 28px;
    color:rgba(63,63,63,1);
  }
  .cont_btn{
    width: 100%;
    margin-top: 20px;
  }
  .cont_btn button{
    width: 100%;
    font-size:14px;
    margin-bottom: 10px;
    color:rgba(255,255,255,1);
    background:rgba(93,179,247,1);
  }
  .wi_btn{
    width: 100%;
    margin-top: 10px;
  }
  .wi_btn button{
    width: 100%;
    font-size:14px;
    margin-bottom: 10px;
    color:rgba(150,150,150,1);
    background:#fff;
  }
  .text_btn{
    text-align: center;
    font-size:14px;
    color:rgba(126,127,129,1);
  }
  .text_btn .el-button--text{
    font-size:14px;
    color:rgba(126,127,129,1);
  }

</style>
