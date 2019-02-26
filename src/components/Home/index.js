import {connect} from 'react-redux';

import Home from './Home';

const mapStateToProps = state => ({
  username: state.authentication.user.username,
});

export default connect(mapStateToProps)(Home);
