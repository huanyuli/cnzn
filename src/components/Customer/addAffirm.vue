<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <p @click="aff_cancel"><i></i>创建成功</p>
      </div>
      <div class="ma_content">
        <div class="cont_div">
          <!--<img src="../../assets/aImg/success.png" alt="">-->
          <p>创建成功</p>
          <div class="cont_btn"><el-button @click="aff_add" type="primary">继续创建客户</el-button></div>
          <div class="text_btn"><el-button @click="aff_details" type="text">查看客户详情</el-button></div>
          <div class="text_btn"><el-button @click="aff_list" type="text">返回客户资料列表</el-button></div>
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

      }

    },
    // 映射store数据
    computed: {

    },
    methods:{
      aff_cancel(){ //返回取消按钮
        this.$router.go(-1);
      },
      aff_list(){ //返回客户资料列表
        this.$router.push('/Customer/material');
      },
      aff_details(){ //查看用户详情
        this.$router.push('/Customer/details');
      },
      aff_add(){ //继续创建客户
        this.$router.push('/Customer/add');
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
    min-height: calc(100vh - 140px);
    background-color: #fff;
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
