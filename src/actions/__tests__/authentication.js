import * as actions from '../authentication';
import * as types from '../../constants/ActionTypes';

it('should create signInRequest action', () => {
  const expectedAction = {
    type: types.SIGN_IN_REQUEST,
    payload: {
      username: 'Username1',
      password: 'Password1'
    },
  };

  const responseAction = actions.signInRequest('Username1', 'Password1');

  expect(expectedAction).toMatchObject(responseAction);
});

it('should create signInSuccess action', () => {
  const expectedAction = {
    type: types.SIGN_IN_SUCCESS,
    payload: {
      token: 'token1',
      user: {
        username: 'Username1',
      },
    },
  };

  const responseAction = actions.signInSuccess('token1', {username: 'Username1'});

  expect(expectedAction).toMatchObject(responseAction);
});


it('should create signInError action', () => {
  const expectedAction = {
    type: types.SIGN_IN_ERROR,
    payload: {
      error: '404',
    },
  };

  const responseAction = actions.signInError('404');

  expect(expectedAction).toMatchObject(responseAction);
});
