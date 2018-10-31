<template>
  <div>
    <ProductItem v-for="(product,i) in products"
                 :key="product.id" :product="product"
                 :index="(i+1)" @viewDetails="viewDetailsList"
    ></ProductItem>
  </div>
</template>

<script>
  import ProductItem from "./ProductItem.vue"
  import _ from "lodash"

  export default{
    data: function () {
      return {
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
      }
    },
    components: {
      ProductItem
    },
    methods: {
      viewDetailsList(id){
        let productToView = _.find(this.products, {id: id});
        this.$emit("viewDetailsList", productToView);
      }
    }
  }
</script>
