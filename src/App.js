import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import NavBar from "./components/NavBar";
import List from "./components/List";
import Cart from "./components/Cart";

export default function App() {
  // Add and remove products logic
  const [chosenItems, setChosenItems] = useState([]);

  const addToCart = (item) => {
    setChosenItems((prevChosenItems) => {
      for (let chosenItem of prevChosenItems) {
        if (chosenItem.id === item.id) {
          return prevChosenItems;
        }
      }
      return [...prevChosenItems, item];
    });
  };

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
            <Cart chosenItems={chosenItems} removeFromCart={removeFromCart} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
