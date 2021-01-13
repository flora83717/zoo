import Vue from "vue";
import Vuex from "vuex";
import { setLocal, getLocal, removeLocal } from "@/plugins/local";
// import { DB_cartList } from "@/db/cartList";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartList: JSON.parse(getLocal("cartList")) || [],
    allGoods: [],
    totalBuy: 0,
    isCartNull: true,
    w: "",
  },
  mutations: {
    getW(state, payload) {
      state.w = payload;
    },
    plusCart(state, payload) {
      // 購物車商品
      // let cartList = JSON.parse(getLocal("cartList")) || [];
      // console.log(cartList);
      // 是否重複
      let RepeatItemIndex = -3;
      // 找到顯示該索引值，否則返回-1
      RepeatItemIndex = state.cartList.findIndex((shopped) => {
        return shopped.G_Id == payload.G_Id;
      });
      console.log(RepeatItemIndex);
      // 沒有重複直接加入購物車
      if (RepeatItemIndex == -1) {
        // payload.G_num = 1;
        this._vm.$set(payload, "G_num", 1);
        state.cartList.push(payload);
      } else {
        // 有重複則購物車商品數量+1
        state.cartList[RepeatItemIndex].G_num += 1;
        // DB_cartList[RepeatItemIndex].G_num += 1;
      }
      // 存本地
      setLocal("cartList", JSON.stringify(state.cartList));
      state.isCartNull = false;
    },
    getAllGoods(state, payload) {
      state.allGoods = payload;
    },
    // 改變商品購買數量
    changeBuyNum(state, payload) {
      // 購物車商品
      // let cartList = JSON.parse(getLocal("cartList")) || [];
      let cartObjIndex = -3;
      // 找到對應的INDEX
      cartObjIndex = state.cartList.findIndex((item) => {
        return item.G_Id == payload.G_Id;
      });
      state.cartList[cartObjIndex].G_num = payload.G_num;
      setLocal("cartList", JSON.stringify(state.cartList));
    },
    // 刪除購物車商品
    delCartItem(state, payload) {
      let delItemIndex = -3;
      delItemIndex = state.cartList.findIndex((item) => {
        return item.G_Id == payload;
      });
      if (delItemIndex == -1) {
        return;
      }
      console.log(delItemIndex);
      state.cartList.splice(delItemIndex, 1);
      setLocal("cartList", JSON.stringify(state.cartList));
      if (state.cartList.length === 0) {
        state.isCartNull = true;
      }
    },
    // 清除購物車
    clearCart(state) {
      console.log(123);
      state.cartList = [];
      state.isCartNull = true;
      removeLocal("cartList");
    },
  },
  getters: {
    totalNum(state) {
      let total = 0;
      state.cartList.forEach((item) => {
        total += item.G_num;
      });
      return total;
    },

    totalFee(state) {
      let totalfee = 0;
      state.cartList.forEach((item) => {
        totalfee += item.G_num * item.G_Price;
      });
      console.log(totalfee);
      return totalfee;
    },
    WIDTH(state) {
      return state.w - 0;
    },
  },
  actions: {},
  modules: {},
});
