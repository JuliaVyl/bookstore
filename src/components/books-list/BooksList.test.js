import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import BookListItem from '../books-list-item/BookListItem';
import BooksList from './BooksList';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('BooksList', () => {
  let booksListWrapper;
  let store;

  beforeEach(() => {
    store = mockStore({ 
      books: { 
        books: [],
        loading: false,
        error: null,
        filterText: '',
        filterCategory: 'All'
       } 
    });
    booksListWrapper = mount(
      <Provider store={store}>
        <BooksList />
      </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  })


  it('has .books-list class', () => {
    const booksClass = booksListWrapper.find('.books-list');
    expect(booksClass).toHaveLength(1);
  });

  it('has component BookListItem when there are books', () => {
    store = mockStore({ 
      books: { 
        books: [{author: 'Crazy rich asians', title: 'au', shortDesc: '', fullDesc: '',
                 coverImage: '', catagory: 'Fiction & Poetry', bestseller: true, id: 12}],
        loading: false,
        error: null,
        filterText: '',
        filterCategory: 'All'
       } 
    });
    booksListWrapper = mount(
      <Provider store={store}>
        <BooksList />
      </Provider>
    );
    expect(booksListWrapper.find(BookListItem)).toHaveLength(1);
  });

  it('renders filtered by key words books', () => {
    store = mockStore({ 
      books: { 
        books: [{author: 'Crazy rich asians', title: 'au', shortDesc: '', fullDesc: '',
                 coverImage: '', catagory: 'Fiction & Poetry', bestseller: true, id: 12}],
        loading: false,
        error: null,
        filterText: 'asi',
        filterCategory: 'All'
       } 
    });
    booksListWrapper = mount(
      <Provider store={store}>
        <BooksList />
      </Provider>
    );
    expect(booksListWrapper.find(BookListItem)).toHaveLength(1);
  });
  it('renders filtered by category and key words books', () => {
    store = mockStore({ 
      books: { 
        books: [{author: 'Crazy rich asians', title: 'au', shortDesc: '', fullDesc: '',
                 coverImage: '', catagory: 'Fiction & Poetry', bestseller: true, id: 12}],
        loading: false,
        error: null,
        filterText: 'asi',
        filterCategory: 'Bestsellers'
       } 
    });
    booksListWrapper = mount(
      <Provider store={store}>
        <BooksList />
      </Provider>
    );
    expect(booksListWrapper.find(BookListItem)).toHaveLength(1);
  });

});
