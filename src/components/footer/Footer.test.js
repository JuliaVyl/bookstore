import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {

  it('has class footer and footer__wrapper', () => {
    const footerWrapper = shallow(<Footer />);
    expect(footerWrapper.find('.footer')).toHaveLength(1);
    expect(footerWrapper.find('.footer__wrapper')).toHaveLength(1);
  });

  it('has footer__logo, footer__email and footer__contacts classes', () => {
    const footerWrapper = shallow(<Footer />);
    expect(footerWrapper.find('.footer__logo')).toHaveLength(1);
    expect(footerWrapper.find('.footer__email')).toHaveLength(1);
    expect(footerWrapper.find('.footer__contacts')).toHaveLength(1);
  });

  it('has footer__email-text and footer__email-link classes', () => {
    const footerWrapper = shallow(<Footer />);
    expect(footerWrapper.find('.footer__email-link')).toHaveLength(1);
    expect(footerWrapper.find('.footer__email-text')).toHaveLength(1);
  });

  it('has 2 footer__contacts-links classes', () => {
    const footerWrapper = shallow(<Footer />);
    expect(footerWrapper.find('.footer__contacts-links')).toHaveLength(2);
  });
});