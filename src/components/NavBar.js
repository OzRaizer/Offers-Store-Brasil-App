import React from 'react';
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <nav>
      <Link to="/" className="brand">Offers Store</Link>
      <ul>
        <li><Link to="/category/electronics">Electronics</Link></li>
        <li><Link to="/category/clothing">Clothing</Link></li>
        <li><Link to="/category/sports">Sports</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default Navbar;
