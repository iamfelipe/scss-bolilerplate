// Import theme styles
import "../css/main.scss";

import stickybits from "stickybits";

stickybits("#header");

window.onload = () => {
  const setText = (element, textContent) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        element.textContent = textContent;
        resolve();
      }, 400);
    });
  };

  (async () => {
    const foo = document.querySelector("#foo");
    await setText(foo, "one");
    await setText(foo, "two");
    await setText(foo, "three");
  })();
};
