const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

const dropDown = document.querySelector(".drop-down");
const dropdownToggles = document.querySelectorAll(".dropdown__toggle");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");

  navBar.classList.toggle("active");
});

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    const dropdownMenu = toggle.nextElementSibling;
    const isActive = dropdownMenu.classList.contains("active");
    closeAllDropdowns();
    if (!isActive) {
      dropdownMenu.classList.add("active");
      toggle.classList.add("active");
    }
  });
});

function closeAllDropdowns() {
  const dropdownMenus = document.querySelectorAll(".dropdown__menu");
  dropdownMenus.forEach((menu) => {
    menu.classList.remove("active");
  });
  const dropdownToggles = document.querySelectorAll(".dropdown__toggle");
  dropdownToggles.forEach((toggle) => {
    toggle.classList.remove("active");
  });
}

document.addEventListener("click", (e) => {
  const isDropdownToggle = Array.from(dropdownToggles).some((toggle) => toggle.contains(e.target));
  if (!isDropdownToggle) {
    closeAllDropdowns();
    console.log("clicked outside");
  }
});
