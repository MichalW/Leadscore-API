import PropTypes from 'prop-types';
import React from 'react';
import {Table} from 'semantic-ui-react';

const ContactsHeader = ({text}) => (
  <Table.Footer>
    <Table.Row>
      <Table.HeaderCell />
      <Table.HeaderCell />
      <Table.HeaderCell />
      <Table.HeaderCell />
      <Table.HeaderCell textAlign="right">
        {text}
      </Table.HeaderCell>
    </Table.Row>
  </Table.Footer>
);

ContactsHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ContactsHeader;
