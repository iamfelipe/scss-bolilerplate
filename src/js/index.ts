// eslint-disable-next-line import/extensions,import/no-unresolved
import * as $ from "jquery";
import * as charming from "charming";
import GlitchFx from "./modules/glitchFx";

import { Slider } from "./modules/slider";
import SplitLayout from "./modules/split-layout";

$(() => {
  // Slider
  const customSlider = new Slider("#sliderNextChallenges");

  // Split layout
  const $splitLayout: HTMLElement = document.querySelector(".c-split-layout");
  if ($splitLayout) {
    const splitLayout = new SplitLayout($splitLayout);
  }

  // Glitch
  const glitchTexts = document.querySelectorAll(".glitch-text");
  Array.from(glitchTexts).forEach(glitchText => {
    charming(glitchText);

    Array.from(glitchText.querySelectorAll("span")).forEach(letter => {
      letter.style.opacity = "1";
      new GlitchFx(letter).glitch();
    });
  });
});
