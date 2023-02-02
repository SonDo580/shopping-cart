import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartItemsSelector, productListSelector } from "../../redux/selectors";

import Product from "./Product";
import "./ProductList.css";

export default function ProductList(props) {
  const { addToCart, removeFromCart, chosenItems } = props;
  const { category } = useParams("category");

  const productList = useSelector(productListSelector);
  const cartItems = useSelector(cartItemsSelector);

  if (category === undefined) {
    return (
      <div className="productList">
        {productList.map((product) => {
          return (
            <Product
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cartItems={cartItems}
              key={product.id}
              product={product}
            />
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
                addToCart={addToCart}
                removeFromCart={removeFromCart}
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
