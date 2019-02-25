import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Login from './Login';
import {signInRequest} from '../../actions/authentication';

const mapDispatchToProps = dispatch => ({
  signInRequest: bindActionCreators(signInRequest, dispatch),
});

export default connect(null, mapDispatchToProps)(Login);
