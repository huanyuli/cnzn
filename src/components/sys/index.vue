<template>
  <div>
    <div class="left_two">
      <div v-if="show_map(21) == 21" @click='aa' class="left_two_list" :class="{click_list:this.click_index == 1}">
        <div class="list_right">
          <p>用户管理</p>
        </div>
      </div>
      <div v-if="show_map(22) == 22" @click='bb' class="left_two_list" :class="{click_list:this.click_index == 2}">
        <div class="list_right list_right_one">
          <p>角色管理</p>
        </div>
      </div>
    </div>
    <div class="right_two">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  export default {

    data() {

      return {
        click_index: 1,
        menuList:[],
      }
    },

    methods: {

      aa(){
        this.click_index = 1;
        this.$router.push('/sys/management');
      },
      bb(){
        this.click_index = 2;
        this.$router.push('/sys/role');
//        this.dl_css();
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
    created(){
      this.menuList = JSON.parse(localStorage.getItem('menuList')) || '';
      if(this.show_map(21) == 21){
        this.click_index =1;
        this.$router.push('/sys/management');
      }else if(this.show_map(21) != 21 && this.show_map(22) == 22){
        this.click_index = 2;
        this.$router.push('/sys/role');
      }


    }
  }
</script>
<style scoped>
  .baca_color {
    background-color: rgba(245, 246, 247, 1);
  }

  ul {
    padding: 0;
    margin: 0;
  }

  .left {
    min-width: 60px;
    min-height: calc(100vh - 51px);
    float: left;
    background: -webkit-linear-gradient(#5BB0F7, #3787F4); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#5BB0F7, #3787F4); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#5BB0F7, #3787F4); /* Firefox 3.6 - 15 */
    background: linear-gradient(#5BB0F7, #3787F4); /* 标准的语法 */
  }

  .left_nav ul li {
    width: 60px;
    height: 24px;
    margin: 14px auto;
    list-style-type: none;
    text-align: center;
    cursor: pointer;
    position: relative;
  }

  .left_nav ul li img {
    width: 24px;
    height: 24px;
    margin: 0px auto;
    list-style-type: none;
    text-align: center;
    cursor: pointer;
  }

  .left_nav ul li span {
    display: none;
    width: 68px;
    height: 32px;
    line-height: 32px;
    border-radius: 2px;
    text-align: center;
    background-color: #172021;
    font-size: 14px;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    right: -60px;
    top: -5px;
  }

  .left_nav ul li:hover span {
    display: block;
  }

  .left_two {
    /*display: none;*/
    width: 120px;
    height: 100%;
    min-height: calc(100vh - 51px);
    float: left;
    border-right: 1px solid #ececec;
    background-color: #fff;
    position: absolute;
    top: 0px;
    left: 0px;
  }

  .right_two {
    width: calc(100% - 121px - 30px);
    min-height: calc(100vh - 51px - 26px);
    padding: 13px 15px;
    background-color: #F5F7F9;
    float: right;
    overflow:hidden;
  }

  .left_two_list {
    width: 100%;
    height: calc(60px);
    cursor: pointer;
  }

  .left_two_list:hover {
    background: rgba(242, 245, 255, 1);
  }

  .left_two_list:hover p {
    color: rgba(0, 119, 221, 1);
  }

  .click_list {
    background: rgba(242, 245, 255, 1);
  }

  .click_list p {
    color: rgba(0, 119, 221, 1) !important;
  }

  .list_right {
    width: calc(100%) !important;
    float: right;
  }

  .list_right p {
    font-size: 14px;
    text-align: center;
    line-height: 60px;
    margin: 0;
    padding: 0;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }

</style>
