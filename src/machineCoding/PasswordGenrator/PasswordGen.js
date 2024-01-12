import React, { useState } from "react";
import "./style.css";
import usePasswordGenerator from "./customHook/UsePasswordGenerator";

const PasswordGen = () => {
  const [checkbox, setCheckbox] = useState([
    { id: 1, title: "Include UpperCase Letter", State: false },
    { id: 2, title: "Include LowwerCase Letter", State: false },
    { id: 3, title: "Include Number", State: false },
    { id: 4, title: "Include Sysmbol", State: false },
  ]);
  const [length, setlength] = useState(4);
  const [copied , setCopied] = useState(false)

  // checkbox logic
  const handleCheck = (index) => {
    const updatedCheckbox = checkbox.map((prevCheck, idx) =>
      idx === index ? { ...prevCheck, State: !prevCheck.State } : prevCheck
    );
    setCheckbox(updatedCheckbox);
  };

  // custom hook returns functions
  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  // copy function
  const handleCopy = () => {
    navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(()=>{
      setCopied(false)
    },1000)
  }

  return (
    <div className="container">
      {/* Header */}
      {password && (
        <div className="header">
          <div className="passtext">{password}</div>
          <button className="copyBtn" onClick={handleCopy}>{copied ? "Copide" : "Copy"}</button>
        </div>
      )}

      {/* Character length range  */}
      <div className="charLengtgh">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setlength(e.target.value)}
        />
      </div>

      {/* Checkboxes for password */}
      <div className="checkbox">
        {checkbox.map((checkBox, index) => {
          return (
            <div key={index}>
              <input
                id={checkBox.id}
                type="checkbox"
                checked={checkBox.State}
                onChange={() => handleCheck(index)}
              />
              <label htmlFor={checkBox.id}>{checkBox.title}</label>
            </div>
          );
        })}
      </div>

      {/* Error handling message */}
      {errorMessage && <div style={{color: "red" , padding: "5px"}}>{errorMessage}</div>}

      {/* button for generate password */}
      <button
        className="Genbtn"
        onClick={() => generatePassword(checkbox, length)}
      >
        Generate Password
      </button>
    </div>
  );
};

export default PasswordGen;
