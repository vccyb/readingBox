window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translateX(-200%)",
      duration: 4,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".marque svg", {
      rotate: 180,
    });
  } else {
    gsap.to(".marque", {
      transform: "translateX(0%)",
      duration: 2,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".marque svg", {
      rotate: 0,
    });
  }
});
