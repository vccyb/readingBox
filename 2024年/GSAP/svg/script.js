const initialPath = `M 10 100 Q 500 100 990 100`;
const finalPath = `M 10 100 Q 500 100 990 100`;

const string = document.querySelector("#string");

string.addEventListener("mouseenter", (event) => {
  console.log("mouse enter");
});

string.addEventListener("mousemove", (event) => {
  console.log(event.y);
  path = `M 10 100 Q ${event.x} ${event.y} 990 100`;
  gsap.to("svg path", {
    attr: {
      d: path, // 这里使用gsap的attr属性来修改path的d属性
      duration: 0.3,
      ease: "power3.out",
    },
  });
});

string.addEventListener("mouseleave", () => {
  console.log("mouse leave");
  gsap.to("svg path", {
    attr: {
      d: finalPath, // 这里使用gsap的attr属性来修改path的d属性
      duration: 1.2,
      ease: "elastic.out(1,0.4)  ",
    },
  });
});
