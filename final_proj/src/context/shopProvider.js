import React, { useReducer } from "react";
import ShopContext from "./shop_context";
import shopReducer from "./shopReducer";
import allProducts from "../components/product";



const ShopProvider = (props) => {
    const initialState = {
        items: allProducts,
        cart: [],
        checkout: [],
    };

    const [state, dispatch] = useReducer(shopReducer, initialState);

    const addToCart = (item) => {
        dispatch({
            type: 'addToCart',
            payload: item
        })
    }

    const addToCheckout = (items) => {
        dispatch({
            type: 'addToCheckout',
            payload: items
        })
    }

    const deleteToCart = (itemID) => {
        dispatch({
            type: 'deleteToCart',
            payload: itemID
        })
    }

    const decreaseStock = (itemID, amount) => {
        dispatch({
            type: 'decreaseStock',
            payload: {itemID, amount}
        })
    }

    return(
        <>
            <ShopContext.Provider value={{
                items: state.items,
                cart: state.cart,
                checkout: state.checkout,
                addToCart,
                addToCheckout,
                deleteToCart,
                decreaseStock,
            }}>{props.children}</ShopContext.Provider>
        </>
    )
}

export default ShopProvider;