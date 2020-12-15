import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './actions.js';
import * as types from '../action-types';
import BookstoreService from '../service/bookstore-service';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => { 
  const mockResponse = (status, statusText, response) => {
    return new window.Response(response, {
      status: status,
      statusText: statusText,
      headers: {
        'Content-type': 'application/json'
      }
    });
  };

  afterEach(() => {
    window.fetch = () => {};
  });

  it('creates FETCH_BOOKS_SUCCESS when fetching books has been done', () => {
    const books = [1, 2, 3];

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, JSON.stringify(books))));

    const expectedActions = [
      { type: types.FETCH_BOOKS_REQUEST },
      { type: types.FETCH_BOOKS_SUCCESS, payload: books }
    ];
    const store = mockStore({ 
      books: [],
      loading: false,
      error: null
    });

    
    return store.dispatch(actions.fetchBooks(new BookstoreService()))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    
  });

  it('creates FETCH_ORDER_SUCCESS when fetching order has been done', () => {
    const data = { 
      orderId: 8163,
      status: 'success'
    };
    
    const expectedActions = [
      { type: types.FETCH_ORDER_REQUEST },
      { type: types.FETCH_ORDER_SUCCESS, payload: data }, 
      { type: types.CLEAN_CART }
    ]
    const store = mockStore({
      data: data,
      loading: false,
      error: null
    })
    
    return store.dispatch(actions.fetchOrder(new BookstoreService()))
      .then(() => {
        expect(store.getActions()[0]).toEqual(expectedActions[0]);
        const action1 = store.getActions()[1];
        expect(action1).toEqual(
          expect.objectContaining({
            type: types.FETCH_ORDER_SUCCESS
          })
        );
        expect(Object.keys(action1)).toContain('payload');
        expect(action1.payload).toEqual(
          expect.objectContaining({
            status: 'success'
          })
        );
        expect(Object.keys(action1.payload)).toContain('orderId');
        expect(store.getActions()[2]).toEqual(expectedActions[2]);
      });
  });

});

describe('sync actions', () => {

  it('should create an action to filter books by text', () => {
    const text = 'example';
    const expectedAction = {
      type: types.FILTER_BOOKS_BY_TEXT,
      payload: text
    };
    expect(actions.filterBooksByText(text)).toEqual(expectedAction);
  });

  it('should create an action to filter books by category', () => {
    const category = 'Example Category';
    const expectedAction = {
      type: types.FILTER_BOOKS_BY_CATEGORY,
      payload: category
    };
    expect(actions.filterBooksByCategory(category)).toEqual(expectedAction);
  });

  it('should create an action to add book to cart', () => {
    const bookId = 11;
    const expectedAction = {
      type: types.BOOK_ADDED_TO_CART,
      payload: bookId
    };
    expect(actions.bookAddedToCart(bookId)).toEqual(expectedAction);
  });

  it('should create an action to remove book from cart', () => {
    const bookId = 11;
    const expectedAction = {
      type: types.BOOK_DELETED_FROM_CART,
      payload: bookId
    };
    expect(actions.bookDeletedFromCart(bookId)).toEqual(expectedAction);
  });

  it('should create an action to load cart items from storage', () => {
    const items = [1, 2, 3];
    const expectedAction = {
      type: types.CART_LOADED_FROM_STORAGE,
      payload: items
    };
    expect(actions.loadCartFromStorage(items)).toEqual(expectedAction);
  });

  it('should create an action to clean data about order', () => {
    const expectedAction = {
      type: types.CLEAN_ORDER_DATA
    };
    expect(actions.cleanOrderData()).toEqual(expectedAction);
  });
});
