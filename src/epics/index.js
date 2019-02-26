import {ajax} from 'rxjs/ajax';
import {combineEpics} from 'redux-observable';
import {signInRequestEpic} from './authentication';

const rootEpic = (...args) => combineEpics(
  signInRequestEpic,
)(...args, {ajax});

export default rootEpic;
