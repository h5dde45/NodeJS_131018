let x = 10;

function test() {
    console.log("mod number = ", x);
}

global.number=x;
global.func=test;