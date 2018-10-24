let item = document.querySelector(".items .item");

item.onclick=function () {
    // this
};
activeItem();
function activeItem() {
    console.log(this);
}
