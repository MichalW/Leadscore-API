import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Contacts from './Contacts';
import {signOutRequest} from '../../actions/authentication';

const mapDispatchToProps = (dispatch) => ({
  signOutRequest: bindActionCreators(signOutRequest, dispatch),
});

export default connect(null, mapDispatchToProps)(Contacts);
