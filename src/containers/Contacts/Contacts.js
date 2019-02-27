import React from 'react';
import {Segment} from 'semantic-ui-react';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import ContactsList from '../../components/ContactsList';

const Contacts = () => (
  <Layout>
    <Segment>
      <Header title="Contacts" icon="users" subTitle="Manage your contacts" />

      <ContactsList />
    </Segment>
  </Layout>
);

export default Contacts;
