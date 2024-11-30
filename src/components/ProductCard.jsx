import React from 'react';

const ProductCard = ({ product, onAddToCart, onRemoveFromCart, inCart }) => {
  const { image, name, price } = product;

  const handleClick = () => {
    if (inCart) {
      onRemoveFromCart(product);
    } else {
      onAddToCart(product);
    }
  };

  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-price">${price}</p>
        <button className="add-to-cart" onClick={handleClick}>
          {inCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;


