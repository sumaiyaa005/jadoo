$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
  autoplay: true,
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
  autoplay: true,
});

$(".multiple-items").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 3,
  arrows: false,
  autoplay: true,
});
