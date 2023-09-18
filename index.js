// MODO CLARO/ESCURO
const toggleButton = document.querySelector(".claro-escuro");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
});

// MENU MOBILE
const btnAbrir = document.querySelector(".btn-abrir-menu");
const menuMobile = document.querySelector(".menu-mobile");
const overlayMobile = document.querySelector(".overlay-menu-mobile");

btnAbrir.addEventListener("click", () => {
  menuMobile.classList.add("abrir-menu");
});

menuMobile.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu");
});

overlayMobile.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu");
});
