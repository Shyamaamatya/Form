import React from "react";
import purple from "../Images/purple.jpg";
import himawari from "../Images/himawari.jpg";
import sky from "../Images/sky.jpg";
import ful from "../Images/ful.jpg";
import grow from "../Images/grow.png";
import { FiHeart } from "react-icons/fi";
import "./Exclusive.css";

export const Exclusive = () => {
  return (
    <div classNam="main2">
      <div className="maincover2">
        <img src={purple} alt="purple" />
        <h4>EXCLUSIVE</h4>
      </div>
      <div className="container1">
        <div className="container2">
          <div className="card-container2">
            <div className="card2">
              <img src={himawari} alt="himawari" />
              <p>
                <FiHeart />
              </p>
            </div>

            <div className="cardcontent2">
              <h5>Find The Moon</h5>
              <h6>NPR. 1000</h6>
              <p>By hsagdj</p>
            </div>
          </div>

          <div className="card-container2">
            <div className="card2">
              <img src={sky} alt="sky" />
              <p>
                <FiHeart />
              </p>
            </div>
            <div className="cardcontent2">
              <h5>Find The Moon</h5>
              <h6>NPR. 1400</h6>
              <p>By hsagdj</p>
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="card-container2">
            <div className="card2">
              <img src={ful} alt="ful" />
              <p>
                <FiHeart />
              </p>
            </div>
            <div className="cardcontent2">
              <h5>Find The Moon</h5>
              <h6>NPR. 500</h6>
              <p>By hsagdj</p>
            </div>
          </div>

          <div className="card-container2">
            <div className="card2">
              <img src={grow} alt="grow" />
              <p>
                <FiHeart />
              </p>
            </div>
            <div className="cardcontent2">
              <h5>Find The Moon</h5>
              <h6>NPR. 800</h6>
              <p>By hsagdj</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container1">
        <div className="container2">
          <div className="card-container2">
            <div className="card2">
              <img src={himawari} alt="himawari" />
              <p>
                <FiHeart />
              </p>
            </div>
            <div className="cardcontent2">
              <h5>Find The Moon</h5>
              <h6>NPR. 1000</h6>
              <p>By hsagdj</p>
            </div>
          </div>

          <div className="card-container2">
            <div className="card2">
              <img src={sky} alt="sky" />
              <p>
                <FiHeart />
              </p>
            </div>
            <div className="cardcontent2">
              <h5>Find The Moon</h5>
              <h6>NPR. 1200</h6>
              <p>By hsagdj</p>
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="card-container2">
            <div className="card2">
              <img src={himawari} alt="himawari" />
              <p>
                <FiHeart />
              </p>
            </div>
            <div className="cardcontent2">
              <h5>Find The Moon</h5>
              <h6>NPR. 500</h6>
              <p>By hsagdj</p>
            </div>
          </div>

          <div className="card-container2">
            <div className="card2">
              <img src={sky} alt="sky" />
              <p>
                <FiHeart />
              </p>
            </div>
            <div className="cardcontent2">
              <h5>Find The Moon</h5>
              <h6>NPR. 1000</h6>
              <p>By hsagdj</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
