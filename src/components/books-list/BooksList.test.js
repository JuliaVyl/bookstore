import { shallow } from 'enzyme';
import BookListItem from '../books-list-item/BookListItem';
import BooksList from './BooksList';

describe('BooksList', () => {

  it('has .books-list class', () => {
    const booksListWrapper = shallow(<BooksList />);
    const booksClass = booksListWrapper.find('.books-list');

    expect(booksClass).toHaveLength(1);
  });

  it('has component BookListItem', () => {
    const booksListWrapper = shallow(<BooksList />);
    const component = booksListWrapper.find(BookListItem);

    expect(component).toHaveLength(1);
  });

});
