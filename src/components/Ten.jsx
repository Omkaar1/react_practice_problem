import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../forRouter/Home";
import About from "../forRouter/About";
import Contact from "../forRouter/Contact";
const Ten = () => {
  return (
    <div
      style={{ border: "1px solid black", marginBottom: "5px", padding: "5px" }}
    >
      <h1>Build a basic routing setup with React Router</h1>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Ten;
