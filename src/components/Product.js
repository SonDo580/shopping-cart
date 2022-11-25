import React from "react";

export default function Product(props) {
  const { product, addToCart, removeFromCart } = props;

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{`$${product.price}`}</p>

      {true ? (
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
