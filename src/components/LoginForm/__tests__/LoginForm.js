import React from 'react';
import renderer from 'react-test-renderer';

import LoginForm from '../LoginForm';

it('renders LoginForm without crashing', () => {
  const tree = renderer
    .create(<LoginForm signInRequest={() => {}} loading={false} error={false} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders LoginForm with error', () => {
  const tree = renderer
    .create(<LoginForm signInRequest={() => {}} loading={false} error />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders LoginForm with loading', () => {
  const tree = renderer
    .create(<LoginForm signInRequest={() => {}} loading error={false} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
