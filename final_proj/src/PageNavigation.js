import { Link, useLocation } from "react-router-dom";
import './PageNavigation.css';

export const PageNavigation = () => {
    const { pathName } = useLocation();
    console.log(pathName);
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
            <div className="topnav">
                <Link to='/login' data-testid='login-nav'>
                    LOGIN
                </Link>
                <a href=" " id="mycart-count">0<i class="fa fa-shopping-cart" id="mycart-icon" data-testid="mycart-btn"></i></a>
                <Link to='/products' data-testid='products-nav'>
                    PRODUCTS
                </Link>
                <Link to='/product-detail' data-testid='products-nav'>
                    DETAIL
                </Link>
                <Link to='/' data-testid='home-nav'>
                    HOME
                </Link>
            </div>
        </>
    )
}
// export default PageNavigation;