import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  actions:{
    loadProducts(context, products){
      context.commit("loadProducts", products)
    }
  },
  mutations: {
    loadProducts(state, payload){
      state.products = payload;
    }
  }
})
