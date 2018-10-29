let f1 = function () {
    alert(444);
};
let f2 = function () {
    alert("kot");
};
document.querySelector(".btn ").onclick = f1;
document.querySelector("p").onclick = f1;
document.querySelector("#e").onclick = f1;
document.querySelector("img").onclick = f2;



