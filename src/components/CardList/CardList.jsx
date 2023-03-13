import React, { useState } from "react";
import Card from "../Card/Card";
import HoverCard from "../HoverCard/HoverCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import "./CardList.scss";

const CardList = ({ items, filteredPhotos }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [id, setId] = useState(null);

  const handleCardHover = (index) => {
    setHoverIndex(index);
  };

  const handleCardHoverId = (id) => {
    setId(id);
  };

  const handleCardLeaveId = () => {
    setId(null);
  };

  const handleDelete = async () => {
    try {
      await fetch(`http://209.192.200.84:8080/images/${id}`, {
        method: "DELETE",
      });
      console.log("Photo deleted successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="2rem">
          {items.map((items, index) => (
            <div
              key={index}
              id={items.id}
              onMouseEnter={() => {
                handleCardHover(index);
                handleCardHoverId(items.id);
              }}
              onMouseLeave={() => {
                handleCardHover(null);
                handleCardLeaveId();
              }}
            >
              {hoverIndex === index ? (
                <HoverCard
                  img={items.img}
                  title={items.title}
                  handleDelete={handleDelete}
                />
              ) : (
                <Card img={items.img} title={items.title} className="cards" />
              )}
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default CardList;
