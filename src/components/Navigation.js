import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  const activeClassHandler = ({ isActive }) => {
    return isActive ? classes.active : "";
  };
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={activeClassHandler} end>
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink to="newtask" className={activeClassHandler}>
              Add Task
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
