import PropTypes from 'prop-types';
import React from 'react';
import {Segment} from 'semantic-ui-react';

import ContactsList from './components/ContactsList';
import Header from '../../components/Header';
import Layout from '../../components/Layout';

const Contacts = ({signOutRequest}) => (
  <Layout onSignOut={signOutRequest}>
    <Segment>
      <Header title="Contacts" icon="users" subTitle="Manage your contacts" />

      <ContactsList />
    </Segment>
  </Layout>
);

Contacts.propTypes = {
  signOutRequest: PropTypes.func.isRequired,
};

export default Contacts;
