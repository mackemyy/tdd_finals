import { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ShopContext from "./context/shop_context";
import './ProductDetail.css';

const ProductDetail = () => {
    const {items, addToCart, addItemToCheckout, decreaseStock} = useContext(ShopContext)
    const [modalConfirm, setModalConfirm] = useState(false);

    const toggleConfirmModal = () => {
       
        const newItem = {
            id: prod.id,
            name: prod.name,
            price: prod.price,
            amount: counter,
            subtotal: parseInt(prod.price) * counter,
        }

        addToCart(newItem);
        decreaseStock(id, counter);
        setModalConfirm(!modalConfirm)
        
    }

   if(modalConfirm) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
    
    const location = useLocation()
    let [counter, setCounter] = useState(1)
    const {id} = location.state;
    console.log('YOU ARE IN PRODUCT DETAIL');

    
    const prod = items.find((item) => {
        return item.id === id;
      })

    const upLimit = parseInt(prod.stockAvail);
    const lowLimit = parseInt(1, 10);

    const onSubtractClick = () => {
       if(counter > lowLimit){
        setCounter(prevCounter => prevCounter - 1);
       }
       else{
        setCounter(1)
       }
    }

    const onAddClick = () => {
        if(counter < upLimit){
        setCounter(prevCounter => prevCounter + 1);
        }
        
       
    }

    const onAddToCheckout = () => {
        const newCheckout = {
            id: prod.id,
            name: prod.name,
            price: prod.price,
            amount: counter,
            subtotal: parseInt(prod.price) * counter,
        }
        addItemToCheckout(newCheckout);
        decreaseStock(id, counter);
    }

    return(
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&family=Port+Lligat+Slab"></link>
        <div className="product-detail-page">
            <div className="topnav-bg"></div>
            <div className="breadcrumbs">
                <NavLink to='/products' id="bc-menu" class="child" data-testid='bc-menu'>Menu</NavLink>
                <div className="child" id="arrow">{'>'}</div>
                <div id="bc-prod-details" className="child" data-testid='bc-prod-details'>Product Details</div>
            </div>
            <div className="prod-details">
                <div className="img-placeholder">
                    <div className="container">
                    <img src={prod.image} alt="Product"/>
                    </div>
                </div>
                <div className="txt-placeholder">
                    <div id="pd-title" className="txt">{prod.name}</div>
                    <div id="pd-subtitle" className="txt">Classic Favorites</div>
                    <div id="pd-price" className="txt">{prod.price}</div>
                    <div id="pd-stocks" className="txt">{prod.stockAvail} STOCKS LEFT</div>
                    <div className="qty">
                        <div id="qty-text" className="txt">Quantity</div>
                        <div class="wrapper">
                            <span class="minus" onClick={onSubtractClick}>-</span>
                            <span class="num">{counter}</span>
                            <span class="plus" onClick={onAddClick}>+</span>
                        </div>
                    </div>
                    <div className="buttons">
                    <NavLink to='/checkout' data-testid='checkout-nav'>
                        <button id="buyItNow-btn" className="btns" data-testid="buyItNow-btn" onClick={onAddToCheckout}>Buy It Now</button>
                    </NavLink>
                        <button id="addToCart-btn" className="btns" data-testid="addToCart-btn" onClick={toggleConfirmModal}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>

        {/* //MODAL  */}

        {modalConfirm && (
            <div className = "modalC">
                <div className="overlayC"></div>
                <div className="modal-contentC">
                    <i id = "check" class="fa fa-check-circle fa-5x" aria-hidden="true"></i>
                    <br/>
                    <div id="h2C">Added to cart!</div>
                    <br/>
                    <div className="row-pd">
                        <NavLink to='/products' data-testid='products-nav'>
                            <div className = "column-pd" id="col-pd1">
                            <button className="cntshop-btn" onClick= "">Continue Shopping</button>
                            </div>
                        </NavLink>

                        <NavLink to='/my-cart' data-testid='products-nav'>
                            <div className = "column-pd" id="col-pd2">
                            <button className="cntshop-btn" onClick="">View My Cart</button>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
        }

        </>
    )
};
export default ProductDetail;