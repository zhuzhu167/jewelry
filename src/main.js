// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css';
import VueCookies from 'vue-cookies'; // Cookies插件
Vue.use(VueCookies);
import {
  Button,
  Table,
  Form,
  FormItem,
  Select,
  Option
} from 'iview';
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Form', Form);
Vue.component('FormItem', FormItem);
Vue.component('Select', Select);
Vue.component('Option', Option);
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (window.$cookies.get('accessToken') && window.$cookies.get('account')) {
      next();
    } else {
      next({
        path: '/Login',
        query: {
          redirect: to.fullPath
        } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
      swal({
        title: "提 示",
        icon: "error",
        timer: 1500,
        text: "请先登录"
      });
    }
  } else {
    next();
  }
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
