import React from "react";

export default function Product(props) {
  const { product, addToCart, removeFromCart, chosenItems } = props;

  const isChosen =
    chosenItems.findIndex((item) => item.id === product.id) !== -1;

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{`$${product.price}`}</p>

      {isChosen ? (
        <button
          onClick={() => {
            removeFromCart(product.id);
          }}
        >
          Remove from cart
        </button>
      ) : (
        <button
          onClick={() => {
            const item = { ...product, quantity: 1 };
            addToCart(item);
          }}
        >
          Add to cart
        </button>
      )}
      <hr />
    </div>
  );
}
