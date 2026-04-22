export function initDropdown() {
  const dropdownMenu = document.getElementById("dropdown");
  const trigger = document.getElementById("dropdownTrigger");
  const arrowIcon = document.getElementById("arrow");

  if (!dropdownMenu || !trigger || !arrowIcon) {
    console.warn("Элементы dropdown не найдены", {
      dropdownMenu: !!dropdownMenu,
      trigger: !!trigger,
      arrowIcon: !!arrowIcon,
    });
    return;
  }

  const toggleDropdown = () => {
    dropdownMenu.classList.toggle("show");
    arrowIcon.closest("svg").classList.toggle("arrow");
  };

  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleDropdown();
  });

  document.documentElement.addEventListener("click", () => {
    if (dropdownMenu.classList.contains("show")) {
      toggleDropdown();
    }
  });

  dropdownMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
