import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import ProgressBar from 'components/ui/ProgressBar';
import Button from 'components/ui/Button';

import * as Styled from './styles';

const Skills = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "skills section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "skills" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              percentage
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const skills = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Skills>
        {skills.map((item) => {
          const {
            id,
            frontmatter: { title, percentage }
          } = item.node;

          return (
            <Styled.Skill key={id}>
              <ProgressBar title={title} percentage={percentage} />
            </Styled.Skill>
          );
        })}
      </Styled.Skills>
      <Styled.Link href="https://github.com/nancy-lovo" rel="noreferrer noopener" target="_blank">
        <Button>View GitHub</Button>
      </Styled.Link>
    </Container>
  );
};

export default Skills;
