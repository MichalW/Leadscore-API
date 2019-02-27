import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Container, Pagination} from 'semantic-ui-react';

import {DEFAULT_CONTACTS_LIMIT} from '../../../config';

class ContactsPagination extends Component {
  onPageChange = (event, {activePage}) => {
    const {history} = this.props;

    history.push(`/contacts/${activePage}`);
  };

  render() {
    const {contactsCount} = this.props;
    const totalPages = Math.ceil(contactsCount / DEFAULT_CONTACTS_LIMIT);

    return (
      <Container textAlign="center">
        <Pagination
          defaultActivePage={1}
          totalPages={totalPages}
          onPageChange={this.onPageChange}
        />
      </Container>
    );
  }
}

ContactsPagination.propTypes = {
  contactsCount: PropTypes.number.isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default ContactsPagination;
