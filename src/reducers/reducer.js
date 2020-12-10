
import booklistReducer from './book-list-reducer';
import checkoutOrderReducer from './checkout-order-reducer';
import shoppingCartReducer from './shopping-cart-reducer';

export const rootReducer = (state, action) => {
  return {
    books: booklistReducer(state, action), 
    cart: shoppingCartReducer(state, action),
    checkout: checkoutOrderReducer(state, action)
  }
} 