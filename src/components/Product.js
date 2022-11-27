import React from "react";
import "../css/List.css";

export default function Product(props) {
  const { product, addToCart, removeFromCart, chosenItems } = props;

  const indexChosen = chosenItems.findIndex((item) => item.id === product.id);

  let item = null;
  if (indexChosen !== -1) {
    item = chosenItems[indexChosen];
  }

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{`$${product.price}`}</p>

      {indexChosen !== -1 ? (
        <button
          className="remove"
          onClick={() => {
            const totalRemove = item.quantity * item.price;
            removeFromCart(product.id, totalRemove);
          }}
        >
          Remove from cart
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            const item = { ...product, quantity: 1 };
            addToCart(item);
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}
