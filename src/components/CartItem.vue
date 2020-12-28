<template>
  <div class="cartItem">
    <ul>
      <li>
        <img :src="require(`../assets/img/${cartData.G_Img}.jpg`)" alt="" />
      </li>
      <li>{{ cartData.G_Name }}</li>
      <li>{{ cartData.G_Unit }}</li>
      <li>{{ cartData.G_Price }}</li>
      <li>
        <el-input-number
          v-model="num"
          @change="handleChange"
          :min="1"
          :max="100000"
          label="描述文字"
        ></el-input-number>
      </li>
      <li>{{ cartData.G_Price * num }}</li>
      <li><i class="fas fa-trash-alt del" @click="del(cartData.G_Id)"></i></li>
    </ul>
  </div>
</template>

<script>
import { setLocal, getLocal } from "@/plugins/local";
import { mapMutations, mapState } from "vuex";
// import { DB_cartList } from "@/db/cartList";
export default {
  name: "CartItem",
  props: ["cartData"],
  data() {
    return {
      num: this.cartData.G_num || 1,
    };
  },

  methods: {
    ...mapMutations(["changeBuyNum", "delCartItem"]),
    handleChange(val) {
      console.log(val);
      this.cartData.G_num = val;
      this.$store.commit("changeBuyNum", this.cartData);
    },

    del(G_Id) {
      this.delCartItem(G_Id);
    },
  },
  // created() {
  //   let cartList = [];
  //   cartList = JSON.parse(getLocal("cartList"));
  //   // 當前購物商品
  //   this.cartObj = cartList.find((item) => {
  //     return item.G_Id == this.cartData.G_Id;
  //   });
  //   this.num = this.cartObj.G_num;
  // },
};
</script>

<style lang="scss" scoped>
.cartItem {
  padding: 1.2rem 0;
  border: 1px solid rgb(32, 56, 46);
  ul {
    display: flex;
    align-items: center;
    li {
      text-align: center;
      width: 20%;
      img {
        width: 60%;
      }

      .del {
        color: rgb(122, 24, 24);
        cursor: pointer;
      }
    }
  }
}
</style>
