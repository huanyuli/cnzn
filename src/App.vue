<template>
	<div id="app" @click="clicked">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App',
    data (){
      return {
        lTime: new Date().getTime(), // 最后一次点击的时间
//        ctTime: new Date().getTime(), //当前时间
        tOut: 30 * 60 * 1000,   //超时时间30min
        token_s:""
      }
    },
    mounted () {
      window.setInterval(this.tTime, 1000)
    },
    methods:{
      clicked () {
        this.lTime = new Date().getTime()  //当界面被点击更新点击时间
      },
      tTime() {
     //   this.cTime = new Date().getTime()
        if ((new Date().getTime() - this.lTime) > this.tOut) {
          this.token_s = localStorage.getItem('adminToken') || '';
          if( this.token_s != ""){
            // 退出登录
            window.localStorage.clear()
            this.$router.push('/login');
            this.$message({
              message: '登录超时，请重新登录',
              type: 'warning'
            });
          }
        }
      }
    }

	}
</script>

<style>
	#app {
    min-width: 1200px;
		background-color: #fff;
		font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		height: 100%;
	}

</style>
