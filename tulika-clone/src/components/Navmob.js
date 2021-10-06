import React from "react";
import { useState } from "react";
import Logo from "../Images/Logo.png";
import "./Navmob.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navmob = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  //   const navStyle = {
  //     color: "white",
  //     textDecoration: "none",
  //   };

  const handleClick = () => setMenuIcon(!menuIcon);
  console.log(handleClick);
  return (
    <>
      <div className="nav1">
        <div className="nav-left1">
          <div className="logo">
            <Link exact className="Link" to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="input1">
            <input
              className="search1"
              type="text"
              placeholder="type to search"
            />
          </div>
        </div>
        <div className="nav-right1">
          <ul className={menuIcon ? "opennav" : "menu"}>
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
          <div className="menu1">
            <AiOutlineMenu onClick={handleClick} />
            {/* <div className={menuIcon ? "opennav" : "menu"}></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navmob;
