
const shopReducer = (state, action) => {
    const{type, payload} = action;
    switch(type) {
        case 'addItem':
            return {
                ...state,
                items: [...state.items, payload]
            }
        default:
            return state;
    }
}

export default shopReducer;