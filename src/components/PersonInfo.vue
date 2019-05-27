<template>
  <div class="fadeIn">
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
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom">
            <strong class="d-block">
              <h5>用 户 名：</h5>
            </strong>
            {{ personInfo.username }}
          </p>
        </div>
        <div class="media text-muted pt-3">
          <img
            data-src="holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1"
            alt
            class="mr-2 rounded"
          >
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom">
            <strong class="d-block">
              <h5>手 机 号：</h5>
            </strong>
            {{ personInfo.phone}}
          </p>
        </div>
        <div class="media text-muted pt-3">
          <img
            data-src="holder.js/32x32?theme=thumb&bg=6f42c1&fg=6f42c1&size=1"
            alt
            class="mr-2 rounded"
          >
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom">
            <strong class="d-block">
              <h5>邮 箱 号：</h5>
            </strong>
            {{ personInfo.email }}
          </p>
        </div>
        <small class="d-block text-right mt-3 col" style="font-size: 17px;">
          <button class="btn btn-sm btn-primary" @click="toMdPwd()">修改密码</button>
          <button class="btn btn-sm btn-primary" @click="toMdInfo()">修改资料</button>
        </small>
      </div>
      <section class="jumbotron text-center bg-white">
        <div class="container">
          <h1 class="jumbotron-heading">收 货 信 息</h1>
        </div>
      </section>
      <div class="box">
        <div class="table-responsive">
          <table class="table table-hover text-center">
            <thead>
              <tr>
                <th>收 货 人</th>
                <th>收 货 地 址</th>
                <th>联 系 方 式</th>
                <th>邮 政 编 号</th>
                <th>操 作</th>
                <th>
                  <button class="btn btn-sm btn-success" @click="toAdd()">
                    <i class="fa fa-plus"></i>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in $store.state.consigneeList" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.province+item.city+item.district+item.address }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.zipCode }}</td>
                <td>
                  <button class="btn btn-sm btn-primary" @click="modify(item)">修改</button>
                </td>
                <td>
                  <button class="btn btn-sm btn-danger" @click="confirmDelet(item.receiverUuid)">
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
import store from "@/vuex/store";
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.LoadUserInfo();
    this.LoadConsignee();
  },
  methods: {
    ...mapActions([
      "LoadUserInfo",
      "LoadConsignee",
      "DeleteConsignee",
      "setConsigneeUuid"
    ]),
    confirmDelet(uuid) {
      this.DeleteConsignee(uuid).then(result => {
        if (result) {
          this.LoadConsignee();
        }
      });
    },
    toAdd() {
      this.$router.push("/AddAss");
    },
    modify(data) {
      this.setConsigneeUuid(data);
      this.$router.push("/MdAss");
    },
    toMdPwd() {
      this.$router.push("/MdPwd");
    },
    toMdInfo() {
      this.$router.push("/MdInfo");
    }
  },
  computed: {
    ...mapState(["personInfo"])
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
</style>
