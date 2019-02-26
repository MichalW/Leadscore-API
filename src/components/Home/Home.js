import PropTypes from 'prop-types';
import React from 'react';
import {Segment} from 'semantic-ui-react';

import Layout from '../Layout';

const Home = ({username}) => (
  <Layout>
    <Segment>
      {`Signed in as ${username}`}
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
