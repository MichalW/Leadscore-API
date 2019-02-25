import {combineEpics} from 'redux-observable';
import authenticationEpic from './authentication'

const rootEpic = combineEpics(
  authenticationEpic,
);

export default rootEpic;
