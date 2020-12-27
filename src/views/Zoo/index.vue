<template>
  <div id="zoo">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import Home from "@/views/Home";
export default {
  name: "Zoo",
  components: {
    Header,
    Footer,
    Home,
  },
};
</script>

<style lang="scss" scoped></style>
