"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SplitLayout {
    constructor(el) {
        this.DOM = {
            el,
            sides: {
                left: el.querySelector(".c-split-layout__side--left"),
                right: el.querySelector(".c-split-layout__side--right")
            },
            backButtons: el.querySelectorAll(".c-split-layout__backToIntro")
        };
        this.eventType = "click";
        this.states = {
            sideIsOpened: false,
            transition: false
        };
        this.init();
    }
    init() {
        this.openRight();
        this.openLeft();
        this.collapseSide();
    }
    openLeft() {
        this.DOM.sides.left.addEventListener(this.eventType, e => {
            this.openSide("left");
        });
    }
    openRight() {
        this.DOM.sides.right.addEventListener(this.eventType, e => {
            this.openSide("right");
        });
    }
    openSide(side) {
        if (!this.states.sideIsOpened) {
            this.states.transition = true;
            this.reset();
            this.DOM.el.classList.add(`c-split-layout--open-${side}`);
            this.states.sideIsOpened = true;
            this.states.transition = false;
        }
    }
    collapseSide() {
        for (let i = 0; i < this.DOM.backButtons.length; i += 1) {
            this.DOM.backButtons[i].addEventListener(this.eventType, e => {
                e.stopPropagation();
                this.states.transition = true;
                this.reset();
                this.states.sideIsOpened = false;
                this.states.transition = false;
            });
        }
    }
    reset() {
        this.DOM.el.classList.remove("c-split-layout--open-left", "c-split-layout--open-right");
    }
}
exports.default = SplitLayout;
