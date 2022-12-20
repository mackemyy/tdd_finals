import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import ShopContext from "./context/shop_context";
import './PageNavigation.css';

export const PageNavigation = () => {
    const { pathName } = useLocation();
    const {cart} = useContext(ShopContext)
    console.log(pathName);

    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
            <div className="topnav">
                <NavLink to='/login' data-testid='login-nav'>
                    LOGIN
                </NavLink>
                <NavLink to='/checkout' data-testid='checkout-nav'>
                    CHECKOUT
                </NavLink>
                <NavLink to='/my-cart' id="mycart-count" data-testid='my-cart-nav'>
                    {cart.length}
                    <i class="fa fa-shopping-cart" id="mycart-icon" data-testid="mycart-btn"></i>
                </NavLink>
                <NavLink to='/products' data-testid='products-nav'>
                    PRODUCTS
                </NavLink>
                <NavLink to='/' data-testid='home-nav'>
                    HOME
                </NavLink>
            </div>
        </>
    )
}