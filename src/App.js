import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Catalog from "./pages/Catalog";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/slices/productSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const [chosenItems, setChosenItems] = useState([]);

  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setChosenItems((prevChosenItems) => [...prevChosenItems, item]);
    setTotal((prevTotal) => prevTotal + item.price);
  };

  const updateQuantity = (updateID, newQuantity, totalIncrease) => {
    setChosenItems((prevChosenItems) => {
      let newChosenItems = [...prevChosenItems];
      let updateItem = newChosenItems.find((item) => item.id === updateID);
      updateItem.quantity = newQuantity;
      return newChosenItems;
    });

    setTotal((prevTotal) => prevTotal + totalIncrease);
  };

  const removeFromCart = (deleteID, totalRemove) => {
    setChosenItems((prevChosenItems) => {
      let deleteIndex = prevChosenItems.findIndex(
        (item) => item.id === deleteID
      );
      return [
        ...prevChosenItems.slice(0, deleteIndex),
        ...prevChosenItems.slice(deleteIndex + 1),
      ];
    });

    setTotal((prevTotal) => prevTotal - totalRemove);
  };

  return (
    <div className="app">
      <BrowserRouter basename="/shopping-cart">
        <NavBar numChosenItems={chosenItems.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />}>
            <Route
              path=""
              element={
                <ProductList
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  chosenItems={chosenItems}
                />
              }
            />
            <Route
              path=":category"
              element={
                <ProductList
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
    </div>
  );
}
