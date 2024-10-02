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
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        760: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        980: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});