import bsCustomFileInput from "bs-custom-file-input";

$(document).ready(function() {
  bsCustomFileInput.init();
  $("select").selectpicker({
    style: "",
    styleBase: "form-control"
    // liveSearch: true
  });
  $(".c-slider").slick({
    mobileFirst: true,
    variableWidth: true,
    arrows: true,
    prevArrow: `<button type="button" class="slick-arrow slick-prev"><i class="material-icons">
keyboard_arrow_left
</i></button>`,
    nextArrow: `<button type="button" class="slick-arrow slick-next"><i class="material-icons">
keyboard_arrow_right
</i></button>`,
    infinite: true,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          variableWidth: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false
        }
      }
    ]
  });
});
