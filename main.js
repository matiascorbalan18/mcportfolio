const hamMenu = document.querySelector(".ham-menu");

const screenMenu = document.querySelector(".screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    screenMenu.classList.toggle("active");
})