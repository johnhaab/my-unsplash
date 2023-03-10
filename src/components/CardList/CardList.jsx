import React, { useState } from "react";
import Card from "../Card/Card";
import HoverCard from "../HoverCard/HoverCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "framer-motion";

import "./CardList.scss";

const CardList = ({ items }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleCardHover = (index) => {
    setHoverIndex(index);
  };

  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="1rem">
          {items.map((items, index) => (
            <div
              key={index}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardHover(null)}
            >
              {hoverIndex === index ? (
                <HoverCard img={items.img} title={items.title} />
              ) : (
                <motion.div
                // initial={{ opacity: 0, scale: 0 }}
                // whileInView={{ opacity: 1, scale: 1 }}
                // viewport={{ once: true }}
                // animate={{ opacity: 1 }}
                >
                  <Card img={items.img} title={items.title} />
                </motion.div>
              )}
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default CardList;
