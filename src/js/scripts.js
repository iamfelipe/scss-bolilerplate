import Shape from "./morphing-shapes";
import ImageGrid from "./image-grid";

// Image grid
let grid = null;
if (document.querySelectorAll(".c-grid__wrap").length) {
  document.querySelectorAll(".c-grid").forEach(item => {
    grid = new ImageGrid(item);
    const btnCollapse = document.querySelector(".c-grid__btn--collapse");
    btnCollapse.addEventListener("click", () => {
      grid.collapse();
    });
  });
}

// Bud logo animation
if (document.querySelectorAll(".content-wrap").length) {
  const Bud = new Shape();
  Bud.initShapeEl();
}
