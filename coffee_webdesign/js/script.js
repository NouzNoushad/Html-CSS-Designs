// nav controller
const body = document.querySelector('body');
const navMenu = body.querySelector('.menu-content');
const navOpenBtn = body.querySelector('#navOpen-btn');
const navCloseBtn = body.querySelector('#navClose-btn');

if(navMenu && navOpenBtn){
    navOpenBtn.addEventListener("click", () => {
        navMenu.classList.add('open');
        body.style.overflowY = "hidden";
    })
}

if(navMenu && navCloseBtn){
    navCloseBtn.addEventListener("click", () => {
        navMenu.classList.remove('open');
        body.style.overflowY = "scroll";
    })
}