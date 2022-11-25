import React from "react";

export default function CartItem(props) {
  const { item, removeFromCart, updateQuantity /* changeTotal */ } = props;

  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{`$${item.quantity * item.price}`}</p>
      <p>
        <label>Quantity: </label>
        <input
          value={item.quantity}
          onChange={(event) => {
            const { value } = event.target;

            if (value === "") {
              updateQuantity(item.id, 0);
              return;
            }

            if (!isNaN(Number(value))) {
              updateQuantity(item.id, Number(value));
            }
          }}
        />
      </p>
      <button
        onClick={() => {
          removeFromCart(item.id);
        }}
      >
        Remove from cart
      </button>
      <hr />
    </div>
  );
}
