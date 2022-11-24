import React, { useState } from "react";

export default function CartItem(props) {
  const { item, removeFromCart, updateQuantity /* changeTotal */ } = props;

  const [quantity, setQuantity] = useState(item.quantity);

  const changeQuantityByOne = (amount) => {
    setQuantity((prevQuantity) => prevQuantity + amount);
  };

  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{`$${quantity * item.price}`}</p>
      <p>
        <button onClick={() => changeQuantityByOne(-1)}>-</button>
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
        <button onClick={() => changeQuantityByOne(1)}>+</button>
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
