import React from "react";
import products from "../context/Products";
import ProductCard from "./ProductCard";

const ProductList = () => (
  <div>
    <h2>Products</h2>
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductList;