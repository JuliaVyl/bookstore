import { CLEAN_ORDER_DATA, FETCH_ORDER_FAILURE, FETCH_ORDER_REQUEST, FETCH_ORDER_SUCCESS } from "../action-types";


const checkoutOrderReducer = (state, action) => {
  
  if (state === undefined) {
    return {
      data: [],
      loading: false,
      error: null
    };
  }
  
  switch (action.type) {
    case FETCH_ORDER_REQUEST:
      return {
        data: [],
        loading: true,
        error: null 
      };
    case FETCH_ORDER_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null
      };
    case FETCH_ORDER_FAILURE:
      return {
        data: [],
        loading: false,
        error: action.payload
      };
    case CLEAN_ORDER_DATA:
      return {
        data: [],
        loading: false,
        error: null
      }
    default:
      return state.checkout;
  }
}

export default checkoutOrderReducer;