<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item
      v-for="item in carousel_bg"
      :key="item"
      :style="{
        backgroundImage: `url(${require(`../assets/img/animals/${item}.jpg`)})`,
      }"
    >
      <!-- <h3>{{ item }}</h3> -->
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      carousel_bg: ["koala2", "tiger"],
    };
  },
};
</script>

<style>
.el-carousel__container {
  height: 869px !important;
  /* max-width: 1380px; */
  margin: 0 auto;
  padding-top: 62.71%;
}

/* .el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
} */

.el-carousel__item {
  background-size: cover;
}

.el-carousel__indicators--outside {
  position: relative;
  bottom: 3px;
}

.el-carousel__indicators--outside button {
  background-color: #3e42d0;
}
</style>
