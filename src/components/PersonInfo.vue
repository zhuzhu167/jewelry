<template>
  <div>
    <Rotation></Rotation>

    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">我 的</h1>
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
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark">
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
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark">
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
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark">
              <h5>邮 箱 号：</h5>
            </strong>
            1678881243@qq.com
          </p>
        </div>
        <small class="d-block text-right mt-3 col">
          <a href="#">修改密码</a>
          <a href="#">修改资料</a>
        </small>
      </div>
      <section class="jumbotron text-center bg-white">
        <div class="container">
          <h4 class="jumbotron-heading">收 货 信 息</h4>
        </div>
      </section>
      <div class="box">
        <div class="table-responsive">
          <table class="table table-hover">
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
              <tr>
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
              <tr>
                <td>梁柱</td>
                <td>北京理工大学珠海学院</td>
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
              <tr>
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
.box {
  padding: 16px;
  color: #6c757d;
}
</style>
