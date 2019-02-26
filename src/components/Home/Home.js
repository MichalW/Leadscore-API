import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../Layout';

const Home = ({username}) => (
  <Layout>
    <div>
      {`Signed in as ${username}`}
    </div>
  </Layout>
);

Home.defaultProps = {
  username: '',
};

Home.propTypes = {
  username: PropTypes.string,
};

export default Home;
