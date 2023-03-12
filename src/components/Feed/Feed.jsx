import React from "react";
import CardList from "../CardList/CardList";

import "./Feed.scss";

const Feed = ({ items, noHover, onHover, cardHover, filteredPhotos }) => {
  return (
    <div className="container-feed">
      <CardList
        items={items}
        noHover={noHover}
        onHover={onHover}
        cardHover={cardHover}
        filteredPhotos={filteredPhotos}
      />
    </div>
  );
};

export default Feed;
