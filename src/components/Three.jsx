import React, { useState } from "react";

const Three = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div
      style={{ border: "1px solid black", marginBottom: "5px", padding: "5px" }}
    >
      <p>Create a form that takes user input and displays it in real-time</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>
        User Input:{" "}
        <span style={{ backgroundColor: "grey" }}>{inputValue}</span>
      </p>
    </div>
  );
};

export default Three;
