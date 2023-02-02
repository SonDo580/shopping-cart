import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartItemsSelector, productListSelector } from "../../redux/selectors";

import Product from "./Product";
import "./ProductList.css";

export default function ProductList() {
  const productList = useSelector(productListSelector);
  const cartItems = useSelector(cartItemsSelector);

  const { category } = useParams("category");

  if (category === undefined) {
    return (
      <div className="productList">
        {productList.map((product) => {
          return (
            <Product cartItems={cartItems} key={product.id} product={product} />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="productList">
        {productList
          .filter((product) => product.category === category)
          .map((product) => {
            return (
              <Product
                cartItems={cartItems}
                key={product.id}
                product={product}
              />
            );
          })}
      </div>
    );
  }
}
