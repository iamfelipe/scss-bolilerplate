import sumar from "./modules/utils";

// Import theme styles
import "../css/main.scss";

window.onload = () => {
  /* eslint-disable no-unused-vars */
  const result = sumar(5, 2);

  console.log(result);

  const setText = (element, textContent) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        element.textContent = textContent;
        resolve();
      }, 400);
    });
  };

  const target = { a: 1, b: 2 };
  const source = { b: 4, c: 5 };

  const returnedTarget = Object.assign(target, source);

  console.log(target);
  // expected output: Object { a: 1, b: 4, c: 5 }

  console.log(returnedTarget);
  // expected output: Object { a: 1, b: 4, c: 5 }

  (async () => {
    const foo = document.querySelector("#foo");
    await setText(foo, "foo");
    await setText(foo, "bar");
    await setText(foo, "baz");
  })();
};
