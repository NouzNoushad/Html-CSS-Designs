const header = document.querySelector("header");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

const tSwiper = new Swiper('.tSwiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {},
});

const cSwiper = new Swiper('.mySwiper', {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {},
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        760: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        980: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});