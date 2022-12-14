import React from 'react'
// import list from "../data"
import ProductCard from './ProductCard';
import { CartState } from './Context';

const Products = () => {

const { products}= CartState();

return (
 <> 
    <div> welcome to Bakery Shop</div>
    {products.map((prod) => (
      <>
          <ProductCard  prod = {prod} key={prod.id}/>
          </>
        ))} 
   </>
  );
};

export default Products;
