import { shallow } from 'enzyme';
import Navbar from './components/navbar/Navbar'

describe('Navbar', () => {
  it('has tag nav', () => {
    const navWrapper = shallow(<Navbar/>);
    const navTag = navWrapper.find('nav');

    expect(navTag).toHaveLength(1);
  });

});
