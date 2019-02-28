import reducer from '../authentication';
import * as types from '../../constants/ActionTypes';

it('authentication reducer should handle SIGN_IN_REQUEST', () => {
  const initialState = {
    signedIn: false,
    token: {},
    user: {},
    error: true,
    loading: false,
  };

  const expectedState = {
    signedIn: false,
    token: {},
    user: {},
    error: false,
    loading: true,
  };

  const action = {
    type: types.SIGN_IN_REQUEST,
    payload: {},
  };

  const responseState = reducer(initialState, action);

  expect(expectedState).toMatchObject(responseState);
});

it('authentication reducer should handle SIGN_IN_SUCCESS', () => {
  const initialState = {
    signedIn: false,
    token: {},
    user: {},
    error: true,
    loading: true,
  };

  const expectedState = {
    signedIn: true,
    token: 'exampleToken',
    user: {
      username: 'exampleUsername',
    },
    error: false,
    loading: false,
  };

  const action = {
    type: types.SIGN_IN_SUCCESS,
    payload: {
      token: 'exampleToken',
      user: {
        username: 'exampleUsername',
      },
    },
  };

  const responseState = reducer(initialState, action);

  expect(expectedState).toMatchObject(responseState);
});

it('authentication reducer should handle SIGN_IN_ERROR', () => {
  const initialState = {
    signedIn: false,
    token: {},
    user: {},
    error: false,
    loading: true,
  };

  const expectedState = {
    signedIn: false,
    token: {},
    user: {},
    error: true,
    loading: false,
  };

  const action = {
    type: types.SIGN_IN_ERROR,
    payload: {},
  };

  const responseState = reducer(initialState, action);

  expect(expectedState).toMatchObject(responseState);
});

it('authentication reducer should handle SIGN_OUT_SUCCESS', () => {
  const initialState = {
    signedIn: true,
    token: 'Token123',
    user: {
      username: 'ExampleUsername',
    },
    error: false,
    loading: false,
  };

  const expectedState = {
    signedIn: false,
    token: {},
    user: {},
    error: false,
    loading: false,
  };

  const action = {
    type: types.SIGN_OUT_SUCCESS,
  };

  const responseState = reducer(initialState, action);

  expect(expectedState).toMatchObject(responseState);
});

it('authentication reducer should handle SIGN_OUT_ERROR', () => {
  const initialState = {
    signedIn: true,
    token: 'Token123',
    user: {
      username: 'ExampleUsername',
    },
    error: false,
    loading: false,
  };

  const expectedState = {
    signedIn: false,
    token: {},
    user: {},
    error: false,
    loading: false,
  };

  const action = {
    type: types.SIGN_OUT_ERROR,
  };

  const responseState = reducer(initialState, action);

  expect(expectedState).toMatchObject(responseState);
});

it('authentication reducer should handle other actions', () => {
  const initialState = {
    offset: 1,
    count: 2,
    data: [],
    error: true,
    loading: true,
  };

  const action = {
    type: 'EXAMPLE',
    payload: {},
  };

  const responseState = reducer(initialState, action);

  expect(initialState).toMatchObject(responseState);
});
