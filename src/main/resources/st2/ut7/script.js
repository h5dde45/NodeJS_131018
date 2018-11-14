let app = new Vue({
    el: "#app",
    data: {
        title: "Asd"
    },
    methods: {},
    computed: {}
});
let app2 = new Vue({
    el: "#app2",
    data: {
        title: "Asd"
    },
    methods: {
        update(){
            app.title = "zxc";
        }
    },
    computed: {}
});