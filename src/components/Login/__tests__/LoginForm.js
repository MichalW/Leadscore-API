import React from 'react';
import renderer from 'react-test-renderer';

import LoginForm from '../LoginForm';

it('renders LoginForm without crashing', () => {
  const tree = renderer
    .create(<LoginForm signInRequest={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
