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
import { getLocal } from "@/plugins/local";
export default {
  name: "Card",
  props: ["cardData"],
  data() {
    return {
      name: "Card",
    };
  },
  computed: {
    ...mapState(["allGoods", "cartList"]),
  },
  methods: {
    ...mapMutations(["plusCart"]),
    joinCart(id) {
      //欲購商品
      let plusItem = {};
      // 找出欲購商品
      plusItem = this.allGoods.find((item) => {
        // return item.G_Id == this.cardData.G_Id;
        return item.G_Id == id;
      });

      this.$store.commit("plusCart", plusItem);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 23%;
  box-shadow: 0px 0px 9px #1b3302;
  margin-top: 7rem;
  img {
    width: 100%;
    padding-bottom: 10px;
  }

  .title {
    font-size: 1.8rem;
    font-weight: 800;
  }
}
</style>
