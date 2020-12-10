import { shallow } from 'enzyme';
import BookListItem from './BookListItem';

import img1 from '../../assets/img/book-1.jpg';

describe('BooksListItem', () => {

  it('has div tag', () => {
    const booksListItem = shallow(<BookListItem />);
    const tag = booksListItem.find('div');

    expect(tag).toHaveLength(7);
  });

  it('has books-list__book-card class', () => {
    const booksListItem = shallow(<BookListItem />);
    const clazz = booksListItem.find('.books-list__book-card');

    expect(clazz).toHaveLength(1);
  });

});
