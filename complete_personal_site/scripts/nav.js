document.addeventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector (".hamburger");
    const nav = document.querySelector("nav");

    if (hamburger && nav) {
        hamburger.addEventListener("Click", () => {
            nav.classList.toggle("open");
});
    }
});

