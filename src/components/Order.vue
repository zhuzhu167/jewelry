<template>
  <div class="fadeIn">
    <section class="jumbotron text-center" style="border-radius: 0px;">
      <div class="container">
        <h1 class="jumbotron-heading">订 单</h1>
      </div>
    </section>

    <div class="container box">
      <Table
        border
        size="large"
        :columns="columns10"
        :data="$store.state.orderCommodityVOList.response"
      ></Table>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import store from "@/vuex/store";
import expandRow from "@/components/table-expand.vue";
export default {
  data() {
    return {
      columns10: [
        {
          type: "expand",
          width: 50,
          align: "center",
          render: (h, params) => {
            return h(expandRow, {
              props: { row: params.row.orderCommodityList }
            });
          },
          fixed: "right"
        },
        {
          title: "订单编号",
          key: "orderNo",
          align: "center",
          width: 200
        },
        {
          title: "是否付款",

          align: "center",
          width: 150,
          render: (h, params) => {
            if (params.row.orderStatus === 1) {
              return h("div", [h("div", "已付款")]);
            } else if (params.row.orderStatus === 0) {
              return h("div", [
                h(
                  "Button",
                  {
                    props: {
                      type: "success",
                      size: "small"
                    },
                    on: {
                      click: () => {
                        this.payO(params.row.orderUuid, params.row.payPrice);
                      }
                    }
                  },
                  "付款"
                )
              ]);
            }
          }
        },
        {
          title: "价格",
          key: "payPrice",
          align: "center",
          width: 150
        },
        {
          title: "收货人",
          width: 108,
          align: "center",
          key: "receiverName"
        },
        {
          title: "地址",
          width: 300,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "div",
                params.row.receiverProvince +
                  params.row.receiverCity +
                  params.row.receiverDistrict +
                  params.row.receiverAddress
              )
            ]);
          }
        },
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            if (params.row.orderStatus == "0") {
              return h("div", [
                h(
                  "Button",
                  {
                    props: {
                      type: "error",
                      size: "small"
                    },
                    on: {
                      click: () => {
                        this.d_Order(params.row.orderUuid);
                      }
                    }
                  },
                  "删除"
                )
              ]);
            } else if (params.row.orderStatus == "1") {
              return h("div", [
                h(
                  "Button",
                  {
                    props: {
                      type: "primary",
                      size: "small"
                    },
                    on: {
                      click: () => {}
                    }
                  },
                  "查询物流"
                )
              ]);
            }
          }
        }
      ]
    };
  },
  created() {
    this.LoadOrder();
  },
  methods: {
    ...mapActions(["LoadOrder", "dOrder"]),
    d_Order(uuid) {
      if (uuid !== "") {
        this.dOrder(uuid).then(result => {
          if (result) {
            this.LoadOrder();
            swal({
              title: "提 示",
              icon: "success",
              text: "删除订单成功",
              buttons: false,
              timer: 1000
            });
          }
        });
      }
    },
    payO(uuid, price) {
      store.state.orderCommodityUuid = uuid;
      store.state.sumPrice = price;
      this.$router.push("/Pay");
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
th,
td {
  color: #000;
  font-size: 18px;
  font-weight: 300;
}
.box >>> td.ivu-table-expanded-cell {
  padding: 0px 0px;
}
</style>