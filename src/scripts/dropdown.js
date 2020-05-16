const toggleDropdownOptions = (e) => {
  const dropdownOptions = document.querySelector(".drop-down-container__options");

  if(dropdownOptions.style.display == "none") {
    dropdownOptions.style.display = "block";
  } else {
    dropdownOptions.style.display = "none";
  }
};
