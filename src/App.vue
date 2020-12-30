<template>
  <div id="app">
    <router-view v-if="isRouteAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouteAlive: true,
    };
  },
  methods: {
    reload() {
      console.log("reload");
      this.isRouteAlive = false;
      this.$nextTick(() => {
        this.isRouteAlive = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  margin: 0 auto;
}
</style>
