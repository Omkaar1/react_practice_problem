import React, { useState } from "react";

const Twelve = () => {
  const [image, setImage] = useState("");

  const imageHandle = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  return (
    <div
      style={{ border: "1px solid black", marginBottom: "5px", padding: "5px" }}
    >
      <h1>
        Build a file uploader component that allows users to upload images
      </h1>
      <div>
        <input
          type="file"
          accept="image/*"
          alt="Upload_image"
          onChange={imageHandle}
        />
      </div>
      {image && <img src={URL.createObjectURL(image)} alt="uploadeImage" />}
    </div>
  );
};

export default Twelve;
