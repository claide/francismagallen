import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { graphql, Link } from 'gatsby'
import { Layout, Wrapper, SEO } from '../components'
import website from '../../config/website'
import ProjectListing from '../components/ProjectListing'

const Hero = styled.header`
  display: flex;
  align-items: center;
`

const HeroInner = styled(Wrapper)`
  padding-top: 7.7rem;
  padding-bottom: 7.7rem;
  h1 {
    margin-bottom: 0;
    max-width: 46.5rem;
    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      font-size: 11.5vw !important;
      line-height: 11.5vw !important;
    }
    &:last-of-type {
      margin-bottom: 44px;
      @media (max-width: ${(props) => props.theme.breakpoints.m}) {
        margin-bottom: 32px;
      }
      @media (max-width: ${(props) => props.theme.breakpoints.s}) {
        margin-bottom: 22px;
      }
    }
    @media (max-width: ${(props) => props.theme.breakpoints.m}) {
      line-height: 1;
      font-size: 4rem;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      line-height: 1.3;
    }
  }
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
`

const HeroText = styled.div`
  font-size: 21px;
  line-height: 35px;
  margin-bottom: 44px;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: 1.4rem;
    margin-bottom: 32px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 18px;
    margin-bottom: 28px;
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
    font-size: 16px;
    padding: 12px 24px;
  }
`

const ButtonLink = styled(Link)`
  text-align: center;
  display: inline-block;
  margin: 0 auto;
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
    font-size: 16px;
    padding: 12px 24px;
  }
`

const ProjectWrapper = styled.div`
  padding: 7.7rem 0;
  text-align: center;
  h2 {
    text-align: left;
    margin-bottom: 40px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`

const CtaWrapper = styled.div`
  padding: 7.7rem 0;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  h2 {
    font-size: 32px;
    line-height: 39px;
    font-weight: bold;
    margin-bottom: 24px;
    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      font-size: 28px;
      line-height: 36px;
    }
  }
  p {
    font-size: 21px;
    line-height: 35px;
    margin-bottom: 40px;
    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      font-size: 16px;
      line-height: 30px;
    }
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

const Container = Wrapper.withComponent('div')

class Index extends Component {
  render() {
    const {
      data: { homepage, projects, cta },
    } = this.props
    return (
      <Layout customSeo>
        <SEO title={`${homepage.data.title.text} ${homepage.data.sub_title.text} — ${website.titleAlt}`} />
        <Hero>
          <HeroInner>
            <h1>{homepage.data.title.text} {homepage.data.sub_title.text}</h1>
            {/* <h1>{homepage.data.sub_title.text}</h1> */}
            <HeroText dangerouslySetInnerHTML={{ __html: homepage.data.content.html }} />
            <Button href="mailto:magallen.fc@gmail.com">Contact Me</Button>
          </HeroInner>
        </Hero>
        <div id={website.skipNavId}>
          <ProjectWrapper>
            <Container>
              <ProjectListing projects={projects.nodes} />
              <ButtonLink to="work">See all works</ButtonLink>
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

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    homepage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }),
        sub_title: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }),
        content: PropTypes.shape({
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
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        sub_title {
          text
        }
        content {
          html
        }
      }
    }
    projects: allPrismicProject(sort: { fields: [data___date], order: ASC }, filter: { tags: { in: "featured" } }) {
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
