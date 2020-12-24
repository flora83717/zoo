import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartList: [],
    allGoods: [],
  },
  mutations: {
    plusCart(state, payload) {
      state.cartList.push(payload);
    },
    getAllGoods(state, payload) {
      state.allGoods = payload;
    },
  },
  actions: {},
  modules: {},
});
