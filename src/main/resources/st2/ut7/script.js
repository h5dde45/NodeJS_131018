let tttt = new Vue({
    el: "#app",
    data: {
        counter: 0
    },
    methods: {
        plus(){
            this.counter++;
        },
        minus(){
            this.counter--;
        },
        newColor(p){
            p.target.style.background = 'red'
        }
    }
});