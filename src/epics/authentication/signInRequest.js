import {catchError, map, mergeMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {of} from 'rxjs';

import {API_URL} from '../../config';
import {SIGN_IN_REQUEST} from '../../constants/ActionTypes';
import {signInError, signInSuccess} from '../../actions/authentication';

const signInRequest = (action$, state$, {ajax}) => action$.pipe(
  ofType(SIGN_IN_REQUEST),
  mergeMap(({payload: {username, password}}) => ajax({
    url: `${API_URL}/login`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).pipe(
    map(({response: {token, user}}) => signInSuccess(token, user)),
    catchError(error => of(signInError(error))),
  )),
);

export default signInRequest;
