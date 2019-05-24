<template>
  <div>
    <div class="container">
      <br>
      <div class="card">
        <div class="row">
          <aside class="col-sm-5 border-right">
            <article class="gallery-wrap">
              <div class="img-big-wrap">
                <div
                  v-for="(imgUrl, index) in $store.state.commodityInfo.imageList"
                  v-show="index === 0"
                  :key="index"
                >
                  <a :href=" imgUrl.imageUrl">
                    <img style="width: 100%; height: 100%" :src="imgUrl.imageUrl">
                  </a>
                </div>
              </div>
              <div class="img-small-wrap">
                <div
                  class="item-gallery"
                  v-for="(imgUrl, index) in $store.state.commodityInfo.imageList"
                  :key="index"
                >
                  <img :src="imgUrl.imageUrl">
                </div>
              </div>
            </article>
          </aside>
          <aside class="col-sm-7">
            <article class="card-body p-5">
              <h2 class="title mb-3">{{ $store.state.commodityInfo.title }}</h2>
              <p class="price-detail-wrap">
                <span class="price h3 text-primary">
                  <span class="currency">￥{{ $store.state.commodityInfo.commodityPrice }}</span>
                </span>
              </p>
              <dl class="item-property">
                <hr>
                <dd>
                  <p>{{ $store.state.commodityInfo.subhead }}</p>
                </dd>
              </dl>
              <dl class="param param-feature">
                <dt>材质：</dt>
                <dd>{{ $store.state.commodityInfo.textureName }}</dd>
              </dl>
              <dl class="param param-feature">
                <dt>库存：</dt>
                <dd>{{ $store.state.commodityInfo.store.storeConsumption}}</dd>
              </dl>
              <div class="row">
                <div class="col-sm-5">
                  <dl class="param param-inline">
                    <dt>尺寸：</dt>
                    <dd>
                      <select class="form-control form-control-sm" style="width:70px;">
                        <option v-for="index in 10" :key="index">{{ index }}</option>
                      </select>
                    </dd>
                  </dl>
                </div>
              </div>
              <hr>
              <a
                @click="toSelectJewelry()"
                class="btn btn-lg btn-primary text-white"
                style="font-weight: 400;"
              >挑选钻石</a>
            </article>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapActions } from "vuex";
export default {
  created() {
    this.LoadCommodityInfo();
    this.play();
  },
  methods: {
    ...mapActions(["LoadCommodityInfo", "SetSize"]),
    toSelectJewelry() {
      this.$router.push("/JewelryList");
    }
  },
  store
};
</script>

<style scoped>
h2 {
  color: #000;
  font-weight: 340;
}
.gallery-wrap .img-big-wrap img {
  height: 450px;
  width: auto;
  display: inline-block;
  cursor: zoom-in;
}

.gallery-wrap .img-small-wrap .item-gallery {
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  margin: 7px 2px;
  display: inline-block;
  overflow: hidden;
}

.gallery-wrap .img-small-wrap {
  text-align: center;
}
.gallery-wrap .img-small-wrap img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 4px;
  cursor: zoom-in;
}
.col-sm-7 p,
a {
  color: #000;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 340;
}
dd {
  color: #007bff;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 400;
}
dt {
  color: #000;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 340;
}
</style>
