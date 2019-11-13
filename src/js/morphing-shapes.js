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
      },
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
      }
    ];
    this.step = null;
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
    this.createScrollWatchers();
  }

  createScrollWatchers() {
    this.DOM.contentElems.forEach((el, pos) => {
      const watcher = scrollMonitor.create(el, 0);

      watcher.enterViewport(() => {
        this.step = pos;

        // console.log("enter");
        // console.log(this.shapes[pos]);

        anime.remove(this.DOM.shapeEl);
        anime({
          delay: this.shapes[pos].animation.points.duration,
          targets: this.DOM.shapeEl,
          duration: this.shapes[pos].animation.points.duration,
          easing: this.shapes[pos].animation.points.easing,
          elasticity: this.shapes[pos].animation.points.elasticity || 0,
          points: this.shapes[pos].points,
          fill: {
            value: this.shapes[pos].fill.color,
            duration: this.shapes[pos].fill.duration,
            easing: this.shapes[pos].fill.easing
          }
        });

        anime.remove(this.DOM.svg);
        anime({
          targets: this.DOM.svg,
          duration: this.shapes[pos].animation.svg.duration,
          easing: this.shapes[pos].animation.svg.easing,
          elasticity: this.shapes[pos].animation.svg.elasticity || 0,
          scaleX: this.shapes[pos].scaleX,
          scaleY: this.shapes[pos].scaleY,
          translateX: this.shapes[pos].tx + "px",
          translateY: this.shapes[pos].ty + "px",
          rotate: this.shapes[pos].rotate + "deg"
        });
      });

      watcher.exitViewport(() => {
        // console.log(scrollMonitor);
        // const idx = !watcher.isAboveViewport ? pos - 1 : pos + 1;
        let idx = pos + 1;
        // console.log("exit");
        // console.log(this.shapes[idx]);

        anime.remove(this.DOM.shapeEl);
        anime({
          targets: this.DOM.shapeEl,
          duration: this.shapes[idx].animation.points.duration,
          easing: this.shapes[idx].animation.points.easing,
          elasticity: this.shapes[idx].animation.points.elasticity || 0,
          points: this.shapes[idx].points,
          fill: {
            value: this.shapes[idx].fill.color,
            duration: this.shapes[idx].fill.duration,
            easing: this.shapes[idx].fill.easing
          }
        });

        anime.remove(this.DOM.svg);
        anime({
          targets: this.DOM.svg,
          duration: this.shapes[idx].animation.svg.duration,
          easing: this.shapes[idx].animation.svg.easing,
          elasticity: this.shapes[idx].animation.svg.elasticity || 0,
          scaleX: this.shapes[idx].scaleX,
          scaleY: this.shapes[idx].scaleY,
          translateX: this.shapes[idx].tx + "px",
          translateY: this.shapes[idx].ty + "px",
          rotate: this.shapes[idx].rotate + "deg"
        });

        if (idx <= this.contentElemsTotal && this.step !== idx) {
          this.step = idx;

          anime.remove(this.DOM.svg);
          anime({
            targets: this.DOM.svg,
            duration: this.shapes[idx].animation.svg.duration,
            easing: this.shapes[idx].animation.svg.easing,
            elasticity: this.shapes[idx].animation.svg.elasticity || 0,
            scaleX: this.shapes[idx].scaleX,
            scaleY: this.shapes[idx].scaleY,
            translateX: this.shapes[idx].tx + "px",
            translateY: this.shapes[idx].ty + "px",
            rotate: this.shapes[idx].rotate + "deg"
          });
        }
      });
    });
  }
}
