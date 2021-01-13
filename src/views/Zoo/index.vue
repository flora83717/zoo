<template>
  <div id="zoo">
    <!-- <el-row> -->
    <Header />
    <router-view />
    <!-- <Footer /> -->
    <!-- </el-row> -->
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
// import Footer from "@/components/common/Footer.vue";
import Home from "@/views/Home";
export default {
  name: "Zoo",
  components: {
    Header,
    // Footer,
    Home,
  },
};
</script>

<style lang="scss" scoped></style>
