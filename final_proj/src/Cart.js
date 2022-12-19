import { useContext, useState } from "react";
import ShopContext from "./context/shop_context";
import './Cart.css';


const Cart = () => {
     // const location = useLocation()
    // const {id} = location.state;
    const {items} = useContext(ShopContext)
    let [counter, setCounter] = useState(1);


    const prod = items.find((item) => {
        return item.id;
      })

    const upLimit = parseInt(prod.stockAvail);
    const lowLimit = parseInt(1, 10);

    const onSubtractClick = () => {
        if(counter > lowLimit){
        setCounter(prevCounter => prevCounter - 1);
        }
    }
    const onAddClick = () => {
        if(counter < upLimit){
        setCounter(prevCounter => prevCounter + 1);
        }
    }

    return (
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&family=Port+Lligat+Slab"></link>
            <div className="my-cart-page">
                <div className="topnav-bg"></div>


            <div id="cart-title">
                <div id="logo"><i class="fa fa-shopping-cart" id="cart-icon" data-testid="mycart-btn"></i></div>
                <div id="logo-title">My Cart</div>
            </div>

            <div id="cart-title-nav">
                <div id="cart-title-item">Item</div>
                <div id="cart-title-secondary">Price</div>
                <div id="cart-title-secondary">Qty</div>
                <div id="cart-title-secondary">Total</div>
            </div>

            <div id="cart-content">
                <div id="all-select-box">
                        <input type="checkbox" data-testid="checkbox"/> 
                        <label>Select All</label>
                </div>


                {/* start of cart card */}
                <div id="cart-card-menu">

                    <div id="col-1">
                            <div id="cart-check-box"> 
                                    <input  type="checkbox" data-testid="checkbox"/> 
                                    </div>
                                    <div id="cart-img"></div>
                                    <div id="cart-details">Baked Croissant Bread</div>
                            </div>
                    <div id="cart-additionals">PHP 55.00</div>
                    <div id="cart-additionals">
                                <button id="qty-btn">+</button>
                                 <div id="qty-cnt">1</div>
                                <button id="qty-btn">-</button>
                    </div>
                    <div id="cart-additionals">PHP 55.00</div>
                    <div id="cart-additionals">
                        <button id="removebtn">Remove</button>
                    </div>
                    <div>
                    </div>

                    </div>
            {/* end of cart card */}



              
            </div>
            
            <div id="footer">
                    <div id="col-1-btn">
                        <button class="backBtn">Back To Menu</button>
                    </div>
                    <div id="sub-total">Subtotal: PHP 120.00</div>
                    <div id="col-2-btn">
                            <button class="checkoutBtn">Checkout</button>
                    </div>
            </div>
               
               
            </div>
        </>
    )
};
export default Cart;