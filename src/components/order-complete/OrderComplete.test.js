import { shallow } from 'enzyme';
import OrderComplete from './OrderComplete';

describe('OrderComplete', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<OrderComplete />);
  });

  it('has order-complete, order-complete__icon and order-complete__text classes', () => {
    expect(wrapper.find('.order-complete')).toHaveLength(1);
    expect(wrapper.find('.order-complete__icon')).toHaveLength(1);
    expect(wrapper.find('.order-complete__text')).toHaveLength(1);
  });
  it('has 2 div tags and img tag', () => {
    expect(wrapper.find('div')).toHaveLength(2);
    expect(wrapper.find('img')).toHaveLength(1);
  });
  
});
