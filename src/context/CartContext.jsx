// src/context/CartContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

// Creamos el contexto
const CartContext = createContext();

// Hook para acceder fácilmente al contexto
export const useCart = () => useContext(CartContext);

// Proveedor del contexto, que envolverá toda la app
export const CartProvider = ({ children }) => {
  // 🧠 Inicializamos desde localStorage si hay datos
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // 💾 Guardamos cada vez que el carrito cambia
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (book) => {
    setCartItems((prev) => [...prev, book]);
  };

  const removeFromCart = (bookId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== bookId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
