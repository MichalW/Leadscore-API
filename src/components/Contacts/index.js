import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Contacts from './Contacts';
import {contactsFetchRequest} from '../../actions/contacts';

const mapStateToProps = state => ({
  contactsData: state.contacts.data,
  contactsCount: state.contacts.count,
});

const mapDispatchToProps = dispatch => ({
  contactsFetchRequest: bindActionCreators(contactsFetchRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
