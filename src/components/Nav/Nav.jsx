import React from "react";
import "./Nav.scss";
import logo from "../../assets/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { motion } from "framer-motion";

const Nav = ({ handleSearch, handleClick }) => {
  return (
    <div className="container-nav">
      <div className="inner-container-nav">
        <div className="logo-nav">
          <img src={logo} alt="logo" />
        </div>
        <div className="search-nav">
          <AiOutlineSearch className="search" />
          <input
            type="search"
            placeholder="Search by name"
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </div>
      <div className="add-btn-nav">
        <motion.div whileTap={{ scale: 0.9 }}>
          <button name="add" onClick={() => handleClick()}>
            Add a photo
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Nav;
