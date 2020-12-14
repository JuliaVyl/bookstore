import { shallow } from 'enzyme';
import Home from '../home-page/Home';
import Navbar from '../navbar/Navbar'
import Books from '../books/Books';
import Footer from '../footer/Footer';
import App from './App';

describe('App', () => {
    let appWrapper;
    beforeEach(() => {
      appWrapper = shallow(<App/>);
    })
    
  it('has component Navbar', () => {
    const navbar = appWrapper.find(Navbar);

    expect(navbar).toHaveLength(1);
  });

  it('has component Home', () => {
    const homePage = appWrapper.find(Home);

    expect(homePage).toHaveLength(1);
  });

  it('has component Books', () => {
    const booksPage = appWrapper.find(Books);

    expect(booksPage).toHaveLength(1);
  });

  it('has component Footer', () => {
    const footer = appWrapper.find(Footer);

    expect(footer).toHaveLength(1);
  });

});
