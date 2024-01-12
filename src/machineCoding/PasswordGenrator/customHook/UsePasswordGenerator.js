import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generatePassword = (checkboxData, length) => {
    let charset = "",
      generatedPassword = "";

      const selectedOption = checkboxData.filter((checkbox) => checkbox.State);

    if (selectedOption.length === 0) {
      setErrorMessage("Select at least one option.");
      setPassword("");
      return;
    }

    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include UpperCase Letter":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
          case "Include LowwerCase Letter":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
          case "Include Number":
          charset += "0123456789";
          break;
          case "Include Sysmbol":
          charset += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setErrorMessage("");
  };

  return { password, errorMessage, generatePassword };
};

export default usePasswordGenerator;