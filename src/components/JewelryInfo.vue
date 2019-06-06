<template>
  <div>
    <div class="container">
      <br>
      <div class="card fadeIn">
        <div class="row">
          <aside class="col-sm border-right">
            <article class="gallery-wrap">
              <div class="img-big-wrap">
                <div
                  v-for="(imgUrl, index) in $store.state.jewelryInfo.imageList"
                  v-show="index === 0"
                  :key="index"
                >
                  <a :href=" imgUrl.imageUrl">
                    <img style="width: 100%; height: 100%" :src="imgUrl.imageUrl">
                  </a>
                </div>
              </div>
            </article>
          </aside>
          <aside class="col-sm-7">
            <article class="card-body p-5">
              <h2 class="title mb-3">钻石编号： {{ $store.state.jewelryInfo.jewelryNo}}</h2>
              <p class="price-detail-wrap">
                <span class="price h3 text-primary">
                  <span class="currency">￥{{ $store.state.jewelryInfo.jewelryPrice }}</span>
                </span>
              </p>
              <dl class="param param-feature">
                <dt>形状：</dt>
                <dd>{{ $store.state.jewelryInfo.shape }}</dd>
              </dl>
              <dl class="param param-feature">
                <dt>颜色：</dt>
                <dd>{{ $store.state.jewelryInfo.color }}</dd>
              </dl>
              <dl class="param param-feature">
                <dt>净度：</dt>
                <dd>{{ $store.state.jewelryInfo.clarity }}</dd>
              </dl>
              <dl class="param param-feature">
                <dt>切工：</dt>
                <dd>{{ $store.state.jewelryInfo.cut }}</dd>
              </dl>
              <dl class="param param-feature">
                <dt>抛光：</dt>
                <dd>{{ $store.state.jewelryInfo.polishing }}</dd>
              </dl>
              <dl class="param param-feature">
                <dt>荧光：</dt>
                <dd>{{$store.state.jewelryInfo.light }}</dd>
              </dl>
              <hr>
              <Button type="primary" @click="addToC()" style="margin-top:30px;">加入购物车</Button>
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
    this.LoadJewelryInfo();
  },
  methods: {
    ...mapActions(["LoadJewelryInfo", "addToCart"]),
    addToC() {
      if (store.state.is_login == true) {
        this.addToCart();
        this.$router.push("/GoodList");
      } else {
        swal({
          title: "提 示",
          icon: "error",
          button: "确定",
          dangerMode: true,
          text: "请先登录或注册后再购买"
        });
      }
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
  color: #2d8cf0;
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
