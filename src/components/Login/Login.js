import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'semantic-ui-react';

import LoginForm from './LoginForm';

const Login = ({signInRequest}) => (
  <Grid columns={3} centered>
    <Grid.Row>
      <Grid.Column>
        <LoginForm signInRequest={signInRequest} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

Login.propTypes = {
  signInRequest: PropTypes.func.isRequired,
};

export default Login;
