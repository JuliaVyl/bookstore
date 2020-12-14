import React from 'react';
import configureMockStore from 'redux-mock-store'
import { mount } from 'enzyme';
import Navbar from './Navbar';
import { Provider } from 'react-redux';
import Cart from '../shopping-cart/Cart';
import SearchPannel from '../search-pannel/SearchPannel';

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('Navbar', () => {
  let navWrapper;

  beforeEach(() => {
    const store = mockStore({ 
      cart: { cartItems: [] },
      checkout: {data: {
        status: 'success',
        orderId: 1
      } } 
    });
    navWrapper = mount(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('has tag nav', () => {
    const navTag = navWrapper.find('nav');
    expect(navTag).toHaveLength(1);
  });

  it('has logo', () => {
    expect(navWrapper.find('.navbar__logo')).toHaveLength(1);
  });

  it('has navbar items', () => {
    expect(navWrapper.find('.navbar__items')).toHaveLength(1);
  });

  it('has navbar item-links', () => {
    expect(navWrapper.find('.navbar__link')).toHaveLength(3);
  });

  it('has navbar item-icons', () => {
    expect(navWrapper.find('.navbar__icons')).toHaveLength(1);
  });

  it('shows Cart component', () => {
    expect(navWrapper.find('.navbar__cart-icon-pic')).toHaveLength(1);
    const submitButton = navWrapper.find('.navbar__cart-icon-pic');
    submitButton.simulate('click');
    expect(navWrapper.find(Cart)).toHaveLength(1);
  });

  it('shows SearchPannel component', () => {
    expect(navWrapper.find('.navbar__search-icon-pic')).toHaveLength(1);
    const submitButton = navWrapper.find('.navbar__search-icon-pic');
    submitButton.simulate('click');
    expect(navWrapper.find(SearchPannel)).toHaveLength(1);
  });

  
});
