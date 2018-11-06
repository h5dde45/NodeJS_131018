<template>
  <form method="post">
    <h2>Authorization</h2>
    <p>
      <label for="password">Password:</label>
      <input id="password" type="text" value="">
    </p>
    <p>
      <label for="mail">Email:</label>
      <input id="mail" type="text" value="">
    </p>
    <button type="button" name="button">Login </button>
  </form>
</template>
<script>
export default{
    data(){
        return {

        }
    }
}
</script>
<style scoped>
  h2 {
    text-align: center;
  }
  form{
    width: 200px;
    margin: 20px;
    padding: 20px;
    border: 1px solid black;
  }
  label{
    margin: 5px;
    display: block;
  }
  button{
    margin-top: 5px;
  }
</style>
