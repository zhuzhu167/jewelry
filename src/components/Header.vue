<template>
  <div>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <!-- Brand -->
      <a class="navbar-brand" href="/">
        <h2>JewelrySource</h2>
      </a>

      <!-- Toggler/collapsibe Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/#/ShoppingCart">购物车</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#/Order">订单</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#/PersonInfo">我的</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#/Login">登录</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#/Register">注册</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#/HelloWorld">退出</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.searchbar {
  margin-bottom: auto;
  margin-top: auto;
  height: 60px;
  background-color: #353b48;
  border-radius: 30px;
  padding: 10px;
}

.search_input {
  color: white;
  border: 0;
  outline: 0;
  background: none;
  width: 0;
  caret-color: transparent;
  line-height: 40px;
  transition: width 0.4s linear;
}

.searchbar:hover > .search_input {
  padding: 0 10px;
  width: 450px;
  caret-color: red;
  transition: width 0.4s linear;
}

.searchbar:hover > .search_icon {
  background: white;
  color: #e74c3c;
}

.search_icon {
  height: 40px;
  width: 40px;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: white;
}
</style>
