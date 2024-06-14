import React, { useState } from "react";

const Two = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{ border: "1px solid black", marginBottom: "5px", padding: "5px" }}
    >
      <p> Build a Counter Application with Increment and decrement Button</p>

      <button onClick={() => setCount(count + 1)}>Inc +</button>
      <span style={{ paddingLeft: "5px", paddingRight: "5px" }}>{count}</span>
      <button onClick={() => setCount(count - 1)}>Dec -</button>
    </div>
  );
};

export default Two;
