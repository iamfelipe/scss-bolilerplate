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
    const element = document.createElement("div");
    element.setAttribute("id", "foo");
    element.classList.add("text-6xl");
    document.body.appendChild(element);
    const foo = document.querySelector("#foo");
    await setText(foo, "uno");
    await setText(foo, "dos");
    await setText(foo, "tres");
    await setText(foo, "catorce");
  })();

  function component() {
    const element = document.createElement("div");
    const button = document.createElement("button");
    const br = document.createElement("br");

    button.innerHTML = "Click me and look at the console!";
    element.innerHTML = "Hello Webpack";
    element.appendChild(br);
    element.appendChild(button);

    button.addEventListener("click", async () => {
      const { sum } = await import(
        /* webpackChunkName: "utils" */ "./modules/utils"
      );
      console.log(sum(1, 2));
    });

    return element;
  }
  document.body.appendChild(component());
};

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
  module.hot.accept();
}
