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

menuBtn.onclick = function () {
    nav.classList.add("active");
}

cancelBtn.onclick = function () {
    nav.classList.remove("active");
}

const tSwiper = new Swiper('.tSwiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {},
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

const cSwiper = new Swiper('.mySwiper', {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {},
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        490: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        760: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        980: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
});