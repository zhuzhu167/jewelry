<template>
  <div class="fadeIn">
    <section class="jumbotron text-center" style="border-radius: 0px;">
      <div class="container">
        <h1 class="jumbotron-heading">订 单</h1>
      </div>
    </section>

    <div class="container mb-4">
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-bordered text-center">
              <thead>
                <tr>
                  <th class="ml-0 mr-0">图 片</th>
                  <th class="ml-0 mr-0">标 题</th>
                  <th class="ml-0 mr-0">价 钱</th>
                  <th class="ml-0 mr-0">状 态</th>
                  <th class="ml-0 mr-0">操 作</th>
                </tr>
              </thead>
              <tbody
                style="margin-top: 30px;"
                class="w-100"
                v-for="(item, index) in $store.state.orderCommodityVOList.response"
                :key="index"
              >
                <tr
                  class="ml-0 mr-0"
                  v-for="(citem, cindex) in item.orderCommodityList"
                  :key="cindex"
                >
                  <td class="w-20 mx-auto align-middle">
                    <div v-for="(cimg,cimgindex) in citem.imageList" :key="cimgindex">
                      <img v-if="cimgindex == 0 " :src="cimg.imageUrl">
                    </div>
                  </td>
                  <td class="w-50 mx-auto align-middle">{{ citem.title }}</td>
                  <td class="w-10 mx-auto align-middle" rowspan="2">￥ {{ item.payPrice }}</td>
                  <td class="w-10 mx-auto align-middle" rowspan="2" v-if="item.orderStatus === 0">
                    <a href>未付款</a>
                  </td>
                  <td
                    class="w-15 mx-auto align-middle"
                    rowspan="2"
                    v-if="item.orderStatus === 1"
                  >{{ "已付款" }}</td>
                  <td class="w-10 mx-auto align-middle" rowspan="2">
                    <button class="btn btn-sm btn-danger" @click="d_Order(item.orderUuid)">
                      <i class="fa fa-minus"></i>
                    </button>
                  </td>
                </tr>
                <tr
                  class="ml-0 mr-0 text-center"
                  v-for="(jitem, jindex) in item.orderJewelryList"
                  :key="jindex+1"
                >
                  <td class="w-20">
                    <div v-for="(jimg,jimgindex) in jitem.imageList" :key="jimgindex+1">
                      <img v-if="jimgindex == 0 " :src="jimg.imageUrl">
                    </div>
                  </td>
                  <td class="w-40 mx-auto text-center align-middle">钻石编号：{{ jitem.jewelryNo }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-if="$store.state.orderCommodityVOList.total === 0">
            <h5>无订单信息</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import store from "@/vuex/store";
export default {
  created() {
    this.LoadOrder();
  },
  methods: {
    ...mapActions(["LoadOrder", "dOrder"]),
    d_Order(uuid) {
      if (uuid !== "") {
        this.dOrder(uuid);
        this.LoadOrder();
      }
    }
  },
  store
};
</script>

<style scoped>
h5 {
  font-weight: 300;
  font-size: 30px;
  text-align: center;
  margin-top: 50px;
}
h1 {
  margin-bottom: 1%;
  font-size: 40px;
  font-weight: 340;
}
img {
  width: 150px;
}
th,
td {
  color: #000;
  font-size: 18px;
  font-weight: 300;
}
</style>