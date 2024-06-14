import React, { useEffect, useState } from "react";

const Seven = () => {
  const [time, setTime] = useState(60);
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);
  return (
    <div
      style={{ border: "1px solid black", marginBottom: "5px", padding: "5px" }}
    >
      <p>Build a timer that counts down from a spefied time.</p>
      <div>Time Left: {time} seconds</div>
    </div>
  );
};

export default Seven;
