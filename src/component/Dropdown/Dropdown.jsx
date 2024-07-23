// Importing CSS
import { useState } from "react";
import { options } from "../../data/options";
import style from "./Dropdown.module.css";

// Dropdown Component
export default function Dropdown() {
  // Defining state for dropdown list visibility
  const [showDropdown, setShowDropdown] = useState(false);
  // Defining state for setting the display of dropup icon
  const [showDropupIcon, setShowDropupIcon] = useState(false);
  // Defining state for setting the display of dropdown icon
  const [showDropDownIcon, setShowDropDownIcon] = useState(true);
//   Defining state for storing the option value
const [optionValue,setOptionValue]=useState('Select');

  //   toggling the dropdown list
  const toggleDropDown = () => {
    setShowDropupIcon(!showDropupIcon);
    setShowDropdown(!showDropdown);
    setShowDropDownIcon(!showDropDownIcon);
  };

  // Setting the option value
  const handleOptionClick = (value) => {
    setOptionValue(value);
    toggleDropDown(); // Close the dropdown after selecting an option
  };

  return (
    <>
      {/* Main Heading */}
      <h1>Should you use a dropdown?</h1>
      {/* Dropdown Container */}
      <div className={style.dropdownContainer}>
        {/* Dropdown Switch */}
        <div className={style.dropdownSwitch} onClick={toggleDropDown}>
          <span>{optionValue}</span>
          {showDropDownIcon && (
            <img
              src="https://cdn-icons-png.flaticon.com/512/60/60995.png"
              alt="dropdown-icon"
            />
          )}
          {showDropupIcon && (
            <img
              src="https://cdn-icons-png.flaticon.com/512/61/61148.png"
              alt="dropup-icon"
            />
          )}
        </div>
        {/* Dropdown List */}
        {showDropdown && (
          <ul className={style.dropdownList}>
            {options.map((option, index) => (
              <li key={index} onClick={()=>handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
