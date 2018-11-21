<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{index}} {{product.title}}</h4>
      <p class="card-text">{{product.gt}} items for {{product.price}}</p>
      <a href="#" class="btn btn-primary" @click="viwDetails">View details</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
      },
      viewDetails: Function
    },
    data() {
      return {
        product: {},
        index: 1
      }
    },
    methods: {
      viwDetails(){
          this.viewDetails(this.product.id);
//        this.$emit("viwDetails", this.product.id)
      }
    }
  }
</script>

<style scoped>
  .card {
    width: 500px;
    border: 1px solid red;
    border-radius: 10px;
    margin: 10px;
  }
</style>
