import { NavLink, useLocation } from "react-router-dom";
import './PageNavigation.css';

export const PageNavigation = () => {
    const { pathName } = useLocation();
    console.log(pathName);
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
            <div className="topnav">
                <NavLink to='/login' data-testid='login-nav'>
                    LOGIN
                </NavLink>
                <a href=" " id="mycart-count">0<i class="fa fa-shopping-cart" id="mycart-icon" data-testid="mycart-btn"></i></a>
                <NavLink to='/products' data-testid='products-nav'>
                    PRODUCTS
                </NavLink>
                <NavLink to='/product-detail' data-testid='products-nav'>
                    DETAIL
                </NavLink>
                <NavLink to='/' data-testid='home-nav'>
                    HOME
                </NavLink>
            </div>
        </>
    )
}
// export default PageNavigation;