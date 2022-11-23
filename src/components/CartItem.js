import React, { useState, useEffect } from "react";

export default function CartItem(props) {
  const { item, removeFromCart, updateItemQuantity } = props;

  const [quantity, setQuantity] = useState(item.quantity);

  // Before navigate to another page, update the item (in chosenItems list)
  useEffect(() => {
    return () => {
      updateItemQuantity(item.id, quantity);
    };
  });

  const changeQuantityByOne = (amount) => {
    if (quantity === 1 && amount === -1) {
      return;
    }
    setQuantity((prevQuantity) => prevQuantity + amount);
  };

  const changeQuantity = (event) => {
    if (event.tartget === "") {
      setQuantity(0);
      return;
    }

    let { value } = event.target;
    if (!isNaN(Number(value))) {
      setQuantity(Number(value));
    }
  };

  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{`${item.unit}${quantity * item.price}`}</p>
      <p>
        <button onClick={() => changeQuantityByOne(-1)}>-</button>
        <input value={quantity} onChange={changeQuantity} />
        <button onClick={() => changeQuantityByOne(1)}>+</button>
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
