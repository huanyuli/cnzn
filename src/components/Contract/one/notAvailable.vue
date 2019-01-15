<template>
  <div>
    <div class="marterial">

      <div class="ma_content">
        <div class="cont_div">
          <img src="../../../assets/aImg/notAvailable.png" alt="">
          <p>暂无合同</p>
          <div class="cont_btn"><el-button @click="dialogTableVisible = true" type="primary">创建合同</el-button></div>
          <!--<div class="wi_btn"><el-button @click="aff_lead" plain>导入合同</el-button></div>-->
        </div>
      </div>
    </div>
    <!--<router-view></router-view>-->
    <el-dialog title="新增合同"  :visible.sync="dialogTableVisible">
      <div class='add_div'>
        <div class='add_div_one'>
          <div class='one_con'>
            <div class="one_con_img">
              <div v-if="this.one_img == 1" class="one_img"></div>
              <div v-if="this.one_img == 2" @click="one_click" class="one_imgs"></div>
              <p>标准合同</p>
            </div>
            <div class="one_con_img">
              <div v-if="this.one_img == 1" @click="two_click" class="two_img"></div>
              <div v-if="this.one_img == 2" class="two_imgs"></div>
              <p>自定义合同</p>
            </div>

          </div>
        </div>
        <div class='add_div_two' slot="footer" >
          <div class='cont_btn' ><el-button @click="add_contract" type='primary'>创建合同</el-button></div>
          <div class='wi_btn'><el-button plain @click="dialogTableVisible = false">取消</el-button></div>
        </div>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  // 引入axios

  export default {
    data() {
      return {
        one_img:1,
        dialogTableVisible:false
      }

    },
// 映射store数据
    computed: {

    },
    methods: {
      ret_add(){  //返回
        this.$router.push('/Contract/sellElectric');
      },
      one_click(){
        this.one_img = 1

      },
      two_click(){
        this.one_img = 2

      },
      add_contract(){ //创建合同
        this.bus.add_contractType = this.one_img
        this.dialogTableVisible = false;
        this.$router.push('/Contract/add');
      },

      aff_lead(){ //导入合同
//        this.$router.push('/Customer/details');
      },
      aff_add(){ //创建合同
        this.$router.push('/Contract/add');
      },



    },
//生命周期钩子函数，进入页面显示之前获取数据到store
    created() {


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
  /*** 弹窗 ***/

  .add_div{
    background-color: white;
  }
  .add_div_one{
    width: 100%;
    height: 250px;
    background:rgba(73,138,243,1);
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
    margin: 25px auto;
  }
  .cont_btn{
    width: 100px;
    margin: 10px auto;
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
    margin: 0px auto;
  }
  .wi_btn button{
    width: 100%;
    font-size:14px;
    margin-bottom: 10px;
    color:rgba(150,150,150,1);
    background:#fff;
  }
  /***弹窗结束**/

</style>
<style>
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
</style>
