$(document).ready(function() {
  const $slider = $(".c-slider");
  const options = {
    mobileFirst: true,
    infinite: true,
    swipeToSlide: true,
    prevArrow:
      '<button type="button" class="slick-arrow slick-prev"><i class="material-icons">' +
      "keyboard_arrow_left" +
      "</i></button>",
    nextArrow:
      '<button type="button" class="slick-arrow slick-next"><i class="material-icons">' +
      "keyboard_arrow_right" +
      "</i></button>"
  };
  const prizes = {
    slidesToShow: 3,
    appendArrows: $(".l-prizes__header"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6
        }
      }
    ]
  };

  if ($slider.length) {
    $slider.slick(Object.assign(options, prizes));
  }
});
