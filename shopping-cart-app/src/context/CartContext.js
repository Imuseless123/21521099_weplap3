import React, { createContext, useState, useContext } from 'react';

// Create Context
const CartContext = createContext();

// Provider component to wrap around components needing cart data
export const CartProvider = ({ children }) => {
   const [cartItems, setCartItems] = useState([]);

   const addToCart = (product) => {
       setCartItems((prevItems) => [...prevItems, product]);
   };

   const removeFromCart = (productId) => {
       setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
   };

   const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

   return (
       <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalPrice }}>
           {children}
       </CartContext.Provider>
   );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
