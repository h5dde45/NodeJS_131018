<template>
  <div>
    <app-counter></app-counter>
    <app-car :carName="carName"
             :carYear="carYear"
             :changeFunc="changeNTA"
             @nameChanged="carName = $event"
    ></app-car>
  </div>
</template>

<script>
  import Car from "./Car.vue";
  import Counter from "./Counter.vue";

  export default {
    data () {
      return {
        carName: "1234",
        carYear: 2011
      }
    },
    components: {
      appCar: Car,
      appCounter: Counter
    },
    methods: {
      changeNTA(){
        this.carName = "aaaa"
      }
    }
  }
</script>

<style>
  body {
    background: darkgray;
  }
</style>
