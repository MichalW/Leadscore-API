import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

import ContactsHeader from '../components/ContactsHeader';

it('should render ContactsHeader', () => {
  const props = {
    text: 'Example text',
  };

  const contactsHeader = shallow(<ContactsHeader {...props} />);

  expect(toJson(contactsHeader)).toMatchSnapshot();
});
