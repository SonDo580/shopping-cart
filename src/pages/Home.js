import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

export default function Home() {
  return (
    <div className="home">
      <h1>Optimus Prime</h1>
      <p>Now available for preorder</p>
      <button>
        <Link to="/catalog">Shop Now</Link>
      </button>
    </div>
  );
}
