import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

import ContactsHeader from '../ContactsHeader';
import {DESC} from '../../../../../constants/ActionTypes';

it('should render ContactsHeader', () => {
  const props = {
    history: {
      push: () => {},
    },
    match: {
      params: {
        column: 10,
        direction: DESC,
      },
    },
  };

  const contactsHeader = shallow(<ContactsHeader {...props} />);

  expect(toJson(contactsHeader)).toMatchSnapshot();
});
