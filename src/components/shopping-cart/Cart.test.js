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
  });

  it('has cart class, cart__body class, ', () => {

    expect(cartWrapper.find('.cart')).toHaveLength(1);
    expect(cartWrapper.find('.cart__body')).toHaveLength(1);
  });
  it('has cart__empty class when there is no books in the cart', () => {
    expect(cartWrapper.find('.cart__empty')).toHaveLength(1);
  });
  it('has cart__books class when there are books in the cart and cart__total-sum class', () => {
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
    expect(cartWrapper.find('.cart__books')).toHaveLength(1);
    expect(cartWrapper.find('.cart__total-sum')).toHaveLength(1)
  });

  it('has OrderComplete component when order status is success', () => {
    expect(cartWrapper.find(OrderComplete)).toHaveLength(1);
  });


});
