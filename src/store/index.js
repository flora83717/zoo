import Vue from "vue";
import Vuex from "vuex";
import { setLocal, getLocal } from "@/plugins/local";
// import { DB_cartList } from "@/db/cartList";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartList: [],
    allGoods: [],
    totalBuy: 0,
  },
  mutations: {
    plusCart(state, payload) {
      // 購物車商品
      let cartList = JSON.parse(getLocal("cartList")) || [];
      console.log(cartList);
      // 是否重複
      let RepeatItemIndex = 0;

      RepeatItemIndex = cartList.findIndex((shopped) => {
        return shopped.G_Id == payload.G_Id;
      });
      console.log(RepeatItemIndex);
      // 沒有重複直接加入購物車
      if (RepeatItemIndex == -1) {
        payload.G_num = 1;
        state.cartList.push(payload);
      } else {
        // 有重複則購物車商品數量+1
        state.cartList[RepeatItemIndex].G_num += 1;
        // DB_cartList[RepeatItemIndex].G_num += 1;
      }
      setLocal("cartList", JSON.stringify(state.cartList));
    },
    getAllGoods(state, payload) {
      state.allGoods = payload;
    },
    // 改變商品購買數量
    changeBuyNum(state, payload) {
      // 購物車商品
      let cartList = JSON.parse(getLocal("cartList")) || [];
      let cartObjIndex = 0;
      cartObjIndex = cartList.findIndex((item) => {
        return item.G_Id == payload.G_Id;
      });

      state.cartList[cartObjIndex] = payload;
      setLocal("cartList", JSON.stringify(state.cartList));
    },
  },
  actions: {},
  modules: {},
});
