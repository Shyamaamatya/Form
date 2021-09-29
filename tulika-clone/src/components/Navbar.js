import React from "react";
import Logo from "../Images/Logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  //   const navStyle = {
  //     color: "white",
  //     textDecoration: "none",
  //   };
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <div className="logo">
            <Link exact className="Link" to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="input">
            <input
              className="search"
              type="text"
              placeholder="type to search"
            />
          </div>
        </div>
        <ul className="nav-right">
          <Link exact className="Link" to="/exhibition">
            <li>Exhibition</li>
          </Link>
          <Link exact className="Link" to="/gallery">
            <li>Gallery</li>
          </Link>
          <Link exact className="Link" to="/exclusive">
            <li>Exclusive</li>
          </Link>
          <Link exact className="Link" to="/studios">
            <li>Studios</li>
          </Link>
          <Link exact className="Link" to="/feed">
            <li>Feed</li>
          </Link>
          <Link exact className="Link" to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
