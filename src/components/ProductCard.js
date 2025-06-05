import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} width="100%" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h4>${product.price.toFixed(2)}</h4>
      <div>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <Link to={`/product/${product.id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;