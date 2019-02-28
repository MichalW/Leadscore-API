import {
  arrayOf,
  func,
  number,
  shape,
  string,
} from 'prop-types';

export const emailType = shape({
  email: string,
});

export const contactType = shape({
  created: number,
  emails: arrayOf(emailType),
  firstName: string,
  lastName: string,
  profilePicture: string,
});

export const historyType = shape({
  push: func.isRequired,
});

export const locationType = shape({
  pathname: string,
});

export const matchType = shape({
  params: shape({}),
});
