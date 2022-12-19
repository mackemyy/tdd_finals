import './Cart.css';


const Cart = () => {
 
    return (
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&family=Port+Lligat+Slab"></link>
            <div className="my-cart-page">
                <div className="topnav-bg"></div>
                <div className="cart-header">
                    <div className="title"><i class="fa fa-shopping-cart" id="mycart-icon" data-testid="mycart-btn"></i>My Cart</div>
                </div>
                <div className="titlebar">
                    <p id="item">Item</p>
                    <p id="qty">Qty.</p>
                    <p id="total">Total</p>
                </div>
                <div className="contents">
                    <div className="allCarts">
                    <div className="select">
                            <label className="cart-container">Select All
                            <input type="checkbox" data-testid="checkbox"/> 
                                <span class="checkmark"></span>  
                            </label>
                        </div>
                        <div className="cart-items1">
                            <div className="prod">
                                <img id="prodimg" alt =""></img>
                            </div>
                            <div className="prodinfo">
                                <label className="cart-container">Baked Croissant Bread
                                <input type="checkbox" data-testid="checkbox"/> 
                                <span class="checkmark"></span> 
                                <p className="price">75.00 PHP</p>
                                </label>
                            </div>
                            <div className="qtybtn">
                                <button className="addBtn">+</button>
                                <p className="item-qty">1</p>
                                <button className="subtractBtn">-</button>
                                <p className="total1">PHP 75.00</p>
                                <button className="removeBtn">Remove</button>
                            </div>
                        </div>
                        <div className="cart-items2">
                            <div className="prod">
                                <img id="prodimg" alt =""></img>
                            </div>
                            <div className="prodinfo">
                                <label className="cart-container">Baked Croissant Bread
                                <input type="checkbox" data-testid="checkbox"/> 
                                <span class="checkmark"></span> 
                                <p className="price">75.00 PHP</p>
                                </label>
                            </div>
                            <div className="qtybtn">
                                <button className="addBtn">+</button>
                                <p className="item-qty">1</p>
                                <button className="subtractBtn">-</button>
                                <p className="total1">PHP 75.00</p>
                                <button className="removeBtn">Remove</button>
                            </div>
                        </div>
                        <div className="cart-items3">
                            <div className="prod">
                                <img id="prodimg" alt =""></img>
                            </div>
                            <div className="prodinfo">
                                <label className="cart-container">Baked Croissant Bread
                                <input type="checkbox" data-testid="checkbox"/> 
                                <span class="checkmark"></span> 
                                <p className="price">75.00 PHP</p>
                                </label>
                            </div>
                            <div className="qtybtn">
                                <button className="addBtn">+</button>
                                <p className="item-qty">1</p>
                                <button className="subtractBtn">-</button>
                                <p className="total1">PHP 75.00</p>
                                <button className="removeBtn">Remove</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="footer">
                        <div className="subtotal">
                            <p>Subtotal: PHP 201.00</p>
                        </div>
                        <div class="button"> 
                            <button class="backBtn">Back to Menu</button>
                            <button class="checkoutBtn">Checkout</button>
                        </div>
                </div>
            </div>
        </>
    )
};
export default Cart;