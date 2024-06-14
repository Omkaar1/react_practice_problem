import React, { useEffect, useState } from "react";

const Six = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((json) => setData(json));
  });

  return (
    <div
      style={{ border: "1px solid black", marginBottom: "5px", padding: "5px" }}
    >
      <p>Create a component that fetches data from API and displas it.</p>
      {data ? (
        <div>
          <h1>Title: {data.title}</h1>
          <h2>Body: {data.body}</h2>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Six;
