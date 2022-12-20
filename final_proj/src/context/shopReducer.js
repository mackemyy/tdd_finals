
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
                items: state.items.map((item) => 
                item.id === payload.id
                ? {...item, stockAvail: item.stockAvail - payload.amount} 
                : item
                ),
            };
        case 'addToCheckout':
            return {
                ...state,
                checkout: [...state.checkout, ...payload],
                cart: [],
            };
        case 'addItemToCheckout':
            const prodFound = state.checkout.find((item) => {
                return item.id === payload.id;
              })
            return {
                ...state,
                checkout: prodFound === undefined 
                ? [...state.checkout, payload]
                : state.checkout.map((item) => 
                item.id === payload.id
                ? {...item, amount: item.amount + payload.amount, subtotal: parseInt(item.price) * (item.amount + payload.amount)} 
                : item
                ),
                items: state.items.map((item) => 
                item.id === payload.id
                ? {...item, stockAvail: item.stockAvail - payload.amount} 
                : item
                ),
            };
        case 'deleteToCart':
            const itemFound = state.cart.find((item) => {
                return item.id === payload;
              })
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== payload),
                items: state.items.map((item) => 
                item.id === payload
                ? {...item, stockAvail: item.stockAvail + itemFound.amount} 
                : item
                ),
            };
        case 'increaseStock':
            return {
                ...state,
                items: state.items.map((item) => 
                item.id === payload
                ? {...item, stockAvail: item.stockAvail + 1} 
                : item
                ),
                cart: state.cart.map((item) => 
                item.id === payload
                ? {...item, amount: item.amount - 1, subtotal: parseInt(item.price) * (item.amount - 1)} 
                : item
                ),
            };
        case 'decreaseStock':
            return {
                ...state,
                items: state.items.map((item) => 
                item.id === payload
                ? {...item, stockAvail: item.stockAvail - 1} 
                : item
                ),
                cart: state.cart.map((item) => 
                item.id === payload
                ? {...item, amount: item.amount + 1, subtotal: parseInt(item.price) * (item.amount + 1)} 
                : item
                ),
            };
        case 'placeOrder':
            return {
                ...state,
                cart: [],
                checkout: [],
            }
        default:
            return state;
    }
}

export default shopReducer;