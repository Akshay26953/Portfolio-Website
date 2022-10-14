import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState();

  const handleCancle = () => {
    return setShow("-100%");
  };
  const handleBurger = () => {
    return setShow("0%");
  };

  return (
    <div className="container contWidth">
      <div className="navbar">
        <div className="logo">
          <Link to="/">AkshayK.</Link>
        </div>
        <div className="nav" style={{ 
          transform: `translateX(${show})` 
          }}>
          <div className="cancel" 
          onClick={handleCancle}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="burger"
         onClick={handleBurger}
         >
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
