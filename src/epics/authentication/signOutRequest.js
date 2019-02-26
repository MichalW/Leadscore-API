import {catchError, map, mergeMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {of} from 'rxjs';

import {API_URL} from '../../config';
import {SIGN_OUT_REQUEST} from '../../constants/ActionTypes';
import {signOutError, signOutSuccess} from '../../actions/authentication';

const signOutRequest = (action$, state$, {ajax}) => action$.pipe(
  ofType(SIGN_OUT_REQUEST),
  mergeMap(() => ajax({
    url: `${API_URL}/logout`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authToken: state$.value.authentication.token.authToken,
    },
    body: JSON.stringify({
      authToken: state$.value.authentication.token.authToken,
    }),
  }).pipe(
    map(signOutSuccess),
    catchError(error => of(signOutError(error))),
  )),
);

export default signOutRequest;
