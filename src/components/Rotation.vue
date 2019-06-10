<template>
  <div class="banner">
    <div class="container">
      <!--Slider-->
      <div class="slider">
        <div class="callbacks_container w3l">
          <ul class="rslides" id="slider">
            <li>
              <div class="slider-info">
                <h4 class="fadeInDown" style="font-family: Italianno-Regular-1;">Jewelry Source</h4>
                <p>以现代精神诠释优雅魅力</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./css/style.css";
@import "./css/font.css";
.banner {
  background: url(http://cdn-jewelry.ykthink.cn/b1.webp) no-repeat center;
  background-size: cover;
  min-height: 800px;
}
@media (max-width: 1440px) {
  .banner {
    min-height: 778px;
  }
}
@media (max-width: 1366px) {
  .banner {
    min-height: 726px;
  }
}
@media (max-width: 1280px) {
  .banner {
    min-height: 635px;
  }
}
@media (max-width: 1050px) {
  .banner {
    min-height: 586px;
  }
}
@media (max-width: 991px) {
  .banner {
    min-height: 567px;
  }
}
@media (max-width: 900px) {
  .banner {
    min-height: 540px;
  }
}
@media (max-width: 768px) {
  .banner {
    min-height: 496px;
  }
}
@media (max-width: 600px) {
  .banner {
    min-height: 390px;
  }
}
@media (max-width: 414px) {
  .banner {
    min-height: 351px;
  }
}
</style>
