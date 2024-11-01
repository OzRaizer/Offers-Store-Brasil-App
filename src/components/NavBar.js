import React from 'react';
import CartWidget from './CartWidget';
import { FaShoppingCart, FaFire } from 'react-icons/fa';

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <h3 className="navbar-brand d-flex align-items-center">
        <FaShoppingCart style={{ marginRight: '8px' }} />
        Compra Fácil
        <FaFire style={{ color: 'orange', marginLeft: '8px' }} />
      </h3>
      <CartWidget />
    </nav>
  );
}

export default NavBar;