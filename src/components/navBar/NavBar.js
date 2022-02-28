import React from 'react';
import { Link } from "react-router-dom";
import './navBar.scss';

const NavBar = ({ openMenu, setOpenMenu }) => {
  return (

    <div className="header">
      <Link to="/" className="logo">
        <img src="/assets/logo.png" alt="logo" />
      </Link>
      <div className="icons">
        <Link to="/">Nous Connaitre</Link>
        <Link to="/">Nos Fonds</Link>
        <Link to="/ResSociale">Responsabilité Sociale</Link>
        {/* <Link to="/">Nos Realisations</Link> */}
        <Link to="/">Actualités</Link>
        <Link to="/">Contacts</Link>
        {/* <Link to="/">Lexique</Link> */}
        <div
          id="menu-btn"
          className="fas fa-bars"
          onClick={() => setOpenMenu(!openMenu)}
        ></div>    
      </div>
    </div>
  )
}

export default NavBar