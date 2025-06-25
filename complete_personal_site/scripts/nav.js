const hamburger = document.querySelector (".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("Click", () => {
    nav.classList.toggle("open");
});

