import React from 'react';
import renderer from 'react-test-renderer';

import Layout from '../Layout';

it('renders Layout signedIn without crashing', () => {
  const tree = renderer
    .create(<Layout signedIn username="ExampleUsername" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
