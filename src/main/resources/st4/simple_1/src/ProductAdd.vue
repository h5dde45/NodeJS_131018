<template>
  <div class="card p-3 ml-5">
    <form>
      <div class="form-group">
        <label for="title">title</label>
        <input type="text" class="form-control" id="title"
               placeholder="Enter title" v-model="product.title">
      </div>
      <div class="form-group">
        <label for="price">price</label>
        <input type="text" class="form-control" id="price"
               placeholder="Enter price" v-model="product.price">
      </div>
      <div class="form-group">
        <label for="qt">qt</label>
        <input type="text" class="form-control" id="qt"
               placeholder="Enter qt" v-model="product.qt">
      </div>
      <button class="btn btn-success" @click.prevent="addProduct">add Product</button>
    </form>
  </div>
</template>

<script>
  import ProductService from "./ProductService";

  export default {
    data() {
      return {
        product: {},
      }
    },
    methods: {
      addProduct(){
        ProductService.addProduct(this.product.title,this.product.price,this.product.gt);
      }
    }
  }
</script>

<style scoped>
  .card {
    width: 300px;
    border: 1px solid darkgreen;
    border-radius: 10px;
    margin: 10px;
    float: left;
  }
</style>
