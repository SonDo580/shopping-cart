import React from "react";

export default function CartItem(props) {
  const { item, removeFromCart /* changeTotal */ } = props;

  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{`$${item.quantity * item.price}`}</p>
      <p>
        <button onClick={() => changeQuantityByOne(-1)}>-</button>
        <input value={quantity} onChange={changeQuantity} />
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
