<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <BackTop></BackTop>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
@import "./css/Animation.css";
@import "./css/font.css";
body {
  font-family: FangZhengShuSongJianTi-1;
}
td {
  color: #657180;
  font-size: 14px;
  font-weight: unset;
}
th {
  font-size: 14px;
  font-weight: bold;
  color: #464c5b;
}
</style>
