import React from 'react';
import Product from './Product';

const products = [
   { id: 1, name: 'Product 1', price: 10 },
   { id: 2, name: 'Product 2', price: 20 },
   { id: 3, name: 'Product 3', price: 30 },
];

const ProductList = () => {
   return (
       <div>
           <h2>Products</h2>
           {products.map(product => (
               <Product key={product.id} product={product} />
           ))}
       </div>
   );
};

export default ProductList;
