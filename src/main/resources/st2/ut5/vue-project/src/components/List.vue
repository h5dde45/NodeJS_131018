<template>
  <ul>
    <li v-for="person in people">
      {{person}}
    </li>
  </ul>
</template>

<script>

  export default {
    props: {
      people: {
        type: Array
      }
    },
    data(){
      return {
        message: ""
      }
    },
    methods:{
        saveMessage(){
            bus.$emit("message", this.message);
            this.message=""
        }
    }
  }
</script>

<style>
h2{
  color: darkred;
}
</style>
