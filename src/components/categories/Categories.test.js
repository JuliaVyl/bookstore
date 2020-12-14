import { mount } from 'enzyme';
import Categories from './Categories';
import React from 'react';
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux';

const middlewares = [];
const mockStore = configureMockStore(middlewares);


describe('Categories', () => {
  let wrapper;
  beforeEach(() => {
    const store = mockStore({ 
      books: { filterCategory: 'All' }
    });
    wrapper = mount(
      <Provider store={store}>
        <Categories />
      </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('has categories class', () => {
    const categoriesClass = wrapper.find('.categories');
    expect(categoriesClass).toHaveLength(1);
  });
  
  it('has categories__list class', () => {
    const categoriesClass = wrapper.find('.categories__list');
    expect(categoriesClass).toHaveLength(1);
  });

  it('has 1 div and 1 ul tags', () => {
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('ul')).toHaveLength(1);
  });
});
