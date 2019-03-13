<template>
  <div class="login">
    <!--<div class="login_title">-->
      <!--<img class="icon" src="../../assets/aImg/main_logo.png" alt="">-->
      <!--<p>四川川能智网</p>-->
    <!--</div>-->
    <div class="login_form_div">
      <div class="login_div_top">售电云平台</div>
      <div class="login_div_right">
        <div class="div_row_title">
          <img class="icon" src="../../assets/aImg/div_row_title_img.png" alt="">
          <!--<span></span>-->
        </div>
        <!--   @submit.native.prevent  解决了页面第一次点击enter键时进行刷新的问题  -->
        <el-form :model="ruleForm"  :rules="rules" ref="ruleForm"   label-width="50px" @submit.native.prevent class="demo-ruleForm">
          <div class="div_row">
            <div class="login_input" >
              <!--<i class="el-icon-name"></i>-->
              <div class="item_div">
                <el-form-item label="账号"  prop="vue_1">
                  <el-input style="width: 72%" autofocus @focus="login_focus(1)" @blur="login_blur" v-model="ruleForm.vue_1" placeholder="请输入用户名"></el-input>
                </el-form-item>
              </div>
            </div>
          </div>
          <div class="div_row">
            <div class="login_input">
              <!--<i class="el-icon-psd"></i>-->
              <div class="item_div">
                <el-form-item label="密码"  prop="vue_2">
                  <el-input style="width: 72%" type="password" @focus="login_focus(2)" @blur="login_blur" v-model="ruleForm.vue_2" placeholder="请输入密码"></el-input>
                </el-form-item>
              </div>
            </div>
          </div>
          <div class="div_row">
            <div class="login_input" style="height: 35px">
              <!--<i class="el-icon-psd"></i>-->
              <div class="item_div">
                <el-checkbox style="margin-left: 50px" v-model="checked">记住密码</el-checkbox>
              </div>
            </div>
          </div>

          <div class="div_row">
            <div class="btn login_btn">
              <el-button @click="add_bj" native-type="submit" style="width: 100%"  type='primary'>登  录</el-button>
              <!--<el-button @click="add_bj"  native-type="submit" style="width: 100%" @keyup.enter.native="onSubmit"  type='primary'>登  录</el-button>-->
            </div>
          </div>
          <div class="div_row" style="margin-top: 30px">
            <div class="div_bottom">智网在线</div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入axios
  import ajax_list from '../../api/logins'
