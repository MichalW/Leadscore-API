import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {Container, Pagination} from 'semantic-ui-react';

import {DEFAULT_CONTACTS_LIMIT} from '../../../../config';
import {historyType} from '../../../../constants/PropTypes';

class ContactsPagination extends PureComponent {
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
  history: historyType.isRequired,
};

export default ContactsPagination;
