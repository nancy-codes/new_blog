import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import ContactInfo from 'components/ContactInfo';
import Form from './form';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Form />
      {/* <ContactInfo /> */}
    </Layout>
  );
};

export default ContactPage;
