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