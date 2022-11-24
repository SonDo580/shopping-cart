import React, { useState } from "react";

export default function CartItem(props) {
  const {
    item,
    removeFromCart,
    changeQuantityByOne,
    updateQuantity /* changeTotal */,
  } = props;

  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{`$${item.quantity * item.price}`}</p>
      <p>
        <button onClick={() => changeQuantityByOne(item.id, -1)}>-</button>
        <input
          value={quantity}
          onChange={(event) => {
            const { value } = event.target;

            if (value === "") {
              updateQuantity(item.id, 0);
              return;
            }

            if (/^[0-9]$/.test(value)) {
              updateQuantity(item.id, Number(value));
            }
          }}
        />
        <button onClick={() => changeQuantityByOne(item.id, 1)}>+</button>
      </p>
      <button
        onClick={() => {
          const totalRemove = item.quantity * item.price;
          removeFromCart(item.id, totalRemove);
        }}
      >
        Remove from cart
      </button>
      <hr />
    </div>
  );
}
