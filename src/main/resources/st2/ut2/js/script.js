Vue.component("tg",{
    template:
        `<h1>Hi from component</h1>`
});

new Vue({
    el: "#app",
    data: {
        name: "asd",
        age: 33,
        currentBook: "Book 1",
        books: [],
        url: "https://yandex.ru/"
    },
    methods: {
        changeName: function () {
            this.name = 'zxc';
        },
        addBook: function () {
            this.books.push(this.currentBook);
        }
    },
    computed: {
        userInfo: function () {
            return this.name + " is " + this.age;
        }
    },
    watch: {
        name: function () {
            console.log(this.name)
        }
    }
});
