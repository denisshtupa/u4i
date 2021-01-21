/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
    switch(action.type) {
        case 'RANDOMIZE':
            state.products.forEach(x => {
                x.count = Math.ceil(Math.random() * 30);
                x.price = Math.ceil(Math.random() * 30);
                }
            )
            return {
                ...state,
                products: [...state.products]
            }
            
        default: 
            return state;
    }
}