import { Link } from "react-router-dom";
import './Products.css';

export const PageNavigation = () => {
    return (
        <>
            <div className="topnav">
                <Link to='/login'>
                    LOGIN
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