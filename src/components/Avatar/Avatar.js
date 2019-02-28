import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash/get';
import upperCase from 'lodash/upperCase';
import {Image} from 'semantic-ui-react';

import getColorFromInitials from '../../utils/getColorFromInitials';
import styles from './Avatar.module.scss';

const Avatar = ({url, firstName, lastName}) => {
  if (url) {
    return (
      <Image src={url} alt={`${firstName} ${lastName}`} width="32" height="32" circular centered />
    );
  }

  const initials = [firstName, lastName]
    .map(upperCase)
    .map(text => get(text, '0', ''))
    .join('');

  const color = getColorFromInitials(initials);

  return !!(firstName || lastName) && (
    <div className={styles.placeholder} style={{backgroundColor: color}}>
      {initials}
    </div>
  );
};

Avatar.defaultProps = {
  firstName: '',
  lastName: '',
  url: null,
};

Avatar.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  url: PropTypes.string,
};

export default Avatar;
