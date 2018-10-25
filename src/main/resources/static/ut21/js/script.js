let btnShow = document.querySelector(".show-alert");
let btnHide = document.querySelector(".hide-alert");
let  divAlert= document.querySelector(".animTarget");

btnHide.addEventListener("click",function () {
    divAlert.classList.add("fade-leave-active");
    divAlert.addEventListener("transitionend",function () {
        divAlert.style.display="none"
    })

});
