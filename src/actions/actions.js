import { 
  ADD_TO_CART, FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, 
  FETCH_BOOKS_SUCCESS, 
  SHOW_CART
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

export const addToCart = (bookId) => ({
  type: ADD_TO_CART,
  payload: bookId
});


export const showCart = (books) => ({
  type: SHOW_CART,
  payload: books
});



const  fetchBooks = (bookstoreService) => async (dispatch) => {
  try {
    dispatch(booksRequested());
    const data = await bookstoreService.getBooks();
    dispatch(booksLoaded(data));
  }
  catch (e) {
    dispatch(booksError(e));
  }
  
}

export {
  fetchBooks
};

