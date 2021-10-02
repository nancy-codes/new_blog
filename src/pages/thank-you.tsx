import React from 'react';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { Link } from 'gatsby';

const ThanksPage = () => (
  <Layout>
    <SEO title="Thank You" />
    <Container section>
      <TitleSection title="Thank You" subtitle="" center />
      <p className="mt-4 text-center w-full">Thanks for submitting your form!</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default ThanksPage;
