import { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ShopContext from "./context/shop_context";
import './Products.css'

const Products = () => {
    const {items} = useContext(ShopContext)
    const { pathName } = useLocation()
    console.log(pathName)
    console.log('THIS IS A TEST LOG CONSOLE HAHA')

    return (
        <>
        <div className="products-page" data-testid="products-page-test">
            {/* <link link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;600&family=Port+Lligat+Slab&display=swap" rel="stylesheet"></link> */}
        <div className="prod-header" data-testid="prodheader-test">
            <div id="main-title">Our Products</div>
            <div id="sub-info">You Kneed This has been baking delicious and affordable breads for Filipinos for almost four decades. No merienda or almusal is complete without bread! <br/> Scroll down to see our Menu.</div>
        </div> 

        <div className="parallax" data-testid="parallax-test"></div>
        <div className="menu-box" data-testid="menu-box-test">
            <div id="title"><p>Menu</p></div>
            <div id="products">
                {items.map((item, index) => (
                <NavLink to='/product-detail' state={{id: item.id}}>
                    <div id="cards" key={index}>
                        <div class="img-container">
                            <img key={item.id} src={item.image} alt="Product" className="product-img"/>
                        </div>
                        <div id="product-name">
                        <p id="prod-info">{item.name}</p>
                        <p id="price">{item.price}</p></div>
                    </div>
                </NavLink>
                ))};
            </div>
        </div>
        

        </div>
        
        </>
    )
};

export default Products;
