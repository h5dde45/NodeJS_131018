<template>
  <div>
    <h1>Product detail</h1>
    <h3>Title {{product.title}}</h3>
    <h3>Price ${{product.price}}</h3>
    <h3>Quantity {{product.qt}}</h3>
    <router-link :to='{name:"home"}'>go to list</router-link>
  </div>
</template>

<script>
  import ProductService from "./ProductService"

  export default{
    props: ["staticText"],
    data(){
      return {
        product: {}
      }
    },
    created(){
      ProductService.$on("viewDetailsSelect", (selectedProduct) => {
        this.product = selectedProduct;
      })
    },
    mounted(){
      ProductService.viewDetails(this.$route.params.id);
    },
    watch: {
      "$route.params.id"(id){
        ProductService.viewDetails(id);
      }
    }
  }
</script>


<style scoped>
  div {
    width: 450px;
    border: 1px solid red;
    border-radius: 10px;
    margin: 10px;
    background: grey;
    padding: 20px;
  }
</style>
