import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme/build';

import Navbar from '../Navbar';

it('renders Navbar without crashing', () => {
  const props = {
    onSignOut: () => {},
  };

  const navbar = shallow(<Navbar {...props} />);

  expect(toJson(navbar)).toMatchSnapshot();
});
