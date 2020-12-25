<template>
  <div class="index">
    <!-- <Header /> -->
    <Carousel />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import Carousel from "@/components/Carousel.vue";
export default {
  name: "Index",
  components: {
    Header,
    Footer,
    Carousel,
  },
};
</script>

<style lang="scss" scoped>
.index {
  height: 100vh;
  position: relative;
}
</style>
