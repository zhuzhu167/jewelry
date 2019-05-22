<template>
  <div class="container" style="-webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);">
    <div class="row">
      <div
        class="col-md-8 banner-sec"
        style="background: url(static/img/nav/5.webp) no-repeat bottom;"
      ></div>
      <div class="col-md-4 register-sec">
        <h2 class="text-center">您好，新用户</h2>
        <form class="register-form">
          <div class="form-group">
            <label for="exampleInputName1" class="text-uppercase">账 号</label>
            <input type="text" class="form-control" placeholder>
          </div>
          <div class="form-group">
            <label for="exampleInputAddress1" class="text-uppercase">密 码</label>
            <input type="password" class="form-control" placeholder>
          </div>
          <div class="form-group">
            <label for="exampleInputAddress2" class="text-uppercase">重新输入密码</label>
            <input type="password" class="form-control" placeholder>
          </div>
          <div style="margin-top: 50px;">
            <button type="button" class="btn btn-primary btn-block btn-lg">注 册</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
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