<template>
  <div>
    <h1>Product detail</h1>
    <h3>Title {{product.title}}</h3>
    <h3>Price ${{product.price}}</h3>
    <h3>Quantity {{product.gt}}</h3>
  </div>
</template>

<script>
  import ProductService from "./ProductService"

  export default{
    data(){
      return {
        product: {}
      }
    },
    created(){
      ProductService.$on("viewDetailsSelect",  (selectedProduct) => {
        this.product = selectedProduct;
      })
    }
  }
</script>


<style scoped>
  div {
    width: 500px;
    border: 1px solid red;
    border-radius: 10px;
    margin: 10px;
    background: grey;
    padding: 20px;
  }
</style>
