import {connect} from 'react-redux';

import App from './App';

const mapStateToProps = (state) => ({
  signedIn: state.authentication.signedIn,
});

export default connect(mapStateToProps)(App);
