import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Tag = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.black};
`

const TechStack = ({ input }) => <Tag>{input.primary.name.text}</Tag>

export default TechStack

TechStack.propTypes = {
  input: PropTypes.object.isRequired,
}
