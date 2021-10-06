import React from "react";
import himawari from "../Images/himawari.jpg";
import hill from "../Images/hill.jpg";

import "./TulikaClone.css";

export const TulikaClone = () => {
  return (
    <div className="main">
      <div className="maincover">
        <div className="cover">
          <img src={hill} alt="hill" />
        </div>
      </div>
      <div className="card">
        <div className="Himawari">
          <img src={himawari} alt="himawari" />
        </div>
        <div className="cardContent">
          <h4>Madam Curie</h4>
          <h5>Beautiful and colorful imagination</h5>
        </div>

        <div className="Himawari">
          <img src={himawari} alt="himawari" />
        </div>
        <div className="cardContent">
          <h4>Madam Curie</h4>
          <h5>Beautiful and colorful imagination</h5>
        </div>

        <div className="Himawari">
          <img src={himawari} alt="himawari" />
        </div>
        <div className="cardContent">
          <h4>Madam Curie</h4>
          <h5>Beautiful and colorful imagination</h5>
        </div>

        <div className="Himawari">
          <img src={himawari} alt="himawari" />
        </div>
        <div className="cardContent">
          <h4>Madam Curie</h4>
          <h5>Beautiful and colorful imagination</h5>
        </div>
      </div>
      <div className="banner1">
        <div className="banner-container">
          <div className="banner">
            <img src={himawari} alt="himawari" />
            <h5>PAINTNG</h5>
          </div>

          <div className="banner">
            <img src={himawari} alt="himawari" />
            <h5>PAINTNG</h5>
          </div>
        </div>

        <div className="banner-container">
          <div className="banner">
            <img src={himawari} alt="himawari" />
            <h5>PAINTNG</h5>
          </div>

          <div className="banner">
            <img src={himawari} alt="himawari" />
            <h5>PAINTNG</h5>
          </div>
        </div>
      </div>

      <div className="banner1">
        <div className="banner-container">
          <div className="banner">
            <img src={himawari} alt="himawari" />
            <h5>PAINTNG</h5>
          </div>

          <div className="banner">
            <img src={himawari} alt="himawari" />
            <h5>PAINTNG</h5>
          </div>
        </div>

        <div className="banner-container">
          <div className="banner">
            <img src={himawari} alt="himawari" />
            <h5>PAINTNG</h5>
          </div>

          <div className="banner">
            <img src={himawari} alt="himawari" />
            <h5>PAINTNG</h5>
          </div>
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
};
