import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart, removeFromCart, isInCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          inCart={isInCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;

