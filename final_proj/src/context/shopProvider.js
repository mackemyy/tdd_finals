import React, { useReducer } from "react";
import ShopContext from "./shop_context";
import shopReducer from "./shopReducer";
import allProducts from "../components/product";



const ShopProvider = (props) => {
    const initialState = {
        items: allProducts,
    };

    const [state, dispatch] = useReducer(shopReducer, initialState);

    const addItem = (item) => {
        dispatch({
            type: 'addItem',
            payload: item
        })
    }

    const deleteItem = (itemID) => {
        dispatch({
            type: 'deleteItem',
            payload: itemID
        })
    }

    return(
        <>
            <ShopContext.Provider value={{
                items: state.items,
                addItem,
                deleteItem,
            }}>{props.children}</ShopContext.Provider>
        </>
    )
}

export default ShopProvider;