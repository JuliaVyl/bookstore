import { shallow } from 'enzyme';
import Books from './Books';
import Categories from '../categories/Categories';

describe('Books', () => {

  it('has .books class', () => {
    const booksWrapper = shallow(<Books />);
    const booksClass = booksWrapper.find('.books');

    expect(booksClass).toHaveLength(1);
  });

  it('has component Categories', () => {
    const booksWrapper = shallow(<Books/>);
    const listOfCategories = booksWrapper.find(Categories);

    expect(listOfCategories).toHaveLength(1);
  });
});
