import { shallow } from 'enzyme';
import Home from '../home-page/Home';
import Navbar from '../navbar/Navbar'
import App from './App';

describe('App', () => {
  it('has component Navbar', () => {
    const appWrapper = shallow(<App/>);
    const navbar = appWrapper.find(Navbar);

    expect(navbar).toHaveLength(1);
  });

  it('has component Home', () => {
    const appWrapper = shallow(<App/>);
    const homepage = appWrapper.find(Home);

    expect(homepage).toHaveLength(1);
  });

});
