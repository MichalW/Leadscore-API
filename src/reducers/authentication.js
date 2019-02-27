import {
  SIGN_IN_ERROR,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT_ERROR,
  SIGN_OUT_SUCCESS,
} from '../constants/ActionTypes';

const initialState = {
  signedIn: false,
  token: {},
  user: {},
  error: false,
  loading: false,
};

const authentication = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signedIn: true,
        token: payload.token,
        user: payload.user,
        error: false,
        loading: false,
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case SIGN_OUT_ERROR:
    case SIGN_OUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default authentication;
