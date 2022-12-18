import React from 'react'

const MiniCart = ({prod}) => {
  return (
    <>
   <div>image:</div> 
   <div>{prod.name}</div> 
   <div>php {prod.price}</div> 
   <div>x {prod.amount}</div> 
    </>
  )
}

export default MiniCart;