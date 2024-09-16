const swiper = new Swiper('.mySwiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {}
});

const navContent = document.querySelector(".navbar .nav-content");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const nav = document.querySelector("nav");

menuBtn.onclick = function () {
    navContent.classList.add("active");
}

cancelBtn.onclick = function () {
    navContent.classList.remove("active");
}

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}
