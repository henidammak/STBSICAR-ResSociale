import React from "react";
import "./sideBar.scss";
import { Link } from "react-router-dom";


const SideBar = ({ openMenu, setOpenMenu }) => {

  const closeMenu = () => {
    setOpenMenu(!openMenu);
  };
 


  return (
    <div className="side-bar active">
      <div
        id="close-side-bar"
        className="fas fa-times"
        onClick={() => setOpenMenu(!openMenu)}
      ></div>

      <div className="user">
        <img src="/assets/logo.png" alt="logo" />
      </div>

      <nav className="navbar">
   
            <Link to="/" onClick={closeMenu}>
              <i className="fas fa-angle-right"></i>nous connaitre
            </Link>
            <Link to="/login" onClick={closeMenu}>
              <i className="fas fa-angle-right"></i>nos fonds
            </Link>
            <Link to="/register" onClick={closeMenu}>
              <i className="fas fa-angle-right"></i>responsabilités sociales
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              <i className="fas fa-angle-right"></i>actualités
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              <i className="fas fa-angle-right"></i>contacts
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              <i className="fas fa-angle-right"></i>lexique
            </Link>
      </nav>
    </div>
  );
};

export default SideBar;
