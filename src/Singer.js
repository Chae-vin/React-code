import React, { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Display from "./Display";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";

export default function Singer() {
  const [themessage, setThemessage] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleButtonClick = () => {
    const newMessage = themessage;
    console.log("New Message:", newMessage);
    setShowInput(true);
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
            style={{
              width: "250px",
              height: "40px",
              border: "1px solid #CBC3E3",
              background: "#CBC3E3",
              color: "#FFF",
            }}
            onClick={handleButtonClick}
          >
            FIRST SINGER
          </button>
        </Link>
        <Link to="/singer/second">
          <button
            style={{
              width: "250px",
              height: "40px",
              border: "1px solid #90EE90",
              background: "#90EE90",
              color: "#FFF",
            }}
            onClick={handleButtonClick}
          >
            SECOND SINGER
          </button>
        </Link>
        <Link to="/singer/third">
          <button
            style={{
              width: "250px",
              height: "40px",
              border: "1px solid #3EB489",
              background: "#3EB489",
              color: "#FFF",
            }}
            onClick={handleButtonClick}
          >
            THIRD SINGER
          </button>
        </Link>
        <Link to="/singer/fourth">
          <button
            style={{
              width: "250px",
              height: "40px",
              border: "1px solid #ffb6c1",
              background: "#ffb6c1",
              color: "#FFF",
            }}
            onClick={handleButtonClick}
          >
            FOURTH SINGER
          </button>
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {showInput && (
          <input
            type="text"
            value={themessage}
            onChange={(e) => setThemessage(e.target.value)}
            style={{
              marginTop: "20px",
              width: "990px",
              height: "40px",
              border: "2px solid black",
              borderRadius: "5px",
            }}
          />
        )}
        {showInput && (
          <Routes>
            <Route path="/first" element={<First message={themessage} />} />
            <Route path="/second" element={<Second message={themessage} />} />
            <Route path="/third" element={<Third message={themessage} />} />
            <Route path="/fourth" element={<Fourth message={themessage} />} />
          </Routes>
        )}
      </div>
      <Display />
    </div>
  );
}
