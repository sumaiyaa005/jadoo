$(document).ready(function () {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav",
    // autoplay: true,
    nextArrow: '<button class="fa-solid fa-angle-right"></button>',
    prevArrow: '<button class="fa-solid fa-angle-left"></button>',
  });
  $(".slider-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    // autoplay: true,
  });

  $("#owl-carousel").owlCarousel({
    // loop: false,
    margin: 30,
    items: 5,
    // autoplay: true,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        margin: 5,
        items: 3,
        nav: false,
        dots: false,
      },
      600: {
        margin: 10,
        items: 4,
        nav: false,
      },
      1000: {
        items: 5,
        nav: false,
        // loop: true,
      },
    },
  });
});
