import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="cart-summary">
            <div className="summary-details">
              <div className="summary-header">
                <div className="summary-cart-title">Your Cart</div>
                <div className="summary-title">Summary</div>
                <p className="summary-items">
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>
            </div>

            <div className="summary-footer">
              <p className="summary-total">
                <span>Total Amount:</span> ${totalAmount}
              </p>
              <button className="checkout-button">CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h1>Your cart is empty!</h1>
          <Link to={"/"}>
            <button className="shop-now-button">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
