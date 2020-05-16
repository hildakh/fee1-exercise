const dropdownOptionsBox = document.querySelector(
  ".drop-down-container__options"
);

const imageBox = document.querySelector(".drop-down-container__image-box");

const dropdownArrow = document.querySelector(".prompt__arrow-box");

export function toggleOptions() {
  dropdownOptionsBox.classList.toggle("hidden");
  imageBox.classList.toggle("hidden");
}

dropdownArrow.addEventListener("click", toggleOptions);
