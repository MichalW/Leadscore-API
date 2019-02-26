import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Header} from 'semantic-ui-react';

import LoginForm from './LoginForm';

const Login = ({signInRequest}) => (
  <Grid columns={3} centered verticalAlign="middle" style={{minHeight: '100vh'}} className="background-blue">
    <Grid.Row>
      <Grid.Column>
        <Header as="h1">
          <strong>Lead</strong>
          score
        </Header>

        <LoginForm signInRequest={signInRequest} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

Login.propTypes = {
  signInRequest: PropTypes.func.isRequired,
};

export default Login;
