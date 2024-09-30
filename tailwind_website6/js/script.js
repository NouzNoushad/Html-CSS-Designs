const nav = document.querySelector("nav");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const scrollBtn = document.querySelector(".scroll-btn")

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    } else {
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}

menuBtn.onclick = function() {
    nav.classList.add("active");
}

cancelBtn.onclick = function() {
    nav.classList.remove("active");
}

const tSwiper = new Swiper('.tSwiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {},
});