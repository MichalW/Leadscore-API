import PropTypes from 'prop-types';
import React from 'react';
import capitalize from 'lodash/capitalize';
import {Breadcrumb, Grid} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const BreadcrumbComponent = ({location: {pathname}}) => {
  const routeTitle = capitalize(pathname.slice(1));

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Breadcrumb>
            <Breadcrumb.Section link to="/" as={Link}>Leadscore</Breadcrumb.Section>

            {routeTitle && [
              <Breadcrumb.Divider icon="right angle" key="divider" />,
              <Breadcrumb.Section key="title">
                {routeTitle}
              </Breadcrumb.Section>,
            ]}
          </Breadcrumb>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

BreadcrumbComponent.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default BreadcrumbComponent;
