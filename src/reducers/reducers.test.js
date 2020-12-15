import * as types from '../action-types';
import booklistReducer from './book-list-reducer';
import checkoutOrderReducer from './checkout-order-reducer';
import shoppingCartReducer from './shopping-cart-reducer';

describe('book-list reducer', () => {

  it('should return the initial state', () => {
    expect(
      booklistReducer(undefined, {}))
      .toEqual({
        books: [],
        filterText: '',
        filterCategory: 'All',
        loading: true,
        error: null
      })
  });

  it('should handle FETCH_BOOKS_REQUEST', () => {
    expect(
      booklistReducer([], {
      type: types.FETCH_BOOKS_REQUEST
    })
    ).toEqual({
      books: [],
      loading: true,
      error: null 
    })
  });

  it('should handle FETCH_BOOKS_SUCCESS', () => {
    const books = ['foo', 'bar'];

    expect(
      booklistReducer({}, {
        type: types.FETCH_BOOKS_SUCCESS,
        payload: books
      })
    ).toEqual({
      books: books,
      loading: false,
      error: null
    })
  });

  it('should handle FETCH_BOOKS_FAILURE', () => {
    const error = 'error'
    expect(
      booklistReducer({}, {
        type: types.FETCH_BOOKS_FAILURE,
        payload: error
      })
    ).toEqual({
      books: [],
      loading: false,
      error: error
    })
  });

  it('should handle FILTER_BOOKS_BY_TEXT', () => {
    const searchText = 'test';
    expect(
      booklistReducer({}, {
        type: types.FILTER_BOOKS_BY_TEXT,
        payload: searchText
      })
    ).toEqual({
      filterText: searchText
    })
  });

  it('should handle FILTER_BOOKS_BY_CATEGORY', () => {
    const category = 'Test Category';
    expect(
      booklistReducer({}, {
        type: types.FILTER_BOOKS_BY_CATEGORY,
        payload: category
      })
    ).toEqual({
      filterCategory: category
    })
  });

});

describe('shopping-cart reducer', () => {

  it('should return the initial state', () => {
    expect(
      shoppingCartReducer(undefined, {}))
      .toEqual({
        cartItems: []
      })
  });

  it('should handle BOOK_ADDED_TO_CART', () => {
    const booksItems = [{      
      id: 1,
      title: 'test title',
      author: 'test author',
      price: 20,
      coverImage: '',
      fullDesc: '',
      shortDesc: '',
      category: '',
      bestseller: false }];
    expect(
      shoppingCartReducer({
        books: {
          books: booksItems
        }, 
        cart: {
          cartItems: []
        }
      }, {
        type: types.BOOK_ADDED_TO_CART,
        payload: 1
      })
    ).toEqual({
      cartItems: [
        {
          id: booksItems[0].id,
          title: booksItems[0].title,
          author: booksItems[0].author,
          price: booksItems[0].price,
          coverImage: booksItems[0].coverImage,
          amount: 1
        }
      ]
    })
  });

  it('should handle BOOK_DELETED_FROM_CART', () => {
    const booksItems = [{      
      id: 1,
      title: 'test title',
      author: 'test author',
      price: 20,
      coverImage: '',
      fullDesc: '',
      shortDesc: '',
      category: '',
      bestseller: false }];
    expect(
      shoppingCartReducer({
        books: {
          books: booksItems
        }, 
        cart: {
          cartItems: []
        }
      }, {
        type: types.BOOK_DELETED_FROM_CART,
        payload: 1
      })
    ).toEqual({
      cartItems: [
        {
          id: booksItems[0].id,
          title: booksItems[0].title,
          author: booksItems[0].author,
          price: booksItems[0].price,
          coverImage: booksItems[0].coverImage,
          amount: 1
        }
      ]
    })
  });

  it('should handle CART_LOADED_FROM_STORAGE', () => {
    const items = [1, 2, 3];
    expect(
      shoppingCartReducer({}, {
        type: types.CART_LOADED_FROM_STORAGE,
        payload: items
      })
    ).toEqual({
      cartItems: items
    })
  });

  it('should handle CLEAN_CART', () => {
    expect(
      shoppingCartReducer({}, {
        type: types.CLEAN_CART
      })
    ).toEqual({
      cartItems: []
    })
  });

});

describe('shopping-cart reducer', () => {

  it('should return the initial state', () => {
    expect(
      checkoutOrderReducer(undefined, {}))
      .toEqual({
        data: [],
        loading: false,
        error: null
      })
  });

  it('should handle FETCH_ORDER_REQUEST', () => {
    expect(
      checkoutOrderReducer({}, {
        type: types.FETCH_ORDER_REQUEST
      })
    ).toEqual({
      data: [],
      loading: true,
      error: null 
    })
  });

  it('should handle FETCH_ORDER_SUCCESS', () => {
    const books = [1, 2, 3];
    expect(
      checkoutOrderReducer({}, {
        type: types.FETCH_ORDER_SUCCESS,
        payload: books
      })
    ).toEqual({
      data: books,
      loading: false,
      error: null 
    })
  });

  it('should handle FETCH_ORDER_FAILURE', () => {
    const error = 'error';
    expect(
      checkoutOrderReducer({}, {
        type: types.FETCH_ORDER_FAILURE,
        payload: error
      })
    ).toEqual({
      data: [],
      loading: false,
      error: error 
    })
  });

  it('should handle CLEAN_ORDER_DATA', () => {
    const error = 'error';
    expect(
      checkoutOrderReducer({}, {
        type: types.CLEAN_ORDER_DATA
      })
    ).toEqual({
      data: [],
      loading: false,
      error: null
    })
  });
});