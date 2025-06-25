document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector (".hamburger");
    const nav = document.querySelector(".main-nav");

    if (hamburger && nav) {
        hamburger.addEventListener("Click", () => {
            nav.classList.toggle("open");
});
    }
});

