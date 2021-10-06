import React from "react";
import blue from "../Images/blue.jpg";
import himawari from "../Images/himawari.jpg";
import sky from "../Images/sky.jpg";
import { FiHeart } from "react-icons/fi";

import "./Gallery.css";

export const Gallery = () => {
  return (
    <div classNam="main1">
      <div className="maincover1">
        <img src={blue} alt="blue" />
        <h4>GALLERY</h4>
      </div>
      <div className="container">
        <div className="card-container1">
          <div className="card1">
            <img src={himawari} alt="himawari" />
            <p>
              <FiHeart />
            </p>
          </div>

          <div className="cardcontent1">
            <h5>Find The Moon</h5>
            <h6>NFS</h6>
            <p>By hsagdj</p>
          </div>
        </div>

        <div className="card-container1">
          <div className="card1">
            <img src={sky} alt="sky" />
            <p>
              <FiHeart />
            </p>
          </div>
          <div className="cardcontent1">
            <h5>Find The Moon</h5>
            <h6>NFS</h6>
            <p>By hsagdj</p>
          </div>
        </div>

        <div className="card-container1">
          <div className="card1">
            <img src={himawari} alt="himawari" />
            <p>
              <FiHeart />
            </p>
          </div>
          <div className="cardcontent1">
            <h5>Find The Moon</h5>
            <h6>NFS</h6>
            <p>By hsagdj</p>
          </div>
        </div>

        <div className="card-container1">
          <div className="card1">
            <img src={sky} alt="sky" />
            <p>
              <FiHeart />
            </p>
          </div>
          <div className="cardcontent1">
            <h5>Find The Moon</h5>
            <h6>NFS</h6>
            <p>By hsagdj</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card-container1">
          <div className="card1">
            <img src={himawari} alt="himawari" />
            <p>
              <FiHeart />
            </p>
          </div>
          <div className="cardcontent1">
            <h5>Find The Moon</h5>
            <h6>NFS</h6>
            <p>By hsagdj</p>
          </div>
        </div>

        <div className="card-container1">
          <div className="card1">
            <img src={sky} alt="sky" />
            <p>
              <FiHeart />
            </p>
          </div>
          <div className="cardcontent1">
            <h5>Find The Moon</h5>
            <h6>NFS</h6>
            <p>By hsagdj</p>
          </div>
        </div>

        <div className="card-container1">
          <div className="card1">
            <img src={himawari} alt="himawari" />
            <p>
              <FiHeart />
            </p>
          </div>
          <div className="cardcontent1">
            <h5>Find The Moon</h5>
            <h6>NFS</h6>
            <p>By hsagdj</p>
          </div>
        </div>

        <div className="card-container1">
          <div className="card1">
            <img src={sky} alt="sky" />
            <p>
              <FiHeart />
            </p>
          </div>
          <div className="cardcontent1">
            <h5>Find The Moon</h5>
            <h6>NFS</h6>
            <p>By hsagdj</p>
          </div>
        </div>
      </div>
    </div>
  );
};
