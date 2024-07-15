const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const header = document.querySelector("header");


menuBtn.onclick = function () {
    navBar.classList.add("active");
}

cancelBtn.onclick = function () {
    navBar.classList.remove("active");
}

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
}