let btnShow = document.querySelector(".show-alert");
let btnHide = document.querySelector(".hide-alert");
let  divAlert= document.querySelector(".animTarget");

btnHide.addEventListener("click",function () {
    divAlert.classList.add("fa-leave-active");
    let handler = function () {
        divAlert.style.display="none";
        divAlert.classList.remove("fa-leave-active");
        divAlert.removeEventListener("transitionend",handler);
    };
    divAlert.addEventListener("transitionend",handler)
});

btnShow.addEventListener("click",function () {
    divAlert.style.display="block";
    divAlert.classList.add("fa-enter-active");

});
