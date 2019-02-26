import PropTypes from 'prop-types';
import React from 'react';
import {Menu} from 'semantic-ui-react';

const Navbar = ({signedIn, signOutRequest}) => (
  <Menu size="large">
    <Menu.Item name="home" onClick={() => {}} />

    {signedIn ? (
      <Menu.Item name="logout" onClick={signOutRequest} />
    ) : (
      <Menu.Item name="login" onClick={() => {}} />
    )}
  </Menu>
);

Navbar.propTypes = {
  signOutRequest: PropTypes.func.isRequired,
  signedIn: PropTypes.bool.isRequired,
};

export default Navbar;
