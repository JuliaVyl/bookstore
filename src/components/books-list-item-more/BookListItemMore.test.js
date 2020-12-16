import { shallow } from 'enzyme';
import BookListItemMore from './BookListItemMore';
import React from 'react';

describe('BooksListItemMore', () => {
  let wrapper;
  const book = {
    id: 1,
    coverImage: '',
    title: '',
    author: '',
    fulltDesc: '',
    price: 20
  }
  beforeEach(() => {
    wrapper = shallow(<BookListItemMore book={book}/>);
  });
  it('has more class', () => {
    expect(wrapper.find('.more')).toHaveLength(1);
  });
  it('has more__close, more__container and more__about classes', () => {
    expect(wrapper.find('.more__close')).toHaveLength(1);
    expect(wrapper.find('.more__container')).toHaveLength(1);
    expect(wrapper.find('.more__about')).toHaveLength(1);
  });
  it('has more__close, more__container and more__about chilren classes', () => {
    expect(wrapper.find('.more__image')).toHaveLength(1);
    expect(wrapper.find('.more__image-pic')).toHaveLength(1);
    expect(wrapper.find('.more__author')).toHaveLength(1);
    expect(wrapper.find('.more__title')).toHaveLength(1);
    expect(wrapper.find('.more__description')).toHaveLength(1);
    expect(wrapper.find('.more__cost')).toHaveLength(1);
  });
  it('has 1 button and 1 img tag', () => {
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
  });

});
