import Vue from "vue";
import _ from "lodash";

export default new Vue({
  data: {
    products: [
      {
        id: 1,
        title: "Product #1",
        price: 50,
        gt: 1000
      },
      {
        id: 2,
        title: "Product #2",
        price: 100,
        gt: 456
      },
      {
        id: 3,
        title: "Product #33",
        price: 23,
        gt: 2345
      }
    ]
  },
  methods:{
    viewDetails(id){
      let productToView = _.find(this.products, {id: id});
      this.$emit("viewDetailsSelect", productToView);
    }
  }
});
