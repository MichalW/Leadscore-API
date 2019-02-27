import {ajax} from 'rxjs/ajax';
import {combineEpics} from 'redux-observable';

import {signInRequest, signOutRequest} from './authentication';
import {contactsFetchRequest} from './contacts';

const rootEpic = (...args) => combineEpics(
  contactsFetchRequest,
  signInRequest,
  signOutRequest,
)(...args, {ajax});

export default rootEpic;
