import React from 'react';
import {Provider} from 'react-redux';

import './App.css';
import Layout from './components/Layout';
import configureStore from './store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Layout />
    </div>
  </Provider>
);

export default App;
