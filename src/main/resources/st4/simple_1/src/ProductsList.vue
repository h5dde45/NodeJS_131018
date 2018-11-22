<template>
  <div class="d3">
    <router-link to="/add" class="btn btn-info">Add product</router-link>
    <ProductItem v-for="(product,i) in products"
                 :key="product.id" :product="product"
                 :index="i+1" >
    </ProductItem>
  </div>
</template>

<script>
  import ProductItem from "./ProductItem.vue";
  import ProductService from "./ProductService";

  export default {
    data(){
      return {
        products: []
      }
    },
    components: {
      ProductItem
    },
    created(){
      this.products = ProductService.products
    }
  }
</script>

<style scoped>
  .d3 {
    width: 300px;
    float: left;
  }
</style>
