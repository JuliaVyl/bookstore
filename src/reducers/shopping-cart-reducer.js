import { ADD_TO_CART, SHOW_CART } from "../action-types";

const initialState = {
  cartItems: [
    {
      id: 1,
      title: 'dsfsdfa',
      author: 'adklfgjd fdtgds',
      cost: 15,
      amount: 1 
    },
    {
      id: 2,
      title: 'ds',
      author: 'adklfd fdt',
      cost: 15,
      amount: 1 
    }
  ],
  totalSum: 30
}

const shoppingCartReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case SHOW_CART:
      return action.payload;
    default: return state;
  }
}
export default shoppingCartReducer;