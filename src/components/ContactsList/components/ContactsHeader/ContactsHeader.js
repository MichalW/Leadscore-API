import React, {PureComponent} from 'react';
import {Table} from 'semantic-ui-react';

import {
  ASC, ASCENDING, DESC, DESCENDING,
} from '../../../../constants/ActionTypes';
import {DEFAULT_CONTACTS_SORT, DEFAULT_CONTACTS_SORT_DIRECTION} from '../../../../config';
import {historyType, matchType} from '../../../../constants/PropTypes';

const tableDirectionMap = {
  ASC: ASCENDING,
  DESC: DESCENDING,
};

class ContactsHeader extends PureComponent {
  constructor(props) {
    super(props);
    const {match: {params: {column, direction}}} = props;

    this.state = {
      column: column || DEFAULT_CONTACTS_SORT,
      direction: direction || DEFAULT_CONTACTS_SORT_DIRECTION,
    };
  }

  handleSort = clickedColumn => () => {
    const {column, direction} = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        direction: ASC,
      }, this.historyPush);
    } else {
      this.setState({
        direction: direction === ASC ? DESC : ASC,
      }, this.historyPush);
    }
  };

  historyPush() {
    const {history} = this.props;
    const {column, direction} = this.state;

    history.push(`/contacts/1/${column}/${direction}`);
  }

  render() {
    const {column, direction} = this.state;

    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center" style={{width: '50px'}}>
            Avatar
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'firstName' ? tableDirectionMap[direction] : null}
            onClick={this.handleSort('firstName')}
          >
            First name
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'lastName' ? tableDirectionMap[direction] : null}
            onClick={this.handleSort('lastName')}
          >
            Last name
          </Table.HeaderCell>
          <Table.HeaderCell>
            Email
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'created' ? tableDirectionMap[direction] : null}
            onClick={this.handleSort('created')}
          >
            Created At
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    );
  }
}

ContactsHeader.propTypes = {
  history: historyType.isRequired,
  match: matchType.isRequired,
};

export default ContactsHeader;
