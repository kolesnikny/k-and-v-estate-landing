(() => {
  const menuButton = document.querySelector(".menu__button");
  const menuNav = document.querySelector(".header__menu");

  menuButton.addEventListener("click", () => {
    let expanded = menuButton.getAttribute("aria-expanded") === "true" || false;
    menuButton.setAttribute("aria-expanded", !expanded);
    menuButton.classList.toggle("menu__button--open");
    menuNav.classList.toggle("header__menu--open");
  });
})();
