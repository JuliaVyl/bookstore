import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  it('has class footer', () => {
    const footerWrapper = shallow(<Footer />);
    const footerClass = footerWrapper.find('.footer');

    expect(footerClass).toHaveLength(1);
  });

});