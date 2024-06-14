import React, { useState } from "react";

const Five = () => {
  const [toggleButton, setToggleButton] = useState(false);

  function handleToggleSwitch() {
    setToggleButton(!toggleButton);
  }
  return (
    <div
      style={{ border: "1px solid black", marginBottom: "5px", padding: "5px" }}
    >
      <p>Implement a basic toggle switch component</p>
      <input type="checkbox" onChange={handleToggleSwitch} />
      <p>{toggleButton ? "On" : "Off"}</p>
    </div>
  );
};

export default Five;
