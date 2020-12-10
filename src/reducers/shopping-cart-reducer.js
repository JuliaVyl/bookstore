import { BOOK_ADDED_TO_CART, BOOK_DELETED_FROM_CART, CART_LOADED_FROM_STORAGE,
  CLEAN_CART } from "../action-types";

const updateCartItems = (cartItems, item, idx) => {

  if (item.amount === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx+1),
    ]
  }
  if (idx === -1) {
    return [
      ...cartItems,
      item
    ]
  }
  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ]
} 

const createItem = (book, item, amount) => {
  if (item) {
    return {
      ...item,
      amount: item.amount + (amount)
    }
  } else {
    return {
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      coverImage: book.coverImage,
      amount: 1
    } 
  }

}

const updateOrder = (state, bookId, amount) => {
  const { books: {books}, cart: {cartItems}} = state;
  const book = books.find(({id}) => id === bookId);
  const itemIndex = cartItems.findIndex(({id}) => id === bookId );
  const item = cartItems[itemIndex];

  const newItem = createItem(book, item, amount);
  return {
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  }
}

const shoppingCartReducer = (state, action) => {
  
  if (state === undefined) {
    return {
      cartItems: []
    }
  }

  switch(action.type) {
    case BOOK_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);
    
    case BOOK_DELETED_FROM_CART:
      return updateOrder(state, action.payload, -1);
    case CART_LOADED_FROM_STORAGE:
      return {
        cartItems: action.payload
      }
    case CLEAN_CART: 
      return {
        cartItems: []
      }
    default: return state.cart;
  }
}
export default shoppingCartReducer;