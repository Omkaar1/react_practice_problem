import React, { useState } from "react";

const Eight = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };
  const deleteTodo = (index) => {
    const deletedValue = todos.filter((_, i) => i !== index);
    setTodos(deletedValue);
  };
  return (
    <div
      style={{ border: "1px solid black", marginBottom: "5px", padding: "5px" }}
    >
      <h1>
        Implement a simple to-do list application with add and remove
        functionality
      </h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => addTodo()}>Add</button>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Eight;
