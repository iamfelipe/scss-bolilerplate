import sumar from "./modules/utils";

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

  (async () => {
    const foo = document.querySelector("#foo");
    await setText(foo, "foo");
    await setText(foo, "bar");
    await setText(foo, "baz");
  })();
};
