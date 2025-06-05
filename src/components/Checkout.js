import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart();
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  if (orderPlaced) {
    return <h2>Order placed successfully! Redirecting...</h2>;
  }

  return (
    <div>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h3>Order Summary</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} x {item.qty} = ${(item.price * item.qty).toFixed(2)}
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;