import { shallow } from 'enzyme';
import Categories from './Categories';

describe('Categories', () => {

  it('has .categories class', () => {
    const CategoriesWrapper = shallow(<Categories />);
    const categoriesClass = CategoriesWrapper.find('.categories');

    expect(categoriesClass).toHaveLength(1);
  });
});
