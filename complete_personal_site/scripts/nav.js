document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector (".hamburger");
    const nav = document.querySelector(".main-nav");

    if (hamburger && nav) {
        hamburger.addEventListener("click", () => {
            nav.classList.toggle("open");
});
    }
});

