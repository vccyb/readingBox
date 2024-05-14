// gsap.to("#box1", {
//   x: 1200,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "blue",
//   borderRadius: "50%",
//   scale: 0.5,
// });

// gsap.from("#box2", {
//   x: 1200,
//   duration: 2,
// });

// gsap.from("h1", {
//   opacity: 0,
//   duration: 1,
//   y: 30,
//   stagger: 0.3,
// });

// gsap.to("#box", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   // yoyo: true,
// });

// gsap.to("#box1", {
//   x: 1000,
//   duration: 2,
//   delay: 3,
//   rotate: 360,
// });

// gsap.to("#box2", {
//   x: 1000,
//   duration: 2,
//   delay: 5,
//   scale: 0.5,
// });

// gsap
//   .timeline({
//     defaults: { duration: 2 }, // 设置时间线的默认持续时间为2秒
//   })
//   .to("#box", {
//     x: 1000,
//     rotate: 360,
//     // yoyo: true, // 如果你想在时间线中使用 yoyo 效果，可以在这里添加
//   })
//   .to("#box1", {
//     x: 1000,
//     rotate: 360,
//   })
//   .to("#box2", {
//     x: 1000,
//     scale: 0.5,
//   });

let tl = gsap.timeline();

tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from("h4", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

tl.from("h1", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  scale: 0.2,
});