export default {

    data() {

        return {
          click_home:0,
          checked:false,
          from_list:{
            userInfo:{},
            menuList:{},
            token:""
          },

          ruleForm:{
            vue_1:"",
            vue_2:""
          },
          rules:{
            vue_1:[
              { required: true, message: '请输入用户账号', trigger: 'blur' },
            ],
            vue_2:[
              { required: true, message: '请输入登录密码', trigger: 'blur' },
            ],
          },
        }
    },

    methods: {
      login_focus(type){
        this.click_home = type
      },
      login_blur(){
        this.click_home = 0
      },
      add_bj(){
        this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            const self = this;
            //判断复选框是否被勾选 勾选则调用配置cookie方法
            if (self.checked == true) {
             // console.log("checked == true");
              //传入账号名，密码，和保存天数3个参数
              self.setCookie(self.ruleForm.vue_1, self.ruleForm.vue_2, 7);
            }else {
              //console.log("清空Cookie");
              //清空Cookie
              self.clearCookie();
            }

            var _temp_data ="{'loginName':'"+ self.ruleForm.vue_1 +"','password':'"+ self.ruleForm.vue_2 +"'}"
            ajax_list.userLoginService(_temp_data, res => {
              this.$emit('login-success', res);
            }, (res) => {
                if(res.status == 200){
                  this.from_list = res.body
                  window.localStorage.setItem('adminToken',this.from_list.token)
                  window.localStorage.setItem('adminSelfId',this.from_list.userInfo.id)
                  var _temp_user = JSON.stringify(this.from_list.userInfo);
                  window.localStorage.setItem('userInfo',_temp_user)
                  var _temp_menuList = JSON.stringify(this.from_list.menuList);
                  window.localStorage.setItem('menuList',_temp_menuList)
                  this.$router.push('/main');
                }else{
                  this.$message({
                    type: 'warning',
                    message:res.message
                  });
                }


            });
            return true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //设置cookie
      setCookie(c_name, c_pwd, exdays) {
        var exdate = new Date(); //获取时间
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
        //字符串拼接cookie
        window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
      },
      //读取cookie
      getCookie: function() {
        //  console.log(document.cookie.length)
        if (document.cookie.length > 0) {
              this.checked = true
          var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
          for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('='); //再次切割
            //判断查找相对应的值
            if (arr2[0] == 'userName') {
              this.ruleForm.vue_1 = arr2[1]; //保存到保存数据的地方
            } else if (arr2[0] == 'userPwd') {
              this.ruleForm.vue_2 = arr2[1];
            }
          }
        }
      },
      //清除cookie
      clearCookie: function() {
        this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
      }

    },
    created(){
      this.getCookie();
    }
}
</script>
<style scoped>
.login{
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("../../assets/aImg/main_logo2.png") no-repeat center;
  background-size:100%;
}
.login_title{
  width: 100%;
  height: 50px;
  position: absolute;
  top: 10px;
  left: 0;
}
.login_title img{
  float: left;
  margin-left: 50px;
  margin-right: 18px;
  width: 34px;
  height: 34px;
  padding-top: 8px;
}
.login_title p{
 margin: 0;
  padding: 0;
  font-size:24px;
  font-weight:400;
  line-height: 50px;
  color:rgba(255,255,255,1);
}
  .login_form_div{
    width:300px;
    height: 450px;
    position:fixed ;
    top:50%;
    right: 10%;
    margin-top: -225px;
    margin-left: 0;
  }
  .login_div_top{
    font-size:26px;
    font-weight:bold;
    text-align: center;
    letter-spacing:20px;
    color:rgba(255,255,255,1);
    line-height:70px;
  }
  .login_div_right{
    width:100%;
    height: 370px;
    margin-top: 10px;
    background:rgba(255,239,239,1);
    box-shadow:0px 15px 27px 0px rgba(79,78,78,0.26);
    opacity:0.95;
    border-radius:10px;
  }
  .div_row_title{
    width: 100%;
    padding-top: 20px;
  }
  .div_row_title p{
    text-align: center;
    font-size:30px;
    font-weight:bold;
    margin: 14px 0;
    color:rgba(39,38,54,1);
  }
.div_row_title span{
  width: 120px;
  margin: 0 auto;
  display: block;
  height: 4px;
  background-color: #5D88F7;
}
.div_row_title img{
  width: 180px;
  height: 45px;
  display: table-cell;
  margin: 0 auto;
}
.div_row{
  margin-top: 20px;
}

.div_bottom{
  width: 70%;
  margin: 0px auto;
  background:rgba(253,241,241,1);
  border-top:1px solid rgba(232,232,232,1);
  padding-top: 10px;
  font-size:14px;
  letter-spacing: 8px;
  font-weight:400;
  text-align: center;
  color:rgba(200,198,198,1);
}
  .login_input{
    width: 80%;
    height: 40px;
    margin: 0 auto;
    /*border-bottom: 2px solid #CBCBCB;*/
  }
  .login_input .el-icon-name {
    width: 20px;
    height: 30px;
    margin: 5px 0px;
    background: url("../../assets/aImg/el-icon-name.png") no-repeat center;
    background-size: 100%;
  }
.login_input .el-icon-psd{
  width: 20px;
  height: 30px;
  margin: 5px 0px;
  background: url("../../assets/aImg/el-icon-psd.png") no-repeat center;
  background-size: 100%;
  }
.click_login_input{
  border-bottom: 2px solid #5D88F7;
}
.click_login_input .el-icon-name {
  background: url("../../assets/aImg/el-icon-names.png") no-repeat center;
  background-size: 100%;
}
.click_login_input .el-icon-psd{
  background: url("../../assets/aImg/el-icon-psds.png") no-repeat center;
  background-size: 100%;

}
  .item_div{
    width: calc(100%);
    float: right;
  }

  .btn{
    margin: 0 auto;
    width: 70%;
  }
</style>
<style>
  .login_input .el-form-item__content{
    margin-left: 0px!important;
  }
  .login_input .el-input__inner{
    border: 1px solid #d8dce5;
  }
  .login_input .el-form-item__error {
    color: #fa5555;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 100%;
    left: 50px;
  }
  .login_input .el-input {
    font-size: 12px;
  }
  .login_btn .el-button{
    letter-spacing: 8px;
  }
</style>
