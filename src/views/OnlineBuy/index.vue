<template>
  <div class="onlinebuy">
    <h5>線上購票</h5>
    <div class="card">
      <Card :cardData="item" v-for="item in goods" :key="item.G_Id"></Card>
    </div>
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
        this.goods.push(item);
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.onlinebuy {
  width: 70%;
  margin: 0 auto 3rem;

  h5 {
    width: 100%;
    font-size: 2rem;
    color: rgb(94, 90, 47);
    font-weight: 700;
    border-bottom: 3px double #af6b58;
    margin: 3rem;
  }
  .card {
    // background-color: rgb(238, 188, 188);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
