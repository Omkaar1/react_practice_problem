import React from "react";

const Four = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  return (
    <div
      style={{ border: "1px solid black", marginBottom: "5px", padding: "5px" }}
    >
      <p>Build list component to display a list of items</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Four;
