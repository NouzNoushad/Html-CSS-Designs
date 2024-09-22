const header = document.querySelector("header");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}