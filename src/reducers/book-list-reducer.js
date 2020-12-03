import {FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS} from '../action-types'

const initialState = {
  books: [],
  loader: false,
  error: null
}

const booklistReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        books: [],
        loader: true,
        error: null 
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        books: action.payload,
        loading: false,
        error: null
      };
    case FETCH_BOOKS_FAILURE:
      return {
        books: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default booklistReducer;