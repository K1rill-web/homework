export function initSearch() {
  const searchBlock = document.querySelector(".search");
  const searchIcon = document.querySelector(".search__icon");
  const searchInput = document.querySelector(".search__input");

  if (!searchIcon || !searchInput || !searchBlock) return;

  const toggleSearch = (event) => {
    event.stopPropagation();
    searchBlock.classList.toggle("active");
    searchInput.classList.toggle("active");

    if (searchInput.classList.contains("active")) {
      searchInput.focus();
    }
  };

  const closeSearchOnClickOutside = (event) => {
    if (
      !searchIcon.contains(event.target) &&
      !searchInput.contains(event.target) &&
      searchInput.classList.contains("active")
    ) {
      searchBlock.classList.remove("active");
      searchInput.classList.remove("active");
    }
  };

  const closeSearchOnEscape = (event) => {
    if (event.key === "Escape" && searchInput.classList.contains("active")) {
      searchBlock.classList.remove("active");
      searchInput.classList.remove("active");
      searchIcon.focus();
    }
  };

  searchIcon.addEventListener("click", toggleSearch);
  document.addEventListener("click", closeSearchOnClickOutside);
  document.addEventListener("keydown", closeSearchOnEscape);
}
