<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{index}}. {{product.title}}</h4>
      <p class="card-text">{{product.gt}} items for {{product.price}}</p>
      <a href="#" class="btn btn-success"
         @click="viewDetailsClicked">Vue details</a>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      product: {
        type: Object,
        required: true
      },
      index: {
        type: Number
      }
    },
    data() {
      return {}
    },
    methods: {
      viewDetailsClicked(){
        this.$emit("viewDetails", this.product.id);
      }
    }
  }
</script>

<style>
  div.card {
    width: 500px;
    border: 1px solid red;
    border-radius: 10px;
    margin: 10px;
  }
</style>
