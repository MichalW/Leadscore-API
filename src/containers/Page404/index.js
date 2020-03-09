import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Page404 from './Page404';
import {signOutRequest} from '../../actions/authentication';

const mapDispatchToProps = (dispatch) => ({
  signOutRequest: bindActionCreators(signOutRequest, dispatch),
});

export default connect(null, mapDispatchToProps)(Page404);
