<template>
  <div class="onlinebuy">
    <Card :cardData="item" v-for="item in goods" :key="item.G_Id"></Card>
    <el-button type="success" @click="gotoPay">前往結帳</el-button>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "OnlineBuy",
  data() {
    return {
      goods: [],
    };
  },
  components: {
    Card,
  },
  created() {
    this.$http.get("/json/goods.json").then(({ data }) => {
      this.$store.commit("getAllGoods", data);
      data.forEach((item) => {
        // console.log(item);
        this.goods.push(item);
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.onlinebuy {
  display: flex;
  flex-wrap: wrap;
}
</style>
