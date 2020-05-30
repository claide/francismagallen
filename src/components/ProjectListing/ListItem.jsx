import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Stacks from './Stacks'

const TileButton = styled(Link)`
  display: inline-block;
  text-align: center;
  font-style: normal;
  color: var(--projectLink);
  font-weight: 400;
  font-family: 'Inter', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`

const StyledLink = styled(Link)`
  display: inline-block;
  font-size: 32px;
  color: var(--textNormal);
  font-weight: bold;
  font-style: normal;
  margin-bottom: 40px;
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 1.777rem;
    margin-bottom: 20px;
  }
`

const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 44px;
  span {
    margin-right: 12px;
    text-transform: uppercase;
    font-size: 14px;
  }
`

const StackTitle = styled.p`
  font-size: 14px;
  font-weight: bold !important;
  margin-bottom: 16px !important;
`

const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    margin-bottom: 3.5rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin-bottom: 2.5rem;
    flex-direction: column-reverse;
  }
`
const ProjectImage = styled(Link)`
  flex: 1.4;
  background-color: var(--cardBg);
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(166, 173, 201, 0.2);
  border-radius: 10px;
  padding: 1em;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin-bottom: 40px;
    height: 100%;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const ProjectContent = styled.div`
  flex: 1;
  margin-right: 96px;
  text-align: left;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin-right: 0;
    margin-bottom: 2em;
  }
`

export default class ListItem extends Component {
  render() {
    const { node, stacks } = this.props
    const truncate = (string, maxLength = 150) => {
      if (!string) return null
      if (string.length <= maxLength) return string
      return `${string.substring(0, maxLength)}...`
    }
    return (
      <Project>
        <ProjectContent>
          <StyledLink to={`/work/${node.uid}`}>{node.data.title.text}</StyledLink>
          <p>{truncate(node.data.description, 110)}</p>
          <StackTitle>TECH STACK</StackTitle>
          <StackContainer>{stacks && <Stacks stacks={stacks} />}</StackContainer>
          <TileButton to={`/work/${node.uid}`}>See details</TileButton>
        </ProjectContent>
        <ProjectImage to={`/work/${node.uid}`}>
          <img src={node.data.thumbnail.url} alt="" />
        </ProjectImage>
      </Project>
    )
  }
}

ListItem.propTypes = {
  node: PropTypes.object.isRequired,
  stacks: PropTypes.array.isRequired,
}
