Vue.component("app-progress", {
    props: {
        max: Number,
        val: Number
    },
    computed: {
        width(){
            let w = this.val / this.max * 100;
            if (w > 100) {
                w = 100;
            }
            return {
                width: w + "%"
            }
        }
    },
    template: `<div class="progress">
<div class="progress-bar" v-bind:style="width">

</div>
</div>`
});

let sample = new Vue({
    el: ".sample",
    data: {
        showH2: true,
        numbers: [],
        maxNumbers: 5
    },
    methods: {
        addNumber(){
            if (!this.done) {
                let rnd = Math.floor(Math.random() * 11) - 5;
                this.numbers.push(rnd)
            }
        }
    },
    computed: {
        sum(){
            console.log(1);
            let sum = 0;
            for (let i = 0; i < this.numbers.length; i++) {
                sum += this.numbers[i];
            }
            return sum;
        },
        btnText(){
            return this.showH2 ? 'hide' : 'show';
        },
        done(){
            return this.numbers.length >= this.maxNumbers;
        }
    }
});