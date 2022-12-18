import { useState } from "react";
import './Checkout.css';

const Checkout = () => {
    return(
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&family=Port+Lligat+Slab"></link>
            <div className="checkout-page">
                <div className="checkoutForm">
                    <div className ="check-space">
                        <div className="header-checkout">
                            <div className="checkout-title">Checkout</div>
                        </div>

                        <div className="row">
                            <div className="column" id ="col1">
                                <div className="checkout-subtitle">Shipping Address</div>
                                <hr className = "line"/>
                                <div className = "subtitle2">Name</div>
                                    <input type = "text" id ="ship-info"></input>
                                <div className = "subtitle2">Address</div>
                                    <input type = "text" id ="ship-info"></input>
                                <div className ="r-ship"> 
                                    <div className ="c-ship" id = "c1">
                                        <div className = "subtitle2">Contact No.</div>
                                            <input type = "text" id ="contact-no"></input>
                                    </div>
                                    <div className ="c-ship" id = "c2">
                                        <div className = "subtitle2">Email Address</div>
                                            <input type = "text" id ="email-ship"></input>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <div className="checkout-subtitle">Payment Information</div>
                                <hr className = "line"/><br/>
                                <div className = "subtitle2">Name on Card</div>
                                <label htmlFor = "pay-info"  id = "name"> </label>
                                    <input type = "text" id ="john"></input>
                               
                                <div className = "subtitle2">Card Information</div>
                                <label className = "pay-info" id = "name"></label>
                                    <input type ="text" id ="john"></input>
                            </div>
                            <div className="column" id ="col2">
                                <div>
                                    <div className="checkout-subtitle">Your Cart</div>
                                <hr className = "line"/>
                                <br/>
                                <div className = "cart-row" >
                                    <div className = "cart-card" >
                                        <div id = "pic-col1">
                                            <div id = "croissant"></div> 
                                        </div>
                                    <div id = "pic-col2">
                                        <div id = "pic-details">
                                            Baked Croissant br/ead
                                        </div>
                                    </div>
                                    <div id = "pic-col3">
                                        <div id = "pic-details">
                                            PHP 50.000&nbsp;&nbsp; X1
                                        </div>
                                    </div>
                                        
                                    </div>
                                    <div className = "cart-card" >
                                        <div id = "pic-col1">
                                            <div id = "slicedbread"></div> 
                                        </div>
                                    <div id = "pic-col2">
                                        <div id = "pic-details">
                                            Fresh Sliced bread
                                        </div>
                                    </div>
                                    <div id = "pic-col3">
                                        <div id = "pic-details">
                                            PHP 45.000&nbsp;&nbsp; X2
                                        </div>
                                    </div>
                                        
                                    </div>
                                    
                                </div>
                                <br/>
                                <div className="subtitle2">Payment Details</div>
                                <div className = "pay-details">
                                    <div className = "cart-row">
                                        <div id = "pay-col1">
                                            Merchandise Subtotal<br/>
                                            Shipping Subtotal<br/>
                                            <div id = "bold">Total Payment</div>
                                        </div>
                                        <div id = "pay-col2">
                                            PHP 140.00<br/>
                                            PHP 50.00<br/>
                                            <div id = "bold">PHP 190.00</div> 
                                        </div>
                                    </div>
                                </div>
                                <button className="placeOrderBtn">Place Order</button>
                                </div>
                            </div>

                        </div>
                        </div>
                </div>
            </div>
        </>
    )
};
export default Checkout;