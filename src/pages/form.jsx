import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { NetlifyForm, Honeypot } from 'react-netlify-forms';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormInputs from './form-inputs';
import FormControls from './form-controls';
import SuccessMessage from './success-message';
import ErrorMessage from './error-message';
import * as Styled from '../templates/Contact/styles';

const Form = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "contact section" } }) {
        frontmatter {
          title
          subtitle
          namePlaceholder
          emailPlaceholder
          submitPlaceholder
        }
      }
    }
  `);

  const contact = markdownRemark.frontmatter;

  return (
    <Container section>
      <TitleSection title={contact.title} subtitle={contact.subtitle} center />
      <Styled.Form>
        <NetlifyForm name="Contact" action="/thank-you" honeypotName="bot-field">
          {({ handleChange, success, error }) => (
            <section style={{ width: '500px' }}>
              {!success ? (
                <>
                  {error && <ErrorMessage />}

                  <Honeypot name="bot-field" label="Leave the following field empty:" />

                  <FormInputs
                    onChange={handleChange}
                    namePlaceholder={contact.namePlaceholder}
                    emailPlaceholder={contact.emailPlaceholder}
                  />
                  <br />
                  <FormControls submit={contact.submitPlaceholder} />
                </>
              ) : (
                <SuccessMessage />
              )}
            </section>
          )}
        </NetlifyForm>
      </Styled.Form>
    </Container>
  );
};

export default Form;
