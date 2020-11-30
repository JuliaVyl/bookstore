
const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  }
}; 

const booksLoaded = (books) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: books
  };
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  };
};

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

