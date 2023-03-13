import React, { useState } from "react";

import "./UploadPopup.scss";
import { motion } from "framer-motion";

const UploadPopup = ({ handleClose }) => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { img: image, title: title };

    fetch("http://209.192.200.84:8080/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    handleClose();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="container-popup">
      <h1>Add a new photo</h1>
      <form>
        <div className="label">
          <p>Label</p>
          <input
            type="text"
            name="label"
            placeholder="Anything you want"
            onChange={handleTitleChange}
          />
        </div>
        <div className="imgURL">
          <p>Image URL</p>
          <input
            type="text"
            name="imgURL"
            placeholder="https://images.unsplash.com/photo-1677484227914-e06f939da0a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            onChange={handleImageChange}
          />
        </div>
      </form>
      <div className="btns">
        <motion.div whileTap={{ scale: 0.9 }}>
          <button className="cancel" onClick={() => handleClose()}>
            Cancel
          </button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <button
            className="submit"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default UploadPopup;
