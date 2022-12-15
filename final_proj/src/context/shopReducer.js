
const shopReducer = (state, action) => {
    const{type, payload} = action;
    switch(type) {
        case 'decrementStocks':
            return {
                ...state,
                prods: state.prods.map(prod => 
                    prod.id === payload 
                    ? {...prod, stockAvail: prod.stockAvail=-1} 
                    : prod
                ),
            }
        default:
            return state;
    }
}

export default shopReducer;