import React from "react";
import CartItem from "./CartItem";

export default function Cart(props) {
  const { chosenItems, removeFromCart } = props;

  return (
    <div>
      <h1>Your Cart</h1>
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
      <div className="buttons">
        <button>Continue buying</button>
        <button>Check out</button>
      </div>
    </div>
  );
}
