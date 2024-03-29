import React from "react";

import "./HoverCard.scss";

const HoverCard = ({ img, title, handleDelete }) => {
  return (
    <div className="container">
      <img
        src={img}
        alt={title}
        width="100%"
        style={{ display: "block", filter: "brightness(55%) blur(0.5px)" }}
        className="hover-card"
      ></img>
      <div className="overlay">
        <p className="title">{title}</p>
        <button className="del-btn" onClick={() => handleDelete()}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default HoverCard;
