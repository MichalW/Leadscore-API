import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

import Contacts from '../Contacts';
import Layout from '../../Layout';

it('should render Home', () => {
  const props = {
    username: 'ExampleUsername',
  };

  const home = shallow(<Contacts {...props} />);

  expect(home.find(Layout).exists()).toBe(true);
  expect(toJson(home)).toMatchSnapshot();
});
