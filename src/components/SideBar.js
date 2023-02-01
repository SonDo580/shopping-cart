import { NavLink } from "react-router-dom";
import "../css/SideBar.css";

export default function SideBar() {
  return (
    <aside>
      <ul>
        <li>
          <NavLink to="">All Robots</NavLink>
        </li>
        <li>
          <NavLink to="reptile">Reptile</NavLink>
        </li>
        <li>
          <NavLink to="mammal">Mammal</NavLink>
        </li>
        <li>
          <NavLink to="insect">Insect</NavLink>
        </li>
      </ul>
    </aside>
  );
}
