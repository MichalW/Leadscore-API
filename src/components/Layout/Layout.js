import PropTypes from 'prop-types';
import React from 'react';
import {Container, Grid, Header} from 'semantic-ui-react';

import Navbar from '../Navbar';

const Layout = ({children}) => (
  <Container>
    <Navbar />

    <Header as="h2">
      Welcome to Leadscore
    </Header>

    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          {children}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
