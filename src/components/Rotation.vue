<template>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
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
  </div>
</template>

<style scoped>
img {
  height: 100%;
  width: 100%;
}
p {
  color: #343a40;
  font-size: 20px;
  font-weight: lighter;
  text-overflow: ellipsis;
  overflow: hidden;
}
h1 {
  color: #343a40;
  font-size: 45px;
  font-weight: lighter;
  text-overflow: ellipsis;
}
a {
  color: #007bff;
  font-weight: 350;
}
</style>
