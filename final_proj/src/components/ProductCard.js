import { useState } from "react";
import { CartState } from "./Context";



const ProductCard = ({ prod}) => {
 
  const { cart, setCart } = CartState();
const [warning, setWarning] = useState(false);
 
  const handleClick=(item)=>{

    setCart([...cart,prod]);
    setWarning(true);
    setTimeout(()=>{
setWarning(false);
    },2000)
  }
  return (
  <>
        <div>name :{prod.name}</div>
        <div>price: {prod.price}.00$</div>
        <div>image: here!</div>
      <button onClick={()=>handleClick(cart)}>
              Add to Cart
           
      </button>
      <div>
      {warning &&<h2 className="warning">item added succesfully</h2> }
      </div>
     
        
  
        </>
  );
};

export default ProductCard;