import reducer from '../authentication';
import * as types from '../../constants/ActionTypes';

it('authentication reducer', () => {
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
