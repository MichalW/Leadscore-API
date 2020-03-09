import * as types from '../constants/ActionTypes';

import {DEFAULT_CONTACTS_LIMIT, DEFAULT_CONTACTS_SORT, DEFAULT_CONTACTS_SORT_DIRECTION} from '../config';

export const contactsFetchRequest = (
  offset = 0,
  limit = DEFAULT_CONTACTS_LIMIT,
  sort = DEFAULT_CONTACTS_SORT,
  sortDirection = DEFAULT_CONTACTS_SORT_DIRECTION,
) => ({
  type: types.CONTACTS_FETCH_REQUEST,
  payload: {
    offset,
    limit,
    sort,
    sortDirection,
  },
});

export const contactsFetchSuccess = (
  offset,
  limit,
  count,
  data,
) => ({
  type: types.CONTACTS_FETCH_SUCCESS,
  payload: {
    offset,
    limit,
    count,
    data,
  },
});

export const contactsFetchError = (error) => ({
  type: types.CONTACTS_FETCH_ERROR,
  payload: {
    error,
  },
});
