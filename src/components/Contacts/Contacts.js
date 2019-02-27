import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  Header, Segment, Table, Icon,
} from 'semantic-ui-react';
import isEqual from 'lodash/isEqual';

import ContactsHeader from './ContactsHeader';
import ContactsItem from './ContactsItem';
import ContactsPagination from './ContactsPagination';
import Layout from '../Layout';
import {DEFAULT_CONTACTS_LIMIT} from '../../config';

class Contacts extends Component {
  componentDidMount() {
    this.contactsFetch();
  }

  componentDidUpdate({match: {params: prevParams}}) {
    const {match: {params}} = this.props;

    if (!isEqual(params, prevParams)) {
      this.contactsFetch();
    }
  }

  contactsFetch = () => {
    const {contactsFetchRequest, match: {params}} = this.props;

    const offset = DEFAULT_CONTACTS_LIMIT * (params.page - 1);

    contactsFetchRequest(offset, DEFAULT_CONTACTS_LIMIT);
  };

  render() {
    const {contactsData} = this.props;

    return (
      <Layout>
        <Segment>
          <Header as="h2">
            <Icon name="users" />
            <Header.Content>
              Contacts
              <Header.Subheader>Manage your contacts</Header.Subheader>
            </Header.Content>
          </Header>

          <Table celled selectable>
            <ContactsHeader />

            <Table.Body>
              {contactsData.map(contact => (
                <ContactsItem contact={contact} key={contact.id} />
              ))}
            </Table.Body>
          </Table>

          <ContactsPagination />
        </Segment>
      </Layout>
    );
  }
}


Contacts.propTypes = {
  contactsData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  contactsFetchRequest: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
};

export default Contacts;
