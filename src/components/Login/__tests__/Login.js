import React from 'react';
import renderer from 'react-test-renderer';

import Login from '../Login';

it('renders Login without crashing', () => {
  const tree = renderer
    .create(<Login signInRequest={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
