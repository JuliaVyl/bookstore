import { ADD_TO_CART } from "../action-types";

const initialState = {
  cartItems: [],
  totalSum: 0
}

const shoppingCartReducer = (state = initialState, action) => {
  
  switch(action.type) {
    
    default: return state;
  }
}
export default shoppingCartReducer;