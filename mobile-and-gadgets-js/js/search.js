// export function initSearch() {
//   const searchBlock = document.querySelector(".search");
//   const searchIcon = document.querySelector(".search__icon");
//   const searchInput = document.querySelector(".search__input");

//   if (!searchIcon || !searchInput || !searchBlock) return;

//   const toggleSearch = (event) => {
//     event.stopPropagation();
//     searchBlock.classList.toggle("active");
//     searchInput.classList.toggle("active");

//     if (searchInput.classList.contains("active")) {
//       searchInput.focus();
//     }
//   };

//   const closeSearchOnClickOutside = (event) => {
//     if (
//       !searchIcon.contains(event.target) &&
//       !searchInput.contains(event.target) &&
//       searchInput.classList.contains("active")
//     ) {
//       searchBlock.classList.remove("active");
//       searchInput.classList.remove("active");
//     }
//   };

//   const closeSearchOnEscape = (event) => {
//     if (event.key === "Escape" && searchInput.classList.contains("active")) {
//       searchBlock.classList.remove("active");
//       searchInput.classList.remove("active");
//       searchIcon.focus();
//     }
//   };

//   searchIcon.addEventListener("click", toggleSearch);
//   document.addEventListener("click", closeSearchOnClickOutside);
//   document.addEventListener("keydown", closeSearchOnEscape);
// }
export function initSearch() {
  const header = document.querySelector(".header__logo");
  const searchBlock = document.querySelector(".search");
  const searchIcon = document.querySelector(".search__icon");
  const searchInput = document.querySelector(".search__input");

  if (!searchIcon || !searchInput) return;

  const toggleSearch = (event) => {
    event.stopPropagation();
    const isActive = !searchInput.classList.contains("active");

    searchBlock.classList.toggle("active", isActive);
    searchInput.classList.toggle("active", isActive);
    // Добавляем класс на header для скрытия логотипа
    header.classList.toggle("search-expanded", isActive);

    if (isActive) {
      searchInput.focus();
    }
  };

  const closeSearch = () => {
    searchBlock.classList.remove("active");
    searchInput.classList.remove("active");
    header.classList.remove("search-expanded");
  };

  const closeSearchOnClickOutside = (event) => {
    // Проверяем, активно ли поле, и кликнули ли мимо иконки и инпута
    if (
      searchInput.classList.contains("active") &&
      !searchIcon.contains(event.target) &&
      !searchInput.contains(event.target)
    ) {
      closeSearch();
    }
  };

  const closeSearchOnEscape = (event) => {
    if (event.key === "Escape" && searchInput.classList.contains("active")) {
      closeSearch();
      searchIcon.focus();
    }
  };

  searchIcon.addEventListener("click", toggleSearch);
  document.addEventListener("click", closeSearchOnClickOutside);
  document.addEventListener("keydown", closeSearchOnEscape);
}
