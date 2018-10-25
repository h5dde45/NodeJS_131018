Vue.component("my-select", {
        props: ["title", "data", "val"],
        template: `<div class="orderLine__variants">
    <div class="orderLine_title">{{title}}</div>
    <select class="orderLine__size" @input="onUpdate($event.target.value)">
        <option value="0">Не выбран</option>
        <option v-for="(item, id_item) in data"
                :value="id_item">
            {{item.name}}
        </option>
    </select>
</div>`,
        methods: {
            onUpdate: function (val) {
                this.$emit("input", val)
            }
        }
    }
);

Vue.component("product", {
        props: ["prices"],
        template: `<div>
    <my-select title="Цвет:" :data="prices" v-model="id_color"></my-select>
    <my-select title="Размер:" v-if="isColor"></my-select>
    <div v-if="isSize">{{price}}</div>
    <div v-if="isSize">v korzinu</div>
</div>`,
        data: function () {
            return {
                id_color: "0",
                id_size: "0"
            }
        },
        computed: {
            isColor(){
                return this.prices[this.id_color] != undefined;
            },
            isSize(){
                return this.isColor &&
                    this.prices[this.id_color].sizes[this.id_size]
                    != undefined;
            },
            price(){
                return this.prices[this.id_color].sizes[this.id_size].price;
            }
        }
    }
);

Vue.component("product-container", {
        template: `<product :prices="prices"></product>`,
        data: function () {
            return {prices: mapFromSomewhere()}
        }
    }
);

let a = new Vue({
    el: ".orderLine"
});


/*
 let a = new Vue({
 el: ".orderLine",
 data: {
 prices: mapFromSomewhere(),
 id_color: "0",
 id_size: "0"
 },
 computed: {
 isColor(){
 return this.prices[this.id_color] != undefined;
 },
 isSize(){
 return this.isColor &&
 this.prices[this.id_color].sizes[this.id_size]
 != undefined;
 },
 price(){
 return this.prices[this.id_color].sizes[this.id_size].price;
 }
 },
 methods: {
 order(){
 console.log(this.id_color)
 console.log(this.id_size)
 }
 }
 });*/

console.log(a);

function mapFromSomewhere() {
    return {
        red: {
            name: "Красный",
            sizes: {
                s: {
                    name: "Маленький",
                    price: 1501
                },
                m: {
                    name: "Средний",
                    price: 2001
                },
                l: {
                    name: "Большой",
                    price: 2501
                }
            }
        },
        blue: {
            name: "Синий",
            sizes: {
                s: {
                    name: "Маленький",
                    price: 1502
                },
                m: {
                    name: "Средний",
                    price: 2002
                },
                l: {
                    name: "Большой",
                    price: 2502
                }
            }
        },
        green: {
            name: "Зеленый",
            sizes: {
                s: {
                    name: "Маленький",
                    price: 1503
                },
                m: {
                    name: "Средний",
                    price: 2003
                }
            }
        },
    }
}