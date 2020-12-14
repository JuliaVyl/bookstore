import { shallow } from 'enzyme';
import BookListItem from './BookListItem';
import React from 'react';
import BookListItemMore from '../books-list-item-more/BookListItemMore';

describe('BookListItem', () => {
  let wrapper;
  const book = {
    id: 1,
    coverImage: '',
    title: '',
    author: '',
    shortDesc: '',
    price: 20
  }
  beforeEach(() => {
    wrapper = shallow(<BookListItem 
      onAddedToCart={() => console.log(12)} 
      book={book} 
      key={book.id}/>);
  });
  
  it('has books-list__book-card class', () => {
    expect(wrapper.find('.books-list__book-card')).toHaveLength(1);
  })
    
  it('has 8 div tags', () => {
    expect(wrapper.find('div')).toHaveLength(8);
  })  
  it('has book-card__image class', () => {
    expect(wrapper.find('.book-card__image')).toHaveLength(1);
  })
  it('has book-card__about class and it children classes', () => {
    expect(wrapper.find('.book-card__about')).toHaveLength(1);
    expect(wrapper.find('.book-card__about-info')).toHaveLength(1);
    expect(wrapper.find('.about__author')).toHaveLength(1);
    expect(wrapper.find('.about__title')).toHaveLength(1);
    expect(wrapper.find('.about__description')).toHaveLength(1);
    expect(wrapper.find('.about__cost')).toHaveLength(1);
    expect(wrapper.find('.about__buy-btn')).toHaveLength(1);
  })
  it('has button tag', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  })
  it('shows BookListItemMore component', () => {
    expect(wrapper.find('.book-card__about-info')).toHaveLength(1);
    const moreClick = wrapper.find('.book-card__about-info');
    moreClick.simulate('click');
    expect(wrapper.find(BookListItemMore)).toHaveLength(1);
  });
  
});
