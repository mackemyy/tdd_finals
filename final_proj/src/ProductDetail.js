import { useContext, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ShopContext from "./context/shop_context";
import './ProductDetail.css';

const ProductDetail = () => {
    const {items, addToCart} = useContext(ShopContext)
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

    const onAddToCart = () => {
        const newItem = {
            id: prod.id,
            name: prod.name,
            price: prod.price,
            amount: counter
        }

        alert("Successfully added to cart");
        // decreaseStock(id, counter);
        addToCart(newItem);
    }

    return(
        <>
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
                    <NavLink to='/products' data-testid='products-nav'>
                        <button id="backToMenu-btn" className="btns" data-testid="backToMenu-btn">Back To Menu</button>
                    </NavLink>
                    <NavLink to='/products' data-testid='products-nav'>
                        <button id="addToCart-btn" className="btns" data-testid="addToCart-btn" onClick={onAddToCart}>Add to Cart</button>
                    </NavLink>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
};
export default ProductDetail;