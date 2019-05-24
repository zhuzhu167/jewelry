// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// cookies插件
import VueCookies from 'vue-cookies';
Vue.use(VueCookies);
// 表单验证
var VueValidator = require("vue-validator");
Vue.use(VueValidator);
// iview插件
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
