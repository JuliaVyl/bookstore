import { shallow } from 'enzyme';
import App from './App';
import Navbar from './components/Navbar'

describe('App', () => {
  it('has component Navbar', () => {
    const appWrapper = shallow(<App/>);
    const navbar = appWrapper.find(Navbar);

    expect(navbar).toHaveLength(1);
  });

});
