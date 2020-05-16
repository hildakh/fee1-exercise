import { toggleOptions } from "./toggleOptions.js";

const promptText = document.querySelector(".prompt__text");

const dropDownImage = document.querySelector(".image-box__image");

const dropdownOption = document.querySelectorAll(".options__option");

const selectOption = (e) => {
  // console.log(dropDownImage)
  if (e.target.innerText === "Pizza and bears") {
    promptText.innerText = "Pizza and bears";
    dropDownImage.src = "./assets/pizza-and-bears.png";
    setTimeout(() => {
      toggleOptions();
    }, 200);
  }

  if (e.target.innerText === "Dog with shades") {
    promptText.innerText = "Dog with shades";
    dropDownImage.src = "./assets/dog-with-shades.png";
    setTimeout(() => {
      toggleOptions();
    }, 200);
  }

  if (e.target.innerText === "Storm Trooper") {
    promptText.innerText = "Storm Trooper";
    dropDownImage.src = "./assets/storm-trooper.png";
    setTimeout(() => {
      toggleOptions();
    }, 200);
  }

  if (e.target.innerText === "Pineapple Vacation") {
    promptText.innerText = "Pineapple Vacation";
    dropDownImage.src = "./assets/pineapple-vacation.png";
    setTimeout(() => {
      toggleOptions();
    }, 200);
  }

  if (e.target.innerText === "Donuts") {
    promptText.innerText = "Donuts";
    dropDownImage.src = "./assets/donuts.png";
    setTimeout(() => {
      toggleOptions();
    }, 200);
  }
};

dropdownOption.forEach(() => {
  addEventListener("click", selectOption);
});
