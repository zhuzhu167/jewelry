<template>
  <div>
    <section class="jumbotron text-center" style="border-radius: 0px;">
      <div class="container">
        <h1 class="jumbotron-heading">购 物 车</h1>
      </div>
    </section>

    <div class="container mb-4">
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-hover text-center" style="font-weight: lighter;">
              <thead>
                <tr>
                  <th scope="col" width="18%">图 片</th>
                  <th scope="col" width="50%">标 题</th>
                  <th scope="col" width="10%">价 钱</th>
                  <th scope="col" width="12%">操 作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="index in 5" :key="index">
                  <td>
                    <img src="https://static.darryring.com/images/2016-07-11/1468219559.jpg">
                  </td>
                  <td>Tiffany True系列铂金槽式镶嵌钻戒圈</td>

                  <td>￥ 10000</td>
                  <td>
                    <button class="btn btn-sm btn-danger">
                      <i class="fa fa-minus"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <strong>总金额：</strong>
                  </td>
                  <td class="text-right">
                    <strong>346,2222290</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col mb-2">
          <div style="width:250px;" class="col-sm-12 col-md-6 float-right">
            <button class="btn btn-lg btn-block btn-success">支付</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  margin-bottom: 1%;
  font-size: 30px;
  font-weight: lighter;
}
img {
  width: 150px;
}
</style>
