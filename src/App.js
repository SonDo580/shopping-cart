import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import NavBar from "./components/NavBar";
import List from "./components/List";
import Cart from "./components/Cart";

export default function App() {
  const [chosenItems, setChosenItems] = useState([]);

  const [total, setTotal] = useState(0);

  const changeTotal = (amount) => {
    setTotal((prevTotal) => prevTotal + amount);
  };

  const addToCart = (item) => {
    setChosenItems((prevChosenItems) => [...prevChosenItems, item]);
    // changeTotal(item.price);
  };

  const updateQuantity = (updateID, newQuantity) => {
    setChosenItems((prevChosenItems) => {
      let newChosenItems = [...prevChosenItems];
      let updateItem = newChosenItems.find((item) => item.id === updateID);
      updateItem.quantity = newQuantity;
      return newChosenItems;
    });
  };

  const removeFromCart = (deleteID) => {
    setChosenItems((prevChosenItems) => {
      let deleteIndex = prevChosenItems.findIndex(
        (item) => item.id === deleteID
      );
      return [
        ...prevChosenItems.slice(0, deleteIndex),
        ...prevChosenItems.slice(deleteIndex + 1),
      ];
    });

    // changeTotal(-totalRemove);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />}>
          <Route
            path=""
            element={
              <List
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                chosenItems={chosenItems}
              />
            }
          />
          <Route
            path=":category"
            element={
              <List
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                chosenItems={chosenItems}
              />
            }
          />
        </Route>
        <Route
          path="/cart"
          element={
            <Cart
              chosenItems={chosenItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              total={total}
            />
          }
        />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
