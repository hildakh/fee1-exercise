
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
  // console.log(e.target.innerHTML, promptText.innerHTML)
  promptText.innerHTML = e.target.innerHTML;
}

dropdownOption.forEach(option => {
  addEventListener('click', selectBusinessModelImage);
})
