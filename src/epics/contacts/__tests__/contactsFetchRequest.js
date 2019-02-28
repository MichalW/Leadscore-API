import {ActionsObservable} from 'redux-observable';

import * as epics from '../index';
import * as types from '../../../constants/ActionTypes';

it('should get CONTACTS_FETCH_SUCCESS from contactsFetchRequest', (done) => {
  const state$ = {
    value: {authentication: {token: {authToken: 'ExampleToken'}}},
  };

  const response = {
    offset: 10,
    limit: 10,
    count: 25,
    data: [],
  };

  const ajax = () => ActionsObservable.of({response});

  const action$ = ActionsObservable.of({
    type: types.CONTACTS_FETCH_REQUEST,
    payload: {
      offset: 10,
      limit: 10,
      sort: 'firstName',
      sortDirection: 'DESC',
    },
  });

  const expectedOutput = {
    type: types.CONTACTS_FETCH_SUCCESS,
    payload: response,
  };

  epics.contactsFetchRequest(action$, state$, {ajax}).subscribe(
    (responseAction) => {
      expect(expectedOutput).toMatchObject(responseAction);
      done();
    },
  );
});
