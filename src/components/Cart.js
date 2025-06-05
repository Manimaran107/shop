import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go shopping!</Link></p>
      ) : (
        <div>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.qty}
                      onChange={(e) =>
                        updateQty(item.id, Number(e.target.value))
                      }
                      style={{ width: 40 }}
                    />
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.qty).toFixed(2)}</td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)}>X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Grand Total: ${total.toFixed(2)}</h3>
          <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;