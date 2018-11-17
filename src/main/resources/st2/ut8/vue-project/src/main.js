import Vue from "vue";
import App from "./App.vue";
import ColorDirective from "./color";

Vue.filter("uppercase",(v) => v.toUpperCase());

new Vue({
  el: '#app',
  render: h => h(App)
});

