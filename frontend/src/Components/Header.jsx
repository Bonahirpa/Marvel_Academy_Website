import React from 'react'
// import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">Marvels Academy</div>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#academic">Academics</a>
              </li>
              <li>
                <a href="#admission">Admissions</a>
              </li>
              <li>
                <a href="#event">Events</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div className="menu-toggle">&#9776;</div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header
