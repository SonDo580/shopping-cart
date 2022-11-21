import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Mega Robot</Link>
      <Link to="catalog">Shop Now</Link>
      <button>Go to Cart</button>
    </nav>
  );
}
