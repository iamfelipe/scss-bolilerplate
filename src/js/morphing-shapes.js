import anime from "animejs/lib/anime.es.js";
import * as scrollMonitor from "scrollMonitor";

export default class Shape {
  constructor(el) {
    this.el = el;
    this.DOM = {};
    this.DOM.svg = document.querySelector(".morph");
    this.DOM.shapeEl = this.DOM.svg.querySelector("polygon");
    this.DOM.contentElems = Array.from(
      document.querySelectorAll(".content-wrap")
    );
    this.contentElemsTotal = this.DOM.contentElems.length;
    this.shapes = [
      {
        points:
          "36.426 3.758 141.391 24.578 311.887 3.758 231.141 101.629 125.143 57.62 4.133 88.254",
        scaleX: 1,
        scaleY: 1,
        rotate: 0,
        tx: 0,
        ty: 0,
        fill: {
          color: "none",
          duration: 500,
          easing: "linear"
        },
        animation: {
          points: {
            duration: 500,
            easing: "easeOutExpo"
          },
          svg: {
            duration: 1500,
            easing: "easeOutElastic"
          }
        }
      },
      {
        points:
          "5.496 8.42 154.519 37.55 227.35 4.49 225.143 143.36 161.143 70.62 41.967 66.21",
        scaleX: 1,
        scaleY: 1,
        rotate: 0,
        tx: 0,
        ty: 0,
        fill: {
          color: "none",
          duration: 500,
          easing: "linear"
        },
        animation: {
          points: {
            duration: 500,
            easing: "easeOutExpo"
          },
          svg: {
            duration: 1500,
            easing: "easeOutElastic"
          }
        }
      }
    ];
  }

  initShapeEl() {
    anime.remove(this.DOM.svg);
    anime({
      targets: this.DOM.svg,
      duration: 1,
      easing: "linear",
      scaleX: this.shapes[0].scaleX,
      scaleY: this.shapes[0].scaleY,
      translateX: this.shapes[0].tx + "px",
      translateY: this.shapes[0].ty + "px",
      rotate: this.shapes[0].rotate + "deg"
    });
  }

  createScrollWatchers() {
    this.DOM.contentElems.forEach((el, pos) => {
      const scrollElemToWatch = el;
      pos = pos ? pos : this.contentElemsTotal;
      const watcher = scrollMonitor.create(scrollElemToWatch, -350);

      watcher.enterViewport(() => {
        console.log("entered");
      });
    });
  }
}
