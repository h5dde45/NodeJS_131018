function f1() {
    this.connect = () => {
        console.log("f1 ");
    }
}

function f2() {
    console.log("f2 ");
    new f1().connect();
}

if (module.parent) {
    module.exports = f1;
} else {
    f2();
}