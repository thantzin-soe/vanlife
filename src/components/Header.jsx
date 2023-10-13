import { NavLink, Link } from "react-router-dom";
import avatarIcon from "../assets/images/avatar-icon.png";
const Header = () => {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VANLIFE
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/vans"
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={avatarIcon} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
