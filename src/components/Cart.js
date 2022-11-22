import React from "react";
import CartItem from "./CartItem";

export default function Cart(props) {
  const { chosenProducts, removeFromCart } = props;

  return (
    <div>
      <h1>Your Cart</h1>
      <div className="cartItems">
        {chosenProducts.map((item) => {
          return <CartItem removeFromCart={removeFromCart} />;
        })}
      </div>
    </div>
  );
}
