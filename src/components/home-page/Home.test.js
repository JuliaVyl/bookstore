import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  it('has home class', () => {
    const homeWrapper = shallow(<Home />);
    const homeClass = homeWrapper.find('.home');

    expect(homeClass).toHaveLength(1);
  });

});
