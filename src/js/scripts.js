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
    // centerMode: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          variableWidth: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      }
    ]
  });
});
