const hamburgerMenu = document.querySelector("#hamburger-icon");
const nav = document.querySelector("nav");
const navLogo = document.querySelector(".navlogo");

hamburgerMenu.addEventListener("click", toggleNavigation);
window.addEventListener("scroll", handleScroll);

// Toggle Hamburger Menu
/**
 * Toggles the display of the navigation menu on/off
 * @example
 * const hamburgerMenu = document.querySelector("#hamburger-icon");
 * hamburgerMenu.addEventListener("click", toggleNavigation);
 */
function toggleNavigation() {
  nav.classList.toggle("display-nav");
}

// Nav on Scroll
/**
 * Changes the look of the navigation menu when scrolling
 * @example
 * window.addEventListener("scroll", handleScroll);
 */
function handleScroll() {
  const scrollY = window.scrollY;

  if (scrollY > 116) {
    nav.classList.add("scrolled");
    navLogo.classList.add("display-navlogo");
  } else {
    nav.classList.remove("scrolled");
    navLogo.classList.remove("display-navlogo");
  }
}
