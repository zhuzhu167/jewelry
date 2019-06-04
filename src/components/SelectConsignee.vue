<template>
  <div class="fadeIn">
    <main role="main" class="container">
      <section class="jumbotron text-center bg-white">
        <div class="container">
          <h1 class="jumbotron-heading">选 择 收 货 人</h1>
        </div>
      </section>
      <div class="box">
        <div class="table-responsive" v-if="$store.state.consigneeList !== '' ">
          <table class="table table-hover text-center">
            <thead>
              <tr>
                <th>收 货 人</th>
                <th>收 货 地 址</th>
                <th>联 系 方 式</th>
                <th>邮 政 编 号</th>
                <th>操 作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in $store.state.consigneeList" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.province+item.city+item.district+item.address }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.zipCode }}</td>
                <td>
                  <button class="btn btn-sm btn-primary" @click="setC(item.receiverUuid)">选择</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="no-c" v-if="$store.state.consigneeList.length == 0">
          <h5>
            没有收获人信息，
            <strong>
              <a style="color: #3085d6;" @click="toAddAss()">立刻添加</a>
            </strong>
          </h5>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapActions } from "vuex";
export default {
  created() {
    this.LoadConsignee();
  },
  methods: {
    ...mapActions(["LoadConsignee", "addToOrder"]),
    toAddAss() {
      this.$router.push({
        name: "AddAss",
        params: { where: "SelectConsignee" }
      });
    },
    setC(uuid) {
      store.state.buyReceiverUuid = uuid;
      swal({
        title: "提 示",
        icon: "success",
        text: "下单成功",
        buttons: false,
        timer: 1000
      });
      this.addToOrder();
      this.$router.push("/ShoppingCart");
    }
  },
  store
};
</script>

<style scoped>
h1 {
  margin-bottom: 1%;
  font-size: 40px;
  font-weight: 340;
}
h5 {
  font-weight: 300;
  margin-bottom: 15px;
}
p {
  color: #000;
  font-weight: 300;
  font-size: 20px;
}
.box {
  padding: 16px;
  color: #6c757d;
}
th,
td {
  color: #000;
  font-size: 20px;
  font-weight: 300;
}
.no-c {
  text-align: center;
  margin-top: 50px;
}
</style>