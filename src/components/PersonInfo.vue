<template>
  <div>
    <section class="jumbotron text-center" style="border-radius: 0px;">
      <div class="container">
        <h1 class="jumbotron-heading">个 人 中 心</h1>
      </div>
    </section>

    <main role="main" class="container">
      <div class="my-3 p-3 bg-white rounded box-shadow">
        <div class="media text-muted pt-3">
          <img
            data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1"
            alt
            class="mr-2 rounded"
          >
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom" style="color: black;">
            <strong class="d-block">
              <h5>用 户 名：</h5>
            </strong>
            梁柱
          </p>
        </div>
        <div class="media text-muted pt-3">
          <img
            data-src="holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1"
            alt
            class="mr-2 rounded"
          >
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom" style="color: black;">
            <strong class="d-block">
              <h5>手 机 号：</h5>
            </strong>
            13112357605
          </p>
        </div>
        <div class="media text-muted pt-3">
          <img
            data-src="holder.js/32x32?theme=thumb&bg=6f42c1&fg=6f42c1&size=1"
            alt
            class="mr-2 rounded"
          >
          <p
            class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"
            style="color: black;"
          >
            <strong class="d-block">
              <h5>邮 箱 号：</h5>
            </strong>
            1678881243@qq.com
          </p>
        </div>
        <small class="d-block text-right mt-3 col" style="font-size: 17px;font-weight: lighter;">
          <a href="#">修改密码</a>
          <a href="#">修改资料</a>
        </small>
      </div>
      <section class="jumbotron text-center bg-white">
        <div class="container">
          <h1 class="jumbotron-heading">收 货 信 息</h1>
        </div>
      </section>
      <div class="box">
        <div class="table-responsive">
          <table class="table table-hover text-center" style="font-weight: lighter;color: black;">
            <thead>
              <tr>
                <th>收 货 人</th>
                <th>收 货 地 址</th>
                <th>联 系 方 式</th>
                <th>邮 政 编 号</th>
                <th>操 作</th>
                <th>
                  <button class="btn btn-sm btn-success">
                    <i class="fa fa-plus"></i>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="index in 3" :key="index">
                <td>梁柱</td>
                <td>广东省珠海市金凤路16号北京理工大学珠海学院</td>
                <td>13112357605</td>
                <td>510000</td>
                <td>
                  <a href>修 改</a>
                </td>
                <td>
                  <button class="btn btn-sm btn-danger">
                    <i class="fa fa-minus"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Rotation from "@/components/Rotation";
export default {
  components: {
    Rotation
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 1%;
  font-size: 30px;
  font-weight: lighter;
}
h4 h5 {
  font-weight: lighter;
}
.box {
  padding: 16px;
  color: #6c757d;
}
</style>
