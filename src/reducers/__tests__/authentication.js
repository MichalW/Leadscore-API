import reducer from '../authentication';
import * as types from '../../constants/ActionTypes';

it('authentication reducer should handle SIGN_IN_SUCCESS', () => {
  const action = {
    type: types.SIGN_IN_SUCCESS,
    payload: {
      token: 'exampleToken',
      user: {
        username: 'exampleUsername',
      },
    },
  };

  const initialState = {
    signedIn: false,
    token: '',
    user: {},
  };

  const responseState = reducer(initialState, action);

  const expectedState = {
    signedIn: true,
    token: 'exampleToken',
    user: {
      username: 'exampleUsername',
    },
  };

  expect(expectedState).toMatchObject(responseState);
});

it('authentication reducer should handle SIGN_OUT_SUCCESS', () => {
  const action = {
    type: types.SIGN_OUT_SUCCESS,
  };

  const initialState = {
    signedIn: true,
    token: 'Token123',
    user: {
      username: 'ExampleUsername',
    },
  };

  const responseState = reducer(initialState, action);

  const expectedState = {
    signedIn: false,
    token: {},
    user: {},
  };

  expect(expectedState).toMatchObject(responseState);
});
