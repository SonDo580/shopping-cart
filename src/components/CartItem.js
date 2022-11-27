import React from "react";

export default function CartItem(props) {
  const { item, removeFromCart, updateQuantity } = props;

  return (
    <div className="cartItem">
      <div className="img">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="main">
        <h3>{item.name}</h3>
        <p>{`$${item.quantity * item.price}`}</p>
        <p>
          <label>Quantity: </label>
          <input
            value={item.quantity}
            onChange={(event) => {
              const { value } = event.target;

              let totalIncrease = 0;
              if (value === "") {
                totalIncrease = -(item.quantity * item.price);
                updateQuantity(item.id, 0, totalIncrease);
                return;
              }

              if (!isNaN(Number(value))) {
                const quantityIncrease = Number(value) - item.quantity;
                totalIncrease = quantityIncrease * item.price;
                updateQuantity(item.id, Number(value), totalIncrease);
              }
            }}
          />
        </p>
        <button
          className="remove"
          onClick={() => {
            const totalRemove = item.price * item.quantity;
            removeFromCart(item.id, totalRemove);
          }}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}
