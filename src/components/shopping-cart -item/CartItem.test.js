import {  shallow } from 'enzyme';
import CartItem from './CartItem';

describe('Cart', () => {
  const cartWrapper = shallow(<CartItem />);

  it('has cart__book class', () => {
    expect(cartWrapper.find('.cart__book')).toHaveLength(1);
  });

  it('has cart__book_left-side and its children classes', () => {
    expect(cartWrapper.find('.cart__book_left-side')).toHaveLength(1);
    expect(cartWrapper.find('.cart__book-pic')).toHaveLength(1);
    expect(cartWrapper.find('.cart__book-about')).toHaveLength(1);
    expect(cartWrapper.find('.cart__book-title')).toHaveLength(1);
    expect(cartWrapper.find('.cart__book-author')).toHaveLength(1);
  });

  it('has cart__book_right-side and its children classes', () => {
    expect(cartWrapper.find('.cart__book-info')).toHaveLength(1);
    expect(cartWrapper.find('.cart__info-minus')).toHaveLength(1);
    expect(cartWrapper.find('.cart__book_right-side')).toHaveLength(1);
    expect(cartWrapper.find('.cart__info-amount')).toHaveLength(1);
    expect(cartWrapper.find('.cart__info-add')).toHaveLength(1);
    expect(cartWrapper.find('.cart__info-cost')).toHaveLength(1);
  });

  it('has img tag', () => {
    expect(cartWrapper.find('img')).toHaveLength(1);
  });

  it('has 2 buttons tags', () => {
    expect(cartWrapper.find('button')).toHaveLength(2);
  });

});
