import PropTypes from 'prop-types';
import React from 'react';
import {Header, Icon, Segment} from 'semantic-ui-react';

import Layout from '../Layout';

const Home = ({username}) => (
  <Layout>
    <Segment>
      <Header as="h2">
        <Icon name="home" />
        <Header.Content>
          Home
        </Header.Content>
      </Header>

      <p>
        {`Signed in as ${username}`}
      </p>
    </Segment>
  </Layout>
);

Home.defaultProps = {
  username: '',
};

Home.propTypes = {
  username: PropTypes.string,
};

export default Home;
