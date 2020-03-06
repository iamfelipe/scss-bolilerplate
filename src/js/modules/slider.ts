// import * as $ from "jquery";

// eslint-disable-next-line import/prefer-default-export
export class Slider {
  globalSettings: object;

  DOM: { el: JQuery<HTMLElement> };

  settings: object;

  constructor(el: string) {
    this.DOM = { el: $(el) };
    this.globalSettings = {
      slidesToShow: 3,
      variableWidth: false,
      swipeToSlide: true,
      infinite: false,
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: "unslick"
        }
      ]
    };
    this.settings = {
      ...this.globalSettings
    };
    this.init();
    this.onScroll();
  }

  init() {
    // (<any>$("#sliderChallenges")).slick();
    this.DOM.el.slick(this.settings);
  }

  onScroll() {
    this.DOM.el.on("wheel", e => {
      e.preventDefault();

      if ((<any>e.originalEvent).deltaY < 0) {
        this.DOM.el.slick("slickNext");
      } else {
        this.DOM.el.slick("slickPrev");
      }
    });
  }
}
