import React from "react";

export default function CartItem(props) {
  const {
    item,
    removeFromCart,
    changeQuantityByOne,
    updateQuantity /* changeTotal */,
  } = props;

  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{`$${item.quantity * item.price}`}</p>
      <p>
        <button onClick={() => changeQuantityByOne(item.id, -1)}>-</button>
        <input
          value={item.quantity}
          onChange={(event) => {
            updateQuantity(item.id, event.target.value);
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
