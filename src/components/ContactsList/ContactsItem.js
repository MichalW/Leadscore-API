import React from 'react';
import get from 'lodash/get';
import {Table} from 'semantic-ui-react';
import moment from 'moment';

import {contactType} from '../../constants/PropTypes';
import Avatar from '../Avatar';

const ContactsItem = ({
  contact: {
    created, emails, firstName, lastName, profilePicture,
  },
}) => (
  <Table.Row>
    <Table.Cell>
      <Avatar url={profilePicture} firstName={firstName} lastName={lastName} />
    </Table.Cell>
    <Table.Cell>{firstName}</Table.Cell>
    <Table.Cell>{lastName}</Table.Cell>
    <Table.Cell>{get(emails, [0, 'email'])}</Table.Cell>
    <Table.Cell>{moment(created).utc().format('llll')}</Table.Cell>
  </Table.Row>
);

ContactsItem.defaultProps = {
  contact: {
    created: '',
    emails: [],
    firstName: '',
    lastName: '',
    profilePicture: null,
  },
};

ContactsItem.propTypes = {
  contact: contactType,
};

export default ContactsItem;
