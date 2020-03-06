// eslint-disable-next-line import/extensions,import/no-unresolved
import * as $ from "jquery";

import { Slider } from "./modules/slider";
import SplitLayout from "./modules/split-layout";

$(() => {
  const customSlider = new Slider("#sliderNextChallenges");
  const $splitLayout: HTMLElement = document.querySelector(".c-split-layout");
  if ($splitLayout) {
    const splitLayout = new SplitLayout($splitLayout);
  }
});
