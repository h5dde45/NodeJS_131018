<template>
  <div class="d3">
    <ProductItem v-for="(product,i) in products"
                 :key="product.id" :product="product"
                 :index="i+1" :viewDetails="viewDetails">
    </ProductItem>
  </div>
</template>

<script>
  import ProductItem from "./ProductItem.vue";
  import _ from "lodash";

  export default {
    data() {
      return {
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
      }
    },
    components: {
      ProductItem
    },
    methods: {
      viewDetails(id){
          let product=_.find(this.products,{id:id});
        this.$emit("viwDetails", product)
      }
    }
  }
</script>

<style scoped>
  .d3{
    width: 500px;
    float: left;
  }
</style>
