import $ from "jquery";

import "../scss/main.scss";
import "../index.html";

// burgerMenu
function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".nav__burger");
  let links = menu.find(".nav__item-link");
  let title = $(".nav__title");
  // let overlay = menu.find(".header__menu");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on("click", () => toggleMenu());
  // overlay.on("click", () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("mobileMenu-visible");
    title.toggleClass("nav__title--inMenu");

    if (menu.hasClass("mobileMenu-visible")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "visible");
    }
  }
}

burgerMenu(".header__menu");

// accordion
$(".control").on("click", function(e) {
  e.preventDefault();
  let $this = $(this);
  if (!$this.hasClass("activ_control")) {
    $(".acardion__body").slideUp(400);
    $(".control").removeClass("activ_control");
  }
  $this.toggleClass("activ_control");
  $this.parent().next().slideToggle();
});
