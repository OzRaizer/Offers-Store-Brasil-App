import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

function CartWidget() {
  const { cart } = useContext(CartContext);
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0); // Soma as quantidades

  return (
    <div style={{ color: 'white', cursor: 'pointer', position: 'relative' }}>
      <FaShoppingCart size={24} />
      {itemCount > 0 && (
        <span
          style={{
            position: 'absolute',
            top: '-8px',
            right: '-10px',
            backgroundColor: 'red',
            borderRadius: '50%',
            padding: '2px 6px',
            color: 'white',
            fontSize: '12px',
            fontWeight: 'bold'
          }}
        >
          {itemCount}
        </span>
      )}
    </div>
  );
}

export default CartWidget;
