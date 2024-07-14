const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");


menuBtn.onclick = function () {
    navBar.classList.add("active");
}

cancelBtn.onclick = function () {
    navBar.classList.remove("active");
}