
const shopReducer = (state, action) => {
    const{type, payload} = action;
    switch(type) {
        case 'addToCart':
            return {
                ...state,
                cart: [...state.cart, payload]
            };
        case 'addToCheckout':
            return {
                ...state,
                checkout: [...state.checkout, payload]
            };
        case 'deleteToCart':
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== payload),
            };
        case 'decreaseStock':
            const {itemID, amount} = payload;
            return {
                ...state,
                items: state.items.map((item) => 
                item.id === itemID
                ? {...item, stockAvail: item.stockAvail - amount} 
                : item
                ),
            };
        default:
            return state;
    }
}

export default shopReducer;