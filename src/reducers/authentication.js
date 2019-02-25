import {SIGN_IN_SUCCESS} from '../constants/ActionTypes';

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
    default:
      return state;
  }
};

export default authentication;
