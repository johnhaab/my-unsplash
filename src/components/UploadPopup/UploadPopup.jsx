import React from "react";

import "./UploadPopup.scss";
import { motion } from "framer-motion";

const UploadPopup = ({ handleClose }) => {
  return (
    <div className="container-popup">
      <h1>Add a new photo</h1>
      <div className="label">
        <p>Label</p>
        <input type="text" name="label" placeholder="Anything you want" />
      </div>
      <div className="imgURL">
        <p>Image URL</p>
        <input
          type="text"
          name="imgURL"
          placeholder="https://images.unsplash.com/photo-1677484227914-e06f939da0a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div className="btns">
        <motion.div whileTap={{ scale: 0.9 }}>
          <button className="cancel" onClick={() => handleClose()}>
            Cancel
          </button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <button className="submit" onClick={() => handleClose()}>
            Submit
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default UploadPopup;
