import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartItemsSelector, productListSelector } from "../../redux/selectors";
import Product from "./Product";
import "./ProductList.scss";

export default function ProductList() {
  const productList = useSelector(productListSelector);
  const cartItems = useSelector(cartItemsSelector);

  const { category } = useParams("category");

  const productsRemain = category
    ? productList.filter((product) => product.category === category)
    : productList;

  return (
    <div className="productList">
      {productsRemain.length === 0 ? (
        <h1>No Products</h1>
      ) : (
        productsRemain.map((product) => (
          <Product cartItems={cartItems} key={product.id} product={product} />
        ))
      )}
    </div>
  );
}
