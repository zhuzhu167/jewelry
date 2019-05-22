<template>
  <div>
    <Rotation></Rotation>
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">购 物 车</h1>
      </div>
    </section>

    <div class="container mb-4">
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">图 片</th>
                  <th scope="col">标 题</th>
                  <th scope="col">价 钱</th>
                  <th scope="col" class="text-right">操 作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="https://dummyimage.com/50x50/55595c/fff">
                  </td>
                  <td>xxxxxxxxxxxxxx</td>

                  <td>124,90</td>
                  <td class="text-right">
                    <button class="btn btn-sm btn-danger">
                      <i class="fa fa-minus"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="https://dummyimage.com/50x50/55595c/fff">
                  </td>
                  <td>xxxxxxxxxxxxxx</td>

                  <td>33,90</td>
                  <td class="text-right">
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
                    <strong>346,90</strong>
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
import Rotation from "@/components/Rotation";
export default {
  components: {
    Rotation
  }
};
</script>

<style scoped>
</style>
