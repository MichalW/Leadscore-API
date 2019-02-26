import {SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_ERROR} from '../constants/ActionTypes';

export const signInRequest = (username, password) => ({
  type: SIGN_IN_REQUEST,
  payload: {
    username,
    password,
  },
});

export const signInSuccess = (token, user) => ({
  type: SIGN_IN_SUCCESS,
  payload: {
    token,
    user,
  },
});

export const signInError = error => ({
  type: SIGN_IN_ERROR,
  payload: {
    error,
  },
});
