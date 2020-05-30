import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import ListItem from './ListItem'

const List = styled.ul`
  list-style-type: none;
  margin: 0;
`

export default class ProjectListing extends Component {
  render() {
    const { projects } = this.props
    return (
      <List>
        {projects.map((project) => {
          let stacks = false
          if (project.data.stacks[0].stack) {
            stacks = project.data.stacks.map((c) => c.stack.document[0].data.name)
          }
          return <ListItem key={project.uid} node={project} stacks={stacks} />
        })}
      </List>
    )
  }
}

ProjectListing.propTypes = {
  projects: PropTypes.array.isRequired,
}
