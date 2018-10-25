let items = document.querySelectorAll(".items .item");

for(let i=0; i<items.length;i++) {
    items[i].onclick = activeItem;
}

function activeItem() {
    this.classList.toggle("item-active")
}

// setInterval(activeItem, 500);


