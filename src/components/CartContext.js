import React, { createContext, useState, useContext } from 'react';

// Criação do contexto
const CartContext = createContext();

// Custom Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Adiciona um item ao carrinho
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity }]);
    }
  };

  // Remove um item do carrinho
  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Limpa todo o carrinho
  const clear = () => {
    setCart([]);
  };

  // Verifica se um item está no carrinho
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook customizado para usar o CartContext
export const useCart = () => {
  return useContext(CartContext);
};
