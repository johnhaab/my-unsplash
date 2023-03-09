import React from "react";

import "./Card.scss";

const Card = ({ img, title }) => {
  return (
    <>
      <img
        src={img}
        alt={title}
        width="100%"
        style={{ display: "block" }}
      ></img>
      <p>{title}</p>
    </>
  );
};

export default Card;
