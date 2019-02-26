import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

import Home from '../Home';
import Layout from '../../Layout';

it('should render Home', () => {
  const props = {
    username: 'ExampleUsername',
  };

  const home = shallow(<Home {...props} />);

  expect(home.find(Layout).exists()).toBe(true);
  expect(toJson(home)).toMatchSnapshot();
});
