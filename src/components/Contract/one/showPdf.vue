<template>
  <div>
    <div class="marterial pdf_div">
      <div class="ma_title">
        <div class="ma_title_left" @click="ret_add">
          <i class="el-icon-arrow-left"></i>
          <p>合同详情</p>
        </div>
        <div class="ma_right">
          <el-button size="small" plain v-if="show_map(25) == 25"  @click="dele_deta" >删除</el-button>
        </div>
      </div>
      <div class="ma_content">
        <iframe class="iframe_div" :src="'static/pdf/web/viewer.html?file=' + encodeURIComponent('http://39.98.43.90/downloads?fileId='+ this.one.id)" frameborder="0"></iframe>
      </div>
    </div>
    <!--<router-view></router-view>-->
  </div>

</template>

<script>
  // 引入axios
  import add_ajax from '../../../api/contract'
  export default {
    data() {
      return {
        one: {
          id: 1,
          fid:1,
        },
        menuList:{}

      }
    },
// 映射store数据
    computed: {},
    methods: {
      ret_add(){
        this.$router.go(-1);
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
      dele_deta(){  //删除
        this.fromdata = "{'id':" + this.one.fid + "}"
        add_ajax.contractDeleteService(this.fromdata, res => {  //
          this.$emit('login-success', res);
        }, (res) => {
          if(res.status == 200){
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.$router.push('/Contract/sellElectric');
          }
        });
      },
    },
//生命周期钩子函数，进入页面显示之前获取数据到store
    created() {
//      console.log(this.$route.params.one)
      this.one.id = this.$route.params.one
      this.one.fid = this.$route.params.two
//      this.one.type = this.$route.params.two
//      this.find_date()
      this.menuList = JSON.parse(localStorage.getItem('menuList'));


    }
  }

</script>

<style scoped>
  .input_div .el-input__icon {
    line-height: 30px !important;
  }

  p {
    margin: 0px;
    padding: 0px;
  }

  .marterial {
    width: 100%;
    min-height: calc(100vh - 51px - 28px);
    background-color: white;
    border: 1px solid rgba(229, 229, 229, 1);
    overflow: -webkit-paged-y;
  }

  .ma_title {
    width: 100%;
    height: 40px;
    /*background-color: #F5F6F7;*/
    border-bottom: 1px solid rgba(229, 229, 229, 1);
  }

  .ma_title_left {
    padding-right: 10px;
    float: left;
    cursor: pointer;
  }

  .ma_title i {
    float: left;
    width: 9px;
    height: 15px;
    color: #0077de;
    font-weight: 800;
    margin-top: 12px;
    margin-left: 10px;
  }

  .ma_title p {
    font-size: 14px;
    height: 40px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    display: inline-block;
    line-height: 40px;
    float: left;
    margin-left: 10px;
  }
  .pdf_div .ma_right {
    width: calc(80px * 4);
    float: right;
    margin-top: 5px;
  }
  .ma_content {
    width: 100%;
    /*min-height: calc(100vh - 61px - 51px - 16px);*/
    min-height: calc(100vh - 61px - 101px - 30px);

  }
  .iframe_divs{
    width: 100%;
    margin: 0 auto;
  }
  .iframe_div{
    width: 100%;
    height: calc(100vh - 130px);
  }

</style>

