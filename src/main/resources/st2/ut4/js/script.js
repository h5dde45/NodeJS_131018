let one = Vue.component("greet", {
    template: `
<h2>{{title}}
<button @click="ch">ch</button>
</h2> 
`,
    data(){
        return{
            title:"asd"
        }
    },
    methods:{
        ch(){
            this.title="fffffffffffffffff"
        }
    }
});

new Vue({
    el: "#app",
    data: {
        title:"asd"
    },
    computed: {},
    methods: {
        chng(){
            this.title=this.$refs.input.value;
        }
    }
});
