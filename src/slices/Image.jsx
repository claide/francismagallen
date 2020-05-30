import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const Content = styled.div`
  margin-bottom: 4em;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin-bottom: 2em;
  }
`

const Image = ({ input }) => (
  <Content>
    {input.primary.image.localFile && (
      <div>
        <a href={input.primary.image.localFile.childImageSharp.fluid.src} target="_blank" rel="noreferrer">
          <Img fluid={input.primary.image.localFile.childImageSharp.fluid} />
        </a>
      </div>
    )}
  </Content>
)

export default Image

Image.propTypes = {
  input: PropTypes.object.isRequired,
}
