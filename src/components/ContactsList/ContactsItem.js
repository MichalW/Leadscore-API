import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash/get';
import {Table} from 'semantic-ui-react';
import moment from 'moment';

import Avatar from '../Avatar';

const ContactsItem = ({
  created, emails, firstName, lastName, profilePicture,
}) => (
  <Table.Row>
    <Table.Cell>
      <Avatar url={profilePicture} firstName={firstName} lastName={lastName} />
    </Table.Cell>
    <Table.Cell>{firstName}</Table.Cell>
    <Table.Cell>{lastName}</Table.Cell>
    <Table.Cell>{get(emails, [0, 'email'])}</Table.Cell>
    <Table.Cell>{moment(created).format('llll')}</Table.Cell>
  </Table.Row>
);

ContactsItem.defaultProps = {
  created: '',
  emails: [],
  firstName: '',
  lastName: '',
  profilePicture: null,
};

ContactsItem.propTypes = {
  created: PropTypes.number,
  emails: PropTypes.arrayOf(PropTypes.shape({})),
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  profilePicture: PropTypes.string,
};

export default ContactsItem;
