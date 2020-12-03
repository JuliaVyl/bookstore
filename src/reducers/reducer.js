import { combineReducers } from "redux";
import booklistReducer from "./book-list-reducer";
import shoppingCartReducer from "./shopping-cart-reducer";

export const rootReducer = combineReducers({
  books: booklistReducer, 
  cart: shoppingCartReducer
}); 