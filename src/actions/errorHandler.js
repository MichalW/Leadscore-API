import {ERROR} from '../constants/ActionTypes';

export const handleError = error => ({
  type: ERROR,
  payload: {
    error,
  },
});
