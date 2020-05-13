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
    await setText(foo, "uno");
    await setText(foo, "dos");
    await setText(foo, "tres");
    await setText(foo, "catorce");
  })();
};

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
  module.hot.accept();
}
