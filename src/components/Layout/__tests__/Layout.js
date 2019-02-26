import React from 'react';
import {shallow} from 'enzyme';

import Layout from '../Layout';
import Navbar from '../../Navbar';
import Login from '../../Login';

it('renders Layout signedIn', () => {
  const props = {
    signedIn: true,
    username: 'ExampleUsername',
  };

  const layout = shallow(<Layout {...props} />);

  expect(layout.find(Navbar).exists()).toBe(true);
  expect(layout.find(Login).exists()).toBe(false);
});

it('renders Layout signedOut', () => {
  const props = {
    signedIn: false,
  };

  const layout = shallow(<Layout {...props} />);

  expect(layout.find(Login).exists()).toBe(true);
});
