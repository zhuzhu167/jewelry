<template>
  <!-- <div id="myCarousel" class="carousel slide fadeInto" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="first-slide" src="http://pry3timq7.bkt.clouddn.com/5.webp" alt="First slide">
        <div class="container">
          <div class="carousel-caption text-left">
            <h1>JewelrySource</h1>
            <p>一个钻戒的发源地，我们将衷心给予人们最大的幸福</p>
            <p>
              <a class="btn-lg" href="/#/GoodList">了 解 更 多</a>
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="second-slide" src="http://pry3timq7.bkt.clouddn.com/7.webp" alt="Second slide">
        <div class="container">
          <div class="carousel-caption">
            <h1>GALANTERIE</h1>
            <p>以现代精神诠释优雅魅力, 光影绰约间彰显曲线交错的缱绻美感</p>
            <p>
              <a class="btn-lg" href="/#/GoodList">了 解 更 多</a>
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="third-slide" src="http://pry3timq7.bkt.clouddn.com/6.webp" alt="Third slide">
        <div class="container">
          <div class="carousel-caption text-right">
            <h1>CARESSE</h1>
            <p>以细腻闪耀演绎隽永风格，散发至臻柔美魅力</p>
            <p>
              <a class="btn-lg" href="/#/GoodList">了 解 更 多</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>-->
  <div class="banner">
    <div class="container">
      <!--Slider-->
      <div class="slider">
        <div class="callbacks_container w3l">
          <ul class="rslides" id="slider">
            <li>
              <div class="slider-info">
                <h4>Jewelry Source</h4>
                <p>以现代精神诠释优雅魅力, 光影绰约间彰显曲线交错的缱绻美感</p>
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
/* img {
  height: 100%;
  width: 100%;
}
p {
  color: #3f475a;
  font-size: 20px;
  font-weight: lighter;
  text-overflow: ellipsis;
  overflow: hidden;
}
h1 {
  color: #3f475a;
  font-size: 45px;
  font-weight: lighter;
  text-overflow: ellipsis;
}
a {
  color: #007bff;
  font-weight: 300;
} */
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
