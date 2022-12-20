import { useState, useContext } from "react";
import ShopContext from "./context/shop_context";
import './Checkout.css';
import { NavLink} from "react-router-dom";

const Checkout = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const {checkout, placeOrder} = useContext(ShopContext);
    const [name, setName] = useState('');
    const [address, setAdd] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [nameC, setNameC] = useState('');
    const [card, setCard] = useState('');
    const [error,setError]=useState(false);

    let total = 0;
    const toggleModal = () => {
        setModalVisible(!modalVisible)
        placeOrder();
    }

    if(modalVisible) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    checkout.map((item) => (
        total = total + item.subtotal
    ))

    let fee = (Math.round((total * 0.20) * 100) / 100).toFixed(2);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name.length===0||address.length===0||contact.length===0||email.length===0||nameC.length===0||card.length===0) {
            setModalVisible(!modalVisible)
            setError(true)
        }
        if(name&&address&&contact&&email&&nameC&&card) {
            console.log("Name: ", name)
            
        }
    }

    return(
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&family=Port+Lligat+Slab"></link>
            <div className="checkout-page" data-testid='checkout-test'>
                <div className="checkoutForm">
                    <div className ="check-space">
                        <div className="header-checkout">
                            <div className="checkout-title">Checkout</div>
                        </div>
                        
                        <form onSubmit = {handleSubmit}>
                        <div className="row">
                            <div className="column" id ="col1">
                                <div className="checkout-subtitle">Shipping Address</div>
                                <hr className = "line"/>
                                <div className = "subtitle2">Name</div>
                                    <input onChange ={e=>setName(e.target.value)} type = "text" id ="ship-info"></input>
                                    <br/>
                                    {error&&address.length<=0?
                                    <label className="label">Name can't be empty</label>:""}
                                <div className = "subtitle2">Address</div>
                                    <input onChange ={e=>setAdd(e.target.value)} type = "text" id ="ship-info"></input>
                                    <br/>
                                    {error&&address.length<=0?
                                    <label className="label">Address can't be empty</label>:""}
                                <div className ="r-ship"> 
                                    <div className ="c-ship" id = "c1">
                                        <div className = "subtitle2">Contact No.</div>
                                            <input onChange ={e=>setContact(e.target.value)} type = "text" id ="contact-no"></input>
                                            <br/>
                                            {error&&contact.length<=0?
                                            <label className="label">Contact can't be empty</label>:""}
                                    </div>
                                    <div className ="c-ship" id = "c2">
                                        <div className = "subtitle2">Email Address</div>
                                            <input onChange ={e=>setEmail(e.target.value)} type = "text" id ="email-ship"></input>
                                            <br/>
                                            {error&&email.length<=0?
                                            <label className="label">Email can't be empty</label>:""}
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                
                                <div className="checkout-subtitle">Payment Information</div>
                                <hr className = "line"/><br/>

                                <div className = "subtitle2">Name on Card</div>
                                <label htmlFor = "pay-info"  id = "name"></label>
                                    <input onChange ={e=>setNameC(e.target.value)}  type = "text" id ="user-input"></input>
                                    <br/>
                                    {error&&nameC.length<=0?
                                    <label className="label">Name can't be empty</label>:""}
                                <div className = "subtitle2">Card Information</div>
                                <label className = "pay-info" id = "name"></label>
                                    <input onChange ={e=>setCard(e.target.value)} type ="text" id ="user-input"></input>
                                    <br/>
                                    {error&&card.length<=0?
                                    <label className="label">Card Info can't be empty</label>:""}
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
                                                        <div id = "bread-container">
                                                            <img key={item.index} src={item.pic} id="bread-picture" alt="Product"/>
                                                        </div> 
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
                                                ))}
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
                                            </div >
                                        <div  id="btn-ctnr">
                                            <button  className="placeOrderBtn" onClick={toggleModal} data-testid='placeorder-test'>Place Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* //MODAL  */}

            {modalVisible && (
                <div className = "modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                        <i id = "check" class="fa fa-check-circle fa-5x" aria-hidden="true"></i><br/>
                        <div id="h2">Thank You!</div><br/>
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