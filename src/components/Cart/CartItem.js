import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../redux/slices/cartSlice";

export default function CartItem(props) {
  const { item } = props;

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

              if (value === "") {
                dispatch(updateQuantity(item.id, 0));
                return;
              }

              if (!isNaN(Number(value))) {
                dispatch(updateQuantity(item.id, Number(value)));
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
