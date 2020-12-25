<template>
  <div class="cartList">
    <div class="list_title">
      <ul>
        <li>圖片</li>
        <li>商品</li>
        <li>單位</li>
        <li>價格</li>
        <li>數量</li>
        <li>小計</li>
        <li>操作</li>
      </ul>
    </div>
    <div class="list">
      <CartItem v-for="item in cartList" :key="item.G_Id" :cartData="item" />
    </div>
    <div class="payment">
      <ul class="box">
        <li>總價</li>
        <li>10000</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import CartItem from "@/components/CartItem";
import { getLocal } from "@/plugins/local";
// import { DB_cartList } from "@/db/cartList";
export default {
  name: "Cart",
  data() {
    return {
      cartList: [],
    };
  },
  components: {
    CartItem,
  },
  mounted() {
    this.cartList = JSON.parse(getLocal("cartList"));
    console.log(this.cartList);
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.cartList {
  margin: 0 auto;
  width: 80%;
  margin-top: 7rem;
  .list_title {
    ul {
      // margin: 0 15px;
      border: 5px solid #000;
      padding: 30px 10px;
      display: flex;
      li {
        text-align: center;
        font-size: 1.2rem;
        font-weight: 800;
        width: 20%;
      }
    }
  }

  .payment {
    border: 2px double red;
    height: 80px;
    .box {
      height: 100%;
      li {
        width: 15%;
        float: right;
        text-align: center;
      }
    }
  }
  .list {
  }
}
</style>
