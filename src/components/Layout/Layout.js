import PropTypes from 'prop-types';
import React from 'react';
import {Container, Grid} from 'semantic-ui-react';

import Navbar from '../Navbar';

const Layout = ({children}) => (
  <Container>
    <Navbar />

    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Container>
            {children}
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
