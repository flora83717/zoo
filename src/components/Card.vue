<template>
  <div class="card">
    <img :src="require(`../assets/img/${cardData.G_Img}.jpg`)" alt="" />
    <h3 class="title">{{ cardData.G_Name }}</h3>

    <el-button type="success" @click="joinCart(cardData.G_Id)"
      ><span>放入購物車</span></el-button
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
  border: 3px solid rgba(36, 61, 8, 0.678);
  display: flex;
  justify-content: center;
  // flex-direction: column;
  // height: 270px;
  width: 23%;
  // box-shadow: 0px 0px 5px #1b3302;
  margin-top: 7rem;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  img {
    width: 100%;
    height: 100%;
  }

  .title {
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
    padding: 2rem;
  }

  .el-button {
    // border-radius: 10px;
    width: 100%;
    span {
      display: inline-block;
      font-size: 1.2rem;
    }
  }

  .el-button--success {
    background-color: #4e962a7e;
  }
}
</style>
