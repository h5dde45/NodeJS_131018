Vue.filter("toUppercase", function (value) {
    return value.toUpperCase();
});

new Vue({
    el: "#app",
    data: {
        text: "asd"
    },
    filters: {
        "reverse": function (value) {
            return value.split("").reverse().join("");
        }
    }
});
