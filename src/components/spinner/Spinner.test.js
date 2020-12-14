import { shallow } from 'enzyme';
import Spinner from './Spinner';

describe('Spinner', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Spinner />);
  });

  it('has 5 div tags', () => {
    expect(wrapper.find('div')).toHaveLength(5);
  });
  it('has spinner and lds-facebook classes', () => {
    expect(wrapper.find('.spinner')).toHaveLength(1);
    expect(wrapper.find('.lds-facebook')).toHaveLength(1);
  });
  
});
