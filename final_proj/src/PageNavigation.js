import { Link } from "react-router-dom";
import './PageNavigation.css';

export const PageNavigation = () => {
    return (
        <>
            <div className="topnav">
                <Link to='/login' data-testid='login-nav'>
                    LOGIN
                </Link>
                <Link to='/cart' data-testid='cart-nav'>
                    CART
                </Link>
                <Link to='/products' data-testid='products-nav'>
                    PRODUCTS
                </Link>
                {/* <Link to='/about'>
            ABOUT
        </Link> */}
                <Link to='/' data-testid='home-nav'>
                    HOME
                </Link>
            </div>
        </>
    )
}
// export default PageNavigation;