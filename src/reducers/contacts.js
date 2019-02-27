import {
  CONTACTS_FETCH_ERROR,
  CONTACTS_FETCH_REQUEST,
  CONTACTS_FETCH_SUCCESS,
  SIGN_OUT_ERROR,
  SIGN_OUT_SUCCESS,
} from '../constants/ActionTypes';

const initialState = {
  offset: 0,
  count: 0,
  data: [],
  error: false,
  loading: false,
};

const contacts = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case CONTACTS_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CONTACTS_FETCH_SUCCESS:
      return {
        ...state,
        offset: payload.offset,
        count: payload.count,
        data: payload.data,
        error: false,
        loading: false,
      };
    case CONTACTS_FETCH_ERROR:
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

export default contacts;
