import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

import ContactsItem from '../ContactsItem';

it('should render ContactsItem', () => {
  const props = {
    contact: {
      firstName: 'Example1',
      lastName: 'Example2',
      emails: [{email: 'example@example.com'}],
      created: 1551264525648,
      profilePicture: null,
    },
  };

  const contactsItem = shallow(<ContactsItem {...props} />);

  expect(toJson(contactsItem)).toMatchSnapshot();
});
