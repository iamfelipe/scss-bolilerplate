import { TweenMax } from "gsap";

const ANIMATION_SETTINGS = {
  // Animation settings (after the drag ends, the menu, letters and images need to be positioned or reset)
  // Grid
  duration: 0.8,
  ease: "Quart.easeOut",
  delay: 0.8
};

// Images Grid
export default class ImageGrid {
  constructor(el) {
    this.DOM = { el: el };
    this.DOM.imageWrap = [
      ...this.DOM.el.querySelectorAll(".c-grid__item-wrap")
    ];
    this.itemsTotal = this.DOM.imageWrap.length;
    this.DOM.images = [...this.DOM.el.querySelectorAll(".c-grid__item")];
    this.goalsItem = [
      {
        id: 1,
        tx: "0",
        ty: "-100%",
        duration: ANIMATION_SETTINGS.duration,
        delay: ANIMATION_SETTINGS.delay
      },
      {
        id: 2,
        tx: "0",
        ty: "-100%",
        duration: ANIMATION_SETTINGS.duration,
        delay: 0
      },
      {
        id: 3,
        tx: "0",
        ty: "-100%",
        duration: ANIMATION_SETTINGS.duration,
        delay: 0
      },
      {
        id: 4,
        tx: "100%",
        ty: "0",
        duration: ANIMATION_SETTINGS.duration,
        delay: 0
      },
      {
        id: 5,
        tx: "-100%",
        ty: "0",
        duration: ANIMATION_SETTINGS.duration,
        delay: 0
      },
      {
        id: 6,
        tx: "0",
        ty: "-100%",
        duration: ANIMATION_SETTINGS.duration,
        delay: ANIMATION_SETTINGS.delay
      },
      {
        id: 7,
        tx: "0",
        ty: "100%",
        duration: ANIMATION_SETTINGS.duration,
        delay: ANIMATION_SETTINGS.delay
      },
      {
        id: 8,
        tx: "0",
        ty: "-100%",
        duration: ANIMATION_SETTINGS.duration,
        delay: ANIMATION_SETTINGS.delay
      },
      {
        id: 9,
        tx: "0",
        ty: "-100%",
        duration: ANIMATION_SETTINGS.duration,
        delay: 0
      },
      {
        id: 9,
        tx: "100%",
        ty: "0",
        duration: ANIMATION_SETTINGS.duration,
        delay: ANIMATION_SETTINGS.delay
      },
      {
        id: 10,
        tx: "-100%",
        ty: "0",
        duration: ANIMATION_SETTINGS.duration,
        delay: 0
      },
      {
        id: 10,
        tx: "100%",
        ty: "0",
        duration: ANIMATION_SETTINGS.duration,
        delay: ANIMATION_SETTINGS.delay
      },
      {
        id: 11,
        tx: "0",
        ty: "100%",
        duration: ANIMATION_SETTINGS.duration,
        delay: 0
      },
      {
        id: 12,
        tx: "0",
        ty: "100%",
        duration: ANIMATION_SETTINGS.duration,
        delay: ANIMATION_SETTINGS.delay
      },
      {
        id: 13,
        tx: "0",
        ty: "-100%",
        duration: ANIMATION_SETTINGS.duration,
        delay: ANIMATION_SETTINGS.delay
      },
      {
        id: 14,
        tx: "0",
        ty: "100%",
        duration: ANIMATION_SETTINGS.duration,
        delay: ANIMATION_SETTINGS.delay
      },
      {
        id: 15,
        tx: "100%",
        ty: "0",
        duration: ANIMATION_SETTINGS.duration,
        delay: 0
      },
      {
        id: 16,
        tx: "0",
        ty: "100%",
        duration: ANIMATION_SETTINGS.duration,
        delay: 0
      }
    ];
    // Spread the grid items
    this.spread();
    this.initButtons();
  }
  initButtons() {
    this.DOM.btnCollapse = document.querySelector(".c-grid__btn--collapse");
    this.DOM.btnSpread = document.querySelector(".c-grid__btn--spread");
    this.DOM.btnCollapse.addEventListener("click", () => {
      this.collapse();
    });
    this.DOM.btnSpread.addEventListener("click", () => {
      this.spread(true);
    });
  }
  // Spreads the grid items by randomly positioning them and scaling them down
  spread(animate = false) {
    return new Promise((resolve, reject) => {
      let animateCount = 0;
      const gridHeight = this.DOM.el.scrollHeight;
      const gridTop = this.DOM.el.offsetTop;
      this.DOM.imageWrap.forEach((item, pos) => {
        item = item.querySelector(".c-grid__item");
        // Save the current translation
        item.dataset.ctx = this.goalsItem[pos].tx;
        item.dataset.cty = this.goalsItem[pos].ty;

        if (animate) {
          TweenMax.to(item, this.goalsItem[pos].duration, {
            ease: ANIMATION_SETTINGS.ease,
            x: this.goalsItem[pos].tx,
            y: this.goalsItem[pos].ty,
            // delay: this.goalsItem[pos].delay,
            delay: 0,
            onComplete: () => {
              ++animateCount;
              if (animateCount === this.itemsTotal) {
                resolve();
              }
            }
          });
        } else {
          TweenMax.set(item, {
            x: this.goalsItem[pos].tx,
            y: this.goalsItem[pos].ty
          });
          resolve();
        }
      });
    });
  }
  // Resets the items to the original position (forming again the original grid)
  collapse() {
    return new Promise((resolve, reject) => {
      this.DOM.imageWrap.forEach((item, pos) => {
        item = item.querySelector(".c-grid__item");
        TweenMax.to(item, ANIMATION_SETTINGS.duration, {
          ease: ANIMATION_SETTINGS.ease,
          x: 0,
          y: 0,
          delay: this.goalsItem[pos].delay,
          onComplete: resolve
        });
      });
    });
  }
  showImages() {
    TweenMax.set(this.DOM.images, { opacity: 1 });
  }
}
