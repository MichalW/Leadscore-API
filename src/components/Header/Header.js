import PropTypes from 'prop-types';
import React from 'react';
import {Header, Icon} from 'semantic-ui-react';

const HeaderComponent = ({title, subtitle, icon}) => (
  <Header as="h2">
    <Icon name={icon} />
    <Header.Content>
      {title}

      {subtitle && (
        <Header.Subheader>{subtitle}</Header.Subheader>
      )}
    </Header.Content>

  </Header>
);

HeaderComponent.defaultProps = {
  subtitle: null,
  icon: null,
};

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
};

export default HeaderComponent;
