
const dropdownPrompt = document.querySelector(".drop-down-container__prompt");

const dropdownOptionsBox = document.querySelector(".drop-down-container__options");

const dropDownImage = document.querySelector(".drop-down-container__image-box");

const toggleDropdownOptions = () => {
  console.log("clicked", dropdownOptionsBox.style)

    if(dropdownOptionsBox.style.display == "block") {
    dropdownOptionsBox.style.display = "none";
    dropDownImage.style.display ="block";
  } else {
    dropdownOptionsBox.style.display = "block";
    dropDownImage.style.display = "none";
  }
};

dropdownPrompt.addEventListener('click', toggleDropdownOptions);

const dropdownOption = document.querySelectorAll(".options__option");
const promptText = document.querySelector(".prompt__text");

const selectBusinessModelImage = (e) => {
  if((e.target.innerText == "Dog with shades") || (e.target.innerText == "Storm Trooper") || (e.target.innerText == "Pinneapple Vacation") || (e.target.innerText == "Donuts" )) {
    promptText.innerText = e.target.innerText;
    // fixed display to none , should be fixed
    // toggleDropdownOptions;
  }
}

dropdownOption.forEach(option => {
    addEventListener('click', selectBusinessModelImage);
})

const dropdownImage = document.querySelector(".image-box__image")
