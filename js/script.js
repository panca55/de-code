const toggleBtn = document.getElementById("hamburger_menu");
const navbarMenu = document.getElementById("navbar_menu");

toggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
})