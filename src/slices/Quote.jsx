import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const BlockQuote = styled.blockquote`
  max-width: ${(props) => props.theme.maxWidthText};
  margin: 0 auto;
`

const Quote = ({ input }) => (
  <BlockQuote>
    <div dangerouslySetInnerHTML={{ __html: input.primary.quote.html }} />
  </BlockQuote>
)

export default Quote

Quote.propTypes = {
  input: PropTypes.object.isRequired,
}
