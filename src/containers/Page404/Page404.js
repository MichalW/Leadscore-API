import React from 'react';
import {Segment} from 'semantic-ui-react';

import Header from '../../components/Header';
import Layout from '../../components/Layout';

const Page404 = () => (
  <Layout>
    <Segment>
      <Header
        icon="times"
        subtitle="Page not found"
        title="404"
      />
    </Segment>
  </Layout>
);

export default Page404;
