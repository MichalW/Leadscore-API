import React from 'react';
import {Container, Header} from 'semantic-ui-react';

import Login from '../Login';
import Navbar from '../Navbar';

const Layout = () => (
  <Container>
    <Navbar />

    <Header as="h2">
      Welcome to LeadScore
    </Header>

    <Login />
  </Container>
);

export default Layout;
