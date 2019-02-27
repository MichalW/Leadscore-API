import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

import Login from '../Login';
import LoginForm from '../../../components/LoginForm';

it('renders Login without crashing', () => {
  const props = {
    username: 'ExampleUsername',
  };

  const login = shallow(<Login {...props} />);

  expect(login.find(LoginForm).exists()).toBe(true);
  expect(toJson(login)).toMatchSnapshot();
});
