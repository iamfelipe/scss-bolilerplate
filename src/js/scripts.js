import Shape from "./morphing-shapes";
import ImageGrid from "./image-grid";

// Image grid
if (document.querySelectorAll(".c-grid__wrap").length) {
  document.querySelectorAll(".c-grid").forEach(item => {
    const grid = new ImageGrid(item);
    console.log(grid);
  });
}

// Bud logo animation
if (document.querySelectorAll(".content-wrap").length) {
  const Bud = new Shape();
  Bud.initShapeEl();
}
