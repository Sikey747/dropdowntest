// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


const dropDownMenu = document.getElementById("nav-menu");

if (dropDownMenu) {
  const allBtn = dropDownMenu.querySelectorAll("button");

  document.addEventListener("click", (e) => {
    // Если клик произошел вне меню с классом .dropdown_open
    if (!e.target.closest(".dropdown_open")) {
      const allArrowOpen = dropDownMenu.querySelectorAll(".dropdown__arrow_open");
      const allOpenMenu = dropDownMenu.querySelectorAll(".dropdown_open");

      allArrowOpen.forEach((arrow) => {
        arrow.classList.remove("dropdown__arrow_open");
      });

      allOpenMenu.forEach((menu) => {
        menu.classList.remove("dropdown_open");
      });
    }
  });

  allBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation(); // Остановка события click на кнопке
      item.querySelector(".dropdown__arrow").classList.toggle("dropdown__arrow_open");
      item.nextElementSibling.classList.toggle("dropdown_open");
    });
  });
}
