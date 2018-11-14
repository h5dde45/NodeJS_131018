let tttt = new Vue({
    el: "#app",
    data: {
        counter: 0,
        title: ""
    },
    methods: {
        plus(n, n1){
            this.counter += n;
            this.title = "+ " + n + ":";
            if (n === 5) {
                n1.target.style.color = "blue"
            } else {
                n1.target.style.color = "green"
            }
        },
        minus(){
            this.counter--;
        },
        newColor(p){
            p.target.style.background = 'red'
        }
    }
});