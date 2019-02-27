import {connect} from 'react-redux';

import Contacts from './Contacts';

const mapStateToProps = state => ({
  username: state.authentication.user.username,
});

export default connect(mapStateToProps)(Contacts);
