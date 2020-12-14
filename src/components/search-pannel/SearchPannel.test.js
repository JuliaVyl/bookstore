import configureMockStore from 'redux-mock-store'
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import SearchPannel from './SearchPannel';

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('SearchPannel', () => {
  let wrapper;
  let store; 
  beforeEach(() => {
    store = mockStore({});
    wrapper = mount(
      <Provider store={store}>
        <SearchPannel />
      </Provider>
    );
  });

  it('has search-pannel class', () => {
    expect(wrapper.find('.search-pannel')).toHaveLength(1);
  });
  it('has form tag', () => {
    expect(wrapper.find('form')).toHaveLength(1);
  });
  it('has 2 buttons tags', () => {
    expect(wrapper.find('button')).toHaveLength(2);
  });
  it('has input tag', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });
  it('has search-pannel__form, search-pannel__input-field, search-pannel__btn and search-pannel__close classes', () => {
    expect(wrapper.find('.search-pannel__form')).toHaveLength(1);
    expect(wrapper.find('.search-pannel__input-field')).toHaveLength(1);
    expect(wrapper.find('.search-pannel__btn')).toHaveLength(1);
    expect(wrapper.find('.search-pannel__close')).toHaveLength(1);
  });
  
});
