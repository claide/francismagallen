import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Layout, Wrapper, SliceZone, SEO, Button } from '../components'
import website from '../../config/website'
import Stacks from '../components/ProjectListing/Stacks'

const Hero = styled.header`
  padding-top: 4rem;
  text-align: center;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding-top: 2rem;
  }
  h1 {
    color: var(--textNormal);
    line-height: 1;
  }
`

const Banner = styled.div`
  position: relative;
  padding: 0 4rem;
  text-align: center;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 0 1.5rem;
  }
`

const StackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-bottom: 4rem;
  }
  span {
    font-size: 14px;
    text-transform: uppercase;
    color: var(--textNormal);
    &:not(:last-of-type) {
      margin-right: 1em;
    }
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 4rem 0;
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-bottom: 4.7rem;
  }
`

const PostWrapper = Wrapper.withComponent('main')

const Project = ({ data: { prismicProject }, location }) => {
  const { data } = prismicProject
  let stacks = false
  if (data.stacks[0].stack) {
    stacks = data.stacks.map((c) => c.stack.document[0].data.name)
  }

  return (
    <Layout customSEO>
      <SEO
        title={`${website.titleAlt} — ${data.title.text}`}
        pathname={location.pathname}
        desc={data.description}
        node={prismicProject}
        article
      />
      <Hero>
        <Wrapper>
          <h1>{data.title.text}</h1>
          <StackContainer>{stacks && <Stacks stacks={stacks} />}</StackContainer>
        </Wrapper>
      </Hero>
      <div id={website.skipNavId}>
        <Banner>
          <img src={data.banner.url} alt="" />
        </Banner>
        <PostWrapper>
          <SliceZone allSlices={data.body} />
        </PostWrapper>
        <ButtonWrapper>
          <Button to="/work">Go to work page</Button>
        </ButtonWrapper>
      </div>
    </Layout>
  )
}

export default Project

Project.propTypes = {
  data: PropTypes.shape({
    prismicProject: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
  query ProjectBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        title {
          text
        }
        thumbnail {
          url
        }
        banner {
          url
        }
        description
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
        body {
          ... on PrismicProjectBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicProjectBodyQuote {
            slice_type
            id
            primary {
              quote {
                html
                text
              }
            }
          }
          ... on PrismicProjectBodyImage {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 2500, quality: 100) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
