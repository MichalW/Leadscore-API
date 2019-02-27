import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

import Breadcrumb from '../Breadcrumb';

it('should render Breadcrumb on root', () => {
  const props = {
    location: {
      pathname: '/',
    },
  };

  const contacts = shallow(<Breadcrumb {...props} />);

  expect(toJson(contacts)).toMatchSnapshot();
});


it('should render Breadcrumb on page', () => {
  const props = {
    location: {
      pathname: '/example'
    },
  };

  const contacts = shallow(<Breadcrumb {...props} />);

  expect(toJson(contacts)).toMatchSnapshot();
});
