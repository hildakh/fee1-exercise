const dropdownOptionsBox = document.querySelector(
  ".drop-down-container__options"
);

const imageBox = document.querySelector(".drop-down-container__image-box");

const dropdownPrompt = document.querySelector(".drop-down-container__prompt");

export function toggleOptions(e) {
  // e.preventDefault();
  dropdownOptionsBox.classList.toggle("hidden");
  imageBox.classList.toggle("hidden");
}

dropdownPrompt.addEventListener("click", toggleOptions);
