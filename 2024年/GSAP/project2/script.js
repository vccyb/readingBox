const tl = gsap.timeline({
  paused: true,
});

tl.to("#full", {
  right: 0,
  duration: 0.6,
});

tl.from("#full h4", {
  x: 150,
  duration: 0.6,
  stagger: 0.3,
  opacity: 0,
});

tl.from("#full svg", {
  opacity: 0,
});

const menu = document.querySelector("#nav svg");
const close = document.querySelector("#full svg");
menu.addEventListener("click", () => {
  tl.play();
});

close.addEventListener("click", () => {
  tl.reverse();
});
