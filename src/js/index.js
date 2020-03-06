"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/extensions,import/no-unresolved
const $ = require("jquery");
const charming = require("charming");
const glitchFx_1 = require("./modules/glitchFx");
const slider_1 = require("./modules/slider");
const dil_1 = require("./modules/dil");
const split_layout_1 = require("./modules/split-layout");
$(() => {
    // Slider
    const customSlider = new slider_1.Slider("#sliderNextChallenges");
    // Split layout
    const $splitLayout = document.querySelector(".c-split-layout");
    if ($splitLayout) {
        const splitLayout = new split_layout_1.default($splitLayout);
    }
    // Dual image layout
    const dil = new dil_1.DualImageLayout(document.querySelector(".slices"), {
        images: { even: imgs.even[0], odd: imgs.odd[0] },
        slices: 10,
        orientation: "horizontal"
    });
    // Glitch
    const glitchTexts = document.querySelectorAll(".glitch-text");
    Array.from(glitchTexts).forEach(glitchText => {
        charming(glitchText);
        Array.from(glitchText.querySelectorAll("span")).forEach(letter => {
            // eslint-disable-next-line no-param-reassign
            letter.style.opacity = "1";
            new glitchFx_1.default(letter).glitch();
        });
    });
});
