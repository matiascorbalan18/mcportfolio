const hamMenu = document.querySelector(".ham-menu");

const screenMenu = document.querySelector(".screen-menu");

const menuLinks = document.querySelectorAll(".screen-menu a");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    screenMenu.classList.toggle("active");
})

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamMenu.classList.remove("active");
        screenMenu.classList.remove("active");
    });
});

