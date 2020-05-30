/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Layout, ProjectListing, Wrapper, SEO, Header } from '../components'
import website from '../../config/website'

const Hero = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  padding-top: 1rem;
  padding-bottom: 4rem;
  h1 {
    color: ${(props) => props.theme.colors.bg};
  }
`

const Headline = styled.p`
  font-family: 'Inter', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color: ${(props) => props.theme.colors.greyBlue};
  font-size: 1.25rem;
  a {
    font-style: normal;
    font-weight: normal;
  }
`

const CatWrapper = Wrapper.withComponent('main')

const Stack = ({
  pageContext: { stack },
  data: {
    projects: { nodes, totalCount },
  },
  location,
}) => (
    <Layout>
      <SEO title={`${website.titleAlt} — Stack: ${stack}`} pathname={location.pathname} />
      <Hero>
        <Wrapper>
          <Header />
          <Headline>Tools</Headline>
          <h1>{stack}</h1>
        </Wrapper>
      </Hero>
      <CatWrapper id={website.skipNavId}>
        <h2 style={{ marginTop: '4rem' }}>
          {totalCount} {totalCount === 1 ? 'Project' : 'Projects'} {totalCount === 1 ? 'was' : 'were'} tagged with "{stack}"
        </h2>
        <ProjectListing projects={nodes} />
      </CatWrapper>
    </Layout>
  )

export default Stack

Stack.propTypes = {
  pageContext: PropTypes.shape({
    stack: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    projects: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query StackPage($stack: String!) {
    projects: allPrismicProject(
      sort: { fields: [data___date], order: DESC }
      filter: {
        data: {
          stacks: { elemMatch: { stack: { document: { elemMatch: { data: { name: { eq: $stack } } } } } } }
        }
      }
    ) {
      totalCount
      nodes {
        uid
        data {
          title {
            text
          }
          thumbnail {
            url
          }
          date(formatString: "DD.MM.YYYY")
          stacks {
            stack {
              document {
                data {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`
