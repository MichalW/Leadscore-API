import PropTypes from 'prop-types';
import React from 'react';
import {Segment} from 'semantic-ui-react';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import styles from './Home.module.scss';

const Home = ({username, signOutRequest}) => (
  <Layout onSignOut={signOutRequest}>
    <Segment className={styles.wrapper}>
      <Header title="Home" icon="home" />

      <p>
        {'Hello '}
        <strong>{username}</strong>
      </p>
    </Segment>
  </Layout>
);

Home.defaultProps = {
  username: '',
};

Home.propTypes = {
  signOutRequest: PropTypes.func.isRequired,
  username: PropTypes.string,
};

export default Home;
