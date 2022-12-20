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

    const addItemToCheckout = (item) => {
        dispatch({
            type: 'addItemToCheckout',
            payload: item
        })
    }

    const deleteToCart = (itemID) => {
        dispatch({
            type: 'deleteToCart',
            payload: itemID
        })
    }

    const increaseStock = (itemID) => {
        dispatch({
            type: 'increaseStock',
            payload: itemID,
        })
    }

    const decreaseStock = (itemID) => {
        dispatch({
            type: 'decreaseStock',
            payload: itemID,
        })
    }

    const placeOrder = () => {
        dispatch({
            type: 'placeOrder',
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
                addItemToCheckout,
                deleteToCart,
                increaseStock,
                decreaseStock,
                placeOrder,
            }}>{props.children}</ShopContext.Provider>
        </>
    )
}

export default ShopProvider;