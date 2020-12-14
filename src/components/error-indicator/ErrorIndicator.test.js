import { shallow } from 'enzyme';
import ErrorIndicator from './ErrorIndicator';

describe('ErrorIndicator', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ErrorIndicator />);
  });

  it('has div tag', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
  it('has 4 classes', () => {
    expect(wrapper.find('.error')).toHaveLength(1);
    expect(wrapper.find('.error__pic')).toHaveLength(1);
    expect(wrapper.find('.error__oops')).toHaveLength(1);
    expect(wrapper.find('.error__text')).toHaveLength(1);
  });
  
});
