let div = document.querySelector(".items .item");
let timer = new Timer(60, div);

setInterval(function () {
    timer.tick()
}, 1000);

function Timer(time, elem) {
    this.time = time;
    this.elem = elem;

    this.tick = function () {
        this.time--;
        this.elem.innerHTML = this.time;
    }
}

