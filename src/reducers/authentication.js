import {SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS, SIGN_OUT_ERROR} from '../constants/ActionTypes';

const initialState = {
  signedIn: false,
  token: {},
  user: {},
};

const authentication = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signedIn: true,
        token: payload.token,
        user: payload.user,
      };
    case SIGN_OUT_ERROR:
    case SIGN_OUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default authentication;
