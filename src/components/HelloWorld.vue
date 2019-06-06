<template>
  <div>
    <Table :columns="columns1" :data="$store.state.cartCommodityVOList.response"></Table>
    <img src alt>
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
          render: (h, params) => {
            return h(
              "div",
              params.row.cartCommodityList.map(function(item) {
                return h(
                  "img",
                  { style: { width: "10%" } },
                  { attrs: { src: item.imageList[0].imageUrl } }
                );
              })
            );
          }
        }
      ]
    };
  },
  methods: {
    ...mapActions(["LoadCart", "dCart"])
  },
  store
};
</script>

<style scoped>
img {
  width: 100px;
}
</style>









