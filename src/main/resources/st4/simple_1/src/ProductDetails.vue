<template>
  <div class="product ml-4 p-3">
    <h2>Product details</h2>
    <div>
      <label>Title</label>
      <span>{{product.title}}</span>
    </div>
    <div>
      <label>Price</label>
      <span>{{product.price}}</span>
    </div>
    <div>
      <label>Quantity</label>
      <span>{{product.qt}}</span>
    </div>
    <router-link :to="{name:'home'}">go to list</router-link>
  </div>
</template>

<script>
  import ProductService from "./ProductService";

  export default {
    data(){
      return {
        product: {}
      }
    },
    created()
    {
      ProductService.$on("viewDetails", (selectedProduct) => {
        this.product = selectedProduct
      });
    },
    mounted(){
        ProductService.viewDetails(this.$route.params.id)
    },
    watch:{
        '$route.params.id'(id){
          ProductService.viewDetails(this.$route.params.id)
        }
    }
  }
</script>

<style scoped>
  .product {
    width: 300px;
    border: 1px solid red;
    border-radius: 10px;
    margin: 10px;
    float: left;
    background: #EAF2F5;
  }
</style>
