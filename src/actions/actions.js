import { 
  FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, BOOK_ADDED_TO_CART, BOOK_DELETED_FROM_CART,
  FILTER_BOOKS_BY_CATEGORY, FILTER_BOOKS_BY_TEXT,CART_LOADED_FROM_STORAGE, FETCH_ORDER_REQUEST, CLEAN_CART, FETCH_ORDER_SUCCESS, FETCH_ORDER_FAILURE, CLEAN_ORDER_DATA
} from "../action-types";

const booksRequested = () => {
  return {
    type: FETCH_BOOKS_REQUEST
  }
}; 

const booksLoaded = (books) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books
  };
};

const booksError = (error) => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error
  };
};
export const bookAddedToCart = (bookId) => {
  return {
    type: BOOK_ADDED_TO_CART,
    payload: bookId
  }
}


export const bookDeletedFromCart = (bookId) => ({
  type: BOOK_DELETED_FROM_CART,
  payload: bookId
});

export const filterBooksByCategory = (category) => {
  return {
      type: FILTER_BOOKS_BY_CATEGORY,
      payload: category
  };
};

export const filterBooksByText = (text) => {
  return {
      type: FILTER_BOOKS_BY_TEXT,
      payload: text
  };
};

export const loadCartFromStorage = (items) => {
  return {
      type: CART_LOADED_FROM_STORAGE,
      payload: items
  };
};

const checkoutRequested = () => {
  return {
    type: FETCH_ORDER_REQUEST
  }
}
const checkoutLoaded = (data) => {
  return {
    type: FETCH_ORDER_SUCCESS,
    payload: data
  }
}
const checkoutError = (error) => {
  return {
    type: FETCH_ORDER_FAILURE,
    payload: error
  }
}

const cleanCart = () => {
  return {
    type: CLEAN_CART
  }
}

export const cleanOrderData = () => ({
  type: CLEAN_ORDER_DATA
}) 

export const fetchOrder = (bookstoreService) => async (dispatch) => {
  try {
    dispatch(checkoutRequested());
    const orderData = await bookstoreService.makeOrder();
    dispatch(checkoutLoaded(orderData));
    dispatch(cleanCart());
  }
  catch (e) {
    dispatch(checkoutError(e));
  }
};


export const fetchBooks = (bookstoreService) => async (dispatch) => {
  try {
    dispatch(booksRequested());
    const data = await bookstoreService.getBooks();
    dispatch(booksLoaded(data));
  }
  catch (e) {
    dispatch(booksError(e));
  }
  
}


