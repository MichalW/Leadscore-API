import {ajax} from 'rxjs/ajax';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {of} from 'rxjs';

import {API_URL} from '../config';
import {SIGN_IN_REQUEST} from '../constants/ActionTypes';
import {handleError} from '../actions/errorHandler';
import {signInSuccess} from '../actions/authentication';

const authenticationEpic = action$ => action$.pipe(
  ofType(SIGN_IN_REQUEST),
  mergeMap(action => ajax({
    url: `${API_URL}/login`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: action.payload.username,
      password: action.payload.password,
    }),
  }).pipe(
    map(({response: {token, user}}) => signInSuccess(token, user)),
    catchError(error => of(handleError(error))),
  )),
);

export default authenticationEpic;
