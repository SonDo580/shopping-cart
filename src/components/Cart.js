import React, { useState } from "react";
import CartItem from "./CartItem";

export default function Cart(props) {
  const { chosenItems, removeFromCart } = props;
  const [total, setTotal] = useState((chosenItems) =>
    chosenItems.reduce((sum, item) => {
      return sum + item.price;
    }, 0)
  );

  return (
    <div>
      <div className="head">
        <h1>Your Cart</h1>
        <strong>Total: {total}</strong>
        <button>Continue buying</button>
        <button>Check out</button>
      </div>
      <hr />
      <div className="cartItems">
        {chosenItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          );
        })}
      </div>
    </div>
  );
}
