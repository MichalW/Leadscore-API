import {ActionsObservable} from 'redux-observable';

import * as epics from '../authentication';
import * as types from '../../constants/ActionTypes';

it('should get SIGN_IN_SUCCESS from signInRequest', () => {
  const response = {
    token: 'ExampleToken',
    user: {
      username: 'ExampleUsername',
    },
  };

  const ajax = () => ActionsObservable.of({response});

  const action$ = ActionsObservable.of({
    type: types.SIGN_IN_REQUEST,
    payload: {
      username: 'ExampleUsername',
      password: 'ExamplePassword'
    },
  });

  const expectedOutput = {
    type: types.SIGN_IN_SUCCESS,
    payload: {
      token: response.token,
      user: response.user,
    },
  };

  epics.signInRequestEpic(action$, null, {ajax}).subscribe(
    (responseAction) => {
      expect(expectedOutput).toMatchObject(responseAction)
    }
  );
});
