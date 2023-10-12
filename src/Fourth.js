import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Fourth() {
  const [message, setMessage] = useOutletContext();
  const [input, setInput] = useState(""); 

  const updateInput = (e) => {
    setInput(e.target.value); 
    setMessage(e.target.value); 
  };

  return (
    <input
      style={{ marginTop: 10, width: 995, height: 40, borderRadius: 10, border: "1px solid" }}
      type="text"
      value={input}
      onChange={updateInput}
    />
  );
}
