<template>
  <div class="container" style="-webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);">
    <div class="row">
      <div
        class="col-md-8 banner-sec"
        style="background: url(http://pry3timq7.bkt.clouddn.com/9.webp) no-repeat bottom;"
      ></div>
      <div class="col-md-4 register-sec">
        <h2 class="text-center" style="font-weight: lighter;">您好，新用户</h2>
        <form v-if="this.is_register_success==false" class="register-form" :model="formDate">
          <div class="form-group">
            <label for="exampleInputName1" class="text-uppercase">账 号</label>
            <input type="text" class="form-control" v-model="formDate.account">
          </div>
          <div class="form-group">
            <label for="exampleInputAddress1" class="text-uppercase">密 码</label>
            <input type="password" class="form-control" v-model="formDate.password">
          </div>
          <div class="form-group">
            <label for="exampleInputAddress2" class="text-uppercase">重新输入密码</label>
            <input type="password" class="form-control" v-model="formDate.re_password">
          </div>
          <div style="margin-top: 50px;">
            <button
              type="button"
              class="btn btn-primary btn-block btn-lg"
              style="font-weight: lighter;"
              @click="doRegister()"
            >注 册</button>
          </div>
        </form>
        <form v-if="this.is_register_success==true">
          <h3 class="text-center text-success" style="margin-top: 130px;">注册成功</h3>
          <div class="text-center" style="margin-top: 140px;font-weight: lighter;">
            <button
              class="btn btn-primary btn-block btn-lg"
              style="font-weight: lighter;"
              @click="toLogin()"
            >立刻登录</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapActions } from "vuex";
export default {
  name: "InputMess",
  data() {
    return {
      formDate: {
        account: "",
        password: "",
        re_password: ""
      },
      is_register_success: false // 是否注册成功
    };
  },
  methods: {
    ...mapActions(["Register"]),
    doRegister() {
      this.Register(this.formDate).then(result => {
        if (result) {
          this.is_register_success = true;
        }
      });
    },
    toLogin() {
      this.$router.push("/Login");
    }
  },
  store
};
</script>

<style scoped>
.register-block {
  background: #de6262; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #3f4c6b,
    #3f4c6b
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #3f4c6b,
    #3f4c6b
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  float: left;
  padding: 50px 0;
}
.banner-sec {
  background-size: cover;
  min-height: 500px;
  padding: 0;
}
.container {
  background: #fff;
  background-color: white;
  margin-top: 70px;
}
.carousel-inner {
  border-radius: 0 10px 10px 0;
}
.carousel-caption {
  text-align: left;
  left: 5%;
}
.register-sec {
  padding: 50px 30px;
  position: relative;
}
.register-sec .copy-text {
  position: absolute;
  width: 80%;
  bottom: 20px;
  font-size: 13px;
  text-align: center;
}
.register-sec .copy-text i {
  color: #feb58a;
}
.register-sec .copy-text a {
  color: #e36262;
}
.register-sec h2 {
  margin-bottom: 19px;
  font-weight: 800;
  font-size: 30px;
  color: #007bff;
}
</style>