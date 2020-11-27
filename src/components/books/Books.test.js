import { shallow } from 'enzyme';
import Books from './Books';

describe('Books', () => {
  it('has div tag', () => {
    const booksWrapper = shallow(<Books />);
    const divTag = booksWrapper.find('div');

    expect(divTag).toHaveLength(1);
  });
  it('has .books class', () => {
    const booksWrapper = shallow(<Books />);
    const booksClass = booksWrapper.find('.books');

    expect(booksClass).toHaveLength(1);
  });
});
