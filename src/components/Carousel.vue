<template>
  <el-carousel indicator-position="outside" height="360px">
    <el-carousel-item
      v-for="item in carousel_bg"
      :key="item"
      :style="{
        backgroundImage: `url(${require(`../assets/img/${item}.jpg`)})`,
      }"
    >
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      carousel_bg: ["carousel1", "carousel2", "carousel3", "carousel4"],
    };
  },
};
</script>

<style>
.el-carousel {
  margin-top: 5rem;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-carousel__indicators--outside {
  position: relative;
  bottom: 3px;
}

.el-carousel__indicators--outside button {
  background-color: #3e42d0;
}
</style>
