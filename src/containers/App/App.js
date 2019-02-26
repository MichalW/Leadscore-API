import PropTypes from 'prop-types';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from '../../components/Login';
import Home from '../../components/Home';

const App = ({signedIn}) => {
  if (!signedIn) {
    return (<Login />);
  }

  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
};

App.propTypes = {
  signedIn: PropTypes.bool.isRequired,
};

export default App;
