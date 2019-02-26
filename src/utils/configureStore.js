import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import {applyMiddleware, compose, createStore} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {persistStore, persistReducer} from 'redux-persist';

import rootEpic from '../epics';
import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

// Support for Chrome Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware),
  ),
);
const persistor = persistStore(store);

epicMiddleware.run(rootEpic);

export {store, persistor};
