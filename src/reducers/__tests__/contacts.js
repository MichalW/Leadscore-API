import reducer from '../contacts';
import * as types from '../../constants/ActionTypes';

it('contacts reducer should handle CONTACTS_FETCH_REQUEST', () => {
  const expectedState = {
    offset: 0,
    count: 0,
    data: [],
    error: false,
    loading: true,
  };

  const action = {
    type: types.CONTACTS_FETCH_REQUEST,
    payload: {},
  };

  const responseState = reducer(null, action);

  expect(expectedState).toMatchObject(responseState);
});

it('contacts reducer should handle CONTACTS_FETCH_SUCCESS', () => {
  const initialState = {
    offset: 0,
    count: 0,
    data: [],
    error: false,
    loading: true,
  };

  const expectedState = {
    offset: 10,
    count: 20,
    data: [{id: 10}],
    error: false,
    loading: false,
  };

  const action = {
    type: types.CONTACTS_FETCH_SUCCESS,
    payload: {
      offset: 10,
      count: 20,
      data: [{id: 10}],
    },
  };

  const responseState = reducer(initialState, action);

  expect(expectedState).toMatchObject(responseState);
});

it('contacts reducer should handle CONTACTS_FETCH_ERROR', () => {
  const initialState = {
    offset: 0,
    count: 0,
    data: [],
    error: false,
    loading: true,
  };

  const expectedState = {
    offset: 0,
    count: 0,
    data: [],
    error: true,
    loading: false,
  };

  const action = {
    type: types.CONTACTS_FETCH_ERROR,
    payload: {},
  };

  const responseState = reducer(initialState, action);

  expect(expectedState).toMatchObject(responseState);
});

it('contacts reducer should handle SIGN_OUT_ERROR', () => {
  const initialState = {
    offset: 0,
    count: 0,
    data: [],
    error: false,
    loading: false,
  };

  const action = {
    type: types.SIGN_OUT_ERROR,
    payload: {},
  };

  const responseState = reducer(initialState, action);

  expect(initialState).toMatchObject(responseState);
});

it('contacts reducer should handle SIGN_OUT_SUCCESS', () => {
  const initialState = {
    offset: 0,
    count: 0,
    data: [],
    error: false,
    loading: false,
  };

  const action = {
    type: types.SIGN_OUT_SUCCESS,
    payload: {},
  };

  const responseState = reducer(initialState, action);

  expect(initialState).toMatchObject(responseState);
});

it('contacts reducer should handle other actions', () => {
  const initialState = {
    offset: 1,
    count: 2,
    data: [],
    error: true,
    loading: true,
  };

  const action = {
    type: 'EXAMPLE',
    payload: {},
  };

  const responseState = reducer(initialState, action);

  expect(initialState).toMatchObject(responseState);
});
