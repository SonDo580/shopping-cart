import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import NavBar from "./components/NavBar";
import List from "./components/List";
import Cart from "./components/Cart";

export default function App() {
  const [chosenItems, setChosenItems] = useState([]);

  // const initialTotal = chosenItems.reduce((sum, item) => sum + item.price, 0);
  // const [total, setTotal] = useState(initialTotal);

  // const changeTotal = (amount) => {
  //   setTotal((prevTotal) => prevTotal + amount);
  // };

  const addToCart = (item) => {
    setChosenItems((prevChosenItems) => [...prevChosenItems, item]);
    // changeTotal(item.price);
  };

  const changeQuantityByOne = (updateID, amount) => {
    setChosenItems((prevChosenItems) => {
      let newChosenItems = [...prevChosenItems];
      for (let item of newChosenItems) {
        if (item.id === updateID) {
          if (item.quantity === 0 && amount === -1) {
            return;
          }

          item.quantity += amount;
          break;
        }
      }
      return newChosenItems;
    });
  };

  const updateQuantity = (updateID, newQuantity) => {
    setChosenItems((prevChosenItems) => {
      let newChosenItems = [...prevChosenItems];
      for (let item of newChosenItems) {
        if (item.id === updateID) {
          item.quantity = newQuantity;
          break;
        }
      }
      return newChosenItems;
    });
  };

  const removeFromCart = (deleteID, totalRemove) => {
    setChosenItems((prevChosenItems) => {
      for (let i = 0; i < prevChosenItems.length; i++) {
        if (prevChosenItems[i].id === deleteID) {
          return [
            ...prevChosenItems.slice(0, i),
            ...prevChosenItems.slice(i + 1),
          ];
        }
      }
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
            element={<List chosenItems={chosenItems} addToCart={addToCart} />}
          />
          <Route
            path=":category"
            element={<List chosenItems={chosenItems} addToCart={addToCart} />}
          />
        </Route>
        <Route
          path="/cart"
          element={
            <Cart
              chosenItems={chosenItems}
              removeFromCart={removeFromCart}
              // total={total}
              // changeTotal={changeTotal}
            />
          }
        />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
