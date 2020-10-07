import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Layout, SEO, Wrapper } from '../components'
import website from '../../config/website'

const Container = Wrapper.withComponent('main')

const Header = styled.header`
  /* max-width: ${(props) => props.theme.maxWidthTitle}; */
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
    margin-bottom: 44px;
    @media (max-width: ${(props) => props.theme.breakpoints.m}) {
      line-height: 1;
      font-size: 4rem;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      line-height: 1.3;
      margin-bottom: 24px;
    }
  }
  p {
    font-size: 21px;
    line-height: 33px;
    margin-bottom: 24px;
    @media (max-width: ${(props) => props.theme.breakpoints.m}) {
      font-size: 1.4rem;
      margin-bottom: 32px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      font-size: 1.25rem;
      line-height: 33px;
      margin-bottom: 22px;
    }
  }
`

const CtaWrapper = styled.div`
  padding: 0 0 7.7rem 0;
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
    font-size: 16px;
    line-height: 30px;
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

const ExpWrapper = styled.div`
  padding: 4.7rem 0 0 0;
  color: var(--textNormal);
  h2 {
    margin-bottom: 40px;
  }
  div {
    margin-bottom: 24px;
  }
  small {
    font-size: 16px;
  }
`

const ExpTitle = styled.p`
  font-weight: 700 !important;
  margin-bottom: 8px !important;
  font-size: 20px !important;
`

class About extends Component {
  render() {
    const {
      data: { about, cta },
    } = this.props
    return (
      <Layout customSeo>
        <SEO title={`${about.data.title.text} — ${website.titleAlt}`} />
        <div id={website.skipNavId}>
          <Container>
            <Header>
              <h1>{about.data.title.text}</h1>
              <p dangerouslySetInnerHTML={{ __html: about.data.description.html }} />
              <ExpWrapper>
                <h2>Experience</h2>
                {about.data.body &&
                  about.data.body.map((exp) => (
                    <div key={exp.id}>
                      <ExpTitle>{exp.items[0].company.text}</ExpTitle>
                      <ExpTitle>{exp.items[0].position.text}</ExpTitle>
                      <small>{exp.items[0].date.text}</small>
                    </div>
                  ))}
              </ExpWrapper>
            </Header>
          </Container>
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

export default About

About.propTypes = {
  data: PropTypes.shape({
    about: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }),
        description: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }),
        body: PropTypes.array.isRequired,
      }),
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
  query AboutQuery {
    about: prismicAbout {
      data {
        title {
          text
        }
        description {
          html
        }
        body {
          items {
            position {
              text
            }
            date {
              text
            }
            company {
              text
            }
          }
          id
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
