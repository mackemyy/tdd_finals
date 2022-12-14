import { useContext, useState } from "react";
import ShopContext from "./context/shop_context";

const Products = () => {
    const {decStocks, prods} = useContext(ShopContext);

    const onDecrement = () => {
        decStocks(1);
        console.log('tet');
        const stock = prods.find(prods => {
            return prods.id === 1;
          });
        console.log(stock);
    }
    return (
        <>
        <div className="products-page">
            <div className="parallax">
                <div className="prod_title" data-testid="prod_title"> Our Products </div>
                <div className="prod_subtitle" data-testid="prod_subtitle">We have a wide range of breads, from the most basic all-time favorite Italian Breads, to other flavored and speciality breads. Scroll down to see our menu.</div>
            </div>
            <div>
                <button onClick={onDecrement}>-</button>
            </div>
                
            <div>     
            <div id="menu">Menu</div>
                <div className="content">
                    <div id="cards">
                        <div id="products"></div>
                        <div id="name">
                            <p id="product-name">Baked Croissant Bread</p>
                            <p id="price">75.00 PHP</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Products;
