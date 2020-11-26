import { shallow } from 'enzyme';
import Navbar from './components/Navbar'

describe('Navbar', () => {
  it('', () => {
    const navWrapper = shallow(<Navbar/>);
    const navTag = navWrapper.find('nav');

    expect(navTag).toHaveLength(1);
  });

});
