import React from 'react'
import {  useEffect, useState } from 'react';
import { CartState } from './Context';
import MiniCart from './MiniCart';
import ProductCart from './ProductCart';

const Cart = () => {
  const { cart } = CartState();
  const [show, setShow] = useState(true);
  const [total, setTotal] = useState();
  // const [price, setPrice] = useState();

  const handlePrice = ()=>{
    let ans = 0;
    cart.map((prod) => (
        ans = ans + prod.amount * prod.price
    ))
    setTotal(ans);
     

}
useEffect(()=>{
  handlePrice();
})
 return show? (
    <>
      <div>Your cart total is {total}.00$</div>
      
        {/* {cart.map((prod) => (
          <>
  
        <div>name :{prod.name}</div>
        <div>{prod.price}.00$</div>
        <button onClick={()=>handleChange(prod, +1)}> + </button>
        <button>quantity:{prod.amount}</button>
        <button onClick={()=>handleChange(prod, -1)}> - </button>
        <button onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}>remove from cart</button>

       
        </>

        ))} */}
        {cart.map((prod) => (
        <ProductCart prod = {prod} key={prod.id}/>
        ))}
      <button onClick={()=>setShow(false)}>check out</button>

    </>
  ):(<>
<h2> check out page</h2>
<div> shipping adrress</div>
<div> Payment information</div>
<input type="text" placeholder="John M doe"></input>
<div>card information</div>
<input type="text" placeholder="930248 2342842"></input>
<div>Exp.date</div>
<input type="text" placeholder="MM/YY"></input>

<div>CVC Code</div>
<input type="text" placeholder="XXXX"></input>
<h3>YOUR CART</h3>
{cart.map((prod) => (
        <MiniCart prod = {prod} key={prod.id} />
        ))}
  
  </>);
}

export default Cart;
