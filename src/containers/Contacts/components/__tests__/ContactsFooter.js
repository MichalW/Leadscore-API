import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

import ContactsFooter from '../ContactsFooter';

it('should render ContactsFooter', () => {
  const props = {
    text: 'Example text',
  };

  const contactsFooter = shallow(<ContactsFooter {...props} />);

  expect(toJson(contactsFooter)).toMatchSnapshot();
});
