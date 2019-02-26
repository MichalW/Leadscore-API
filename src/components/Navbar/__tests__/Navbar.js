import React from 'react';
import renderer from 'react-test-renderer';

import Navbar from '../Navbar';

it('renders Navbar without crashing', () => {
  const tree = renderer
    .create(<Navbar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
