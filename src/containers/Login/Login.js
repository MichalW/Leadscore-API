import React from 'react';
import {Grid, Header} from 'semantic-ui-react';

import LoginForm from '../../components/LoginForm';
import styles from './Login.module.scss';

const Login = () => (
  <Grid
    centered
    className={styles.wrapper}
    columns={3}
    style={{minHeight: '100vh'}}
    verticalAlign="middle"
  >
    <Grid.Row>
      <Grid.Column>
        <Header as="h1">
          <strong>Lead</strong>
          score
        </Header>

        <LoginForm />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Login;
