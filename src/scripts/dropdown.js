
const dropdownPrompts = document.querySelector(".drop-down-container__prompt");

const dropdownOptionsBox = document.querySelector(".drop-down-container__options");

const toggleDropdownOptions = (e) => {
    if(dropdownOptionsBox.style.display == "block") {
    dropdownOptionsBox.style.display = "none";
  } else {
    dropdownOptionsBox.style.display = "block";
  }
};

dropdownPrompts.addEventListener('click', toggleDropdownOptions);


const dropdownOption = document.querySelectorAll(".options__option");
const promptText = document.querySelector(".prompt__text");

const selectBusinessModelImage = (e) => {
  if((e.target.innerText == "Dog with shades") || (e.target.innerText == "Storm Trooper") || (e.target.innerText == "Pinneapple Vacation") || (e.target.innerText == "Donuts" )) {
    promptText.innerText = e.target.innerText;
  }
}

dropdownOption.forEach(option => {
    addEventListener('click', selectBusinessModelImage);
})
