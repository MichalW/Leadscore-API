import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

import Contacts from '../Contacts';
import ContactsHeader from '../ContactsHeader'

it('should render Contacts', () => {
  const props = {
    contactsData: [],
    contactsFetchRequest: () => {},
    match: {
      params: {
        page: 1,
      },
    },
  };

  const contacts = shallow(<Contacts {...props} />);

  expect(contacts.find(ContactsHeader).exists()).toBe(true);
  expect(toJson(contacts)).toMatchSnapshot();
});
