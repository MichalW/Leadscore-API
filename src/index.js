import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {store, persistor} from './utils/configureStore';

const elementRoot = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  elementRoot,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
