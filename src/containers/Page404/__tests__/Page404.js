import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

import Page404 from '../Page404';
import Layout from '../../../components/Layout';

it('should render Page404', () => {
  const page404 = shallow(<Page404 />);

  expect(page404.find(Layout).exists()).toBe(true);
  expect(toJson(page404)).toMatchSnapshot();
});
