import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import ContactsList from './ContactsList';
import {contactsFetchRequest} from '../../actions/contacts';

const mapStateToProps = state => ({
  contactsCount: state.contacts.count,
  contactsData: state.contacts.data,
  contactsLoading: state.contacts.loading,
});

const mapDispatchToProps = dispatch => ({
  contactsFetchRequest: bindActionCreators(contactsFetchRequest, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactsList));
