import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/slices/cartSlice";

export default function CartItem(props) {
  const { item, updateQuantity } = props;

  const dispatch = useDispatch();

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
            dispatch(removeItem(item.id));
          }}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}
