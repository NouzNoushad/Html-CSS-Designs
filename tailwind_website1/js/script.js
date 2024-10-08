const mainNav = document.querySelector("header .main-nav");
const scrollBtn = document.querySelector(".scroll-btn");
const navBar = document.querySelector(".main-nav");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        mainNav.classList.add("sticky");
        scrollBtn.style.display = "block";
    } else {
        mainNav.classList.remove("sticky")
        scrollBtn.style.display = "none";
    }
}

menuBtn.onclick = function () {
    navBar.classList.add("active");
}

cancelBtn.onclick = function () {
    navBar.classList.remove("active");
}

const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {

    }
});