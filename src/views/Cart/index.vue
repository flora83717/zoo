<template>
  <div class="cartList">
    <div class="list">
      <CartItem v-for="item in cartList" :key="item.G_Id" :cartData="item" />
    </div>
    <div class="payment">
      <ul class="box">
        <li>總價</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CartItem from "@/components/CartItem";
export default {
  name: "Cart",
  computed: {
    ...mapState(["cartList"]),
  },
  components: {
    CartItem,
  },
};
</script>

<style></style>
