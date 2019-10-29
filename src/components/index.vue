<template>
    <div>
      <div class="index_top">
        <img class="icon" src="../assets/aImg/main_logo.png" alt="">
        <!-- <span class="top_left_title">智网在线</span> -->
        <div class="top_right">
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
               <img src="../assets/user_logo.png" alt="">
                <p>{{this.userInfo.username}}</p>
                <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <!--<el-dropdown-item command="a">黄金糕</el-dropdown-item>-->
              <!--<el-dropdown-item command="b">狮子头</el-dropdown-item>-->
              <!--<el-dropdown-item command="c">螺蛳粉</el-dropdown-item>-->
              <!--<el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>-->
              <el-dropdown-item command="e" >退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="download-file">
          <a href="http://39.98.43.90/sys/file/2020年售电公司与电力用户购售电合同-模板190815(版本1).doc" target="_blank" download="2020年售电公司与电力用户购售电合同-模板190815(版本1).doc">下载合同模板</a>
        </div>
      </div>
      <div class="index_bottom">
        <div class="left">
          <div class="left_nav">
            <ul>
              <!--<li @click='dl_home' :class="{click_icon:this.click_home == 1}">-->
                <!--<i class="cn_icon home_icon"></i>-->
                <!--<span>企业中心</span>-->
              <!--</li>-->
              <li v-if="show_map(1) == 1 " @click='dl_khgl' :class="{click_icon:this.click_home == 2}">
                <i class="cn_icon cs_icon"></i>
                <span>客户管理</span></li>
              <li v-if="show_map(4) == 4 " @click='dl_ct' :class="{click_icon:this.click_home == 3}">
                <i class="cn_icon ct_icon"></i>
                <span>合同管理</span></li>
              <li v-if="show_map(9) == 9 " @click='dl_st' :class="{click_icon:this.click_home == 4}">
                <i class="cn_icon st_icon"></i>
                <span>报量环节</span></li>
              <li v-if="show_map(13) == 13 " @click='dl_es' :class="{click_icon:this.click_home == 5}">
                <i class="cn_icon es_icon"></i>
                <span>电量申报</span></li>
              <li v-if="show_map(13) == 13 " @click='dl_sq' :class="{click_icon:this.click_home == 7}">
                <i class="cn_icon bj_icon"></i>
                <span>售前报价</span></li>
              <li v-if="show_map(20) == 20 " @click='dl_set' :class="{click_icon:this.click_home == 6}">
                <i class="cn_icon set_icon"></i>
                <span>系统设置</span></li>
            </ul>
          </div>
        </div>
        <div class="cl_right">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
              click_home:1,
              one_img:1,
              userInfo:{},
              menuList:[],
            }
        },

        methods: {
          img_one(){
            this.one_img = 1;
          },
          img_two(){
            this.one_img = 2;
          },
          dl_home(){
              this.click_home = 1;
            $(".left_two").css("display","none");
                this.$router.push('/users/index');
                this.dl_css();

            },
          dl_khgl(){  //客户管理
            if(this.click_home != 2){
              this.click_home = 2;
              this.$router.push('/Customer');
              $(".left_two").css("display","none");
              this.dl_css()
            }else{

            }

          },
          dl_ct(){ //合同管理
           if(this.click_home != 3){
              this.click_home = 3;
              this.$router.push('/Contract');
              $(".left_two").css("display","none");
              this.dl_css()
           }

          },
          dl_st(){ //报量环节
            if(this.click_home != 4){
              this.click_home = 4;
              this.$router.push('/Offer');
//            this.img_src.isst = true;
              $(".left_two").css("display","none");
              this.dl_css()
            }
          },
          dl_es(){
            if(this.click_home != 5){
              this.click_home = 5;
              this.$router.push('/declare');
//            this.img_src.isst = true;
              $(".left_two").css("display","none");
              this.dl_css()
            }
          },
          // 售前报价
          dl_sq(){
            if(this.click_home != 7){
              this.click_home = 7;
              this.$router.push('/preSalePrice/index');
//            this.img_src.isst = true;
              $(".left_two").css("display","none");
              this.dl_css()
            }
          },

          dl_set(){
            if(this.click_home != 6){
              this.click_home = 6;
              this.$router.push('/sys');
//            this.img_src.isst = true;
              $(".left_two").css("display","none");
              this.dl_css()
            }
          },
          handleCommand(command) {
              if(command == "e"){
               //  console.log(localStorage.getItem('userInfo'))
               window.localStorage.clear()
                this.$router.push('/login');

              //  console.log(localStorage.getItem('userInfo'))
//                this.$message('click on item ' + command);
              }

          },
          dl_css(){
              var _temp = $(".left").outerWidth(true);
              $(".cl_right").css("cssText","width:calc(100% - "+ _temp +"px)!important");
          },
          show_map(ids){
            let obj = {};
              if(this.menuList != ""){
                obj =  this.menuList.find((item)=>{
                  return item.id === ids;
                });
              }
            if(obj != undefined){
              return obj.id
            }else{
              return ""
            }

          }
        },
        created(){


          if (!localStorage.getItem('adminToken')) { // 判断当前的token是否存在
            this.$router.push('/login');
          }else{
            this.userInfo = JSON.parse(localStorage.getItem('userInfo')) || '';
            this.menuList = JSON.parse(localStorage.getItem('menuList')) || '';
          }

          $(".left_two").css("display","none");
         var  _temp_me_id = 0
         var _temp_me = 0
          for (var i = 0; i < this.menuList.length; i++) {
            if(this.menuList[i].pid == -1){
              if(_temp_me == 0){
                _temp_me = 1
                _temp_me_id = this.menuList[i].id
              }
            }
          }
         if(_temp_me_id == 20){
           this.click_home = 6;
           this.$router.push('/sys');
           $(".left_two").css("display","none");
           this.dl_css()
         }else  if(_temp_me_id == 1){
           this.click_home = 2;
           this.$router.push('/Customer');
           $(".left_two").css("display","none");
           this.dl_css()
         }else  if(_temp_me_id == 4){
           this.click_home = 3;
           this.$router.push('/Contract');
           $(".left_two").css("display","none");
           this.dl_css()
         }else  if(_temp_me_id == 9){
           this.click_home = 4;
           this.$router.push('/Offer');
           $(".left_two").css("display","none");
           this.dl_css()
         }else  if(_temp_me_id == 13){
           this.click_home = 5;
           this.$router.push('/declare');
           $(".left_two").css("display","none");
           this.dl_css()
         }
        }
    }
