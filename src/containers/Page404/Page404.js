import PropTypes from 'prop-types';
import React from 'react';
import {Segment} from 'semantic-ui-react';

import Header from '../../components/Header';
import Layout from '../../components/Layout';

const Page404 = ({signOutRequest}) => (
  <Layout onSignOut={signOutRequest}>
    <Segment>
      <Header
        icon="times"
        subtitle="Page not found"
        title="404"
      />
    </Segment>
  </Layout>
);

Page404.propTypes = {
  signOutRequest: PropTypes.func.isRequired,
};

export default Page404;
