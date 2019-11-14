import { TweenMax } from "gsap";

const ANIMATION_SETTINGS = {
  // Animation settings (after the drag ends, the menu, letters and images need to be positioned or reset)
  // Grid
  duration: 1,
  ease: {
    in: "Quart.easeOut",
    out: "Quart.easeIn"
  },
  delay: 0.5
};

// Images Grid
export default class ImageGrid {
  constructor(el) {
    this.isAnimating = false;
    this.DOM = { el: el };
    this.DOM.imageWrap = [
      ...this.DOM.el.querySelectorAll(".c-grid__item-wrap")
    ];
    this.DOM.imageHero = this.DOM.el.querySelector(".c-grid__item-hero");
    this.itemsTotal = this.DOM.imageWrap.length;
    this.DOM.images = [...this.DOM.el.querySelectorAll(".c-grid__item")];
    this.goalsItem = [
      {
        id: 1,
        tx: "0",
        ty: "-100%",
        duration: ANIMATION_SETTINGS.duration,
        delay: ANIMATION_SETTINGS.delay / 2
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
        delay: ANIMATION_SETTINGS.delay
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
        tx: "-100%",
        ty: "0",
        duration: ANIMATION_SETTINGS.duration,
        delay: 0
      },
      {
        id: 12,
        tx: "100%",
        ty: "0",
        duration: ANIMATION_SETTINGS.duration,
        delay: ANIMATION_SETTINGS.delay / 2
      },
      {
        id: 13,
        tx: "0",
        ty: "100%",
        duration: ANIMATION_SETTINGS.duration,
        delay: ANIMATION_SETTINGS.delay / 2
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
        tx: "0",
        ty: "-100%",
        duration: ANIMATION_SETTINGS.duration,
        delay: ANIMATION_SETTINGS.delay
      },
      {
        id: 16,
        tx: "0",
        ty: "100%",
        duration: ANIMATION_SETTINGS.duration,
        delay: ANIMATION_SETTINGS.delay / 2
      },
      {
        id: 17,
        tx: "100%",
        ty: "0",
        duration: ANIMATION_SETTINGS.duration,
        delay: 0
      },
      {
        id: 18,
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
      this.DOM.imageWrap.forEach((item, pos) => {
        item = item.querySelector(".c-grid__item");
        // Save the current translation
        item.dataset.ctx = this.goalsItem[pos].tx;
        item.dataset.cty = this.goalsItem[pos].ty;
        item.dataset.id = this.goalsItem[pos].id;

        if (animate) {
          this.hideHero();
          TweenMax.to(item, this.goalsItem[pos].duration, {
            ease: ANIMATION_SETTINGS.ease.out,
            x: this.goalsItem[pos].tx,
            y: this.goalsItem[pos].ty,
            delay:
              this.goalsItem[pos].delay === 0
                ? ANIMATION_SETTINGS.delay
                : this.goalsItem[pos].delay === ANIMATION_SETTINGS.delay
                ? 0
                : this.goalsItem[pos].delay / 2,
            // delay: 0,
            onComplete: () => {
              ++animateCount;
              if (animateCount === this.itemsTotal) {
                console.log("Spread");
                resolve();
              }
            }
          });
        } else {
          this.setHero();
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
      let animateCount = 0;
      this.showHero();
      this.DOM.imageWrap.forEach((item, pos) => {
        item = item.querySelector(".c-grid__item");
        TweenMax.to(item, ANIMATION_SETTINGS.duration, {
          ease: ANIMATION_SETTINGS.ease.in,
          x: 0,
          y: 0,
          delay: this.goalsItem[pos].delay,
          onComplete: () => {
            ++animateCount;
            if (animateCount === this.itemsTotal) {
              console.log("Collapsed");
              resolve();
            }
          }
        });
      });
    });
  }
  setHero() {
    TweenMax.set(this.DOM.imageHero, { opacity: 0 });
  }
  showHero() {
    TweenMax.to(this.DOM.imageHero, ANIMATION_SETTINGS.duration, {
      ease: ANIMATION_SETTINGS.ease.in,
      opacity: 1
    });
  }
  hideHero() {
    TweenMax.to(this.DOM.imageHero, ANIMATION_SETTINGS.duration, {
      ease: ANIMATION_SETTINGS.ease.out,
      delay: ANIMATION_SETTINGS.delay,
      opacity: 0
    });
  }
}
