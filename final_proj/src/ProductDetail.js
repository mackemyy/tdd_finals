import { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import './ProductDetail.css';

const ProductDetail = () => {
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
                    <img src={require("./assets/products/BakedCroissantBread.png")} alt="Baked Croissant Bread"/>
                    </div>
                </div>
                <div className="txt-placeholder">
                    <div id="pd-title" className="txt">Baked Criossant Bread</div>
                    <div id="pd-subtitle" className="txt">Classic Favorites</div>
                    <div id="pd-price" className="txt">75.00 PHP</div>
                    <div id="pd-stocks" className="txt">5 STOCKS LEFT</div>
                    <div className="qty">
                        <div id="qty-text" className="txt">Quantity</div>
                        <div class="wrapper">
                            <span class="minus">-</span>
                            <span class="num">1</span>
                            <span class="plus">+</span>
                        </div>
                    </div>
                    <div className="buttons">
                        <button id="backToMenu-btn" className="btns" data-testid="backToMenu-btn">Back To Menu</button>
                        <button id="addToCart-btn" className="btns" data-testid="addToCart-btn">Add to Cart</button>
                    </div>
                </div>
                {/* <div class="float-container">
                    <div class="float-child">
                    <div class="green">Float Column 1</div>
                    </div>

                    <div class="float-child">
                    <div class="blue">Float Column 2</div>
                    </div>
                </div> */}
            </div>
        </div>

        </>
    )
};
export default ProductDetail;