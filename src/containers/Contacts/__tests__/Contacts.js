import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

import Contacts from '../Contacts';
import Layout from '../../../components/Layout';

it('should render Contacts', () => {
  const props = {
    username: 'ExampleUsername',
  };

  const contacts = shallow(<Contacts {...props} />);

  expect(contacts.find(Layout).exists()).toBe(true);
  expect(toJson(contacts)).toMatchSnapshot();
});
