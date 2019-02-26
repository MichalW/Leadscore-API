import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Navbar from './Navbar';
import {signOutRequest} from '../../actions/authentication';

const mapStateToProps = state => ({
  signedIn: state.authentication.signedIn,
});

const mapDispatchToProps = dispatch => ({
  signOutRequest: bindActionCreators(signOutRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
