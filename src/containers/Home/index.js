import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Home from './Home';
import {signOutRequest} from '../../actions/authentication';

const mapStateToProps = (state) => ({
  username: state.authentication.user.username,
});

const mapDispatchToProps = (dispatch) => ({
  signOutRequest: bindActionCreators(signOutRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
