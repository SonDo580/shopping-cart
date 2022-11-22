import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Optimus Prime</h1>
      <p>Now available for preorder</p>
      <Link to="/catalog">Shop Now</Link>
    </div>
  );
}
