
import booklistReducer from './book-list-reducer';
import shoppingCartReducer from './shopping-cart-reducer';
import filterReducer from './filter-reducer';

export const rootReducer = (state, action) => {
  return {
    books: booklistReducer(state, action), 
    cart: shoppingCartReducer(state, action)
  }
} 