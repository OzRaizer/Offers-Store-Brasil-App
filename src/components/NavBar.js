import React from 'react';
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';
import { FaShoppingCart, FaFire } from 'react-icons/fa';

function Navbar() {
  return (
    <nav>
      <Link to="/" className="brand">Offers Store</Link>
      <ul>
        <li><Link to="/category/electronics">Electronics</Link></li>
        <li><Link to="/category/clothing">Clothing</Link></li>
        <li><Link to="/category/sports">Sports</Link></li>
      </ul>
      <div className="cart">
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

export default NavBar;