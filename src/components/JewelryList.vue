<template>
  <div class="fadeIn">
    <section class="jumbotron text-center" style="border-radius: 0px;">
      <h1 class="jumbotron-heading">挑 选 钻 石</h1>
    </section>
    <div class="container">
      <div class="row" style="margin-top: 40px;">
        <div
          class="col-md-3 col-sm-6"
          v-for="(item, index) in $store.state.jewelryList"
          :key="index"
          style="margin-top: 20px;"
        >
          <div class="product-grid6">
            <div
              class="product-image6"
              v-for="(img_item, img_index) in item.imageList"
              :key="img_index"
            >
              <a>
                <img class="pic-1" v-if="img_index == 0" :src="img_item.imageUrl">
              </a>
            </div>
            <div class="product-content">
              <h3 class="title" style="font-weight: 340;">钻石编号： {{ item.jewelryNo }}</h3>
              <div class="price" style="font-weight: 340;color: #007bff;">￥{{ item.jewelryPrice }}</div>
            </div>
            <ul class="social">
              <li @click="toJewelryInfo(item.jewelryUuid)">
                <a data-tip="了解更多">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
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
    this.LoadJewelryList();
  },
  methods: {
    ...mapActions(["LoadJewelryList", "SetJewelryUuid"]),
    toJewelryInfo(uuid) {
      if (uuid !== "") {
        this.SetJewelryUuid(uuid);
        this.$router.push({
          path: "/JewelryInfo"
        });
      }
    }
  },
  store
};
</script>

<style scope>
h1 {
  margin-bottom: 1%;
  font-size: 40px;
  font-weight: 340;
}
.product-grid6,
.product-grid6 .product-image6 {
  overflow: hidden;
}
.product-grid6 {
  font-family: "Open Sans", sans-serif;
  text-align: center;
  position: relative;
  transition: all 0.5s ease 0s;
}
.product-grid6:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.product-grid6 .product-image6 a {
  display: block;
}
.product-grid6 .product-image6 img {
  width: 100%;
  height: auto;
  transition: all 0.5s ease 0s;
}
.product-grid6:hover .product-image6 img {
  transform: scale(1.1);
}
.product-grid6 .product-content {
  padding: 12px 12px 15px;
  transition: all 0.5s ease 0s;
}
.product-grid6:hover .product-content {
  opacity: 0;
}
.product-grid6 .title {
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
  margin: 0 0 10px;
  transition: all 0.3s ease 0s;
}
.product-grid6 .title a {
  color: #000;
}
.product-grid6 .title a:hover {
  color: #2e86de;
}
.product-grid6 .price {
  font-size: 18px;
  font-weight: 600;
  color: #2e86de;
}
.product-grid6 .price span {
  color: #999;
  font-size: 15px;
  font-weight: 400;
  text-decoration: line-through;
  margin-left: 7px;
  display: inline-block;
}
.product-grid6 .social {
  background-color: #fff;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  opacity: 0;
  transform: translateX(-50%);
  position: absolute;
  bottom: -50%;
  left: 50%;
  z-index: 1;
  transition: all 0.5s ease 0s;
}
.product-grid6:hover .social {
  opacity: 1;
  bottom: 20px;
}
.product-grid6 .social li {
  display: inline-block;
}
.product-grid6 .social li a {
  color: #909090;
  font-size: 16px;
  line-height: 45px;
  text-align: center;
  height: 45px;
  width: 45px;
  margin: 0 7px;
  border-radius: 50px;
  display: block;
  position: relative;
  transition: all 0.3s ease-in-out;
}
.product-grid6 .social li a:hover {
  color: #fff;
  background-color: #2e86de;
  width: 80px;
}
.product-grid6 .social li a:after,
.product-grid6 .social li a:before {
  content: attr(data-tip);
  color: #fff;
  background-color: #2e86de;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 20px;
  padding: 1px 5px;
  border-radius: 5px;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-50%);
  position: absolute;
  left: 50%;
  top: -30px;
}
.product-grid6 .social li a:after {
  content: "";
  height: 15px;
  width: 15px;
  border-radius: 0;
  transform: translateX(-50%) rotate(45deg);
  top: -20px;
  z-index: -1;
}
.product-grid6 .social li a:hover:after,
.product-grid6 .social li a:hover:before {
  opacity: 1;
}
@media only screen and (max-width: 990px) {
  .product-grid6 {
    margin-bottom: 30px;
  }
}
</style>