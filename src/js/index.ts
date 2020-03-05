// eslint-disable-next-line import/extensions,import/no-unresolved
import * as $ from "jquery";

import { Slider } from "./modules/slider";

$(() => {
  const customSlider = new Slider("#sliderNextChallenges");
  customSlider.init();
  console.log(customSlider);
});

// let myNames = [];
// myNames = ["26", 1, true, {}.toString()];
//
// for (const name of myNames) {
//   console.log(name);
// }
//
// const myAge = 26.23;
// console.log(myAge);
