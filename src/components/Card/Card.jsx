import React from "react";

const Card = ({ img, title }) => {
  return (
    <div>
      <div>
        <img src={img} alt={title} />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
