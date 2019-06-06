<template>
  <div class="container box">
    <Table :columns="columns10" :data="$store.state.orderCommodityVOList.response"></Table>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import store from "@/vuex/store";
import expandRow from "@/components/table-expand.vue";
export default {
  created() {
    this.LoadOrder();
  },
  data() {
    return {
      columns10: [
        {
          type: "expand",
          width: 50,
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
          width: 200
        },
        {
          title: "是否付款",
          key: "orderStatus",
          width: 150
        },
        {
          title: "价格",
          key: "payPrice",
          width: 150
        },
        {
          title: "收货人",
          width: 108,
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
                      this.remove(params.index);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ]
    };
  },
  methods: {
    ...mapActions(["LoadOrder", "dOrder"])
  },
  store
};
</script>

<style scoped>
img {
  width: 150px;
}
.box >>> td.ivu-table-expanded-cell {
  padding: 0px 0px;
}
</style>











