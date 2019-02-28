import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

import ContactsHeader from '../ContactsHeader';

it('should render ContactsHeader', () => {
  const props = {
    text: 'Example text',
  };

  const contactsHeader = shallow(<ContactsHeader {...props} />);

  expect(toJson(contactsHeader)).toMatchSnapshot();
});
