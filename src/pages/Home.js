import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import { Images } from "../constants/images";

export default function Home() {
  return (
    <div className="home">
      <div className="left">
        <h1>Optimus Prime</h1>
        <p>Now available for preorder</p>
        <button>
          <Link to="/catalog">Shop Now</Link>
        </button>
      </div>
      <div className="right">
        <img src={Images.ROBOT} alt="main robot" />
      </div>
    </div>
  );
}
