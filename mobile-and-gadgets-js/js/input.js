export function initInput() {
  const searchInput = document.querySelector(
    "input.search-offers__form-search",
  );

  const buttonsContainer = document.querySelector(
    ".search-offers__buttons-list--group",
  );

  if (searchInput && buttonsContainer) {
    buttonsContainer.addEventListener("click", (event) => {
      const button = event.target.closest("button.search-offers__button");
      if (!button) return;
      event.preventDefault();

      const text = button.textContent.trim();
      if (text) {
        searchInput.value = text;
      }
    });
  }
}
