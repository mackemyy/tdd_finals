import React, { useReducer } from "react";
import ShopContext from "./shop_context";
import shopReducer from "./shopReducer";
//import allProducts from "../components/product";



const ShopProvider = (props) => {
    const initialState = {
        items: [],
    };

    const [state, dispatch] = useReducer(shopReducer, initialState);

    const addItem = (item) => {
        dispatch({
            type: 'addItem',
            payload: item
        })
    }

    return(
        <>
            <ShopContext.Provider value={{
                items: state.items,
                addItem,
            }}>{props.children}</ShopContext.Provider>
        </>
    )
}

export default ShopProvider;