import {combineReducers} from 'redux';

import authentication from './authentication';
import contacts from './contacts';

const rootReducer = combineReducers({
  authentication,
  contacts,
});

export default rootReducer;
