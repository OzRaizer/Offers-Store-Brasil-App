import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Kingston NV3 1TB M.2 2280 NVMe SSD',
      price: 449.99,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Processador AMD Ryzen 5 7600X Box',
      price: 1549.70,
      quantity: 2,
    },
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container my-4">
      <h1>Carrinho de Compras</h1>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio. <Link to="/">Volte às compras</Link>.</p>
      ) : (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Total</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>R$ {item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>R$ {(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => handleRemoveItem(item.id)}>
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-between align-items-center">
            <h3>Total: R$ {totalPrice.toFixed(2)}</h3>
            <div>
              <button className="btn btn-warning me-2" onClick={handleClearCart}>
                Limpar Carrinho
              </button>
              <button className="btn btn-success">Finalizar Compra</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
