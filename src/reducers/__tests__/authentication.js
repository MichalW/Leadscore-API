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
    token: {},
    user: {},
    error: true,
    loading: true,
  };

  const responseState = reducer(initialState, action);

  const expectedState = {
    signedIn: true,
    token: 'exampleToken',
    user: {
      username: 'exampleUsername',
    },
    error: false,
    loading: false,
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
    error: false,
    loading: false,
  };

  const responseState = reducer(initialState, action);

  const expectedState = {
    signedIn: false,
    token: {},
    user: {},
    error: false,
    loading: false,
  };

  expect(expectedState).toMatchObject(responseState);
});
