import { NavLink } from "react-router-dom";
import "./navbar.css";

// NavLink is like <a>, but React Router automatically adds an
// "active" class when the current URL matches its `to` prop.

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="es-nav">
      <NavLink to="/" className="es-logo es-display">
        EASY<span>STUR</span>
      </NavLink>

      <div className="es-navlinks">
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              "es-navlink" + (isActive ? " active" : "")
            }
          >
            {link.label}
          </NavLink>
        ))}
        <NavLink to="/shop" className="es-cart">
          Cart (0)
        </NavLink>
      </div>
    </nav>
  );
}