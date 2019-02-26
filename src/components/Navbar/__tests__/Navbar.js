import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme/build';

import Navbar from '../Navbar';

it('renders Navbar without crashing', () => {
  const props = {
    signOutRequest: () => {},
  };

  const navbar = shallow(<Navbar {...props} />);

  expect(toJson(navbar)).toMatchSnapshot();
});
