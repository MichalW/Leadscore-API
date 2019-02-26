import * as types from '../constants/ActionTypes';

export const signInRequest = (username, password) => ({
  type: types.SIGN_IN_REQUEST,
  payload: {
    username,
    password,
  },
});

export const signInSuccess = (token, user) => ({
  type: types.SIGN_IN_SUCCESS,
  payload: {
    token,
    user,
  },
});

export const signInError = error => ({
  type: types.SIGN_IN_ERROR,
  payload: {
    error,
  },
});

export const signOutRequest = () => ({
  type: types.SIGN_OUT_REQUEST,
});

export const signOutSuccess = () => ({
  type: types.SIGN_OUT_SUCCESS,
});

export const signOutError = error => ({
  type: types.SIGN_OUT_ERROR,
  payload: {
    error,
  },
});
