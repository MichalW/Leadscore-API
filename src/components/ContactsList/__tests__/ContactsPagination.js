import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

import ContactsPagination from '../components/ContactsPagination';

it('should render ContactsPagination', () => {
  const props = {};

  const contactsPagination = shallow(<ContactsPagination {...props} />);

  expect(toJson(contactsPagination)).toMatchSnapshot();
});
