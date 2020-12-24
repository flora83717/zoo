<template>
  <div class="cartItem">
    <ul>
      <img src="" alt="" />
      <li>商品名稱</li>
      <li>單位</li>
      <li>數量</li>
      <li>小計</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: ["cartData"],
};
</script>

<style lang="scss" scoped>
.cartItem {
  border: 1px solid #ccc;
  height: 50px;
  ul {
    display: flex;
    li {
      width: 20%;
    }
  }
}
</style>
