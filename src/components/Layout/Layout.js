import PropTypes from 'prop-types';
import React from 'react';
import {Container, Grid} from 'semantic-ui-react';

import Navbar from '../Navbar';
import Breadcrumb from '../Breadcrumb';

const Layout = ({children, onSignOut}) => (
  <Container>
    <Navbar onSignOut={onSignOut} />

    <Breadcrumb />

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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default Layout;
