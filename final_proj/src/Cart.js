import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ShopContext from "./context/shop_context";
import './Cart.css';


const Cart = () => {

    const {cart, deleteToCart} = useContext(ShopContext)

    const onDeleteToCart = (prodID) => {
        deleteToCart(prodID);
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
                {cart.map((item, index) => (
                <div id="cart-card-menu" key={index}>

                    <div id="col-1">
                            <div id="cart-check-box"> 
                                    <input  type="checkbox" data-testid="checkbox"/> 
                                    </div>
                                    <div id="cart-img"></div>
                                    <div id="cart-details">{item.name}</div>
                            </div>
                    <div id="cart-additionals">{item.price}</div>
                    <div id="cart-additionals">  
                                 <div id="qty-cnt">{item.amount}</div>
                    </div>
                    <div id="cart-additionals">{item.subtotal}</div>
                    <div id="cart-additionals">
                        <button id="removebtn" onClick={onDeleteToCart.bind(this, item.id)}>Remove</button>
                    </div>
                    <div>
                    </div>

                    </div>
                    ))};
            {/* end of cart card */}



              
            </div>
            
            <div id="footer">
                    <div id="col-1-btn">
                    <NavLink to='/products' data-testid='products-nav'>
                        <button class="backBtn">Back To Menu</button>
                    </NavLink>
                    </div>
                    <div id="sub-total">Subtotal: tobefixed</div>
                    <div id="col-2-btn">
                            <button class="checkoutBtn">Checkout</button>
                    </div>
            </div>
               
               
            </div>
        </>
    )
};
export default Cart;