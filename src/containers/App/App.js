import PropTypes from 'prop-types';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Contacts from '../Contacts';
import Home from '../Home';
import Login from '../Login';
import Page404 from '../Page404';

const App = ({signedIn}) => (
  signedIn ? (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacts/:page?/:column?/:direction?" component={Contacts} />
        <Route component={Page404} />
      </Switch>
    </Router>
  ) : (
    <Login />
  )
);

App.propTypes = {
  signedIn: PropTypes.bool.isRequired,
};

export default App;
