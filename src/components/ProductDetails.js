import React from "react";
import { useParams } from "react-router-dom";
import products from "../context/Products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} width="300" />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>${product.price.toFixed(2)}</h3>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;