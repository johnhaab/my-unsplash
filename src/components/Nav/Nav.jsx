import React from "react";
import "./Nav.scss";
import logo from "../../assets/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="container-nav">
      <div className="inner-container-nav">
        <div className="logo-nav">
          <img src={logo} alt="logo" />
        </div>
        <div className="search-nav">
          <AiOutlineSearch className="search" />
          <input type="text" placeholder="Search by name" />
        </div>
      </div>
      <div className="add-btn-nav">
        <button name="add">Add a photo</button>
      </div>
    </div>
  );
};

export default Nav;
