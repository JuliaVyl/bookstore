import { shallow } from 'enzyme';
import BooksList from './BooksList';

describe('BooksList', () => {

  it('has .books-list class', () => {
    const booksListWrapper = shallow(<BooksList />);
    const booksClass = booksListWrapper.find('.books-list');

    expect(booksClass).toHaveLength(1);
  });

});
