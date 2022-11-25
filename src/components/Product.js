import React from "react";

export default function Product(props) {
  const { product, addToCart, removeFromCart, setChosen } = props;

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{`$${product.price}`}</p>

      {product.chosen ? (
        <button
          onClick={() => {
            setChosen(product.id, false);
            removeFromCart(product.id);
          }}
        >
          Remove from cart
        </button>
      ) : (
        <button
          onClick={() => {
            setChosen(product.id, true);
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
