new Vue({
    el: "#app",
    data: {
        formData: {
            firstname: "",
            lastname: "",
            url: "http://www.",
            badge: "",
            bookisbn: "",
            technologies: ""
        },
        showDetails: false,
        book: {
            title: "",
            url: ""
        }
    },
    computed: {
        fullname: function () {
            return this.formData.firstname + " "
                + this.formData.lastname;
        },
        parseTechno: function () {
            return this.formData.technologies.split(",");
        }
    },
    methods: {
        submit: function () {
            this.showDetails = true;
        }
    },
    watch: {
        // "formData.bookisbn": function () {
        //     let url = "http://crossorigin.me/http://openlibrary.org/api/books?bibkeys=ISBN:" + +this.formData.bookisbn + "&format=json&jscmd=data";
        //     let inst = this;
        //     $.getJSON(url, function (data) {
        //         inst.books.title = data["ISBN:" + inst.formData.bookisbn].title;
        //         inst.books.url = data["ISBN:" + inst.formData.bookisbn].cover.large;
        //     })
        // }
    }
});
