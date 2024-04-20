import "./heading.css";

export default () => {
  const element = document.createElement("h1");
  element.textContent = "Hello, world";
  element.classList.add("heading");
  element.addEventListener("click", () => alert("clicked!"));
  return element;
};
