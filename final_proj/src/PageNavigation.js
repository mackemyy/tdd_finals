import { Link } from "react-router-dom";
import './PageNavigation.css';

export const PageNavigation = () => {
    return (
        <>
            <div className="topnav">
                <Link to='/login'>
                    LOGIN
                </Link>
                <Link to='/cart'>
                    CART
                </Link>
                <Link to='/products'>
                    PRODUCTS
                </Link>
                {/* <Link to='/about'>
            ABOUT
        </Link> */}
                <Link to='/'>
                    HOME
                </Link>
            </div>
        </>
    )
}
// export default PageNavigation;