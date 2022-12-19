
const shopReducer = (state, action) => {
    const{type, payload} = action;
    switch(type) {
        case 'addToCart':
            const prod = state.cart.find((item) => {
                return item.id === payload.id;
              })
            return {
                ...state,
                cart: prod === undefined 
                ? [...state.cart, payload]
                : state.cart.map((item) => 
                item.id === payload.id
                ? {...item, amount: item.amount + payload.amount, subtotal: parseInt(item.price) * (item.amount + payload.amount)} 
                : item
                ),
            };
        case 'addToCheckout':
            return {
                ...state,
                checkout: [...state.checkout, ...payload],
                cart: [],
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