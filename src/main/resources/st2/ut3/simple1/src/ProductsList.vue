<template>
  <div>
    <router-link to="/add?text=hi" class="btn btn-success">Add product</router-link>
    <ProductItem v-for="(product,i) in products"
                 :key="product.id" :product="product"
                 :index="(i+1)"></ProductItem>
  </div>
</template>

<script>
  import ProductItem from "./ProductItem.vue"
  import ProductService from "./ProductService"


  export default{
    data(){
      return {

      }
    },
    computed:{
      products(){
          return this.$store.state.products;
      }
    },
    components: {
      ProductItem
    },
    created(){
//      this.products = ProductService.products;
      this.$store.commit("loadProducts", ProductService.products );
    }
  }
</script>
