import React from "react";
import CardList from "../CardList/CardList";

import "./Feed.scss";

const Feed = ({ items, noHover, onHover, cardHover }) => {
  return (
    <div className="container-feed">
      <CardList
        items={items}
        noHover={noHover}
        onHover={onHover}
        cardHover={cardHover}
      />
    </div>
  );
};

export default Feed;
