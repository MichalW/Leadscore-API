import * as actions from '../contacts';
import * as types from '../../constants/ActionTypes';

it('should create contactsFetchRequest action', () => {
  const expectedAction = {
    type: types.CONTACTS_FETCH_REQUEST,
    payload: {
      offset: 10,
      limit: 10,
      sort: 'FIRST_NAME',
      sortDirection: 'ASC',
    },
  };

  const responseAction = actions.contactsFetchRequest(
    10, 10, 'FIRST_NAME', 'ASC',
  );

  expect(expectedAction).toMatchObject(responseAction);
});

it('should create contactsFetchSuccess action', () => {
  const response = {
    offset: 10,
    limit: 10,
    count: 20,
    data: [],
  };

  const expectedAction = {
    type: types.CONTACTS_FETCH_SUCCESS,
    payload: response,
  };

  const responseAction = actions.contactsFetchSuccess(
    response.offset,
    response.limit,
    response.count,
    response.data,
  );

  expect(expectedAction).toMatchObject(responseAction);
});

it('should create contactsFetchError action', () => {
  const expectedAction = {
    type: types.CONTACTS_FETCH_ERROR,
    payload: {
      error: '404',
    },
  };

  const responseAction = actions.contactsFetchError('404');

  expect(expectedAction).toMatchObject(responseAction);
});