</script>
<style scoped>

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button{
    -webkit-appearance: none !important;
    margin: 0;
  }

  .baca_color{
    background-color:rgba(245,246,247,1);
  }

  ul{
    padding: 0;
    margin: 0;
  }
  .index_top{
    width: 100%;
    height: 50px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 3px 0px rgba(176,176,176,0.5);
  }
  .index_top .icon {
    width:138px ;
    height: 32px;
    margin-top: 10px;
    margin-left: 20px;
    float: left;
  }
  .top_left_title{
    display: inline-block;
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:20px;
    margin-top: 17px;
    margin-left: 14px;
  }
  .top_right{
    max-width: 170px;
    height: 50px;
    float: right;
    margin-right: 100px;
    cursor: pointer;
  }
  .top_right img{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    float: left;
    margin-right: 10px;
    margin-top: 9px;
   display: inline-block;
  }
  .top_right p{
    text-align: center;
    display: inline-block;
    margin: 0px;
    padding: 0px;
    font-size:14px;
    font-weight:400;
    line-height: 50px;
    color:rgba(0,0,0,1);
    max-width: 100px;
    float: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }



  .index_bottom{
    width: 100%;
    overflow: auto;
    /*min-height: calc(100vh - 51px);*/
    position: relative;
    margin-top: 1px;
  }
.left{
    min-width: 140px;
    min-height: calc(100vh - 51px);
    height: 100%;
    float: left;
    background:rgba(59,79,114,1);
    position: absolute;
    top: 0px;
    left: 0px;
    /*background: -webkit-linear-gradient(#5BB0F7, #3787F4); !* Safari 5.1 - 6.0 *!*/
    /*background: -o-linear-gradient(#5BB0F7, #3787F4); !* Opera 11.1 - 12.0 *!*/
    /*background: -moz-linear-gradient(#5BB0F7, #3787F4); !* Firefox 3.6 - 15 *!*/
    /*background: linear-gradient(#5BB0F7, #3787F4); !* 标准的语法 *!*/
}
.cl_right{
  width: calc(100% - 140px);
  float: right;
  position: relative;
}
  .left_nav{
    width: 140px;
    float: left;

  }

