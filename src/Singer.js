import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Singer() {
  let location = useLocation();

  const [message, setMessage] = useState("");
  const messageElements = [ ];
  const buttonColors = {
    first: "#CBC3E3",
    second: "#90EE90",
    third: "#3EB489",
    fourth: "#ffb6c1",
  };
  
  useEffect (() => {
    if (location.pathname === "/singer/first") {
      toggleMessage(0);
    } else if (location.pathname === "/singer/second") {
      toggleMessage(1);
    } else if (location.pathname === "/singer/third"){
      toggleMessage(2);
    }else if (location.pathname === "/singer/fourth"){
      toggleMessage(3); 
    }
  }, []);

  function updateMessage(index, text) {
    const newMessage = [...message];
    newMessage[index] = { ...newMessage[index], text };
    setMessage(newMessage);
    console.log("I iterate every letter");
  }

  function toggleMessage(index) {
    // When you change singer it removes the message in the input
    const newMessage = [...message, { index, text: "" }];
    setMessage(newMessage);
  }

  for (let i = 0; i < message.length; i++) {
    const messageInput = message[i];
    if (messageInput.text) {
      const backgroundColor =
        buttonColors[Object.keys(buttonColors)[messageInput.index]];
      const messageElement = (
        <div
          key={i}
          style={{
            textAlign: "left",
            padding: 10,
            marginTop: 10,
            width: 950,
            borderRadius: 10,
            backgroundColor,
          }}
        >
          {messageInput.text}
        </div>
      );
      messageElements.push(messageElement);
    }
  }

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
              background: buttonColors.first,
              color: "#FFF",
            }}
            onClick={() => toggleMessage(0)}
          >
            FIRST SINGER
          </button>
        </Link>
        <Link to="/singer/second">
          <button
            style={{
              width: "250px",
              height: "40px",
              background: buttonColors.second,
              color: "#FFF",
            }}
            onClick={() => toggleMessage(1)}
          >
            SECOND SINGER
          </button>
        </Link>
        <Link to="/singer/third">
          <button
            style={{
              width: "250px",
              height: "40px",
              background: buttonColors.third,
              color: "#FFF",
            }}
            onClick={() => toggleMessage(2)}
          >
            THIRD SINGER
          </button>
        </Link>
        <Link to="/singer/fourth">
          <button
            style={{
              width: "250px",
              height: "40px",
              background: buttonColors.fourth,
              color: "#FFF",
            }}
            onClick={() => toggleMessage(3)}
          >
            FOURTH SINGER
          </button>
        </Link>
      </div>
      <Outlet
        context={[
          message?.text || "",
          function (newText) {
            if (message) {
              updateMessage(message.length - 1, newText);
            }
          },
        ]}
      />
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          border: "1px solid black",
          width: 1000,
          height: 500,
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        {messageElements}
      </div>
    </div>
  );
}
