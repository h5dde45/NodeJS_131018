<template>
  <div class="car">
    <h3>Name: {{carName}} \ {{reversName}}</h3>
    <p>Year: {{carYear}}</p>
    <button @click="changeName">Change name</button>
    <button @click="changeFunc()">Change from parent</button>
    <button @click="updateCounter">Update Counter</button>
  </div>
</template>

<script>
  import {eventEmitter} from "./main";

  export default {
    props: {
      carName: {
        type: String,
        default: "asd"
      },
      carYear: {
        type: Number,
        default: 22
      },
      changeFunc: Function
    },
    computed: {
      reversName(){
        return this.carName.split("").reverse().join('')
      }
    },
    methods: {
      changeName(){
        this.carName = "sdfffff";
        this.$emit("nameChanged", this.carName);
      },
      updateCounter(){
//        this.$emit("counterUpdated", this.counter+1);
        eventEmitter.$emit('counterUpdated',4);

      }
    }
  }
</script>

<style scoper>
  .car {
    border: 2px solid green;
    padding: 10px;
  }
</style>