.left_nav ul li{
  width: 140px;
  height: 24px;
  margin: 0px auto;
  padding: 20px 0px;
  list-style-type:none;
  text-align: center;
  cursor: pointer;
  position: relative;

}
.cn_icon{
  width: 20px;
  height: 18px;
  vertical-align: middle;
  display: inline-block;
  margin: 0px auto;
  list-style-type:none;
  text-align: center;
}
/*企业中心图标*/
.home_icon{
  background: url("../assets/aImg/home.png") center no-repeat;
}
  .left_nav ul li:hover .home_icon,.click_icon .home_icon{
  background: url("../assets/aImg/home__selected.png") center no-repeat!important;
}
/*客户管理图标*/
  .cs_icon{

    background: url("../assets/aImg/cs.png") center no-repeat;
  }
  .left_nav ul li:hover .cs_icon,.click_icon .cs_icon{
    background: url("../assets/aImg/cs_selected.png") center no-repeat!important;
  }

  /*合同管理图标*/
  .ct_icon{
    height: 17px!important;
    background: url("../assets/aImg/ct.png") center no-repeat;
  }
  .left_nav ul li:hover .ct_icon,.click_icon .ct_icon{
    background: url("../assets/aImg/ct__selected.png") center no-repeat!important;
  }

  /*电量申报图标*/
  .es_icon{
    width: 12px!important;
    height: 22px!important;
    background: url("../assets/aImg/es.png") center no-repeat;
  }
  .bj_icon{
    width: 20px!important;
    height: 22px!important;
    background: url("../assets/aImg/bj.png") center no-repeat;
  }
  .left_nav ul li:hover .bj_icon,.click_icon .bj_icon{
    background: url("../assets/aImg/bj_selected.png") center no-repeat!important;
  }
  .left_nav ul li:hover .es_icon,.click_icon .es_icon{
    background: url("../assets/aImg/es_selected.png") center no-repeat!important;
  }

  /*报量环节图标*/
  .st_icon{
    height: 21px!important;
    background: url("../assets/aImg/st.png") center no-repeat;
  }
  .left_nav ul li:hover .st_icon,.click_icon .st_icon{
    background: url("../assets/aImg/st_selected.png") center no-repeat!important;
  }


  /*系统设置图标*/
  .set_icon{
    height: 20px!important;
    background: url("../assets/aImg/set.png") center no-repeat;
  }
  .left_nav ul li:hover .set_icon,.click_icon .set_icon{
    background: url("../assets/aImg/set_selected.png") center no-repeat!important;
  }


  .left_nav ul li img{
    width: 20px;
    height: 20px;
    margin: 0px auto;
    list-style-type:none;
    text-align: center;
    cursor: pointer;
  }
  .left_nav ul li span{
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    margin-left: 14px;
    vertical-align: middle;
    color:rgba(255,255,255,1);
  }
  .left_nav ul li:hover{
    background:rgba(255,255,255,1);
  }


  .left_nav ul li:hover span{
    color:rgba(51,51,51,1);
    font-size: 14px;
  }
  .click_icon{
    background:rgba(255,255,255,1);
  }
  .click_icon span{
    color:rgba(51,51,51,1)!important;
    font-size: 14px;
  }
  .left_two_list img{
    width: 32px;
    height: 32px;
    float: left;
  }

  .list_right p{
    font-size:14px;
    color:rgba(69,69,69,1);
    line-height: 20px;
    margin: 0;
    padding: 0;
  }

  .list_right span{
    display: block;
    font-size:10px;
    line-height: 14px;
    font-family:PingFangSC-Regular;
    color:rgba(120,121,123,1);
  }
  .list_right_one p{
    line-height: 34px!important;
  }


  /*** 弹窗 ***/
  .add_frame{
      width: 100%;
      height: 100%;
      position: absolute;
      top:0;
      z-index: 999999;
      background-color: rgba(20, 20, 20, 0.42)
  }
  .add_div{
    width: 600px;
    height: 400px;
    position: absolute;
    top:50%;
    left:50%;
    margin-top: -200px;
    margin-left: -300px;
    background-color: white;
    border-radius:5px;
  }
  .add_div_one{
    width: 100%;
    height: 250px;
    background:rgba(73,138,243,1);
    border-radius:5px 5px 0px 0px;
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
    margin: 20px auto;
  }
  .one_con div{
    width: 50%;
    float: left;
    min-width: 130px;
  }
  .one_con div img{
    width: 130px;
    height: 130px;
    margin-left: 35px;
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
  .download-file {
    float: right;
    margin-right: 20px;
  }
  .download-file a {
    line-height: 50px;
    color: #000;
  }
</style>
<style>
  .top_right [class^=el-icon-]{
    float: left;
    margin-left: 10px;
    line-height: 50px;
  }
  .top_right .el-dropdown-menu{
    padding: 5px 5px!important;
  }
</style>
