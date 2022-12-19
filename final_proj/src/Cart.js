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
                <div className="cart-header">
                    <div className="title"><i class="fa fa-shopping-cart" id="mycart-icon" data-testid="mycart-btn"></i>My Cart</div>
                </div>
                <div className="titlebar">
                    <p id="item">Item</p>
                    <p id="qty">Qty.</p>
                    <p id="total">Subtotal</p>
                </div>
                <div className="contents">
                    <div className="allCarts">
                    <div className="select">
                        <label className="cart-container" id="selectAll">Select All
                        <input type="checkbox" data-testid="checkbox"/> 
                            <span class="checkmark"></span>  
                        </label>
                    </div>
                    <div className="cart-items">
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
                            <p>TOTAL: PHP 201.00</p>
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