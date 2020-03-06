"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/extensions,import/no-unresolved
const $ = require("jquery");
const charming = require("charming");
const slider_1 = require("./modules/slider");
const split_layout_1 = require("./modules/split-layout");
$(() => {
    const customSlider = new slider_1.Slider("#sliderNextChallenges");
    const $splitLayout = document.querySelector(".c-split-layout");
    if ($splitLayout) {
        const splitLayout = new split_layout_1.default($splitLayout);
    }
    const glitchText = document.querySelector(".section-header__title");
    charming(glitchText);
    Array.from(glitchText.querySelectorAll("span")).forEach(letter => {
        letter.style.opacity = 1;
        new GlitchFx(letter).glitch();
    });
});
