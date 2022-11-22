import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import NavBar from "./components/NavBar";
import List from "./components/List";
import Cart from "./components/Cart";

export default function App() {
  // Add and remove products logic
  const [chosenProducts, setChosenProducts] = useState([]);

  const addToCart = () => {};
  const removeFromCart = () => {};

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />}>
          <Route path="" element={<List addToCart={addToCart} />} />
          <Route path=":category" element={<List addToCart={addToCart} />} />
        </Route>
        <Route
          path="/cart"
          element={
            <Cart
              chosenProducts={chosenProducts}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
