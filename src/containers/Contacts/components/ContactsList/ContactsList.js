import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import isEqual from 'lodash/isEqual';
import {Loader, Dimmer, Table} from 'semantic-ui-react';

import ContactsFooter from '../ContactsFooter';
import ContactsHeader from '../ContactsHeader';
import ContactsItem from '../ContactsItem';
import ContactsPagination from '../ContactsPagination';
import {DEFAULT_CONTACTS_LIMIT} from '../../../../config';
import {matchType} from '../../../../constants/PropTypes';

const scrollTop = () => {
  window.scrollTo(0, 0);
};

class ContactsList extends PureComponent {
  componentDidMount() {
    this.contactsFetch();
  }

  componentDidUpdate({match: {params: prevParams}}) {
    const {match: {params}} = this.props;

    if (!isEqual(params, prevParams)) {
      this.contactsFetch();
    }
  }

  contactsFetch() {
    const {contactsFetchRequest, match: {params: {page = 1, column, direction}}} = this.props;

    const offset = (page - 1) * DEFAULT_CONTACTS_LIMIT;

    contactsFetchRequest(offset, DEFAULT_CONTACTS_LIMIT, column, direction);
    scrollTop();
  }

  render() {
    const {contactsData, contactsCount, contactsLoading} = this.props;

    return (
      <section>
        {contactsLoading && (
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        )}

        <Table selectable sortable striped color="blue">
          <ContactsHeader />

          <Table.Body>
            {contactsData.map(contact => (
              <ContactsItem contact={contact} key={contact.id} />
            ))}
          </Table.Body>

          <ContactsFooter text={`${contactsData.length}/${contactsCount} contacts`} />
        </Table>

        <ContactsPagination />
      </section>
    );
  }
}


ContactsList.propTypes = {
  contactsCount: PropTypes.number.isRequired,
  contactsData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  contactsFetchRequest: PropTypes.func.isRequired,
  contactsLoading: PropTypes.bool.isRequired,
  match: matchType.isRequired,
};

export default ContactsList;
