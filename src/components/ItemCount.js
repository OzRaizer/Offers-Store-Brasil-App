import React, { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    onAdd(count); // Emite o evento com a quantidade atual
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex align-items-center mb-3">
        <button className="btn btn-secondary" onClick={decrement} disabled={count === 1}>
          -
        </button>
        <span className="mx-3">{count}</span>
        <button className="btn btn-secondary" onClick={increment} disabled={count === stock}>
          +
        </button>
      </div>
      <button className="btn btn-primary" onClick={handleAdd}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ItemCount;
