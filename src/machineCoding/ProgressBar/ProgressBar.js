import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProgressBar = ({ value = 0 }) => {
  const [precentage, setPecentage] = useState(0);

  useEffect(() => {
    setPecentage(Math.min(100, Math.max(0, value)));
  }, [value]);

  const BarConatiner = styled.div`
    background-color: white;
    color: black;
    padding: 10px;
    border: 1px solid black;
    border-radius: 100px;
  `;

  const LabelStyel = styled.label`
    display: flex;
    width: ${precentage}%;
    transform: scaleX${precentage / 100} , transformOrigin: "left" ; 
    min-width: 20px;
    justify-content: center;
    background-color: green;
    border-radius: 100px;
    text-align: center; 
  `;

  return (
    <>
      <BarConatiner>
        <LabelStyel
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-valuenow={percent}
          role="progressbar"
          style={{ color: precentage > 49 ? "white" : "black" }}
        >
          {precentage.toFixed()} %
        </LabelStyel>
      </BarConatiner>
    </>
  );
};

export default ProgressBar;
