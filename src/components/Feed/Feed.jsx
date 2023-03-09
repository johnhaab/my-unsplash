import React from "react";
import CardList from "../CardList/CardList";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import "./Feed.scss";

const Feed = ({ items }) => {
  return (
    <div className="container-feed">
      <CardList items={items} />
    </div>
  );
};

export default Feed;
