// Calculate the viewport size
let winsize;
const calcWinsize = () =>
  (winsize = { width: window.innerWidth, height: window.innerHeight });
calcWinsize();
window.addEventListener("resize", calcWinsize);
export default winsize;
