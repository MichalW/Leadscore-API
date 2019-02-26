import PropTypes from 'prop-types';
import React from 'react';
import {Container, Menu} from 'semantic-ui-react';

const Navbar = ({signOutRequest}) => (
  <Menu size="huge" fixed="top">
    <Container>
      <Menu.Item name="home" onClick={() => {}} />

      <Menu.Menu position="right">
        <Menu.Item name="logout" onClick={signOutRequest} />
      </Menu.Menu>
    </Container>
  </Menu>
);

Navbar.propTypes = {
  signOutRequest: PropTypes.func.isRequired,
};

export default Navbar;
