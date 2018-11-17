<template>
  <div class="container">
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" id="email"
               class="form-control "
               :class="{'is-invalid': $v.email.$error}"
               @blur="$v.email.$touch()"
               v-model="email">
        <div class="invalid-feedback" v-if="!$v.email.required">
          Email field is required
        </div>
        <div class="invalid-feedback" v-if="!$v.email.email">
          This field is email
        </div>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password"
               class="form-control "
               :class="{'is-invalid': $v.password.$error}"
               @blur="$v.password.$touch()"
               v-model="password">
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Password > {{$v.password.$params.minLength.min}}. Now it is {{password.length}}
        </div>
      </div>
    </form>

  </div>
</template>

<script>
  import {required, email, minLength} from 'vuelidate/lib/validators'

  export default {
    data(){
      return {
        email: "",
        password: ""
      }
    },
    validations: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  }
</script>

<style>
  body {
    background: darkgray;
  }

</style>
