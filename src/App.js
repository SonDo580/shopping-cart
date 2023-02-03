import { useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Catalog from "./pages/Catalog";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/slices/productSlice";
import { setupServer } from "./mockAPI";

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
