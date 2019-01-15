<template>
  <div class="login">
    <div class="login_title">
      <img class="icon" src="../../assets/aImg/main_logo.png" alt="">
      <p>四川川能智网</p>
    </div>
    <div class="login_form_div">
      <div class="div_row_title">
        <p>后台管理系统</p>
        <span></span>
      </div>
      <el-form :model="ruleForm"  :rules="rules" ref="ruleForm"   label-width="80px" class="demo-ruleForm">
        <div class="div_row">
          <div class="login_input" :class="{click_login_input:this.click_home == 1}">
            <i class="el-icon-name"></i>
            <div class="item_div">
              <el-form-item label=""  prop="vue_1">
                <el-input @focus="login_focus(1)" @blur="login_blur" v-model="ruleForm.vue_1" placeholder="请输入用户名"></el-input>
              </el-form-item>
            </div>
          </div>
        </div>
        <div class="div_row">
          <div class="login_input" :class="{click_login_input:this.click_home == 2}">
            <i class="el-icon-psd"></i>
            <div class="item_div">
              <el-form-item label=""  prop="vue_2">
                <el-input type="password" @focus="login_focus(2)" @blur="login_blur" v-model="ruleForm.vue_2" placeholder="请输入密码"></el-input>
              </el-form-item>
            </div>
          </div>
        </div>
        <div class="div_row">
          <div class="btn">
            <el-button @click="add_bj"  style="width: 100%"  type='primary'>登  录</el-button>
          </div>
        </div>

      </el-form>
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
            var _temp_data ="{'loginName':'"+ this.ruleForm.vue_1 +"','password':'"+ this.ruleForm.vue_2 +"'}"
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
      }

    },
    created(){

    }
}
</script>
<style scoped>
.login{
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("../../assets/aImg/main_login.png") no-repeat center;
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
    width:calc(100% / 3.69);
    height:calc(100vh / 1.74);
    margin-top: calc(100vh / 4.69);
    margin-left: calc(100% / 5.9);
    background-color: white;
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
@media (min-height:300px) and (max-height:579px){
  .div_row_title{
    padding-top: 2px;
  }
  .div_row_title p[data-v-72680f5f] {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin: 5px 0;
    color: rgba(39,38,54,1);
  }
  .div_row_title span{
    width: 80px;
  }
  .login_input{
    margin: 25px auto!important;
  }
  .div_row{
    margin-top: 15px;
  }
}
@media (min-height:580px) and (max-height:639px){
  .div_row{
    margin-top: 30px;
  }
}
@media (min-height:640px) and (max-height:679px){
  .div_row{
    margin-top: 40px;
  }
}
@media (min-height:680px){
  .div_row{
    margin-top: 50px;
  }
}
  .login_input{
    width: 70%;
    height: 40px;
    margin: 0 auto;
    border-bottom: 2px solid #CBCBCB;
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
    width: calc(100% - 26px);
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
    border: 0px solid #d8dce5;
  }
</style>
