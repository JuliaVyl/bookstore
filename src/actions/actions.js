
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

const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
}

export {
  fetchBooks
};

