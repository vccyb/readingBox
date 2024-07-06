function breakText() {
  const h1 = document.querySelector("h1");
  const splitText = h1.textContent.split("");

  let halfValue = splitText.length / 2;

  let textSpan = splitText.map((item, index) => {
    let className = index < halfValue ? "left" : "right";
    return (item = `<span class="${className}">${item}</span>`);
  });

  textSpan = textSpan.join("");

  h1.innerHTML = textSpan;
}

breakText();

// gsap.from("h1 span", {
//   y: 50,
//   opacity: 0,
//   duration: 0.8,
//   delay: 0.5,
//   stagger: 0.15,
// });

gsap.from("h1 .left", {
  y: 80,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
  opacity: 0,
});

gsap.from("h1 .right", {
  y: 80,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
  opacity: 0,
});
