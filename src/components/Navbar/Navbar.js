import PropTypes from 'prop-types';
import React from 'react';
import {Container, Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const Navbar = ({signOutRequest}) => (
  <Menu size="huge" fixed="top">
    <Container>
      <Menu.Item name="home" to="/" as={Link} icon="home" />
      <Menu.Item name="contacts" to="/contacts" as={Link} icon="users" />

      <Menu.Menu position="right">
        <Menu.Item name="logout" onClick={signOutRequest} icon="sign-out" />
      </Menu.Menu>
    </Container>
  </Menu>
);

Navbar.propTypes = {
  signOutRequest: PropTypes.func.isRequired,
};

export default Navbar;
