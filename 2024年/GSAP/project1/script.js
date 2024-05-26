const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", (event) => {
  gsap.to("#cursor", {
    x: event.x,
    y: event.y,
    duration: 0.6,
    ease: "back.out",
  });
});

imageDiv.addEventListener("mouseenter", () => {
  cursor.innerHTML = "Hello Vccyb";
  gsap.to("#cursor", {
    scale: 4,
    duration: 0.3,
    backgroundColor: "#ffffff5c",
  });
});

imageDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = " ";
  gsap.to("#cursor", {
    scale: 1,
    duration: 0.3,
    backgroundColor: "#fffffff6",
  });
});
