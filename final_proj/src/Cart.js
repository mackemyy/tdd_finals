import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ShopContext from "./context/shop_context";
import './Cart.css';


const Cart = () => {

    const {cart, deleteToCart, addToCheckout} = useContext(ShopContext)
    let subtotal = 0;

    cart.map((item) => (
        subtotal = subtotal + item.subtotal
    ))

    const onDeleteToCart = (prod) => {
        deleteToCart(prod.id);
    }

    const onCheckout = () => {
        addToCheckout(cart);
    }

    return (
        <>
            <div className="my-cart-page">
                <div className="topnav-bg"></div>
                <div className="whole-cart-content">
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
                                    <div class="wrapper">
                                        <span class="minus" onClick="">-</span>
                                        <span class="num">{item.amount}</span>
                                        <span class="plus" onClick="">+</span>
                                    </div>
                                </div>
                                <div id="cart-additionals">{(Math.round(item.subtotal * 100) / 100).toFixed(2)} PHP</div>
                                <div id="cart-additionals">
                                    <button id="removebtn" onClick={onDeleteToCart.bind(this, item)}>Remove</button>
                                </div>
                                <div>
                                </div>
                            </div>
                        ))}
                        {/* end of cart card */}

                    </div>
                
                    <div id="footer">
                        <div id="col-1-btn">
                            <NavLink to='/products' data-testid='products-nav'>
                                <button class="backBtn">Back To Menu</button>
                            </NavLink>
                        </div>
                        <div id="sub-total">Total: {(Math.round(subtotal * 100) / 100).toFixed(2)} PHP</div>
                        <div id="col-2-btn">
                            <NavLink to='/checkout' data-testid='login-nav'>
                                <button class="checkoutBtn" onClick={onCheckout}>Checkout</button>
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};
export default Cart;