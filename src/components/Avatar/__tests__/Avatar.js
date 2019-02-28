import React from 'react';
import toJson from 'enzyme-to-json';
import {Image} from 'semantic-ui-react';
import {shallow} from 'enzyme';

import Avatar from '../Avatar';

it('should render Avatar with url', () => {
  const props = {
    url: 'https://example.com/avatar.png',
  };

  const avatar = shallow(<Avatar {...props} />);

  expect(avatar.find(Image).exists()).toBe(true);
  expect(toJson(avatar)).toMatchSnapshot();
});


it('should render Avatar without url', () => {
  const props = {
    firstName: 'Example',
    lastName: 'User',
  };

  const avatar = shallow(<Avatar {...props} />);

  expect(avatar.find(Image).exists()).toBe(false);
  expect(toJson(avatar)).toMatchSnapshot();
});
