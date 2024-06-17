import React, { useState } from "react";

const Nine = () => {
  const [backgroundColor, setBackgroundColor] = useState("yellow");
  const changeColor = () => {
    const newColor = backgroundColor === "yellow" ? "red" : "blue";
    setBackgroundColor(newColor);
  };
  return (
    <div
      style={{ border: "1px solid black", marginBottom: "5px", padding: "5px" }}
    >
      <h1>Create a component that changes its background color when clicked</h1>
      <div
        onClick={changeColor}
        style={{ cursor: PointerEvent, backgroundColor }}
      >
        Click me to change my color
      </div>
    </div>
  );
};

export default Nine;
