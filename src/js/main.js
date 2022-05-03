import $ from "jquery";

import "slick-carousel";

import "../scss/main.scss";
import "../index.html";

// burgerMenu
function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".nav__burger");
  let links = menu.find(".nav__item-link");
  let title = $(".nav__title");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on("click", () => toggleMenu());

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
$(".control").on("click", function (e) {
  e.preventDefault();
  let $this = $(this);
  if (!$this.hasClass("activ_control")) {
    $(".accordion__body").slideUp(400);
    $(".control").removeClass("activ_control");
  }
  $this.toggleClass("activ_control");
  $this.parent().next().slideToggle();
});

// slider

$(".slider__aside").slick({
  arrows: false,
  dots: true,
  speed: 800,
  fade: true,
  cssEase: "linear",
  initialSlide: 1,
});



