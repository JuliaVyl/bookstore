import { shallow } from 'enzyme';
import Home from './components/home-page/Home';

describe('Navbar', () => {
  it('has home class', () => {
    const homeWrapper = shallow(<Home />);
    const homeClass = homeWrapper.find('.home');

    expect(homeClass).toHaveLength(1);
  });

});
