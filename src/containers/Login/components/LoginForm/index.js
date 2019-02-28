import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import LoginForm from './LoginForm';
import {signInRequest} from '../../../../actions/authentication';

const mapStateToProps = ({authentication: {error, loading}}) => ({
  error,
  loading,
});

const mapDispatchToProps = dispatch => ({
  signInRequest: bindActionCreators(signInRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
