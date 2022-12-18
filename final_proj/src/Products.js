import { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ShopContext from "./context/shop_context";
import './Products.css'

const Products = () => {
    const {items} = useContext(ShopContext);
    const { pathName } = useLocation();
    console.log(pathName);

    return (
        <>
        <div className="products-page">
            {/* <link link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;600&family=Port+Lligat+Slab&display=swap" rel="stylesheet"></link> */}
        <div className="prod-header">
            <div id="main-title">Our Products</div>
            <div id="sub-info">You Kneed This has been baking delicious and affordable breads for Filipinos for almost four decades. No merienda or almusal is complete without bread! <br/> Scroll down to see our Menu.</div>
        </div> 

        <div className="parallax"></div>
        <div className="menu-box">
            <div id="title"><p>Menu</p></div>
            <div id="products">
                {items.map((item, index) => (
                <NavLink to={{
                    pathName: '/product-detail',
                    state: {
                        id: item.id
                    },
                }}>
                    <div id="cards" key={index}>
                        <div class="img-container" id="product1"></div>
                        <div id="product-name">
                        <p id="prod-info">{item.name}</p>
                        <p id="price">{item.price}</p></div>
                    </div>
                </NavLink>
                ))};
                {/* <div id="cards" onClick={onDeleteItem}>
                    <div class="img-container" id="product2"></div>
                    <div id="product-name">
                    <p id="prod-info">Chocolate Loaf</p>
                    <p id="price">68.00 PHP</p></div>
                </div>
                <div id="cards">
                    <div class="img-container" id="product3"></div>
                    <div id="product-name">
                    <p id="prod-info">Classic Loaf</p>
                    <p id="price">59.00 PHP</p></div>
                </div>
                <div id="cards">
                    <div class="img-container" id="product4"></div>
                    <div id="product-name">
                    <p id="prod-info">Prawn Bun</p>
                    <p id="price">55.00 PHP</p></div>
                </div>
                <div id="cards">
                    <div class="img-container" id="product5"></div>
                    <div id="product-name">
                    <p id="prod-info">Brioche Flower Bread</p>
                    <p id="price">65.00 PHP</p></div>
                </div>
                <div id="cards">
                    <div class="img-container" id="product6"></div>
                    <div id="product-name">
                    <p id="prod-info">Pane Pugliese</p>
                    <p id="price">52.00 PHP</p></div>
                </div>
                <div id="cards">
                    <div class="img-container" id="product7"></div>
                    <div id="product-name">
                    <p id="prod-info">Classic Sliced Bread</p>
                    <p id="price">55.00 PHP</p></div>
                </div>
                <div id="cards">
                    <div class="img-container" id="product8"></div>
                    <div id="product-name">
                    <p id="prod-info">Pagnotta del dittaino</p>
                    <p id="price">63.00 PHP</p></div>
                </div>
                <div id="cards">
                    <div class="img-container" id="product9"></div>
                    <div id="product-name">
                    <p id="prod-info">Civraxiu</p>
                    <p id="price">40.00 PHP</p></div>
                </div>   */}
            </div>
        </div>
        

        </div>
        
        </>
    )
};

export default Products;
