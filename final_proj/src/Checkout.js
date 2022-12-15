import { useState } from "react";
import './Checkout.css';

const Checkout = () => {
    return(
        <>
            <div className="checkout-page">
                <div className="checkoutForm">
                    <div className ="check-space">
                        <div className="header">
                            <div className="checkout-title">Checkout</div>
                        </div>

                        <div className="row">
                            <div className="column" id ="col1">
                                <div className="checkout-subtitle">Shipping Address</div>
                                <hr className = "line"/>
                                <div id = "ship-details">
                                <div className ="r-ship"> 
                                    <div className ="c-ship" id = "c1">
                                        John M. Doe<br/>
                                        Blk12, Lot 4, Midori Plains<br/>
                                        Tungkop, Minglanilla
                                    </div>
                                    <div className ="c-ship" id="c2">
                                        Cebu, Philippines<br/>
                                        josh@mail.com<br/>
                                        <a href="#editShipAdd" id="editShip-btn">
                                            <i className="fa fa-pencil-square fa-lg" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                </div>
                                <br/>
                                <div className="checkout-subtitle">Payment Information</div>
                                <hr className = "line"/><br/>
                                <div className = "subtitle2">Name on Card</div>
                                <div className = "pay-info" id = "name"><div id ="john">John M. Doe</div></div>
                                <div className = "subtitle2">Card Information</div>
                                <div className = "pay-info" id = "name"><div id ="john">1515 3456 7653 3453</div></div>
                                <div className = "mini-row">
                                    <div className ="mini-col" id = "mcol1">
                                        <div className = "subtitle2">Exp. Date</div>
                                        <div className = "pay-info" id = "expDate"><div id ="john1">MM/YY</div></div>
                                    </div>
                                    <div className ="mini-col" id ="mcol2">
                                        <div className = "subtitle2" >CVC Code</div>
                                        <div className = "pay-info" id = "expDate"><div id ="john1">XXX</div>
                                    
                                    </div>  
                                    </div>
                                    <div className ="mini-col" id ="mcol3">
                                        <a href="#editShipAdd" id="editPay-btn">
                                            <i className="fa fa-pencil-square fa-xl" aria-hidden="true"></i></a>
                                    </div>
                                    
                                </div>
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