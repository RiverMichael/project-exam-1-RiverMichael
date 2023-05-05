// Nav on Scroll
const nav = document.querySelector("nav");
const navLogo = document.querySelector(".navlogo");


function handleScroll() {
    const scrollY = window.scrollY;

    if (scrollY > 116) {
        nav.classList.add("scrolled");
        navLogo.classList.add("display-navlogo");
    } else {
        nav.classList.remove("scrolled");
        navLogo.classList.remove("display-navlogo");
    };
};
window.addEventListener("scroll", handleScroll);