import { shallow } from 'enzyme';
import App from './App';
import Home from './components/home-page/Home';
import Navbar from './components/navbar/Navbar'

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
