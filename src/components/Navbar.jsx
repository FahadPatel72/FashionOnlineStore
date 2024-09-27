import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import './Navbar.css'

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return(
    <div>
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar-logo">
          <img src="../logo.png" alt="logo" className="logo-image"/>
        </div>
      </NavLink>

      <div className="navbar-menu">
        <NavLink to="/" className="nav-item">Home</NavLink>

        <NavLink to="/cart" className="nav-item">
          <div className="cart-container">
            <FaShoppingCart className="cart-icon"/>
            {cart.length > 0 && (
              <span className="cart-count">{cart.length}</span>
            )}
          </div>
        </NavLink>
      </div>
    </nav>
  </div>
  ) 
};

export default Navbar;
