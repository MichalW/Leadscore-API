import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

import App from '../App';
import Login from '../../Login';

it('should render App signed out', () => {
  const props = {
    signedIn: false,
    username: 'ExampleUsername',
  };

  const layout = shallow(<App {...props} />);

  expect(layout.find(Login).exists()).toBe(true);
  expect(toJson(layout)).toMatchSnapshot();
});

it('should render App signed in', () => {
  const props = {
    signedIn: true,
    username: 'ExampleUsername',
  };

  const layout = shallow(<App {...props} />);

  expect(toJson(layout)).toMatchSnapshot();
});
