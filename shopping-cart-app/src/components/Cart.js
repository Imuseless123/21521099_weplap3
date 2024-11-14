import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
   const { cartItems, removeFromCart, totalPrice } = useCart();

   return (
       <div>
           <h2>Shopping Cart</h2>
           {cartItems.length === 0 ? (
               <p>Your cart is empty.</p>
           ) : (
               <ul>
                   {cartItems.map((item) => (
                       <li key={item.id}>
                           {item.name} - ${item.price}
                           <button onClick={() => removeFromCart(item.id)}>Remove</button>
                       </li>
                   ))}
               </ul>
           )}
           <p>Total: ${totalPrice}</p>
       </div>
   );
};

export default Cart;
