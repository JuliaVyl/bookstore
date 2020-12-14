import configureMockStore from 'redux-mock-store'
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Cart from '../shopping-cart/Cart';
import OrderComplete from '../order-complete/OrderComplete';

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('Cart', () => {
  let cartWrapper;
  let store;
  beforeEach(() => {
    store = mockStore({ 
      cart: { cartItems: [
        {id: 1,
        title: 'book title',
        author: 'book author',
        price: 20,
        coverImage: 'https://thumbs.dreamstime.com/b/cute-kitten-13477992.jpg',
        amount: 1}
      ] },
      checkout: {
        data: {
          status: 'success',
          orderId: 1 },
        loading: false,
        error: null 
      } 
    });
    cartWrapper = mount(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
  });

  it('has cart class, cart__body class, ', () => {
    expect(cartWrapper.find('.cart')).toHaveLength(1);
    expect(cartWrapper.find('.cart__body')).toHaveLength(1);
  });

  it('has cart__empty class when there is no books in the cart', () => {
    store = mockStore({ 
      cart: { cartItems: [] },
      checkout: {
        data: {
          status: 'success',
          orderId: 1 },
        loading: false,
        error: null 
      } 
    });
    cartWrapper = mount(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    expect(cartWrapper.find('.cart__empty')).toHaveLength(1);
  });

  it('has cart__books class when there are books in the cart', () => {
    expect(cartWrapper.find('.cart__books')).toHaveLength(1);
  });

  it('has OrderComplete component when order status is success', () => {
    expect(cartWrapper.find(OrderComplete)).toHaveLength(1);
  });

  it('has cart__header, cart__title and cart__close classes', () => {
    expect(cartWrapper.find('.cart__header')).toHaveLength(1);
    expect(cartWrapper.find('.cart__title')).toHaveLength(1);
    expect(cartWrapper.find('.cart__close')).toHaveLength(1);
  });

  it('has cart__book_left-side class and its children classes', () => {
    expect(cartWrapper.find('.cart__book_left-side')).toHaveLength(1);
    expect(cartWrapper.find('.cart__book-pic')).toHaveLength(1);
    expect(cartWrapper.find('.cart__book-about')).toHaveLength(1);
    expect(cartWrapper.find('.cart__book-title')).toHaveLength(1);
    expect(cartWrapper.find('.cart__book-author')).toHaveLength(1);
  });
  
  it('has cart__book_right-side class and its children classes', () => {
    expect(cartWrapper.find('.cart__book_left-side')).toHaveLength(1);
    expect(cartWrapper.find('.cart__book-info')).toHaveLength(1);
    expect(cartWrapper.find('.cart__info-minus')).toHaveLength(1);
    expect(cartWrapper.find('.cart__info-amount')).toHaveLength(1);
    expect(cartWrapper.find('.cart__info-add')).toHaveLength(1);
    expect(cartWrapper.find('.cart__info-cost')).toHaveLength(1);
  });

  it('has cart__total-sum class', () => {
    expect(cartWrapper.find('.cart__total-sum')).toHaveLength(1); 
  });

  it('has cart__order class', () => {
    expect(cartWrapper.find('.cart__order')).toHaveLength(1); 
    expect(cartWrapper.find('.cart__order-text')).toHaveLength(1); 
    expect(cartWrapper.find('.cart__order-form')).toHaveLength(1); 
    expect(cartWrapper.find('.cart__order-email')).toHaveLength(1); 
    expect(cartWrapper.find('.cart__order-buy')).toHaveLength(1); 
  });

  it('has 3 buttons', () => {
    expect(cartWrapper.find('button')).toHaveLength(3); 
  });

});
