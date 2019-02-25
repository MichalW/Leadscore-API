import {connect} from 'react-redux';

import Layout from './Layout';

const mapStateToProps = state => ({
  signedIn: state.authentication.signedIn,
  username: state.authentication.user.username,
});

export default connect(mapStateToProps)(Layout);
