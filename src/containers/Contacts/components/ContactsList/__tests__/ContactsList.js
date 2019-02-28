import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

import ContactsList from '../ContactsList';
import ContactsHeader from '../../ContactsHeader';

it('should render Contacts', () => {
  window.scrollTo = () => {};

  const props = {
    contactsData: [],
    contactsCount: 30,
    contactsLoading: false,
    contactsFetchRequest: () => {},
    match: {
      params: {
        page: 1,
      },
    },
  };

  const contacts = shallow(<ContactsList {...props} />);

  expect(contacts.find(ContactsHeader).exists()).toBe(true);
  expect(toJson(contacts)).toMatchSnapshot();
});
