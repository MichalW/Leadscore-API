import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import {Provider} from 'react-redux';

import configureStore from './store'
import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Container>
            Welcome to LeadScore
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
