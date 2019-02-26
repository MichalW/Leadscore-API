import {ajax} from 'rxjs/ajax';
import {combineEpics} from 'redux-observable';

import {signInRequest, signOutRequest} from './authentication';

const rootEpic = (...args) => combineEpics(
  signInRequest,
  signOutRequest,
)(...args, {ajax});

export default rootEpic;
