import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import ShopContext from "./context/shop_context";
import './Cart.css';


const Cart = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelectAll = () => {
        setSelectAll(prevState => !prevState);
        setSelectedItems(prevState => {
          if (prevState.length === cart.length) {
            return [];
          }
          return [...cart];
        });
      };

    const handleItemSelection = (item) => {
      setSelectedItems(prevState => {
        if (prevState.includes(item)) {
          return prevState.filter(i => i !== item);
        }
        return [...prevState, item];
      });
    };
    const {items, cart, deleteToCart, addToCheckout, increaseStock, decreaseStock} = useContext(ShopContext)
    let subtotal = 0;

    cart.map((item) => (
        subtotal = subtotal + item.subtotal
    ))

    const onDeleteToCart = (prod) => {
        deleteToCart(prod.id);
    }
    
    const onCheckout = () => {
        const selectedCart = cart.filter(item => selectedItems.includes(item));
        addToCheckout(selectedCart);
        selectedCart([]);
    };

    const onIncreaseStock = (prod) => {
        if(prod.amount > 0) {
            increaseStock(prod.id);
        }
        if(prod.amount === 1){
            deleteToCart(prod.id);
        }
    }

    const onDecreaseStock = (prod) => {
        const match = items.find((item) => {
            return item.id === prod.id;
          })
        if(match.stockAvail > 0) {
            decreaseStock(prod.id);
        }
    }

    return (
        <>
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&family=Port+Lligat+Slab"></link> */}
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
                        <div id="cart-title-secondary">Subtotal</div>
                    </div>

                    <div id="cart-content">
                        <div id="all-select-box">
                            <input type="checkbox" data-testid="checkbox-all" onChange={handleSelectAll}/> 
                            <label>Select All</label>
                        </div>

                        {/* start of cart card */}
                        {cart.map((item, index) => (
                            <div id="cart-card-menu" key={index}>
                                <div id="col-1">
                                    <div id="cart-check-box"> 
                                    <input
                                        type="checkbox"
                                        data-testid="checkbox"
                                        checked={selectedItems.includes(item)}
                                        onChange={handleItemSelection.bind(this, item)}
                                    />
                                    </div>
                                        <div id="cart-img">
                                            <img key={item.index} src={item.pic} id="cart-prod-img" alt="Product"/>
                                        </div>
                                        <div id="cart-details">{item.name}</div>
                                </div>
                                <div id="cart-additionals">{item.price}</div>
                                <div id="cart-additionals">  
                                    <div class="wrapper">
                                        <span class="minus" onClick={onIncreaseStock.bind(this, item)}>-</span>
                                        <span class="num">{item.amount}</span>
                                        <span class="plus" onClick={onDecreaseStock.bind(this, item)}>+</span>  
                                    </div>
                                </div>
                                <div id="cart-additionals">{(Math.round(item.subtotal * 100) / 100).toFixed(2)} PHP</div>
                                <div id="cart-additionals">
                                    <button id="removebtn" onClick={onDeleteToCart.bind(this, item)}>Remove</button>
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
                            <NavLink to='/login' data-testid='login-nav'>
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