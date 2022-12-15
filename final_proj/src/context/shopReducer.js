
const shopReducer = (state, action) => {
    const{type, payload} = action;
    switch(type) {
        case 'addItem':
            return {
                ...state,
                items: [...state.items, payload]
            };
        case 'deleteItem':
            return {
                ...state,
                items: state.items.filter((item) => item.id !== payload),
            };
        default:
            return state;
    }
}

export default shopReducer;