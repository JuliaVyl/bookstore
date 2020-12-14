import { shallow } from 'enzyme';
import Books from './Books';
import Categories from '../categories/Categories';
import BooksList from '../books-list/BooksList';

describe('Books', () => {

  it('has books class', () => {
    const booksWrapper = shallow(<Books />);
    const booksClass = booksWrapper.find('.books');

    expect(booksClass).toHaveLength(1);
  });
  it('has books__wrapper class', () => {
    const booksWrapper = shallow(<Books />);
    const booksClass = booksWrapper.find('.books__wrapper');

    expect(booksClass).toHaveLength(1);
  });

  it('has component Categories', () => {
    const booksWrapper = shallow(<Books/>);
    const listOfCategories = booksWrapper.find(Categories);

    expect(listOfCategories).toHaveLength(1);
  });

  it('has component BooksList', () => {
    const booksWrapper = shallow(<Books/>);
    const listOfBooks = booksWrapper.find(BooksList);

    expect(listOfBooks).toHaveLength(1);
  });
  
});
