import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash/get';
import {Table} from 'semantic-ui-react';
import moment from 'moment';

const ContactsItem = ({contact}) => (
  <Table.Row>
    <Table.Cell>{contact.firstName}</Table.Cell>
    <Table.Cell>{contact.lastName}</Table.Cell>
    <Table.Cell>{get(contact, ['emails', 0, 'email'])}</Table.Cell>
    <Table.Cell>{moment(contact.created).format('llll')}</Table.Cell>
  </Table.Row>
);

ContactsItem.propTypes = {
  contact: PropTypes.shape({}).isRequired,
};

export default ContactsItem;
