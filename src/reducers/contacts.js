import {CONTACTS_FETCH_ERROR, CONTACTS_FETCH_SUCCESS} from '../constants/ActionTypes';

const initialState = {
  offset: 0,
  count: 0,
  data: [],
  error: false,
};

const contacts = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case CONTACTS_FETCH_SUCCESS:
      return {
        ...state,
        offset: payload.offset,
        count: payload.count,
        data: payload.data,
      };
    case CONTACTS_FETCH_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default contacts;
