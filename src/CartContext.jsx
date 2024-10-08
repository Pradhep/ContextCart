import React, { createContext, useState, useContext } from 'react';
import productsData from './products.json';

// Create the CartContext
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { products } = productsData;

  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  const updateQuantity = (id, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity,
    }));
  };

  // Calculate subtotal
  const subtotal = products.reduce((total, product) => {
    return total + product.price * quantities[product.id];
  }, 0);

  return (
    <CartContext.Provider value={{ products, quantities, updateQuantity, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);
