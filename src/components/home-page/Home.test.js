import Home from './Home';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Home', () => {
  let homeWrapper;
  let store;
  beforeEach(() => {
    store = mockStore({ 
      books: { 
        filterCategory: 'Bestsellers'
       } 
    });
    homeWrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it('has home class', () => {
    expect(homeWrapper.find('.home')).toHaveLength(1);
  });
  it('has home__wrapper, home__bg and home__logo classes', () => {
    expect(homeWrapper.find('.home__wrapper')).toHaveLength(1);
    expect(homeWrapper.find('.home__bg')).toHaveLength(1);
    expect(homeWrapper.find('.home__logo')).toHaveLength(1);
  });

  it('has promos classes', () => {
    expect(homeWrapper.find('.home__first-promo')).toHaveLength(1);
    expect(homeWrapper.find('.home__second-promo')).toHaveLength(1);
  });

});
