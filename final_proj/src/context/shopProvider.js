import React, { useReducer } from "react";
import ShopContext from "./shop_context";
import shopReducer from "./shopReducer";
import allProducts from "../components/proddata";



const ShopProvider = (props) => {
    const initialState = {
        prods: allProducts,
    };

    const [state, dispatch] = useReducer(shopReducer, initialState);

    const decStocks = (prodID) => {
        dispatch({
            type: 'decrementStocks',
            payload: prodID
        })
    }

    return(
        <>
            <ShopContext.Provider value={{
                prods: state.allProducts,
                decStocks,
            }}>{props.children}</ShopContext.Provider>
        </>
    )
}

export default ShopProvider;