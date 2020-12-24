<template>
  <div class="card">
    <img :src="require(`../assets/img/${cardData.G_Img}.jpg`)" alt="" />
    <h2 class="title">{{ cardData.G_Name }}</h2>
    <!-- <div>text</div> -->
    <hr />
    <el-button type="success" @click="joinCart(cardData.G_Id)"
      >放入購物車</el-button
    >
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Card",
  props: ["cardData"],
  data() {
    return {
      name: "Card",
    };
  },
  computed: {
    ...mapState(["allGoods"]),
  },
  methods: {
    ...mapMutations(["plusCart"]),
    joinCart() {
      let plusItem = {};
      plusItem = this.allGoods.find((item) => {
        return item.G_Id == this.cardData.G_Id;
      });
      this.$store.commit("plusCart", plusItem);
    },
  },
  created() {
    console.log(this.cardData);
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 30%;
  // border: 0px solid #000;
  box-shadow: 0px 0px 9px #1b3302;
  margin-top: 7rem;
  img {
    width: 100%;
    padding-bottom: 10px;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 800;
  }
}
</style>
