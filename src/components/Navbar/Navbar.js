import PropTypes from 'prop-types';
import React from 'react';
import {Menu} from 'semantic-ui-react';

const Navbar = ({signOutRequest}) => (
  <Menu size="large">
    <Menu.Item name="home" onClick={() => {}} />

    <Menu.Menu position="right">
      <Menu.Item name="logout" onClick={signOutRequest} />
    </Menu.Menu>
  </Menu>
);

Navbar.propTypes = {
  signOutRequest: PropTypes.func.isRequired,
};

export default Navbar;
