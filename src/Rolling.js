import React, { useState, useEffect } from "react";
import "./rolling.css";
import { Grid } from "@mui/material";

const defNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Rolling() {
  const [rolling, setRolling] = useState(false);
  const [stoppedNumber, setStoppedNumber] = useState(null);
  const [displayedNumbers, setDisplayedNumbers] = useState([]);
  const [numberCounts, setNumberCounts] = useState({});

  useEffect(() => {
    let rollInterval;
    if (rolling) {
      rollInterval = setInterval(() => {
        const randomNum = Math.floor(Math.random() * 9) + 1;
        setStoppedNumber(randomNum);
      }, 100);
    }

    return () => clearInterval(rollInterval);
  }, [rolling]);

  const startStopRoll = () => {
    setRolling(!rolling);
    if (rolling) {
      setNumberCounts((prevCounts) => ({
        ...prevCounts,
        [stoppedNumber]: (prevCounts[stoppedNumber] || 0) + 1,
      }));
      setDisplayedNumbers((prevNumbers) => [...prevNumbers, stoppedNumber]);
    } else {
      setStoppedNumber(0);
      setDisplayedNumbers((prevNumbers) => [...prevNumbers, 0]);
    }
  };

  const handleResetClick = () => {
    setTimeout(() => {
      setDisplayedNumbers([]); // Clear displayed numbers
      setNumberCounts({}); // Reset number counts
    }, 100);
  };
  // useEffect(() => {
  //   if (rolling && stoppedNumber !== null) {
  //     setDisplayedNumbers((prevNumbers) => [...prevNumbers, stoppedNumber]);
  //   }
  // }, [rolling, stoppedNumber]);

  return (
    <div id="gameContainer">
      <div className="numberCounter">
        {defNum.map((number) => (
          <span key={number}>{number}</span>
        ))}
      </div>
      <div className="numberCounter">
        {defNum.map((number) => (
          <span key={number}>{numberCounts[number] || 0}</span>
        ))}
      </div>
      <div className="calculator-grid">
        {defNum.map((number) => (
          <div
            key={number}
            className={`grid-cell ${
              rolling &&
              (number === stoppedNumber ||
                (number === 0 && stoppedNumber === 0))
                ? "active"
                : ""
            }`}
          >
            {number === stoppedNumber && !rolling ? "0" : number}
          </div>
        ))}
      </div>

      <button id="startStopRollButton" onClick={startStopRoll}>
        {rolling ? "Stop Roll" : "Start Roll"}
      </button>
      <button
        id="startStopRollButton"
        onClick={handleResetClick}
        style={{ marginLeft: "10px" }}
      >
        Reset Count
      </button>
    </div>
  );
}
