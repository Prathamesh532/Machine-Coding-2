import React, { useEffect, useState } from "react";
import "./style.css";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isStart, setIsStart] = useState(true);



  useEffect(()=>{
    let interveral ;
    if(!isStart){
      interveral = setInterval(()=>{
        if(second > 0){
          setSecond(second - 1)
        }
        else if(minute > 0){
          setSecond(59)
          setMinute(minute - 1)
        }
        else if(hours > 0){
          setSecond(59)
          setMinute(59)
          setHours(hours - 1)
        }
        else {
          clearInterval(interveral)
          setIsStart(true)
        }
      }, 1000)
    }
    else{
      clearInterval(interveral)
    }

    return () => clearInterval(interveral)
    
  }, [isStart , hours , minute ,second])


  const handleHoursChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue <= 23 && inputValue >= 0) {
      setHours(inputValue);
    }
  };

  const handleMinuteChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue <= 59 && inputValue >= 0) {
      setMinute(inputValue);
    }
  };

  const handleSecondChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue <= 59 && inputValue >= 0) {
      setSecond(inputValue);
    }
  };

  const handleStart = () => {
    setIsStart(false); // Timer has started
    // Placeholder: Implement timer logic here
  };

  const handleStop = () => {
    setIsStart(true); // Timer has stopped
    // Placeholder: Implement timer stop logic here
  };

  const handleReset = () => {
    setIsStart(true); // Reset to initial state
    setHours();
    setMinute();
    setSecond();
    // Placeholder: Implement timer reset logic here
  };

  const formatTime = (time) => {
    if (time === "") return "";
    const numericTime = parseInt(time);
    return numericTime < 10 ? `0${numericTime}` : `${numericTime}`;
  };


  return (
    <div className="conatiner">
      <h1>Timer Counter</h1>
      <div className="conatiner__main">
        <div className="conatiner__timer">
          <div>hours</div>
          <div>Minute</div>
          <div>Second</div>
        </div>

        <div className="conatiner__inputs">
          <input
            className="container__time hours "
            type="number"
            value={formatTime(hours)}
            onChange={handleHoursChange}
            placeholder="00"
          />
          <p className="conatiner__colon">:</p>
          <input
            className="container__time minute "
            type="number"
            value={formatTime(minute)}
            onChange={handleMinuteChange}
            placeholder="00"
          />
          <p className="conatiner__colon">:</p>
          <input
            className="container__time sec "
            type="number"
            value={formatTime(second)}
            onChange={handleSecondChange}
            placeholder="00"
          />
        </div>

        <div className="conatiner__btns">
          {isStart ? (
            <button onClick={handleStart} className="btn start">
              Start
            </button>
          ) : (
            <button onClick={handleStop} className="btn stop">
              Stop
            </button>
          )}

          <button onClick={handleReset} className="btn reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
