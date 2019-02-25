import PropTypes from 'prop-types';
import React from 'react';
import {Container, Header} from 'semantic-ui-react';

import Login from '../Login';
import Navbar from '../Navbar';

const Layout = ({signedIn, username}) => (
  <Container>
    <Navbar />

    <Header as="h2">
      Welcome to Leadscore
    </Header>

    {signedIn ? (
      <div>
        {`Signed in as ${username}`}
      </div>
    ) : (
      <Login />
    )}

  </Container>
);

Layout.defaultProps = {
  username: '',
};

Layout.propTypes = {
  signedIn: PropTypes.bool.isRequired,
  username: PropTypes.string,
};

export default Layout;
