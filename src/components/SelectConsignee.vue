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
          <Table border :columns="columns2" :data="$store.state.consigneeList"></Table>
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
  data() {
    return {
      columns2: [
        {
          title: "姓 名",
          key: "name",
          align: "center",
          width: 150,

          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person"
                }
              }),
              h("strong", params.row.name)
            ]);
          }
        },
        {
          title: "地 址",
          width: 400,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "div",
                params.row.province +
                  params.row.city +
                  params.row.district +
                  params.row.address
              )
            ]);
          }
        },
        {
          title: "联系方式",
          key: "phone",
          align: "center",
          width: 200
        },
        {
          title: "邮 政 编 号",
          key: "zipCode",
          align: "center",
          width: 170
        },
        {
          title: "操作",
          key: "action",
          width: 156,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.setC(params.row.receiverUuid);
                    }
                  }
                },
                "选择"
              )
            ]);
          }
        }
      ]
    };
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
      this.addToOrder().then(result => {
        if (result) {
          this.LoadConsignee();
          this.$router.push("/ShoppingCart");
        } else {
          this.$router.push("/ShoppingCart");
        }
      });
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