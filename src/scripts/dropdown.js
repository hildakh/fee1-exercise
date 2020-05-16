const dropdownPrompt = document.querySelector(".drop-down-container__prompt");

const dropdownOptionsBox = document.querySelector(".drop-down-container__options");

const imageBox = document.querySelector(".drop-down-container__image-box");

const dropDownImage = document.querySelector(".image-box__image");

const toggleDropdownOptions = (e) => {
  // e.preventDefault();
  dropdownOptionsBox.classList.toggle('hidden');
  imageBox.classList.toggle('hidden');
};

dropdownPrompt.addEventListener('click', toggleDropdownOptions);


const dropdownOption = document.querySelectorAll(".options__option");
const promptText = document.querySelector(".prompt__text");

const selectOptionFromDropdown = (e) => {
  console.log(dropDownImage)
  if(e.target.innerText === "Dog with shades") {
    promptText.innerText = "Dog with shades";
    dropDownImage.src = "./assets/dog-with-shades.png";
    setTimeout( () => {
      toggleDropdownOptions();
    }, 200)
  }

  if(e.target.innerText === "Storm Trooper") {
    promptText.innerText = "Storm Trooper";
    dropDownImage.src = "./assets/storm-trooper.png";
    setTimeout( () => {
      toggleDropdownOptions();
    }, 200)
  }

  if(e.target.innerText === "Pineapple Vacation") {
    promptText.innerText = "Pineapple Vacation";
    dropDownImage.src = "./assets/pineapple-vacation.png";
    setTimeout( () => {
      toggleDropdownOptions();
    }, 200)
  }

  if(e.target.innerText === "Donuts") {
    promptText.innerText = "Donuts";
    dropDownImage.src = "./assets/donuts.png";
    setTimeout( () => {
      toggleDropdownOptions();
    }, 200)
  }
}

dropdownOption.forEach(() => {
    addEventListener('click', selectOptionFromDropdown);
})




