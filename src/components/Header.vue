<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light">
      <div class="container">
        <a class="navbar-brand" style="font-size: 30px;" href="/#/">JewelrySource</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="oi oi-menu"></span>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a href="/#/" class="nav-link">首页</a>
            </li>
            <li class="nav-item" v-if="$store.state.is_login">
              <a href="/#/ShoppingCart" class="nav-link">购物车</a>
            </li>
            <li class="nav-item" v-if="$store.state.is_login">
              <a href="/#/Order" class="nav-link">订单</a>
            </li>
            <li class="nav-item" v-if="$store.state.is_login">
              <a href="/#/PersonInfo" class="nav-link">我的</a>
            </li>
            <li class="nav-item" @click="toLogin()" v-if="$store.state.is_login">
              <a class="nav-link">退出</a>
            </li>
            <li class="nav-item" v-if="!$store.state.is_login">
              <a href="/?#/Login" class="nav-link">登录</a>
            </li>
            <li class="nav-item" v-if="!$store.state.is_login">
              <a href="/?#/Register" class="nav-link">注册</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapActions } from "vuex";
export default {
  name: "Heaer",
  created() {
    this.isLogin();
  },
  methods: {
    ...mapActions(["isLogin", "signOut"]),
    toLogin() {
      // 退出转登录
      this.signOut();
      swal({
        title: "提 示",
        icon: "info",
        text: "成功退出",
        buttons: false,
        timer: 1000
      });
      this.$router.push("/Login");
    }
  },
  store
};
</script>

<style scoped>
a {
  font-size: 17px;
  font-weight: 200;
}
.navbar {
  background-color: #000;
}
</style>
