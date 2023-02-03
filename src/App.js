import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";

import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";

import { setupServer } from "./mockAPI";
import { fetchProducts } from "./redux/slices/productSlice";

// if (process.env.NODE_ENV === "development") {
setupServer();
// }

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="app">
      <BrowserRouter basename="/shopping-cart">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />}>
            <Route path="" element={<ProductList />} />
            <Route path=":category" element={<ProductList />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
