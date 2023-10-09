import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Display from "./Display";

export default function Singer() {
  const [themessage, setThemessage] = useState("");
  const [selectedSinger, setSelectedSinger] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [buttonBgColors, setButtonBgColors] = useState({
    first: "#CBC3E3",
    second: "#90EE90",
    third: "#3EB489",
    fourth: "#ffb6c1",
  });

  // Function to update the message for a singer
  const updateMessage = (singer, message) => {
    setThemessage(message);
    setSelectedSinger(singer);
    setShowInput(true); // Show input when a button is clicked
    // Set the background color based on the singer
    setButtonBgColors({ ...buttonBgColors, [singer]: buttonBgColors[singer] }); // Update the background color for the selected singer
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", textAlign: "center" }}>
        <Link to="/singer/first">
          <button
            onClick={() => updateMessage("first", "", "#CBC3E3")}
            style={{
              width: "250px",
              height: "40px",
              border: "1px solid #CBC3E3",
              background: buttonBgColors.first, // Set the background color
              color: "#FFF",
            }}
          >
            FIRST SINGER
          </button>
        </Link>
        <Link to="/singer/second">
          <button
            onClick={() => updateMessage("second", "", "#90EE90")}
            style={{
              width: "250px",
              height: "40px",
              border: "1px solid #90EE90",
              background: buttonBgColors.second, // Set the background color
              color: "#FFF",
            }}
          >
            SECOND SINGER
          </button>
        </Link>
        <Link to="/singer/third">
          <button
            onClick={() => updateMessage("third", "", "#3EB489")}
            style={{
              width: "250px",
              height: "40px",
              border: "1px solid #3EB489",
              background: buttonBgColors.third, // Set the background color
              color: "#FFF",
            }}
          >
            THIRD SINGER
          </button>
        </Link>
        <Link to="/singer/fourth">
          <button
            onClick={() => updateMessage("fourth", "", "#ffb6c1")}
            style={{
              width: "250px",
              height: "40px",
              border: "1px solid #ffb6c1",
              background: buttonBgColors.fourth, // Set the background color
              color: "#FFF",
            }}
          >
            FOURTH SINGER
          </button>
        </Link>
      </div>
      {showInput ? (
        <Outlet />
      ) : (
        <Display
          message={themessage}
          bgColor={buttonBgColors[selectedSinger]}
          selectedSinger={selectedSinger}
        />
      )}
    </div>
  );
}
