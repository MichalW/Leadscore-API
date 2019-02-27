import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import ContactsPagination from './ContactsPagination';

const mapStateToProps = state => ({
  contactsCount: state.contacts.count,
});

export default withRouter(connect(mapStateToProps)(ContactsPagination));
