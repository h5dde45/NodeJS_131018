new Vue({
    el: "#app",
    data: {
        firstName: "",
        secondName: "",
    },
    methods: {
        submit(){
            alert(this.fullname)
        }
    },
    computed: {
        fullname(){
            return this.firstName +" "+ this.secondName;
        }
    },
    watch: {}
});