import {ActionsObservable} from 'redux-observable';
import {throwError} from 'rxjs';

import * as epics from '../index';
import * as types from '../../../constants/ActionTypes';

it('should get SIGN_OUT_SUCCESS from signOutRequest', (done) => {
  const state$ = {
    value: {
      authentication: {
        token: {
          authToken: 'ExampleToken',
        },
      },
    },
  };

  const ajax = () => ActionsObservable.of({});

  const action$ = ActionsObservable.of({
    type: types.SIGN_OUT_REQUEST,
  });

  const expectedOutput = {
    type: types.SIGN_OUT_SUCCESS,
  };

  epics.signOutRequest(action$, state$, {ajax}).subscribe(
    (responseAction) => {
      expect(expectedOutput).toMatchObject(responseAction);
      done();
    },
  );
});

it('should get SIGN_OUT_ERROR from signOutRequest', (done) => {
  const state$ = {
    value: {
      authentication: {
        token: {
          authToken: 'ExampleToken',
        },
      },
    },
  };

  const ajax = () => throwError({status: 403});

  const action$ = ActionsObservable.of({
    type: types.SIGN_OUT_REQUEST,
  });

  const expectedOutput = {
    type: types.SIGN_OUT_ERROR,
    payload: {
      error: {
        status: 403,
      },
    },
  };

  epics.signOutRequest(action$, state$, {ajax}).subscribe(
    (responseAction) => {
      expect(expectedOutput).toMatchObject(responseAction);
      done();
    },
  );
});
