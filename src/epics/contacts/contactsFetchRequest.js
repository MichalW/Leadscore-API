import {catchError, map, mergeMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {of} from 'rxjs';

import {API_URL} from '../../config';
import {CONTACTS_FETCH_REQUEST} from '../../constants/ActionTypes';
import {contactsFetchError, contactsFetchSuccess} from '../../actions/contacts';

const generateUrl = ({
  offset, limit, sort, sortDirection,
}) => {
  const params = [
    `offset=${offset}`,
    `limit=${limit}`,
    `sort=${sort}`,
    `direction=${sortDirection}`,
  ].join('&');

  return `${API_URL}/contacts/filter?${params}`;
};

const contactsFetchRequest = (action$, state$, {ajax}) => action$.pipe(
  ofType(CONTACTS_FETCH_REQUEST),
  mergeMap(action => ajax({
    url: generateUrl(action.payload),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authToken: state$.value.authentication.token.authToken,
    },
    body: JSON.stringify({}),
  }).pipe(
    map(({
      response: {
        offset, limit, count, data,
      },
    }) => (
      contactsFetchSuccess(offset, limit, count, data)
    )),
    catchError(error => of(contactsFetchError(error))),
  )),
);

export default contactsFetchRequest;
