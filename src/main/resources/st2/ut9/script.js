Vue.component("comp_1", {
    template: `<h1>zxc</h1>`
});

new Vue({
    el: "#app",
    data: {
        name: "asd",
        age: 34,
        url: 'https://ya.ru/',
        currentBook: 'newBook',
        books: []
    },
    methods: {
        changeName(){
            this.name = "qwe"
        },
        addBook(){
            this.books.push(this.currentBook)
        }
    },
    computed: {
        userInfo(){
            this.age++;
            return this.name + " - " + this.age
        }
    },
    watch: {
        name(){
            // alert(this.name)
        }
    }
});