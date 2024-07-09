var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});


// nav controller
const body = document.querySelector('body');
const navMenu = body.querySelector('.menu-content');
const navOpenBtn = body.querySelector('#navOpen-btn');
const navCloseBtn = body.querySelector('#navClose-btn');

if (navMenu && navOpenBtn) {
    navOpenBtn.addEventListener("click", () => {
        navMenu.classList.add('open');
        body.style.overflowY = "hidden";
    })
}

if (navMenu && navCloseBtn) {
    navCloseBtn.addEventListener("click", () => {
        navMenu.classList.remove('open');
        body.style.overflowY = "scroll";
    })
}


// Header background color
window.addEventListener("scroll", () => {

    const scrollY = window.pageYOffset;

    if (scrollY > 5) {
        document.querySelector("header").classList.add("header-active");
    } else {
        document.querySelector("header").classList.remove("header-active");
    }

    // Scroll up button
    const scrollUpBtn = document.querySelector(".scrollUp-btn");

    if(scrollY > 250){
        scrollUpBtn.classList.add("scrollUpBtn-active");
    }else{
        scrollUpBtn.classList.remove("scrollUpBtn-active");
    }

    // nav link indicator
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;

        let navId = document.querySelector(`.menu-content a[href='#${section.id}']`);
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navId.classList.add("active-navlink");
        } else {
            navId.classList.remove("active-navlink");
        }

        navId.addEventListener("click", () => {
            navMenu.classList.remove("open");
            body.style.overflowY = "scroll";
        })
    })
})