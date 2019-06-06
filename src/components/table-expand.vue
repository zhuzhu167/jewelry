<template>
  <div>
    <div class="table-responsive">
      <table class="table table-bordered text-center">
        <thead>
          <tr>
            <th class="ml-0 mr-0 text-center">图 片</th>
            <th class="ml-0 mr-0 text-center">标 题</th>
            <th class="ml-0 mr-0 text-center">价 钱</th>
            <th class="ml-0 mr-0 text-center">编 号</th>
            <th class="ml-0 mr-0 text-center">是 否 配 对</th>
          </tr>
        </thead>
        <tbody
          style="margin-top: 30px;"
          class="w-100"
          v-for="(item, index) in this.row"
          :key="index"
        >
          <tr>
            <td class="w-20 mx-auto align-middle text-center">
              <div v-for="(cimg,cimgindex) in item.imageList" :key="cimgindex">
                <img v-if="cimgindex == 0 " :src="cimg.imageUrl">
              </div>
            </td>
            <td class="w-50 mx-auto text-center align-middle">{{ item.title }}</td>
            <td class="w-15 mx-auto text-center align-middle">￥ {{ item.commodityPrice }}</td>
            <td class="w-15 mx-auto text-center align-middle">{{ item.commodityNo }}</td>
            <td class="w-15 mx-auto text-center align-middle" rowspan="2">是</td>
          </tr>
          <tr class="ml-0 mr-0 text-center">
            <td class="w-20 text-center">
              <div v-for="(jimg,jimgindex) in item.orderJewelry.imageList" :key="jimgindex+1">
                <img v-if="jimgindex == 0 " :src="jimg.imageUrl">
              </div>
            </td>
            <td
              class="w-15 mx-auto text-center align-middle"
            >{{ item.orderJewelry.shape + "/" + item.orderJewelry.color}}</td>
            <td class="w-15 mx-auto text-center align-middle">￥{{ item.orderJewelry.jewelryPrice}}</td>
            <td class="w-40 mx-auto text-center align-middle">{{ item.orderJewelry.jewelryNo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import store from "@/vuex/store";
export default {
  props: {
    row: {}
  },
  data() {
    return {
      list: {}
    };
  },
  methods: {
    ...mapActions(["LoadOrder"]),
    out() {}
  },
  store
};
</script>

<style scoped>
table {
  margin-bottom: 0rem;
}
img {
  width: 150px;
}
</style>


