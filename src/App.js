import React from 'react';
import {Container} from 'semantic-ui-react';
import {Provider} from 'react-redux';

import configureStore from './store';
import './App.css';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Container>
        Welcome to LeadScore
      </Container>
    </div>
  </Provider>
);

export default App;
