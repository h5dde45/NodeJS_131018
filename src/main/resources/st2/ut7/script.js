let app = new Vue({
    el: "#app",
    data: {
        title: "Asd"
    },
    methods: {
        newTitle(){
            this.title = "zxc";
            console.log(this.$refs)
        }
    },
    computed: {}
});