import { useState, useContext } from "react";
import ShopContext from "./context/shop_context";
import './Checkout.css';
import { NavLink} from "react-router-dom";

const Checkout = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const {checkout} = useContext(ShopContext)
    let total = 0;
    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    if(modalVisible) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

    checkout.map((item) => (
        total = total + item.subtotal
    ))

    let fee = (Math.round((total * 0.20) * 100) / 100).toFixed(2)
    return(
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&family=Port+Lligat+Slab"></link>
            <div className="checkout-page" data-testid='checkout-test'>
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
                                    <div id = "cart-row-space">



                                {/* YOUR CART CARD */}
                                {checkout.map((item, index) => (
                                    <div className = "cart-card" key={index}>
                                        <div>
                                            <div id = "bread-picture"></div> 
                                        </div>
                                    <div id="pic-details">
                                        <div id="bread-name">{item.name}</div>
                                        <div id="bread-detail">{item.price}</div>
                                        <div id="price-quantity">
                                            <div id="bread-price">Subtotal: {(Math.round(item.subtotal * 100) / 100).toFixed(2)} PHP</div>
                                            <div id="bread-quantity">Amount: {item.amount}</div>
                                        </div>
                                    </div>
                                    </div>
                                    ))};
                                {/* YOUR CART CARD ENDS HERE */}
                                   

                                  
                                    
                                    </div>
                                </div>
                                <br/>
                                <div className="payment">
                                <div className="subtitle2">Payment Details</div>
                                <div className = "pay-details">
                                    <div className = "payment-row">
                                        <div id = "pay-col1">
                                            Merchandise Subtotal<br/>
                                            Shipping Subtotal<br/>
                                            <div id = "bold">Total Payment</div>
                                        </div>
                                        <div id = "pay-col2">
                                        {(Math.round(total * 100) / 100).toFixed(2)} PHP<br/>
                                            {fee} PHP<br/>
                                            <div id = "bold">{(Math.round((total + parseFloat(fee)) * 100) / 100).toFixed(2)} PHP</div> 
                                        </div>
                                    </div>
                                </div>
                                <button className="placeOrderBtn" onClick={toggleModal} data-testid='placeorder-test'>Place Order</button>
                                </div>
                                </div>
                            </div>

                        </div>
                        </div>
                </div>
            </div>

            {/* //MODAL  */}

            {modalVisible && (
        <div className = "modal">
            <div className="overlay"></div>
                <div className="modal-content">
                <i id = "check" class="fa fa-check-circle fa-5x" aria-hidden="true"></i>
                <br/>
                <div id="h2">Thank You!</div>
                <br/>
                <div id="p">
                Your order has been placed. A confirmation<br/>
                &nbsp;&nbsp;of your order has been sent to your email.
                </div>
                <NavLink to='/products' data-testid='products-nav'>
                <i class="fa fa-times-circle fa-2x" aria-hidden="true" onClick={toggleModal}></i>
                </NavLink>
            </div>
        </div>
        )
        }
        </>
    )
};
export default Checkout;