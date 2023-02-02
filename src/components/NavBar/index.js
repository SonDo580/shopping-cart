import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { quantitySelector } from "../../redux/selectors";
import "./NavBar.scss";

export default function NavBar() {
  const quantity = useSelector(quantitySelector);

  return (
    <nav>
      <NavLink className="logo" to="/">
        Mega Robot
      </NavLink>
      <NavLink to="/catalog">Shop Now</NavLink>
      <NavLink to="/cart">Go to Cart ({quantity})</NavLink>
    </nav>
  );
}
