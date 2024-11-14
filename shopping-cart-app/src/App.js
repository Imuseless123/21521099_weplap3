import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
   return (
       <CartProvider>
           <div>
               <h1>Shopping Cart App</h1>
               <ProductList />
               <Cart />
           </div>
       </CartProvider>
   );
}

export default App;
