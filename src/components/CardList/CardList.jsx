import React from "react";
import Card from "../Card/Card";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import "./CardList.scss";

const CardList = ({ items }) => {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="1rem">
          {items.map((image, i) => (
            <Card key={i} img={items[i].img} title={items[i].title} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default CardList;
