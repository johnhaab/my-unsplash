import React from "react";

import "./Nav.scss";

const Nav = () => {
  return (
    <div className="container-nav">
      <div className="logo-nav">
        <img src="././assets/logo.svg" alt="logo" />
      </div>
      <div className="search-nav"></div>
      <div className="add-btn-nav"></div>
    </div>
  );
};

export default Nav;
