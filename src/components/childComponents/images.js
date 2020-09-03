import React, { useState } from "react";
import { uploadAction } from "./uploadAction";
const Images = () => {
  const [newImage, setNewImage] = useState([]);
  const handleNewImage = () => {
    setNewImage([...newImage, "New Image!"]);
  };
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState(false);
  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
    setPreview(true);
  };
  const clearImage = () => {
    setPreview(false);
    setImage("");
  };
  const handleSubmit = () => {
    uploadAction(image);
  };

  return (
    <div>
      {/*<ImageContainer newImage={newImage} />
      <ImageForm handleNewImage={handleNewImage} />*/}
      {preview ? (
        <>
          <button onClick={clearImage}>x</button>
          <h5>Image preview</h5>
          <img
            style={{
              width: "50%",
            }}
            src={URL.createObjectURL(image)}
            alt="previeww of upload"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Upload
          </button>
        </>
      ) : (
        <>
          <input
            type="file"
            onChange={handleImageUpload}
            accept="png jpg jpeg"
          />
          <button onClick={handleSubmit}>Upload</button>
        </>
      )}
    </div>
  );
};

export default Images;
