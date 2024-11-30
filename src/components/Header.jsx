import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = ({ cartLength }) => {
  return (
    <header style={headerStyle}>
      <button className="cart-button">
      <ShoppingCartIcon /> Cart ({cartLength})
      </button>
    </header>
  );
};

const headerStyle = {
  position: 'fixed',
  top: '10px',
  right: '10px',
  zIndex: 1000,
};

export default Header;
