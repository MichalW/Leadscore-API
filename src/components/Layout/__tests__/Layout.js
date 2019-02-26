import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

import Layout from '../Layout';
import Navbar from '../../Navbar';

it('renders Layout', () => {
  const ExamplePage = () => (
    <div>Example text</div>
  );

  const layout = shallow(
    <Layout>
      <ExamplePage />
    </Layout>
  );

  expect(layout.find(Navbar).exists()).toBe(true);
  expect(layout.find(ExamplePage).exists()).toBe(true);
  expect(toJson(layout)).toMatchSnapshot();
});
