import React from "react";
import "./Footer.css";
import Logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <div className="one">
        <div className="logo1">
          <Link exact className="Link" to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="icon">
          <FaFacebook />
        </div>
        <div className="icon">
          <FaInstagram />
        </div>
        <div className="icon">
          <FaYoutube />
        </div>
      </div>
      <ul className="two">
        <li>Terms Of Use</li>
        <li>Privacy Policy</li>
        <li>Security</li>
        <li>Conditions of sale</li>

        <p>
          <AiOutlineCopyright />
          Tilicho Kala
        </p>
      </ul>
    </footer>
  );
};
