import {FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FILTER_BOOKS_BY_CATEGORY, FILTER_BOOKS_BY_TEXT} from '../action-types'

const booklistReducer = (state, action) => {
  
  if (state === undefined) {
    return {
      books: [],
      filterText: '',
      filterCategory: 'All',
      loading: true,
      error: null
    };
  }
  
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state.books,
        books: [],
        loading: true,
        error: null 
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state.books,
        books: action.payload,
        loading: false,
        error: null
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state.books,
        books: [],
        loading: false,
        error: action.payload
      };

    case FILTER_BOOKS_BY_TEXT:
      const searchText = action.payload.trim().toLowerCase();
      return {
        ...state.books,
        filterText: searchText
      };

    case FILTER_BOOKS_BY_CATEGORY:
      const category = action.payload;
      return {
        ...state.books,
        filterCategory: category
      };
    default:
      return state.books;
  }
}

export default booklistReducer;