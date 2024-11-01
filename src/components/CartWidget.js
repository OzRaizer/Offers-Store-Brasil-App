import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget() {
  const itemCount = 3; // Simulação de quantidade de itens no carrinho

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