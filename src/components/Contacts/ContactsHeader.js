import React from 'react';
import {Table} from 'semantic-ui-react';

const ContactsHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>First name</Table.HeaderCell>
      <Table.HeaderCell>Last name</Table.HeaderCell>
      <Table.HeaderCell>Email</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

export default ContactsHeader;
