<template>
  <div class="fadeIn">
    <section class="jumbotron text-center" style="border-radius: 0px;">
      <div class="container">
        <h1 class="jumbotron-heading">购 物 车</h1>
      </div>
    </section>

    <div class="container mb-4">
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table size="large" class="table table-bordered text-center">
              <thead class="bg-light">
                <tr>
                  <th class="ml-0 mr-0">图 片</th>
                  <th class="ml-0 mr-0">标 题</th>
                  <th class="ml-0 mr-0">价 钱</th>
                  <th class="ml-0 mr-0">操 作</th>
                </tr>
              </thead>
              <tbody
                style="margin-top: 30px;"
                class="w-100"
                v-for="(item, index) in $store.state.cartCommodityVOList.response"
                :key="index"
              >
                <tr
                  class="ml-0 mr-0"
                  v-for="(citem, cindex) in item.cartCommodityList"
                  :key="cindex"
                >
                  <td class="w-20 mx-auto align-middle">
                    <div v-for="(cimg,cimgindex) in citem.imageList" :key="cimgindex">
                      <img v-if="cimgindex == 0 " :src="cimg.imageUrl">
                    </div>
                  </td>
                  <td class="w-50 mx-auto align-middle">{{ citem.title }}</td>
                  <td class="w-15 mx-auto align-middle">￥ {{ citem.commodityPrice }}</td>
                  <td class="w-15 mx-auto align-middle" rowspan="2">
                    <Button type="error" @click="deleteCart(item.cartCommodityUuid)">删除</Button>
                  </td>
                </tr>
                <tr
                  class="ml-0 mr-0 text-center"
                  v-for="(jitem, jindex) in item.cartJewelryList"
                  :key="jindex+1"
                >
                  <td class="w-20">
                    <div v-for="(jimg,jimgindex) in jitem.imageList" :key="jimgindex+1">
                      <img v-if="jimgindex == 0 " :src="jimg.imageUrl">
                    </div>
                  </td>
                  <td class="w-50 mx-auto text-center align-middle">钻石编号：{{ jitem.jewelryNo }}</td>
                  <td class="w-15 mx-auto align-middle">￥ {{ jitem.jewelryPrice }}</td>
                </tr>
              </tbody>
              <tbody v-if="$store.state.cartCommodityVOList.total !== 0">
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <strong>总金额：</strong>
                  </td>
                  <td>
                    <strong>{{ $store.state.cartCommodityVOList.sumPrice }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-if="$store.state.cartCommodityVOList.total === 0">
            <h5>无购物车信息</h5>
          </div>
        </div>
        <div class="col mb-2" v-if="$store.state.cartCommodityVOList.total !== 0">
          <div style="width:250px; margin-top:30px;" class="col-sm-12 col-md-6 float-right">
            <Button
              type="success"
              class="btn-block"
              @click="toPay($store.state.cartCommodityVOList.sumPrice,$store.state.cartCommodityVOList.response)"
            >下 单</Button>
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
    this.LoadCart();
  },
  data() {
    return {
      columns1: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ]
    };
  },
  methods: {
    ...mapActions(["LoadCart", "dCart"]),
    deleteCart(uuid) {
      if (uuid !== "") {
        swal({
          title: "提 示",
          icon: "success",
          text: "成功删除购物车记录",
          buttons: false,
          timer: 1000
        });
        this.dCart(uuid);
      }
    },
    toPay(price, buyList) {
      if (price > 0) {
        store.state.buyList = [];
        for (var i = 0; i < buyList.length; i++) {
          store.state.buyList.push(buyList[i].cartCommodityUuid);
        }
        this.$router.push("/SelectConsignee");
      } else {
        swal({
          title: "提 示",
          icon: "error",
          text: "没有可支付的商品，请先去添加",
          buttons: false,
          timer: 1500
        });
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
  font-family: "Times New Roman", Georgia, Serif;
  margin-bottom: 1%;
  font-size: 40px;
  font-weight: 340;
}
img {
  width: 80px;
}
</style>
