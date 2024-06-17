import React from "react";

const Eleven = () => {
  let quotes = [
    " Avoid daydreaming about the years to come.",
    "You are the most important person in your whole life.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Only demonstrate your strength when it’s really required.",
    "Subscribe to Drop X Out",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const qoute = quotes[randomIndex];
  return (
    <div
      style={{ border: "1px solid black", marginBottom: "5px", padding: "5px" }}
    >
      <h1>
        Create a component that displays a random qoute each time it is rendered
      </h1>
      <p>{randomIndex}</p>
      <h3>{qoute}</h3>
    </div>
  );
};

export default Eleven;
