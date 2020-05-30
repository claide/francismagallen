import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Layout, Wrapper, ProjectListing, SEO } from '../components'
import website from '../../config/website'

const Container = Wrapper.withComponent('main')

const Header = styled.header`
  padding-top: 7.7rem;
  padding-bottom: 7.7rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  h1 {
    font-size: 62px;
    line-height: 1.2;
    margin-bottom: 24px;
    max-width: ${(props) => props.theme.maxWidthTitle};
    @media (max-width: ${(props) => props.theme.breakpoints.m}) {
      line-height: 1;
      font-size: 4rem;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      line-height: 1.3;
    }
  }
  p {
    font-size: 21px;
    line-height: 33px;
    margin-bottom: 44px;
    @media (max-width: ${(props) => props.theme.breakpoints.m}) {
      font-size: 1.4rem;
      margin-bottom: 32px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      font-size: 1.25rem;
      margin-bottom: 22px;
    }
  }
`

const ProjectWrapper = styled.div`
  text-align: center;
`

const CtaWrapper = styled.div`
  padding: 4.7rem 0 7.7rem 0;
  color: var(--textNormal);
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }
  h2 {
    font-size: 32px;
    line-height: 39px;
    font-weight: bold;
    margin-bottom: 24px;
  }
  p {
    font-size: 22px;
    margin-bottom: 40px;
  }
`
const CtaContainer = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    padding: 0 1.5rem;
    width: auto;
  }
  div {
    width: 70%;
    @media (max-width: ${(props) => props.theme.breakpoints.m}) {
      width: 100%;
    }
  }
`

const Button = styled.a`
  display: inline-block;
  text-align: center;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 1rem;
  padding: 1.3em 3.01em;
  border-radius: 5px;
  font-style: normal;
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Inter', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.primaryLight};
    text-decoration: none;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 1.2rem;
    padding: 1em 1.4em;
  }
`

class Work extends Component {
  render() {
    const {
      data: { works, projects, cta },
    } = this.props
    return (
      <Layout customSeo>
        <SEO title={`${website.titleAlt} — Work`} />
        <div id={website.skipNavId}>
          <Container>
            <Header>
              <h1>{works.data.title.text}</h1>
              <p dangerouslySetInnerHTML={{ __html: works.data.description.html }} />
            </Header>
          </Container>
          <ProjectWrapper>
            <Container>
              <ProjectListing projects={projects.nodes} />
            </Container>
          </ProjectWrapper>
          <CtaWrapper>
            <CtaContainer>
              <div>
                <h2>{cta.data.heading.text}</h2>
                <p dangerouslySetInnerHTML={{ __html: cta.data.content.html }} />
                <Button href={cta.data.link.url}>Get in touch</Button>
              </div>
            </CtaContainer>
          </CtaWrapper>
        </div>
      </Layout>
    )
  }
}

export default Work

Work.propTypes = {
  data: PropTypes.shape({
    works: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }),
        description: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }),
      }),
    }),
    projects: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
    cta: PropTypes.shape({
      data: PropTypes.shape({
        content: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }),
        heading: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }),
        link: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }),
      }),
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query WorksQuery {
    works: prismicWorks {
      data {
        title {
          text
        }
        description {
          html
        }
      }
    }
    projects: allPrismicProject(sort: { fields: [data___date], order: ASC }) {
      nodes {
        uid
        data {
          title {
            text
          }
          description
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
    cta: prismicCtaBottom {
      data {
        heading {
          text
        }
        content {
          html
        }
        link {
          url
        }
      }
    }
  }
`
