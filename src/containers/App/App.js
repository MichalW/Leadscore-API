import PropTypes from 'prop-types';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from '../../components/Login';
import Home from '../../components/Home';
import Contacts from '../../components/Contacts';
import Page404 from '../../components/Page404';

const App = ({signedIn}) => {
  if (!signedIn) {
    return (<Login />);
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacts" component={Contacts} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  signedIn: PropTypes.bool.isRequired,
};

export default App;
