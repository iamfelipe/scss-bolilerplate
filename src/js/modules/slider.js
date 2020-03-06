"use strict";
// import * as $ from "jquery";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/prefer-default-export
class Slider {
    constructor(el) {
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
        this.settings = Object.assign({}, this.globalSettings);
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
            if (e.originalEvent.deltaY < 0) {
                this.DOM.el.slick("slickNext");
            }
            else {
                this.DOM.el.slick("slickPrev");
            }
        });
    }
}
exports.Slider = Slider;
