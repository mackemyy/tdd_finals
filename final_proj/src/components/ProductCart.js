import React from 'react'

import { CartState } from './Context'


const ProductCart = ({prod}) => {
    const {cart, setCart} = CartState();
   

      const handleChange = (item, d) =>{
            let ind = -1;
            cart.forEach((data, index)=>{
                if (data.id === item.id)
                    ind = index;
            });
            const tempArr = cart;
            tempArr[ind].amount += d;
            
            if (tempArr[ind].amount === 0)
                tempArr[ind].amount = 1;
            setCart([...tempArr])
        }
      
  return (
       <>
  
    <div>name :{prod.name}</div>
    <div>{prod.price}.00$</div>
    <button onClick={()=>handleChange(prod, +1)}> + </button>
    <button>quantity:{prod.amount}</button>
    <button onClick={()=>handleChange(prod, -1)}> - </button>
    <button onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}>remove from cart</button>

   
    </>
  )
}

export default ProductCart;