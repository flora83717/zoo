<template>
  <div id="header">
    <div id="left_header">
      <router-link tag="div" to="/" id="logo">
        <img src="../../assets/img/logo.png" alt="" />
      </router-link>
    </div>
    <div id="right_header">
      <ul>
        <router-link tag="li" to="/zoo/zone">館區介紹</router-link>
        <!-- <router-link to="/animalData">動物影音</router-link> -->
        <router-link tag="li" to="/zoo/animalData/mammals/A0001"
          >動物百科</router-link
        >
        <router-link tag="li" to="/zoo/onlineBuy">線上購票</router-link>
        <el-badge :value="totalNum" class="item">
          <router-link tag="li" to="/zoo/cart">
            <i class="fas fa-cart-plus"></i>
          </router-link>
        </el-badge>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { setLocal, getLocal } from "@/plugins/local";
// import { DB_cartList } from "@/db/cartList";
export default {
  name: "Header",
  data() {
    return {
      localCart: [],
    };
  },
  computed: {
    ...mapState(["cartList"]),
    totalNum() {
      let total = 0;
      this.localCart.forEach((item) => {
        console.log(item);
        total += item.G_num;
        console.log(total);
      });
      return total;
    },
  },
  created() {
    this.localCart = JSON.parse(getLocal("cartList")) || [];
  },
};
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  justify-content: space-around;
  background-color: #1b3302;
  width: 100%;
  height: 5rem;
  #left_header {
    #logo {
      cursor: pointer;
    }
  }
  #right_header {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      li {
        cursor: pointer;
        padding: 0 10px;
        list-style: none;
        font-size: 1.2rem;
        color: #fff;
        .item {
          margin-top: 10px;
          margin-right: 40px;
        }
      }
    }
  }
}
</style>
