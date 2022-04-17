import $ from "jquery";

import "../scss/main.scss";
import "../index.html";

// burgerMenu
function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".nav__burger");
  let links = menu.find(".nav__item-link");
  //   let overlay = menu.find(".header__menu");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on("click", () => toggleMenu());
  overlay.on("click", () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("burger-active");

    if (menu.hasnClass(" burger-active")) {
      $("body").scss("hidden");
    } else {
      $("body").scss("visible");
    }
  }
}

burgerMenu(".header__menu");
