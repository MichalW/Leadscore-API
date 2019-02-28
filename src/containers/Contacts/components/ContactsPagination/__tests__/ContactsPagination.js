import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

import ContactsPagination from '../ContactsPagination';

it('should render ContactsPagination', () => {
  const props = {
    contactsCount: 100,
    history: {
      push: () => {},
    },
  };

  const contactsPagination = shallow(<ContactsPagination {...props} />);

  expect(toJson(contactsPagination)).toMatchSnapshot();
});
