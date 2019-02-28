import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

import Header from '../Header';

it('should render Header with title', () => {
  const props = {
    title: 'Example title',
  };

  const header = shallow(<Header {...props} />);

  expect(toJson(header)).toMatchSnapshot();
});

it('should render Header with subtitle', () => {
  const props = {
    title: 'Example title',
    subtitle: 'Example subtitle',
  };

  const header = shallow(<Header {...props} />);

  expect(toJson(header)).toMatchSnapshot();
});

it('should render Header with icon', () => {
  const props = {
    title: 'Example title',
    subtitle: 'Example subtitle',
    icon: 'home',
  };

  const header = shallow(<Header {...props} />);

  expect(toJson(header)).toMatchSnapshot();
});
