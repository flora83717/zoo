<template>
  <div id="header">
    <div id="left_header">
      <router-link tag="div" to="/" id="logo">
        <img src="../../assets/img/logo.png" alt="" />
      </router-link>
    </div>
    <div id="right_header" v-if="rwdW > 768">
      <ul>
        <router-link tag="li" to="/zoo/zone">館區介紹</router-link>
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
    <!-- 移動端頭部 -->
    <div class="mob_Header" v-else>
      <i
        class="el-icon-s-unfold icon"
        @click="isShowMobHeader = !isShowMobHeader"
      ></i>
    </div>
    <transition name="mobMenu">
      <ul class="menu" v-show="isShowMobHeader">
        <router-link tag="li" to="/zoo/zone">館區介紹</router-link>
        <router-link tag="li" to="/zoo/animalData/mammals/A0001"
          >動物百科</router-link
        >
        <router-link tag="li" to="/zoo/onlineBuy">線上購票</router-link>
        <router-link tag="li" to="/zoo/cart">
          購物車
        </router-link>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { setLocal, getLocal } from "@/plugins/local";
// import { DB_cartList } from "@/db/cartList";
export default {
  name: "Header",
  data() {
    return {
      localCart: [],
      // width: this.w,
      isShowMobHeader: false,
    };
  },
  computed: {
    ...mapState(["cartList"]),
    ...mapGetters(["totalNum", "WIDTH"]),
    // 計算瀏覽器寬高
    rwdW() {
      console.log(this.WIDTH);
      return this.WIDTH;
    },
  },
  mounted() {
    this.width = this.w;
    console.log(this.width);
  },
};
</script>

<style lang="scss" scoped>
.mobMenu-enter-active,
.mobMenu-leave-active {
  transition: opacity 0.5s;
}

.mobMenu-enter,
.mobMenu-leave-to {
  opacity: 0;
}

#header {
  position: relative;
  display: flex;
  justify-content: space-around;
  background-color: #203608;
  // background-color: transparent;
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

  .mob_Header {
    display: flex;
    align-items: center;
    .icon {
      font-size: 3rem;
      color: #fff;
      cursor: pointer;
    }
  }

  .menu {
    position: absolute;
    top: 85px;
    width: 100%;
    z-index: 999;
    display: flex;
    flex-direction: column;
    // align-items: center;
    li {
      background-color: rgb(233, 175, 68);
      font-size: 1.3rem;
      font-weight: 700;
      padding: 10px 0;
      cursor: pointer;
      text-align: center;
      width: 100%;
      &:nth-child(2n + 1) {
        background-color: rgb(124, 147, 223);
      }
    }
  }
}
</style>
