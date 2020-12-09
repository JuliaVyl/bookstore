import { 
  FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, BOOK_ADDED_TO_CART, BOOK_DELETED_FROM_CART,
  FILTER_BOOKS_BY_CATEGORY, FILTER_BOOKS_BY_TEXT
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


