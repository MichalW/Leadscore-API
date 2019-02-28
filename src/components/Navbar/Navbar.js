import PropTypes from 'prop-types';
import React from 'react';
import {Container, Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const Navbar = ({onSignOut}) => (
  <Menu size="huge" fixed="top">
    <Container>
      <Menu.Item name="home" to="/" as={Link} icon="home" />
      <Menu.Item name="contacts" to="/contacts" as={Link} icon="users" />

      <Menu.Menu position="right">
        <Menu.Item name="logout" onClick={onSignOut} icon="sign-out" />
      </Menu.Menu>
    </Container>
  </Menu>
);

Navbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
};

export default Navbar;
