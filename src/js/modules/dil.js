export class DualImageLayout {
  constructor(el, options) {
    this.DOM = {
      el
    };
    this.options = {
      images: {
        even: "img/even.jpg", // image used for the even slices
        odd: "img/odd.jpg" // image used for the odd slices
      },
      orientation: "vertical",
      slices: 10,
      width: "100vw", // [number]vw || [number] in pixels
      height: "100vh", // [number]vh || [number] in pixels
      gap: 0, // gap between the slices
      layout: "full", // || 'offset'
      visible: "both" // || 'none' || 'even' || 'odd' || 'both'
    };
    Object.assign(this.options, options);
    this.visibleSlices = this.options.visible;
    this.totalSlices = this.options.slices < 2 ? 2 : this.options.slices;
  }

  layout() {
    const width =
      typeof this.options.width === "number"
        ? `${this.options.width}px`
        : this.options.width;
    const height =
      typeof this.options.height === "number"
        ? `${this.options.height}px`
        : this.options.height;
    const gap = `${this.options.gap}px`;
    let innerHTML = "";
    for (let i = 0; i < this.totalSlices; i += 1) {
      innerHTML += `<div class="slice slice--${i % 2 === 0 ? "even" : "odd"}">`;
      innerHTML += `<div class="slice__inner">`;
      const left = `calc(-${width} / ${this.totalSlices} * ${i})`;
      const top = `calc(-${height} / ${this.totalSlices} * ${i})`;
      let x1 = `calc(100%/${this.totalSlices} * ${i} - 1px)`;
      let x2 = `calc(100%/${this.totalSlices} * ${i + 1} + 1px)`;
      let y1 = 0;
      let y2 = "100%";
      const clippath =
        this.options.orientation === "vertical"
          ? `polygon(${x1} ${y1}, ${x2} ${y1}, ${x2} ${y2}, ${x1} ${y2})`
          : `polygon(${y1} ${x1}, ${y2} ${x1}, ${y2} ${x2}, ${y1} ${x2})`;
      const bgimage =
        i % 2 === 0
          ? `url(${this.options.images.even})`
          : `url(${this.options.images.odd})`;
      innerHTML +=
        this.options.orientation === "vertical"
          ? `<div class="slice__bg" style="background-image: ${bgimage}; left: ${left}; -webkit-clip-path: ${clippath}; clip-path: ${clippath};"></div>`
          : `<div class="slice__bg" style="background-image: ${bgimage}; top: ${top}; -webkit-clip-path: ${clippath}; clip-path: ${clippath};"></div>`;
      innerHTML += `</div></div>`;
      this.DOM.el.innerHTML = innerHTML;
      // this.DOM.slices = {
      //   all: Array.from(this.DOM.el.querySelectorAll(".slice")),
      //   get even() {
      //     return this.all.filter(slice =>
      //       slice.classList.contains("slice--even")
      //     );
      //   },
      //   get odd() {
      //     return this.all.filter(slice =>
      //       slice.classList.contains("slice--odd")
      //     );
      //   }
      // };
      this.DOM.el.classList.add(`slices--${this.options.orientation}`);

      this.DOM.el.style.setProperty("--slices-width", width);
      this.DOM.el.style.setProperty("--slices-height", height);
      this.DOM.el.style.setProperty("--slices", this.options.slices.toString());
      this.DOM.el.style.setProperty("--gap", gap);

      if (this.options.layout === "offset") {
        this.DOM.el.classList.add("slices--layout-offset");
      }
    }
  }
}
