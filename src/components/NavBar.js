import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

export default function NavBar(props) {
  const { numChosenItems } = props;

  return (
    <nav>
      <Link className="logo" to="/">
        Mega Robot
      </Link>
      <Link to="/catalog">Shop Now</Link>
      <Link to="/cart">Go to Cart ({numChosenItems})</Link>
    </nav>
  );
}
