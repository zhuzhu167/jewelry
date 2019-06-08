<template>
  <div class="fadeIn">
    <Rotation></Rotation>

    <div class="container marketing" style="margin-top: 100px;">
      <hr class="featurette-divider">
      <div
        class="row featurette"
        v-for="(item,index) in $store.state.categoryList"
        :key="index"
        v-if="index === 1"
      >
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">{{ item.categoryName }}</h2>
          <p class="lead">
            2019年，我们将推出 Forever 全新系列，快来感受它的魅力
            <br>
            <a style="color: #2d8cf0;" @click="toGoodList(item.categoryUuid)">了解更多</a>
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img
            class="featurette-image img-fluid mx-auto"
            src="https://static.darryring.com/images/2016-07-25/1469436495.jpg"
            alt="Generic placeholder image"
          >
        </div>
      </div>

      <hr class="featurette-divider">

      <div
        class="row featurette"
        v-for="(item,index) in $store.state.categoryList"
        :key="index"
        v-if="index === 3"
      >
        <div class="col-md-7">
          <h2 class="featurette-heading">{{ item.categoryName }}</h2>
          <p class="lead">
            你轻轻的，走进了我的心里，和我的心灵有个约定，只要说，你爱我，我就会永生永世等你
            <br>
            <a style="color: #2d8cf0;" @click="toGoodList(item.categoryUuid)">了解更多</a>
          </p>
        </div>
        <div class="col-md-5">
          <img
            class="featurette-image img-fluid mx-auto"
            src="https://static.darryring.com/images/2016-07-11/1468219559.jpg"
            alt="Generic placeholder image"
          >
        </div>
      </div>

      <hr class="featurette-divider">

      <div
        class="row featurette"
        v-for="(item,index) in $store.state.categoryList"
        :key="index"
        v-if="index === 2"
      >
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">{{ item.categoryName }}</h2>
          <p class="lead">
            拉开爱情的帷幕，唱响柔情的序曲，讲句甜蜜的台词，在爱情的舞台上，愿为你打造一世幸福
            <br>
            <a style="color: #2d8cf0;" @click="toGoodList(item.categoryUuid)">了解更多</a>
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img
            class="featurette-image img-fluid mx-auto"
            src="https://static.darryring.com/images/2016-07-25/1469436495.jpg"
            alt="Generic placeholder image"
          >
        </div>
      </div>

      <hr class="featurette-divider">

      <div
        class="row featurette"
        v-for="(item,index) in $store.state.categoryList"
        :key="index"
        v-if="index === 0"
      >
        <div class="col-md-7">
          <h2 class="featurette-heading">{{ item.categoryName }}</h2>
          <p class="lead">
            玫瑰花的香味飘荡在空气中，巧克力的甜蜜洋溢在喜悦中，没有华丽的辞藻，只有真心的表白：爱你的心，永远不变
            <br>
            <a style="color: #2d8cf0;" @click="toGoodList(item.categoryUuid)">了解更多</a>
          </p>
        </div>
        <div class="col-md-5">
          <img
            class="featurette-image img-fluid mx-auto"
            src="https://static.darryring.com/images/2018-09-06/1536218624.jpg"
            alt="Generic placeholder image"
          >
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="all" @click="toL()">查看全部商品</div>
      </div>

      <hr class="featurette-divider">
    </div>
  </div>
</template>

<script>
import Rotation from "@/components/Rotation";
import { mapActions } from "vuex";
import store from "@/vuex/store";
export default {
  created() {
    this.LoadIndexCategory();
  },
  methods: {
    ...mapActions(["LoadIndexCategory", "LoadCommodityList"]),
    toGoodList(uuid) {
      if (uuid !== "") {
        store.state.categoryUuid = uuid;
        this.$router.push("/GoodList");
      }
    },
    toL() {
      this.$router.push("/GoodList");
    }
  },
  components: {
    Rotation
  },
  store
};
</script>

<style scoped>
.all {
  font-size: 30px;
  color: #2d8cf0;
  cursor: pointer;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
h2 {
  margin-top: 30px;
}
p {
  margin-top: 20px;
}
a {
  font-weight: 300;
}
</style>
