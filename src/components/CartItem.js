import React, { useState } from "react";

export default function CartItem(props) {
  const { item, removeFromCart } = props;

  const [total, setTotal] = useState(item.price);
  const [quantity, setQuantity] = useState(1);

  const changeQuantityByOne = (amount) => {
    if (quantity === 1 && amount === -1) {
      return;
    }
    setQuantity((prevQuantity) => prevQuantity + amount);
    setTotal((prevTotal) => prevTotal + amount * item.price);
  };

  const changeQuantity = (event) => {
    setQuantity(event.target.value);
    setTotal(event.target.value * item.price);
  };

  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{`${item.unit}${total}`}</p>
      <p>
        <button onClick={() => changeQuantityByOne(-1)}>-</button>
        <input value={quantity} onChange={changeQuantity} />
        <button onClick={() => changeQuantityByOne(1)}>+</button>
      </p>
      <button
        onClick={() => {
          removeFromCart();
        }}
      >
        Remove from cart
      </button>
      <hr />
    </div>
  );
}
