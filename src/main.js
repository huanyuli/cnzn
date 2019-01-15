// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-polyfill'
import Vue from 'vue'
// import Es6Promise from 'es6-promise'
// Es6Promise.polyfill()
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

import router from './router'
import VueRouter from 'vue-router'
// import store from './store'
import axios from 'axios'
import Print from 'vue-print-nb'
// import qs from 'qs'
import App from './App'
import bus from './utils/bus.vue'
import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.min.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/ueditor.parse.min.js'

Vue.prototype.HOST = process.env.API_ROOT;
Vue.prototype.bus = bus;
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Print); //注册
Vue.prototype.axios = axios;
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// Vue.prototype.$qs = qs;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requireAuth)){ // 判断该路由是否需要登录权限
//     // console.log(!localStorage.getItem('adminToken'))
//     if (!localStorage.getItem('adminToken')) { // 判断当前的token是否存在
//       next({
//         path: '/login',
//         // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }else{
//       next();
//     }
//   }else{
//     next();
//   }
// });
