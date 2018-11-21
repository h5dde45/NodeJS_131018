import Vue from "vue";
import _ from "lodash";

export default new Vue({
  data: {
    products: [
      {
        id: 1,
        title: "p1",
        price: 11,
        gt: 111
      },
      {
        id: 2,
        title: "p2",
        price: 22,
        gt: 222
      },
      {
        id: 3,
        title: "p3",
        price: 33,
        gt: 333
      },
    ]
  },
  methods: {
    viewDetails(id){
      let product = _.find(this.products, {id: id});
      this.$emit("viewDetails", product)
    },
    addProduct(title, price, qt){
      let id = this.products[this.products.length - 1].id + 1;
      this.products.push({
        id,
        title,
        price,
        qt
      })
    }
  }
});
